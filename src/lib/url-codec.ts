import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";
import type { UserState, ViewMode } from "../types";
import { encodeBitfield, decodeBitfield } from "./bitfield";

const VERSION = 1;
const TOTAL_TASKS = 130;
const BITFIELD_BYTES = Math.ceil(TOTAL_TASKS / 8); // 17

export function encodeState(state: UserState): string {
  const selectedSorted = [...state.selectedTaskIds].sort((a, b) => a - b);

  // Version + viewMode + bitfield + importance per selected task
  const dataLength = 1 + 1 + BITFIELD_BYTES + selectedSorted.length;
  const data = new Uint8Array(dataLength);

  let offset = 0;

  // Version
  data[offset++] = VERSION;

  // ViewMode
  data[offset++] = state.viewMode === "combined" ? 1 : 0;

  // Bitfield
  const bitfield = encodeBitfield(state.selectedTaskIds, TOTAL_TASKS);
  data.set(bitfield, offset);
  offset += BITFIELD_BYTES;

  // Importance for each selected task
  for (const taskId of selectedSorted) {
    const importance = state.importanceOverrides.get(taskId) ?? 3; // default 3
    data[offset++] = importance;
  }

  // Convert to binary string, then compress
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

    let offset = 0;

    // Version check
    const version = data[offset++];
    if (version !== VERSION) return null;

    // ViewMode
    const viewMode: ViewMode = data[offset++] === 1 ? "combined" : "split";

    // Bitfield
    const bitfieldBytes = data.slice(offset, offset + BITFIELD_BYTES);
    offset += BITFIELD_BYTES;
    const selectedTaskIds = decodeBitfield(bitfieldBytes, TOTAL_TASKS);

    // Importance
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

    return { selectedTaskIds, importanceOverrides, viewMode };
  } catch {
    return null;
  }
}
