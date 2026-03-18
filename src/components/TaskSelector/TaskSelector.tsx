import { useState, useMemo } from "react";
import type { Category, UserState } from "../../types";
import { TASKS } from "../../data/tasks";
import { CATEGORIES } from "../../data/categories";
import { CategoryTab } from "./CategoryTab";
import { TaskCheckbox } from "./TaskCheckbox";

interface Props {
  state: UserState;
  onToggleTask: (taskId: number, defaultImportance: number) => void;
  onSetImportance: (taskId: number, importance: number) => void;
}

export function TaskSelector({ state, onToggleTask, onSetImportance }: Props) {
  const [activeCategory, setActiveCategory] = useState<Category>("project");
  const [search, setSearch] = useState("");

  const categoryTasks = useMemo(() => {
    let tasks = TASKS.filter((t) => t.category === activeCategory);
    if (search) {
      const q = search.toLowerCase();
      tasks = tasks.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q)
      );
    }
    return tasks;
  }, [activeCategory, search]);

  const selectedCounts = useMemo(() => {
    const counts: Record<Category, number> = {
      project: 0,
      product: 0,
      people: 0,
      technology: 0,
    };
    for (const task of TASKS) {
      if (state.selectedTaskIds.has(task.id)) {
        counts[task.category]++;
      }
    }
    return counts;
  }, [state.selectedTaskIds]);

  const selectAllInCategory = () => {
    for (const task of categoryTasks) {
      if (!state.selectedTaskIds.has(task.id)) {
        onToggleTask(task.id, task.defaultImportance);
      }
    }
  };

  const deselectAllInCategory = () => {
    for (const task of categoryTasks) {
      if (state.selectedTaskIds.has(task.id)) {
        onToggleTask(task.id, task.defaultImportance);
      }
    }
  };

  const allSelected = categoryTasks.every((t) => state.selectedTaskIds.has(t.id));

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-1 p-2 border-b border-gray-200 overflow-x-auto flex-shrink-0">
        {CATEGORIES.map((cat) => (
          <CategoryTab
            key={cat.key}
            category={cat}
            active={activeCategory === cat.key}
            selectedCount={selectedCounts[cat.key]}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      <div className="px-2 pt-2 pb-1">
        <input
          type="text"
          placeholder="タスクを検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      <div className="px-2 pb-1 flex justify-between items-center">
        <span className="text-xs text-gray-400">
          {categoryTasks.length}件
        </span>
        <button
          onClick={allSelected ? deselectAllInCategory : selectAllInCategory}
          className="text-xs text-blue-500 hover:text-blue-700"
        >
          {allSelected ? "すべて解除" : "すべて選択"}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-1">
        {categoryTasks.map((task) => (
          <TaskCheckbox
            key={task.id}
            task={task}
            selected={state.selectedTaskIds.has(task.id)}
            importance={
              state.importanceOverrides.get(task.id) ?? task.defaultImportance
            }
            onToggle={() => onToggleTask(task.id, task.defaultImportance)}
            onImportanceChange={(v) => onSetImportance(task.id, v)}
          />
        ))}
      </div>
    </div>
  );
}
