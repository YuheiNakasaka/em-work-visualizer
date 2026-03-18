import type { Quadrant } from "../types";

export interface QuadrantMeta {
  key: Quadrant;
  label: string;
  xRange: [number, number];
  yRange: [number, number];
}

export const QUADRANTS: QuadrantMeta[] = [
  {
    key: "short_individual",
    label: "短期 × 個人",
    xRange: [0, 50],
    yRange: [0, 50],
  },
  {
    key: "short_organization",
    label: "短期 × 組織",
    xRange: [0, 50],
    yRange: [50, 100],
  },
  {
    key: "long_individual",
    label: "長期 × 個人",
    xRange: [50, 100],
    yRange: [0, 50],
  },
  {
    key: "long_organization",
    label: "長期 × 組織",
    xRange: [50, 100],
    yRange: [50, 100],
  },
];

export const QUADRANT_MAP = Object.fromEntries(
  QUADRANTS.map((q) => [q.key, q])
) as Record<Quadrant, QuadrantMeta>;
