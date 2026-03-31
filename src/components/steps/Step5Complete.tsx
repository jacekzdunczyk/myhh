"use client";

import { useWizard } from "@/lib/wizard-context";
import { ACCOUNT_TYPE_LABELS } from "@/lib/wizard-types";

export default function Step5Complete() {
  const { data, prevStep } = useWizard();

  const accountType = data.accountType!;

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-xl text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-foreground mb-3">
          You&apos;re all set!
        </h1>

        <p className="text-muted mb-8 max-w-md mx-auto">
          Welcome to MyHeadHunter, {data.firstName}! Your{" "}
          <strong>{ACCOUNT_TYPE_LABELS[accountType]}</strong> account has been
          set up successfully.
        </p>

        <div className="bg-surface rounded-xl p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4">
            Account Summary
          </h3>
          <dl className="space-y-3">
            <div className="flex justify-between">
              <dt className="text-sm text-muted">Name</dt>
              <dd className="text-sm font-medium">
                {data.firstName} {data.lastName}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted">Email</dt>
              <dd className="text-sm font-medium">{data.email}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted">Account type</dt>
              <dd className="text-sm font-medium">
                {ACCOUNT_TYPE_LABELS[accountType]}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-sm text-muted">Goals</dt>
              <dd className="text-sm font-medium text-right max-w-[60%]">
                {data.goals.join(", ")}
              </dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={prevStep}
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; Back
          </button>
          <button
            type="button"
            onClick={() => alert("Navigating to dashboard...")}
            className="px-8 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
