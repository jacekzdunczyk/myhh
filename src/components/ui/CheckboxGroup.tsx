"use client";

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  label?: string;
  options: CheckboxOption[];
  values: string[];
  onChange: (values: string[]) => void;
  layout?: "horizontal" | "vertical";
}

export default function CheckboxGroup({
  label,
  options,
  values,
  onChange,
  layout = "vertical",
}: CheckboxGroupProps) {
  const toggle = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  return (
    <fieldset>
      {label && (
        <legend className="text-sm font-semibold text-foreground mb-3">{label}</legend>
      )}
      <div
        className={
          layout === "horizontal"
            ? "flex flex-wrap items-center gap-4"
            : "flex flex-col gap-0"
        }
      >
        {options.map((opt) => {
          const checked = values.includes(opt.value);
          return (
            <label
              key={opt.value}
              className={`flex items-center gap-4 cursor-pointer group transition-colors ${
                layout === "vertical"
                  ? "p-4 bg-surface border border-transparent hover:border-border"
                  : ""
              } ${checked && layout === "vertical" ? "bg-surface border-primary" : ""}`}
            >
              <span className="relative flex items-center justify-center w-6 h-6 shrink-0">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(opt.value)}
                  className="sr-only"
                />
                <span
                  className={`w-6 h-6 border-2 transition-colors ${
                    checked
                      ? "border-primary bg-primary"
                      : "border-border group-hover:border-muted"
                  }`}
                />
                {checked && (
                  <svg
                    className="absolute w-3.5 h-3.5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </span>
              <span
                className={`text-sm ${
                  checked ? "font-bold text-foreground" : "text-foreground"
                }`}
              >
                {opt.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
