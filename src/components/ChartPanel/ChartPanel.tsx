import type { ViewMode, Category } from "../../types";
import type { ChartDataSet } from "../../hooks/useChartData";
import { CATEGORY_MAP } from "../../data/categories";
import { BubbleChart } from "./BubbleChart";
import { ChartLegend } from "./ChartLegend";

interface Props {
  viewMode: ViewMode;
  combinedDatasets: ChartDataSet[];
  splitDatasets: Map<Category, ChartDataSet[]>;
}

const SPLIT_ORDER: { key: Category; label: string }[] = [
  { key: "project", label: CATEGORY_MAP.project.label },
  { key: "product", label: CATEGORY_MAP.product.label },
  { key: "people", label: CATEGORY_MAP.people.label },
  { key: "technology", label: CATEGORY_MAP.technology.label },
];

export function ChartPanel({
  viewMode,
  combinedDatasets,
  splitDatasets,
}: Props) {
  if (viewMode === "combined") {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 min-h-0">
          <BubbleChart datasets={combinedDatasets} />
        </div>
        <ChartLegend />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2 h-full">
      {SPLIT_ORDER.map(({ key, label }) => (
        <BubbleChart
          key={key}
          datasets={splitDatasets.get(key) ?? []}
          title={label}
        />
      ))}
    </div>
  );
}
