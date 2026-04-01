import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";
import type { UserState, ViewMode, PositionOverride } from "../types";
import { encodeBitfield, decodeBitfield } from "./bitfield";

const TOTAL_TASKS = 130;
const BITFIELD_BYTES = Math.ceil(TOTAL_TASKS / 8); // 17

export function encodeState(state: UserState): string {
  // Use V1 when no position overrides (backwards compat)
  if (state.positionOverrides.size === 0) {
    return encodeV1(state);
  }
  return encodeV2(state);
}

function encodeV1(state: UserState): string {
  const selectedSorted = [...state.selectedTaskIds].sort((a, b) => a - b);
  const dataLength = 1 + 1 + BITFIELD_BYTES + selectedSorted.length;
  const data = new Uint8Array(dataLength);
  let offset = 0;

  data[offset++] = 1; // VERSION
  data[offset++] = state.viewMode === "combined" ? 1 : 0;

  const bitfield = encodeBitfield(state.selectedTaskIds, TOTAL_TASKS);
  data.set(bitfield, offset);
  offset += BITFIELD_BYTES;

  for (const taskId of selectedSorted) {
    const importance = state.importanceOverrides.get(taskId) ?? 3;
    data[offset++] = importance;
  }

  const binaryStr = String.fromCharCode(...data);
  return compressToEncodedURIComponent(binaryStr);
}

function encodeV2(state: UserState): string {
  const selectedSorted = [...state.selectedTaskIds].sort((a, b) => a - b);

  // Only include position overrides for selected tasks
  const positionTaskIds = new Set<number>();
  for (const [id] of state.positionOverrides) {
    if (state.selectedTaskIds.has(id)) positionTaskIds.add(id);
  }
  const positionSorted = [...positionTaskIds].sort((a, b) => a - b);

  const dataLength = 1 + 1 + BITFIELD_BYTES + BITFIELD_BYTES + selectedSorted.length + positionSorted.length * 2;
  const data = new Uint8Array(dataLength);
  let offset = 0;

  data[offset++] = 2; // VERSION
  data[offset++] = state.viewMode === "combined" ? 1 : 0;

  const selBitfield = encodeBitfield(state.selectedTaskIds, TOTAL_TASKS);
  data.set(selBitfield, offset);
  offset += BITFIELD_BYTES;

  const posBitfield = encodeBitfield(positionTaskIds, TOTAL_TASKS);
  data.set(posBitfield, offset);
  offset += BITFIELD_BYTES;

  for (const taskId of selectedSorted) {
    const importance = state.importanceOverrides.get(taskId) ?? 3;
    data[offset++] = importance;
  }

  for (const taskId of positionSorted) {
    const pos = state.positionOverrides.get(taskId)!;
    data[offset++] = Math.round(Math.max(0, Math.min(100, pos.x)));
    data[offset++] = Math.round(Math.max(0, Math.min(100, pos.y)));
  }

  const binaryStr = String.fromCharCode(...data);
  return compressToEncodedURIComponent(binaryStr);
}

export function decodeState(encoded: string): UserState | null {
  try {
    const binaryStr = decompressFromEncodedURIComponent(encoded);
    if (!binaryStr) return null;

    const data = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
      data[i] = binaryStr.charCodeAt(i);
    }

    const version = data[0];
    if (version === 1) return decodeV1(data);
    if (version === 2) return decodeV2(data);
    return null;
  } catch {
    return null;
  }
}

function decodeV1(data: Uint8Array): UserState {
  let offset = 1; // skip version

  const viewMode: ViewMode = data[offset++] === 1 ? "combined" : "split";

  const bitfieldBytes = data.slice(offset, offset + BITFIELD_BYTES);
  offset += BITFIELD_BYTES;
  const selectedTaskIds = decodeBitfield(bitfieldBytes, TOTAL_TASKS);

  const importanceOverrides = new Map<number, number>();
  const selectedSorted = [...selectedTaskIds].sort((a, b) => a - b);
  for (const taskId of selectedSorted) {
    if (offset < data.length) {
      const importance = data[offset++];
      if (importance >= 1 && importance <= 5) {
        importanceOverrides.set(taskId, importance);
      }
    }
  }

  return { selectedTaskIds, importanceOverrides, positionOverrides: new Map(), viewMode };
}

function decodeV2(data: Uint8Array): UserState {
  let offset = 1; // skip version

  const viewMode: ViewMode = data[offset++] === 1 ? "combined" : "split";

  const selBitfield = data.slice(offset, offset + BITFIELD_BYTES);
  offset += BITFIELD_BYTES;
  const selectedTaskIds = decodeBitfield(selBitfield, TOTAL_TASKS);

  const posBitfield = data.slice(offset, offset + BITFIELD_BYTES);
  offset += BITFIELD_BYTES;
  const positionTaskIds = decodeBitfield(posBitfield, TOTAL_TASKS);

  const importanceOverrides = new Map<number, number>();
  const selectedSorted = [...selectedTaskIds].sort((a, b) => a - b);
  for (const taskId of selectedSorted) {
    if (offset < data.length) {
      const importance = data[offset++];
      if (importance >= 1 && importance <= 5) {
        importanceOverrides.set(taskId, importance);
      }
    }
  }

  const positionOverrides = new Map<number, PositionOverride>();
  const positionSorted = [...positionTaskIds].filter((id) => selectedTaskIds.has(id)).sort((a, b) => a - b);
  for (const taskId of positionSorted) {
    if (offset + 1 < data.length) {
      const x = data[offset++];
      const y = data[offset++];
      positionOverrides.set(taskId, { x, y });
    }
  }

  return { selectedTaskIds, importanceOverrides, positionOverrides, viewMode };
}
