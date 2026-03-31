"use client";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SelectInput({
  label,
  options,
  value,
  onChange,
  placeholder,
}: SelectInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-muted">{label}</label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:border-border-focus focus:ring-1 focus:ring-border-focus transition-colors appearance-none"
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
