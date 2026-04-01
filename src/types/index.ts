export type Category = "project" | "product" | "people" | "technology";

export type Quadrant =
  | "short_individual"
  | "short_organization"
  | "long_individual"
  | "long_organization";

export interface TaskDefinition {
  id: number;
  name: string;
  category: Category;
  quadrant: Quadrant;
  baseX: number;
  baseY: number;
  defaultImportance: number;
  description: string;
}

export interface PositionOverride {
  x: number; // 0 = short-term, 100 = long-term
  y: number; // 0 = individual, 100 = organization
}

export type ViewMode = "split" | "combined";

export type AppMode = "landing" | "quiz" | "dashboard";

export interface UserState {
  selectedTaskIds: Set<number>;
  importanceOverrides: Map<number, number>;
  positionOverrides: Map<number, PositionOverride>;
  viewMode: ViewMode;
}
