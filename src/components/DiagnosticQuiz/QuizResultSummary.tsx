import { CATEGORIES } from "../../data/categories";
import type { Category } from "../../types";

interface CategoryResult {
  category: Category;
  yesCount: number;
  total: number;
}

interface Props {
  results: CategoryResult[];
  totalYes: number;
  totalQuestions: number;
  onViewResults: () => void;
}

export function QuizResultSummary({
  results,
  totalYes,
  totalQuestions,
  onViewResults,
}: Props) {
  return (
    <div className="quiz-slide-in max-w-lg mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">診断完了!</h2>
      <p className="text-gray-500 mb-8">
        {totalQuestions}問中 {totalYes}個の業務を「やっている」と回答しました
      </p>

      <div className="space-y-3 mb-8">
        {results.map((result) => {
          const meta = CATEGORIES.find((c) => c.key === result.category)!;
          const percent =
            result.total > 0
              ? Math.round((result.yesCount / result.total) * 100)
              : 0;

          return (
            <div key={result.category} className="text-left">
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-sm font-medium"
                  style={{ color: meta.color }}
                >
                  {meta.label}
                </span>
                <span className="text-sm text-gray-500">
                  {result.yesCount} / {result.total}
                </span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percent}%`,
                    backgroundColor: meta.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onViewResults}
        className="w-full py-4 rounded-xl font-semibold text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg"
      >
        結果を見る
      </button>
    </div>
  );
}
