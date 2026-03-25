import { type ReactNode, useState, useRef, useCallback, useEffect } from "react";

interface Props {
  header: ReactNode;
  sidebar: ReactNode;
  main: ReactNode;
}

const MIN_WIDTH = 200;
const MAX_WIDTH = 500;
const DEFAULT_WIDTH = 320;

export function Layout({ header, sidebar, main }: Props) {
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH);
  const [collapsed, setCollapsed] = useState(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startWidth = useRef(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      isDragging.current = true;
      startX.current = e.clientX;
      startWidth.current = sidebarWidth;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [sidebarWidth]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;
      const newWidth = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, startWidth.current + delta));
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {header}
      <div className="flex-1 flex min-h-0 overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className="flex-shrink-0 border-r border-gray-200 bg-white overflow-hidden flex flex-col max-md:hidden transition-[width] duration-150"
          style={{ width: collapsed ? 0 : sidebarWidth }}
        >
          {!collapsed && sidebar}
        </aside>

        {/* Drag handle */}
        {!collapsed && (
          <div
            onMouseDown={handleMouseDown}
            className="w-1 flex-shrink-0 bg-gray-200 hover:bg-blue-400 cursor-col-resize transition-colors max-md:hidden"
          />
        )}

        {/* Collapse/expand toggle */}
        <button
          onClick={() => setCollapsed((v) => !v)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-5 h-10 bg-white border border-gray-300 rounded-r-md shadow-sm flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors max-md:hidden"
          style={{ left: collapsed ? 0 : sidebarWidth + 4 }}
          title={collapsed ? "パネルを開く" : "パネルを閉じる"}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          >
            <path d="M7 1L3 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Main: chart area */}
        <main className="flex-1 p-4 overflow-hidden min-w-0">{main}</main>
      </div>
    </div>
  );
}
