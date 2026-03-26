import { CATEGORIES } from "../../data/categories";
import type { Category } from "../../types";

interface Props {
  currentCategoryIndex: number;
  currentQuestionIndex: number;
  totalQuestionsInCategory: number;
  totalAnswered: number;
  totalQuestions: number;
  category: Category;
  onSkipToManual: () => void;
}

export function QuizProgressBar({
  currentCategoryIndex,
  currentQuestionIndex,
  totalQuestionsInCategory,
  totalAnswered,
  totalQuestions,
  category,
  onSkipToManual,
}: Props) {
  const catMeta = CATEGORIES.find((c) => c.key === category)!;
  const overallPercent = Math.round((totalAnswered / totalQuestions) * 100);

  return (
    <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-3 z-10">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {CATEGORIES.map((cat, i) => (
                <span
                  key={cat.key}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{
                    backgroundColor:
                      i < currentCategoryIndex
                        ? cat.color
                        : i === currentCategoryIndex
                          ? cat.color
                          : "#D1D5DB",
                    opacity: i <= currentCategoryIndex ? 1 : 0.4,
                    transform:
                      i === currentCategoryIndex ? "scale(1.3)" : "scale(1)",
                  }}
                />
              ))}
            </div>
            <span
              className="text-sm font-semibold"
              style={{ color: catMeta.color }}
            >
              {catMeta.label}
            </span>
          </div>
          <button
            onClick={onSkipToManual}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            スキップして手動選択へ
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${overallPercent}%`,
                backgroundColor: catMeta.color,
              }}
            />
          </div>
          <span className="text-xs text-gray-500 whitespace-nowrap">
            Q.{currentQuestionIndex + 1} / {totalQuestionsInCategory}
          </span>
        </div>
      </div>
    </div>
  );
}
