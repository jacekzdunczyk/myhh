"use client";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  layout?: "horizontal" | "vertical";
  name: string;
}

export default function RadioGroup({
  label,
  options,
  value,
  onChange,
  layout = "vertical",
  name,
}: RadioGroupProps) {
  return (
    <fieldset>
      {label && (
        <legend className="text-sm font-semibold text-foreground mb-3">{label}</legend>
      )}
      <div
        className={
          layout === "horizontal"
            ? "flex items-center gap-6"
            : "flex flex-col gap-3"
        }
      >
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-3 cursor-pointer group ${
              layout === "vertical"
                ? "p-3 hover:bg-surface transition-colors"
                : ""
            }`}
          >
            <span className="relative flex items-center justify-center w-6 h-6">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="sr-only"
              />
              <span
                className={`w-6 h-6 rounded-full border-2 transition-colors ${
                  value === opt.value
                    ? "border-primary bg-primary"
                    : "border-border group-hover:border-muted"
                }`}
              />
              {value === opt.value && (
                <span className="absolute w-2.5 h-2.5 rounded-full bg-white" />
              )}
            </span>
            <span
              className={`text-sm ${
                value === opt.value ? "font-bold text-foreground" : "text-foreground"
              }`}
            >
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
