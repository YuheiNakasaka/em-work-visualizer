import { ShareButton } from "./ShareButton";
import { ViewModeToggle } from "./ViewModeToggle";
import type { ViewMode } from "../types";

interface Props {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function Header({ viewMode, onViewModeChange }: Props) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
      <h1 className="text-lg font-bold text-gray-800">EM Work Visualizer</h1>
      <div className="flex items-center gap-3">
        <ViewModeToggle viewMode={viewMode} onChange={onViewModeChange} />
        <ShareButton />
      </div>
    </header>
  );
}
