import { useRef, useEffect, useState, useCallback } from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { ChartDataSet } from "../../hooks/useChartData";
import type { BubbleDataPoint } from "../../lib/bubble-layout";

ChartJS.register(LinearScale, PointElement, Tooltip, ChartDataLabels);

interface Props {
  datasets: ChartDataSet[];
  title?: string;
}

export function BubbleChart({ datasets, title }: Props) {
  const chartRef = useRef<ChartJS<"bubble"> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [chartSize, setChartSize] = useState(0);

  // Compute the largest square that fits in the parent container
  const handleResize = useCallback(() => {
    const el = parentRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    const size = Math.floor(Math.min(width, height));
    setChartSize(size);
  }, []);

  // Resize chart canvas when chartSize changes
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  }, [chartSize]);

  useEffect(() => {
    const el = parentRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      handleResize();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [handleResize]);

  const data: ChartData<"bubble"> = {
    datasets: datasets.map((ds) => ({
      label: ds.label,
      data: ds.data.map((d) => ({ x: d.x, y: d.y, r: d.r })),
      backgroundColor: ds.data.map(() => ds.backgroundColor),
      borderColor: ds.data.map(() => ds.borderColor),
      borderWidth: 1.5,
      hoverBorderWidth: 2.5,
      hoverBackgroundColor: ds.data.map(() => ds.borderColor + "40"),
    })),
  };

  const options: ChartOptions<"bubble"> = {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 0,
    layout: {
      padding: { top: 2, right: 2, bottom: 2, left: 2 },
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        grid: {
          color: (ctx) =>
            ctx.tick.value === 50 ? "#d1d5db" : "#f3f4f6",
          lineWidth: (ctx) =>
            ctx.tick.value === 50 ? 2 : 1,
        },
        ticks: { display: false },
        title: { display: false },
        border: { display: false },
      },
      y: {
        min: 0,
        max: 100,
        grid: {
          color: (ctx) =>
            ctx.tick.value === 50 ? "#d1d5db" : "#f3f4f6",
          lineWidth: (ctx) =>
            ctx.tick.value === 50 ? 2 : 1,
        },
        ticks: { display: false },
        title: { display: false },
        border: { display: false },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const point = datasets[ctx.datasetIndex]?.data[ctx.dataIndex] as
              | BubbleDataPoint
              | undefined;
            if (!point) return "";
            return `${point.label} (重要度: ${Math.round((point.r - 2) / 6)})`;
          },
        },
      },
      datalabels: {
        display: (ctx: { dataset: { data: unknown[] }; dataIndex: number }) => {
          const d = ctx.dataset.data[ctx.dataIndex] as { r: number } | null;
          return d ? d.r >= 18 : false;
        },
        formatter: (
          _value: unknown,
          ctx: { datasetIndex: number; dataIndex: number }
        ) => {
          const point = datasets[ctx.datasetIndex]?.data[ctx.dataIndex] as
            | BubbleDataPoint
            | undefined;
          if (!point) return "";
          const name = point.label;
          return name.length > 6 ? name.slice(0, 5) + "…" : name;
        },
        color: "#374151",
        font: {
          size: 9,
          weight: "bold" as const,
        },
        textAlign: "center" as const,
      } as never,
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative bg-white rounded-lg border border-gray-200 p-2 h-full flex flex-col">
      {title && (
        <div className="text-center text-xs font-medium text-gray-500 mb-1 shrink-0">
          {title}
        </div>
      )}
      <div ref={parentRef} className="flex-1 min-h-0 flex items-center justify-center">
        {chartSize > 0 && (
          <div
            ref={containerRef}
            className="relative"
            style={{ width: chartSize, height: chartSize }}
          >
            <Bubble ref={chartRef} data={data} options={options} />
            {/* Axis end labels */}
            <span className="absolute bottom-0 left-1 text-[10px] text-gray-400 font-medium">
              短期
            </span>
            <span className="absolute bottom-0 right-1 text-[10px] text-gray-400 font-medium">
              長期
            </span>
            <span className="absolute top-0 left-1 text-[10px] text-gray-400 font-medium">
              組織
            </span>
            <span className="absolute bottom-4 left-1 text-[10px] text-gray-400 font-medium">
              個人
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
