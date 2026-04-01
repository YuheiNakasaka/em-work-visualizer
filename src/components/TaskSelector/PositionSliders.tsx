interface Props {
  currentX: number;
  currentY: number;
  hasOverride: boolean;
  onPositionChange: (x: number, y: number) => void;
  onReset: () => void;
}

export function PositionSliders({
  currentX,
  currentY,
  hasOverride,
  onPositionChange,
  onReset,
}: Props) {
  return (
    <div className="ml-6 mt-1 mb-1 space-y-1 bg-gray-50 rounded px-2 py-1.5">
      <div className="flex items-center gap-1">
        <span className="text-[10px] text-gray-400 w-6 text-right flex-shrink-0">短期</span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(currentX)}
          onChange={(e) => onPositionChange(Number(e.target.value), currentY)}
          className="flex-1 h-1.5 accent-gray-700 cursor-pointer"
        />
        <span className="text-[10px] text-gray-400 w-6 flex-shrink-0">長期</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-[10px] text-gray-400 w-6 text-right flex-shrink-0">個人</span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(currentY)}
          onChange={(e) => onPositionChange(currentX, Number(e.target.value))}
          className="flex-1 h-1.5 accent-gray-700 cursor-pointer"
        />
        <span className="text-[10px] text-gray-400 w-6 flex-shrink-0">組織</span>
      </div>
      {hasOverride && (
        <button
          onClick={onReset}
          className="text-[10px] text-blue-500 hover:text-blue-700"
        >
          位置をリセット
        </button>
      )}
    </div>
  );
}
