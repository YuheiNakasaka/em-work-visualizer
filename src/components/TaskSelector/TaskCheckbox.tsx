import { useState } from "react";
import type { TaskDefinition } from "../../types";
import { ImportanceSlider } from "./ImportanceSlider";

interface Props {
  task: TaskDefinition;
  selected: boolean;
  importance: number;
  onToggle: () => void;
  onImportanceChange: (value: number) => void;
}

export function TaskCheckbox({
  task,
  selected,
  importance,
  onToggle,
  onImportanceChange,
}: Props) {
  const [showDesc, setShowDesc] = useState(false);

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
    </div>
  );
}
