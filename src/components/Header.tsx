import { useState } from "react";
import { ShareButton } from "./ShareButton";
import { ViewModeToggle } from "./ViewModeToggle";
import { HelpModal } from "./HelpModal";
import type { ViewMode } from "../types";

interface Props {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onStartQuiz?: () => void;
}

export function Header({ viewMode, onViewModeChange, onStartQuiz }: Props) {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
        <h1 className="text-lg font-bold text-gray-800">EM Work Visualizer</h1>
        <div className="flex items-center gap-3">
          <ViewModeToggle viewMode={viewMode} onChange={onViewModeChange} />
          <ShareButton />
          {onStartQuiz && (
            <button
              onClick={onStartQuiz}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition-colors"
            >
              診断モード
            </button>
          )}
          <button
            onClick={() => setHelpOpen(true)}
            className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 transition-colors"
          >
            使い方
          </button>
        </div>
      </header>
      <HelpModal open={helpOpen} onClose={() => setHelpOpen(false)} />
    </>
  );
}
