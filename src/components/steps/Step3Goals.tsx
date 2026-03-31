"use client";

import { useWizard } from "@/lib/wizard-context";
import { ACCOUNT_TYPE_LABELS, GOALS_BY_TYPE } from "@/lib/wizard-types";
import CheckboxGroup from "@/components/ui/CheckboxGroup";

export default function Step3Goals() {
  const { data, updateData, nextStep, prevStep } = useWizard();

  const accountType = data.accountType!;
  const goals = GOALS_BY_TYPE[accountType];

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center px-6 pt-20 md:pt-0">
      <div className="w-full max-w-[600px]">
        <p className="text-sm text-muted mb-1">
          I am a {ACCOUNT_TYPE_LABELS[accountType]}
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          What are your current goals?
        </h1>

        <CheckboxGroup
          options={goals.map((g) => ({ value: g, label: g }))}
          values={data.goals}
          onChange={(values) => updateData({ goals: values })}
          layout="vertical"
        />

        <div className="flex justify-between items-center mt-10">
          <button
            type="button"
            onClick={prevStep}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={data.goals.length === 0}
            className="px-8 py-3 bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
