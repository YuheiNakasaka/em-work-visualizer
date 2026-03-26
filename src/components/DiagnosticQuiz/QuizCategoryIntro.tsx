import { CATEGORIES } from "../../data/categories";
import type { Category } from "../../types";

interface CategoryResult {
  category: Category;
  yesCount: number;
  total: number;
}

interface Props {
  category: Category;
  questionCount: number;
  completedCategories: CategoryResult[];
  onStart: () => void;
  onSkipCategory: () => void;
}

export function QuizCategoryIntro({
  category,
  questionCount,
  completedCategories,
  onStart,
  onSkipCategory,
}: Props) {
  const catMeta = CATEGORIES.find((c) => c.key === category)!;

  return (
    <div className="quiz-slide-in max-w-lg mx-auto text-center">
      {completedCategories.length > 0 && (
        <div className="mb-8 space-y-2">
          {completedCategories.map((result) => {
            const meta = CATEGORIES.find((c) => c.key === result.category)!;
            return (
              <div
                key={result.category}
                className="flex items-center justify-between px-4 py-2 rounded-lg text-sm"
                style={{ backgroundColor: meta.bgColor }}
              >
                <span className="font-medium" style={{ color: meta.color }}>
                  {meta.label}
                </span>
                <span style={{ color: meta.color }}>
                  {result.yesCount} / {result.total}
                </span>
              </div>
            );
          })}
        </div>
      )}

      <div
        className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
        style={{ backgroundColor: catMeta.bgColor }}
      >
        <span
          className="text-2xl font-bold"
          style={{ color: catMeta.color }}
        >
          {CATEGORIES.findIndex((c) => c.key === category) + 1}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        {catMeta.label}
      </h2>
      <p className="text-gray-500 mb-8">{questionCount}問</p>

      <div className="space-y-3">
        <button
          onClick={onStart}
          className="w-full py-4 rounded-xl font-semibold text-white transition-colors shadow-sm"
          style={{ backgroundColor: catMeta.color }}
        >
          始める
        </button>
        <button
          onClick={onSkipCategory}
          className="w-full py-3 rounded-xl font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          このカテゴリをスキップ
        </button>
      </div>
    </div>
  );
}
