import type { TaskDefinition, Category, PositionOverride } from "../types";
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

export function taskToDefaultPosition(task: TaskDefinition): PositionOverride {
  const q = QUADRANT_MAP[task.quadrant];
  return {
    x: q.xRange[0] + (task.baseX / 100) * (q.xRange[1] - q.xRange[0]),
    y: q.yRange[0] + (task.baseY / 100) * (q.yRange[1] - q.yRange[0]),
  };
}

// For split mode: map task coordinates to chart space (0-100)
export function taskToBubble(
  task: TaskDefinition,
  importance: number,
  positionOverride?: PositionOverride
): BubbleDataPoint {
  let x: number, y: number;
  if (positionOverride) {
    x = positionOverride.x;
    y = positionOverride.y;
  } else {
    const pos = taskToDefaultPosition(task);
    x = pos.x;
    y = pos.y;
  }
  return {
    x,
    y,
    r: importanceToRadius(importance),
    taskId: task.id,
    label: task.name,
    category: task.category,
  };
}
