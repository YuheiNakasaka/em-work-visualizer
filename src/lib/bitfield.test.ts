import { describe, it, expect } from "vitest";
import { encodeBitfield, decodeBitfield } from "./bitfield";

describe("bitfield", () => {
  it("encodes and decodes empty set", () => {
    const original = new Set<number>();
    const encoded = encodeBitfield(original, 130);
    const decoded = decodeBitfield(encoded, 130);
    expect(decoded).toEqual(original);
  });

  it("encodes and decodes single item", () => {
    const original = new Set([42]);
    const encoded = encodeBitfield(original, 130);
    const decoded = decodeBitfield(encoded, 130);
    expect(decoded).toEqual(original);
  });

  it("encodes and decodes all items", () => {
    const original = new Set(Array.from({ length: 130 }, (_, i) => i));
    const encoded = encodeBitfield(original, 130);
    const decoded = decodeBitfield(encoded, 130);
    expect(decoded).toEqual(original);
  });

  it("encodes and decodes boundary values", () => {
    const original = new Set([0, 7, 8, 127, 128, 129]);
    const encoded = encodeBitfield(original, 130);
    const decoded = decodeBitfield(encoded, 130);
    expect(decoded).toEqual(original);
  });

  it("ignores out of range values", () => {
    const original = new Set([0, 130, 200, -1]);
    const encoded = encodeBitfield(original, 130);
    const decoded = decodeBitfield(encoded, 130);
    expect(decoded).toEqual(new Set([0]));
  });

  it("produces correct byte count", () => {
    const encoded = encodeBitfield(new Set([0]), 130);
    expect(encoded.length).toBe(17); // ceil(130/8) = 17
  });
});
