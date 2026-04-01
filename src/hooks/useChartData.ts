import { useMemo } from "react";
import type { UserState, Category } from "../types";
import { TASKS } from "../data/tasks";
import { CATEGORY_MAP } from "../data/categories";
import { taskToBubble, type BubbleDataPoint } from "../lib/bubble-layout";

export interface ChartDataSet {
  label: string;
  data: BubbleDataPoint[];
  backgroundColor: string;
  borderColor: string;
}

export function useChartData(state: UserState) {
  return useMemo(() => {
    const selectedTasks = TASKS.filter((t) => state.selectedTaskIds.has(t.id));

    const bubbles = selectedTasks.map((task) => {
      const importance = state.importanceOverrides.get(task.id) ?? task.defaultImportance;
      const posOverride = state.positionOverrides.get(task.id);
      return taskToBubble(task, importance, posOverride);
    });

    // Group by category for combined mode
    const byCategory = new Map<Category, BubbleDataPoint[]>();
    for (const b of bubbles) {
      const arr = byCategory.get(b.category) ?? [];
      arr.push(b);
      byCategory.set(b.category, arr);
    }

    const combinedDatasets: ChartDataSet[] = [];
    for (const [cat, points] of byCategory) {
      const meta = CATEGORY_MAP[cat];
      combinedDatasets.push({
        label: meta.label,
        data: points,
        backgroundColor: meta.bgColor,
        borderColor: meta.color,
      });
    }

    // Group by category for split mode
    const splitDatasets = new Map<Category, ChartDataSet[]>();
    for (const cat of ["project", "product", "people", "technology"] as Category[]) {
      const meta = CATEGORY_MAP[cat];
      const points = byCategory.get(cat) ?? [];
      splitDatasets.set(cat, [
        {
          label: meta.label,
          data: points,
          backgroundColor: meta.bgColor,
          borderColor: meta.color,
        },
      ]);
    }

    return { combinedDatasets, splitDatasets };
  }, [state]);
}
