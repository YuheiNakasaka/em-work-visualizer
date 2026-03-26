import { useState, useCallback } from "react";
import { CATEGORIES } from "../../data/categories";
import {
  QUIZ_QUESTIONS_BY_CATEGORY,
  ALL_QUIZ_QUESTIONS,
} from "../../data/quizQuestions";
import type { Category } from "../../types";
import { QuizProgressBar } from "./QuizProgressBar";
import { QuizQuestionCard } from "./QuizQuestionCard";
import { QuizCategoryIntro } from "./QuizCategoryIntro";
import { QuizResultSummary } from "./QuizResultSummary";

type Phase = "intro" | "question" | "result";

const DEFAULT_IMPORTANCE = 3;

interface Answer {
  yes: boolean;
  taskIds: number[];
}

interface Props {
  onComplete: (
    selectedIds: Set<number>,
    overrides: Map<number, number>
  ) => void;
  onSkipToManual: () => void;
}

const CATEGORY_ORDER: Category[] = CATEGORIES.map((c) => c.key);

export function DiagnosticQuiz({ onComplete, onSkipToManual }: Props) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<Map<string, Answer>>(new Map());

  const currentCategory = CATEGORY_ORDER[categoryIndex];
  const currentQuestions = QUIZ_QUESTIONS_BY_CATEGORY[currentCategory];
  const totalQuestions = ALL_QUIZ_QUESTIONS.length;

  const getTotalAnswered = useCallback(() => {
    return answers.size;
  }, [answers]);

  const getCategoryResults = useCallback(
    (upToIndex?: number) => {
      const limit = upToIndex ?? CATEGORY_ORDER.length;
      return CATEGORY_ORDER.slice(0, limit).map((cat) => {
        const questions = QUIZ_QUESTIONS_BY_CATEGORY[cat];
        let yesCount = 0;
        questions.forEach((_, qi) => {
          const key = `${cat}-${qi}`;
          const answer = answers.get(key);
          if (answer?.yes) yesCount++;
        });
        return { category: cat, yesCount, total: questions.length };
      });
    },
    [answers]
  );

  const buildResults = useCallback(() => {
    const selectedIds = new Set<number>();
    const overrides = new Map<number, number>();

    answers.forEach((answer) => {
      if (answer.yes) {
        answer.taskIds.forEach((id) => {
          selectedIds.add(id);
          overrides.set(id, DEFAULT_IMPORTANCE);
        });
      }
    });

    return { selectedIds, overrides };
  }, [answers]);

  const handleAnswer = useCallback(
    (yes: boolean) => {
      const question = currentQuestions[questionIndex];
      const key = `${currentCategory}-${questionIndex}`;

      setAnswers((prev) => {
        const next = new Map(prev);
        next.set(key, { yes, taskIds: question.taskIds });
        return next;
      });

      // Advance to next question or next category
      if (questionIndex + 1 < currentQuestions.length) {
        setQuestionIndex(questionIndex + 1);
      } else if (categoryIndex + 1 < CATEGORY_ORDER.length) {
        setCategoryIndex(categoryIndex + 1);
        setQuestionIndex(0);
        setPhase("intro");
      } else {
        setPhase("result");
      }
    },
    [currentQuestions, questionIndex, currentCategory, categoryIndex]
  );

  const handleSkipCategory = useCallback(() => {
    if (categoryIndex + 1 < CATEGORY_ORDER.length) {
      setCategoryIndex(categoryIndex + 1);
      setQuestionIndex(0);
      setPhase("intro");
    } else {
      setPhase("result");
    }
  }, [categoryIndex]);

  const handleSkipToManual = useCallback(() => {
    const { selectedIds, overrides } = buildResults();
    if (selectedIds.size > 0) {
      onComplete(selectedIds, overrides);
    } else {
      onSkipToManual();
    }
  }, [buildResults, onComplete, onSkipToManual]);

  const handleViewResults = useCallback(() => {
    const { selectedIds, overrides } = buildResults();
    onComplete(selectedIds, overrides);
  }, [buildResults, onComplete]);

  if (phase === "result") {
    const results = getCategoryResults();
    const totalYes = results.reduce((sum, r) => sum + r.yesCount, 0);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <QuizResultSummary
          results={results}
          totalYes={totalYes}
          totalQuestions={totalQuestions}
          onViewResults={handleViewResults}
        />
      </div>
    );
  }

  if (phase === "intro") {
    const completedResults = getCategoryResults(categoryIndex);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <QuizCategoryIntro
          category={currentCategory}
          questionCount={currentQuestions.length}
          completedCategories={completedResults}
          onStart={() => setPhase("question")}
          onSkipCategory={handleSkipCategory}
        />
      </div>
    );
  }

  // phase === "question"
  const question = currentQuestions[questionIndex];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <QuizProgressBar
        currentCategoryIndex={categoryIndex}
        currentQuestionIndex={questionIndex}
        totalQuestionsInCategory={currentQuestions.length}
        totalAnswered={getTotalAnswered()}
        totalQuestions={totalQuestions}
        category={currentCategory}
        onSkipToManual={handleSkipToManual}
      />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <QuizQuestionCard
          key={`${currentCategory}-${questionIndex}`}
          title={question.title}
          scenario={question.scenario}
          category={question.category}
          questionKey={`${currentCategory}-${questionIndex}`}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}
