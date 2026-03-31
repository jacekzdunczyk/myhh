"use client";

import { useWizard } from "@/lib/wizard-context";
import Step1SignUp from "@/components/steps/Step1SignUp";
import Step2AccountType from "@/components/steps/Step2AccountType";
import Step3Goals from "@/components/steps/Step3Goals";
import Step4Profile from "@/components/steps/Step4Profile";
import Step5Complete from "@/components/steps/Step5Complete";

const steps = [Step1SignUp, Step2AccountType, Step3Goals, Step4Profile, Step5Complete];

export default function WizardShell() {
  const { step, totalSteps } = useWizard();

  const CurrentStep = steps[step - 1];

  return (
    <div className="relative min-h-screen">
      {step > 1 && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-1 bg-border">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
            />
          </div>
        </div>
      )}

      <CurrentStep />
    </div>
  );
}
