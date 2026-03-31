"use client";

import { useWizard } from "@/lib/wizard-context";
import { AccountType, ACCOUNT_TYPE_LABELS } from "@/lib/wizard-types";

const accountTypes: AccountType[] = [
  "headhunter",
  "consultancy",
  "business_owner",
  "candidate",
];

export default function Step2AccountType() {
  const { data, updateData, nextStep, prevStep } = useWizard();

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center px-6 pt-20 md:pt-0">
      <div className="w-full max-w-[600px]">
        <p className="text-sm text-muted mb-1">
          Hi {data.firstName || "there"}, welcome to MyHeadHunter!
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Choose your account type
        </h1>

        <p className="text-sm text-muted mb-8">
          Please note that account type <strong className="text-foreground">cannot</strong> be
          modified after you finish setting up
        </p>

        <div className="flex flex-wrap gap-0">
          {accountTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => updateData({ accountType: type })}
              className={`px-5 py-2.5 text-sm font-medium transition-all border ${
                data.accountType === type
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground border-border hover:border-primary"
              }`}
            >
              {ACCOUNT_TYPE_LABELS[type]}
            </button>
          ))}
        </div>

        <div className="flex justify-end items-center mt-10">
          <button
            type="button"
            onClick={prevStep}
            className="text-sm text-muted hover:text-foreground transition-colors mr-auto"
          >
            &larr; Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            disabled={!data.accountType}
            className="px-8 py-3 bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
