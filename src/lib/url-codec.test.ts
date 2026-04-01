import { describe, it, expect } from "vitest";
import { encodeState, decodeState } from "./url-codec";
import type { UserState } from "../types";

describe("url-codec", () => {
  it("round-trips empty state", () => {
    const state: UserState = {
      selectedTaskIds: new Set(),
      importanceOverrides: new Map(),
      positionOverrides: new Map(),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.selectedTaskIds.size).toBe(0);
    expect(decoded!.positionOverrides.size).toBe(0);
    expect(decoded!.viewMode).toBe("split");
  });

  it("round-trips state with selections and importance", () => {
    const state: UserState = {
      selectedTaskIds: new Set([0, 5, 42, 129]),
      importanceOverrides: new Map([[0, 5], [5, 1], [42, 3], [129, 4]]),
      positionOverrides: new Map(),
      viewMode: "combined",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.selectedTaskIds).toEqual(state.selectedTaskIds);
    expect(decoded!.importanceOverrides).toEqual(state.importanceOverrides);
    expect(decoded!.positionOverrides.size).toBe(0);
    expect(decoded!.viewMode).toBe("combined");
  });

  it("round-trips full selection", () => {
    const allIds = new Set(Array.from({ length: 130 }, (_, i) => i));
    const overrides = new Map<number, number>();
    for (let i = 0; i < 130; i++) {
      overrides.set(i, (i % 5) + 1);
    }
    const state: UserState = {
      selectedTaskIds: allIds,
      importanceOverrides: overrides,
      positionOverrides: new Map(),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.selectedTaskIds.size).toBe(130);
    expect(decoded!.importanceOverrides.size).toBe(130);
    for (let i = 0; i < 130; i++) {
      expect(decoded!.importanceOverrides.get(i)).toBe((i % 5) + 1);
    }
  });

  it("produces URL-safe string", () => {
    const state: UserState = {
      selectedTaskIds: new Set([10, 20, 30]),
      importanceOverrides: new Map([[10, 2], [20, 4], [30, 5]]),
      positionOverrides: new Map(),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    expect(encoded).toMatch(/^[A-Za-z0-9+/=-]*$/);
  });

  it("returns null for invalid input", () => {
    expect(decodeState("")).toBeNull();
    expect(decodeState("garbage")).toBeNull();
  });

  it("keeps URL short", () => {
    const state: UserState = {
      selectedTaskIds: new Set(Array.from({ length: 20 }, (_, i) => i * 6)),
      importanceOverrides: new Map(Array.from({ length: 20 }, (_, i) => [i * 6, 3])),
      positionOverrides: new Map(),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    expect(encoded.length).toBeLessThan(120);
  });

  it("round-trips state with position overrides (V2)", () => {
    const state: UserState = {
      selectedTaskIds: new Set([0, 5, 42, 129]),
      importanceOverrides: new Map([[0, 5], [5, 1], [42, 3], [129, 4]]),
      positionOverrides: new Map([
        [0, { x: 10, y: 90 }],
        [42, { x: 75, y: 25 }],
      ]),
      viewMode: "combined",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.selectedTaskIds).toEqual(state.selectedTaskIds);
    expect(decoded!.importanceOverrides).toEqual(state.importanceOverrides);
    expect(decoded!.positionOverrides.size).toBe(2);
    expect(decoded!.positionOverrides.get(0)).toEqual({ x: 10, y: 90 });
    expect(decoded!.positionOverrides.get(42)).toEqual({ x: 75, y: 25 });
    expect(decoded!.viewMode).toBe("combined");
  });

  it("uses V1 format when no position overrides", () => {
    const state: UserState = {
      selectedTaskIds: new Set([0, 5]),
      importanceOverrides: new Map([[0, 3], [5, 2]]),
      positionOverrides: new Map(),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.positionOverrides.size).toBe(0);
  });

  it("clamps position values to 0-100", () => {
    const state: UserState = {
      selectedTaskIds: new Set([0]),
      importanceOverrides: new Map([[0, 3]]),
      positionOverrides: new Map([[0, { x: -5, y: 150 }]]),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.positionOverrides.get(0)).toEqual({ x: 0, y: 100 });
  });

  it("ignores position overrides for unselected tasks", () => {
    const state: UserState = {
      selectedTaskIds: new Set([0]),
      importanceOverrides: new Map([[0, 3]]),
      positionOverrides: new Map([
        [0, { x: 50, y: 50 }],
        [99, { x: 10, y: 10 }], // not selected
      ]),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.positionOverrides.size).toBe(1);
    expect(decoded!.positionOverrides.has(99)).toBe(false);
  });
});
