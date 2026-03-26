import { CATEGORIES } from "../data/categories";
import { ALL_QUIZ_QUESTIONS } from "../data/quizQuestions";

interface Props {
  onStartQuiz: () => void;
  onStartManual: () => void;
}

export function LandingPage({ onStartQuiz, onStartManual }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <span
              key={cat.key}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: cat.color }}
            />
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          EM Work Visualizer
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          エンジニアリングマネージャーとして
          <br />
          どんな仕事を担っているかを可視化します
        </p>

        <div className="space-y-4">
          <button
            onClick={onStartQuiz}
            className="w-full py-4 px-6 rounded-xl bg-gray-900 text-white font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
          >
            診断モードで始める
          </button>
          <p className="text-sm text-gray-500">
            {ALL_QUIZ_QUESTIONS.length}問の質問に答えて、あなたの業務を診断します（約5分）
          </p>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-sm text-gray-400">
                or
              </span>
            </div>
          </div>

          <button
            onClick={onStartManual}
            className="w-full py-3 px-6 rounded-xl border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-white transition-colors"
          >
            チェックボックスで選択する
          </button>
          <p className="text-sm text-gray-500">
            一覧から自分で業務を選択して可視化します
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              className="px-3 py-2 rounded-lg text-xs font-medium"
              style={{
                backgroundColor: cat.bgColor,
                color: cat.color,
              }}
            >
              {cat.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
