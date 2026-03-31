"use client";

import { InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function TextInput({ label, className = "", ...props }: TextInputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-muted">{label}</label>
      )}
      <input
        className={`w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-border-focus focus:ring-1 focus:ring-border-focus transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}
