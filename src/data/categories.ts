import type { Category } from "../types";

export interface CategoryMeta {
  key: Category;
  label: string;
  color: string;
  bgColor: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    key: "project",
    label: "プロジェクトマネジメント",
    color: "#3B82F6",
    bgColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    key: "product",
    label: "プロダクトマネジメント",
    color: "#10B981",
    bgColor: "rgba(16, 185, 129, 0.15)",
  },
  {
    key: "people",
    label: "ピープルマネジメント",
    color: "#F59E0B",
    bgColor: "rgba(245, 158, 11, 0.15)",
  },
  {
    key: "technology",
    label: "テクノロジーマネジメント",
    color: "#8B5CF6",
    bgColor: "rgba(139, 92, 246, 0.15)",
  },
];

export const CATEGORY_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.key, c])
) as Record<Category, CategoryMeta>;
