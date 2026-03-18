import type { ViewMode } from "../types";

interface Props {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export function ViewModeToggle({ viewMode, onChange }: Props) {
  return (
    <div className="flex rounded-lg border border-gray-300 overflow-hidden text-sm">
      <button
        className={`px-3 py-1.5 transition-colors ${
          viewMode === "split"
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => onChange("split")}
      >
        4分割
      </button>
      <button
        className={`px-3 py-1.5 transition-colors ${
          viewMode === "combined"
            ? "bg-gray-800 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
        onClick={() => onChange("combined")}
      >
        統合
      </button>
    </div>
  );
}
