import { useState, useEffect, useCallback } from "react";
import type { UserState, ViewMode } from "../types";
import { encodeState, decodeState } from "../lib/url-codec";

function getInitialState(): UserState {
  const hash = window.location.hash.slice(1);
  if (hash) {
    const decoded = decodeState(hash);
    if (decoded) return decoded;
  }
  return {
    selectedTaskIds: new Set<number>(),
    importanceOverrides: new Map<number, number>(),
    viewMode: "split",
  };
}

export function useUrlState() {
  const [state, setState] = useState<UserState>(getInitialState);

  useEffect(() => {
    if (state.selectedTaskIds.size === 0) {
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      return;
    }
    const encoded = encodeState(state);
    history.replaceState(null, "", `#${encoded}`);
  }, [state]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const decoded = decodeState(hash);
        if (decoded) setState(decoded);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const toggleTask = useCallback((taskId: number, defaultImportance: number) => {
    setState((prev) => {
      const next = new Set(prev.selectedTaskIds);
      const nextOverrides = new Map(prev.importanceOverrides);
      if (next.has(taskId)) {
        next.delete(taskId);
        nextOverrides.delete(taskId);
      } else {
        next.add(taskId);
        nextOverrides.set(taskId, defaultImportance);
      }
      return { ...prev, selectedTaskIds: next, importanceOverrides: nextOverrides };
    });
  }, []);

  const setImportance = useCallback((taskId: number, importance: number) => {
    setState((prev) => {
      const nextOverrides = new Map(prev.importanceOverrides);
      nextOverrides.set(taskId, importance);
      return { ...prev, importanceOverrides: nextOverrides };
    });
  }, []);

  const setViewMode = useCallback((viewMode: ViewMode) => {
    setState((prev) => ({ ...prev, viewMode }));
  }, []);

  const bulkSetState = useCallback(
    (selectedIds: Set<number>, overrides: Map<number, number>) => {
      setState((prev) => ({
        ...prev,
        selectedTaskIds: selectedIds,
        importanceOverrides: overrides,
      }));
    },
    []
  );

  return { state, toggleTask, setImportance, setViewMode, bulkSetState };
}
