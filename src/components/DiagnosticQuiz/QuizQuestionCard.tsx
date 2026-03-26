import type { Category } from "../../types";
import { CATEGORIES } from "../../data/categories";

interface Props {
  title: string;
  scenario: string;
  category: Category;
  questionKey: string;
  onAnswer: (yes: boolean) => void;
}

export function QuizQuestionCard({
  title,
  scenario,
  category,
  questionKey,
  onAnswer,
}: Props) {
  const catMeta = CATEGORIES.find((c) => c.key === category)!;

  return (
    <div key={questionKey} className="quiz-slide-in">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div
          className="h-1.5"
          style={{ backgroundColor: catMeta.color }}
        />
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="bg-gray-50 rounded-xl p-4 sm:p-5 mb-6">
            <p className="text-sm text-gray-500 mb-1">具体例</p>
            <p className="text-gray-700 leading-relaxed">{scenario}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => onAnswer(true)}
              className="flex-1 py-4 rounded-xl font-semibold text-white transition-colors shadow-sm"
              style={{ backgroundColor: catMeta.color }}
            >
              やっている
            </button>
            <button
              onClick={() => onAnswer(false)}
              className="flex-1 py-4 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              やっていない
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
