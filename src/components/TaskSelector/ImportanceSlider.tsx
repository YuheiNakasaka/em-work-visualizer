interface Props {
  value: number;
  onChange: (value: number) => void;
}

export function ImportanceSlider({ value, onChange }: Props) {
  return (
    <input
      type="range"
      min={1}
      max={5}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-16 h-1.5 accent-gray-700 cursor-pointer"
      title={`重要度: ${value}`}
    />
  );
}
