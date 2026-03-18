// Functions to pack/unpack a Set of task IDs into a Uint8Array bitfield
// 130 tasks = 17 bytes (136 bits, last 6 unused)

export function encodeBitfield(selectedIds: Set<number>, totalBits: number): Uint8Array {
  const byteCount = Math.ceil(totalBits / 8);
  const bytes = new Uint8Array(byteCount);
  for (const id of selectedIds) {
    if (id >= 0 && id < totalBits) {
      const byteIndex = Math.floor(id / 8);
      const bitIndex = id % 8;
      bytes[byteIndex] |= (1 << bitIndex);
    }
  }
  return bytes;
}

export function decodeBitfield(bytes: Uint8Array, totalBits: number): Set<number> {
  const result = new Set<number>();
  for (let i = 0; i < totalBits; i++) {
    const byteIndex = Math.floor(i / 8);
    const bitIndex = i % 8;
    if (byteIndex < bytes.length && (bytes[byteIndex] & (1 << bitIndex)) !== 0) {
      result.add(i);
    }
  }
  return result;
}
