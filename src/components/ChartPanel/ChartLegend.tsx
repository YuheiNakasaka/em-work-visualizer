import { CATEGORIES } from "../../data/categories";

export function ChartLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-2">
      {CATEGORIES.map((cat) => (
        <div key={cat.key} className="flex items-center gap-1.5">
          <span
            className="w-3 h-3 rounded-full inline-block"
            style={{ backgroundColor: cat.color }}
          />
          <span className="text-xs text-gray-500">
            {cat.label.replace("マネジメント", "")}
          </span>
        </div>
      ))}
    </div>
  );
}
