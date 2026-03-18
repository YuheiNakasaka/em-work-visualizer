import type { TaskDefinition, Category } from "../types";
import { QUADRANT_MAP } from "../data/quadrants";

export interface BubbleDataPoint {
  x: number;
  y: number;
  r: number;
  taskId: number;
  label: string;
  category: Category;
}

const IMPORTANCE_TO_RADIUS: Record<number, number> = {
  1: 8,
  2: 14,
  3: 20,
  4: 26,
  5: 32,
};

export function importanceToRadius(importance: number): number {
  return IMPORTANCE_TO_RADIUS[importance] ?? 20;
}

// For split mode: map task coordinates to chart space (0-100)
export function taskToBubble(
  task: TaskDefinition,
  importance: number
): BubbleDataPoint {
  const q = QUADRANT_MAP[task.quadrant];
  const x = q.xRange[0] + (task.baseX / 100) * (q.xRange[1] - q.xRange[0]);
  const y = q.yRange[0] + (task.baseY / 100) * (q.yRange[1] - q.yRange[0]);
  return {
    x,
    y,
    r: importanceToRadius(importance),
    taskId: task.id,
    label: task.name,
    category: task.category,
  };
}
