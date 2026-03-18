import type { Category } from "../../types";
import type { CategoryMeta } from "../../data/categories";

interface Props {
  category: CategoryMeta;
  active: boolean;
  selectedCount: number;
  onClick: (key: Category) => void;
}

export function CategoryTab({ category, active, selectedCount, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(category.key)}
      className={`flex-shrink-0 px-3 py-2 text-xs font-medium rounded-lg transition-colors relative whitespace-nowrap ${
        active
          ? "text-white"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
      }`}
      style={active ? { backgroundColor: category.color } : undefined}
    >
      {category.label.replace("マネジメント", "")}
      {selectedCount > 0 && (
        <span
          className={`ml-1 inline-flex items-center justify-center w-4 h-4 text-[10px] rounded-full ${
            active ? "bg-white/30 text-white" : "bg-gray-200 text-gray-600"
          }`}
        >
          {selectedCount}
        </span>
      )}
    </button>
  );
}
