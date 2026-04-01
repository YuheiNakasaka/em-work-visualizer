import { useState } from "react";
import type { TaskDefinition } from "../../types";
import { ImportanceSlider } from "./ImportanceSlider";
import { PositionSliders } from "./PositionSliders";

interface Props {
  task: TaskDefinition;
  selected: boolean;
  importance: number;
  currentX: number;
  currentY: number;
  hasPositionOverride: boolean;
  onToggle: () => void;
  onImportanceChange: (value: number) => void;
  onPositionChange: (x: number, y: number) => void;
  onPositionReset: () => void;
}

export function TaskCheckbox({
  task,
  selected,
  importance,
  currentX,
  currentY,
  hasPositionOverride,
  onToggle,
  onImportanceChange,
  onPositionChange,
  onPositionReset,
}: Props) {
  const [showDesc, setShowDesc] = useState(false);
  const [showPosition, setShowPosition] = useState(false);

  return (
    <div className="py-0.5 px-2">
      <div className="flex items-center gap-2 rounded hover:bg-gray-50 group">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
          className="w-4 h-4 rounded border-gray-300 accent-gray-700 cursor-pointer flex-shrink-0"
        />
        <button
          onClick={onToggle}
          className="flex-1 text-left text-sm text-gray-700 truncate cursor-pointer"
        >
          {task.name}
        </button>
        <button
          onClick={() => setShowDesc((v) => !v)}
          className="text-gray-300 hover:text-gray-500 text-xs flex-shrink-0 w-5 h-5 flex items-center justify-center rounded"
          title="具体例を表示"
        >
          ?
        </button>
        {selected && (
          <>
            <button
              onClick={() => setShowPosition((v) => !v)}
              className={`text-xs flex-shrink-0 w-5 h-5 flex items-center justify-center rounded ${
                hasPositionOverride
                  ? "text-blue-500 hover:text-blue-700"
                  : "text-gray-300 hover:text-gray-500"
              }`}
              title="位置を調整"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 0 1 1 1.732L10 8l4.562 2.634a1 1 0 0 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 0 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
              </svg>
            </button>
            <ImportanceSlider value={importance} onChange={onImportanceChange} />
            <span className="text-xs text-gray-400 w-4 text-center flex-shrink-0">
              {importance}
            </span>
          </>
        )}
      </div>
      {showDesc && (
        <div className="ml-6 mt-0.5 mb-1 text-xs text-gray-500 bg-gray-50 rounded px-2 py-1">
          {task.description}
        </div>
      )}
      {selected && showPosition && (
        <PositionSliders
          currentX={currentX}
          currentY={currentY}
          hasOverride={hasPositionOverride}
          onPositionChange={onPositionChange}
          onReset={onPositionReset}
        />
      )}
    </div>
  );
}
