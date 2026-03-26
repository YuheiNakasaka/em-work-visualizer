import { useState, useCallback } from "react";
import { useUrlState } from "./hooks/useUrlState";
import { useChartData } from "./hooks/useChartData";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { TaskSelector } from "./components/TaskSelector/TaskSelector";
import { ChartPanel } from "./components/ChartPanel/ChartPanel";
import { LandingPage } from "./components/LandingPage";
import { DiagnosticQuiz } from "./components/DiagnosticQuiz/DiagnosticQuiz";
import type { AppMode } from "./types";

function getInitialMode(): AppMode {
  const hash = window.location.hash.slice(1);
  return hash ? "dashboard" : "landing";
}

function App() {
  const { state, toggleTask, setImportance, setViewMode, bulkSetState } =
    useUrlState();
  const { combinedDatasets, splitDatasets } = useChartData(state);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [appMode, setAppMode] = useState<AppMode>(getInitialMode);

  const handleQuizComplete = useCallback(
    (selectedIds: Set<number>, overrides: Map<number, number>) => {
      bulkSetState(selectedIds, overrides);
      setAppMode("dashboard");
    },
    [bulkSetState]
  );

  if (appMode === "landing") {
    return (
      <LandingPage
        onStartQuiz={() => setAppMode("quiz")}
        onStartManual={() => setAppMode("dashboard")}
      />
    );
  }

  if (appMode === "quiz") {
    return (
      <DiagnosticQuiz
        onComplete={handleQuizComplete}
        onSkipToManual={() => setAppMode("dashboard")}
      />
    );
  }

  return (
    <>
      <Layout
        header={
          <Header
            viewMode={state.viewMode}
            onViewModeChange={setViewMode}
            onStartQuiz={() => setAppMode("quiz")}
          />
        }
        sidebar={
          <TaskSelector
            state={state}
            onToggleTask={toggleTask}
            onSetImportance={setImportance}
          />
        }
        main={
          <ChartPanel
            viewMode={state.viewMode}
            combinedDatasets={combinedDatasets}
            splitDatasets={splitDatasets}
          />
        }
      />

      {/* Mobile drawer toggle */}
      <button
        onClick={() => setDrawerOpen(!drawerOpen)}
        className="md:hidden fixed bottom-4 right-4 w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg flex items-center justify-center z-50"
      >
        {drawerOpen ? "\u2715" : "\u2630"}
      </button>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl flex flex-col overflow-hidden">
            <TaskSelector
              state={state}
              onToggleTask={toggleTask}
              onSetImportance={setImportance}
            />
          </aside>
        </div>
      )}
    </>
  );
}

export default App;
