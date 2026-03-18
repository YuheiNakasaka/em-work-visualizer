import { describe, it, expect } from "vitest";
import { encodeState, decodeState } from "./url-codec";
import type { UserState } from "../types";

describe("url-codec", () => {
  it("round-trips empty state", () => {
    const state: UserState = {
      selectedTaskIds: new Set(),
      importanceOverrides: new Map(),
      viewMode: "split",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.selectedTaskIds.size).toBe(0);
    expect(decoded!.viewMode).toBe("split");
  });

  it("round-trips state with selections and importance", () => {
    const state: UserState = {
      selectedTaskIds: new Set([0, 5, 42, 129]),
      importanceOverrides: new Map([[0, 5], [5, 1], [42, 3], [129, 4]]),
      viewMode: "combined",
    };
    const encoded = encodeState(state);
    const decoded = decodeState(encoded);
    expect(decoded).not.toBeNull();
    expect(decoded!.selectedTaskIds).toEqual(state.selectedTaskIds);
    expect(decoded!.importanceOverrides).toEqual(state.importanceOverrides);
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
      viewMode: "split",
    };
    const encoded = encodeState(state);
    expect(encoded.length).toBeLessThan(120);
  });
});
