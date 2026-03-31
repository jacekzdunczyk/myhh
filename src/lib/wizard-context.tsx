"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { WizardData, initialWizardData } from "./wizard-types";

interface WizardContextValue {
  step: number;
  totalSteps: number;
  data: WizardData;
  updateData: (partial: Partial<WizardData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
}

const WizardContext = createContext<WizardContextValue | null>(null);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<WizardData>(initialWizardData);
  const totalSteps = 5;

  const updateData = useCallback((partial: Partial<WizardData>) => {
    setData((prev) => ({ ...prev, ...partial }));
  }, []);

  const nextStep = useCallback(() => {
    setStep((prev) => Math.min(prev + 1, totalSteps));
  }, []);

  const prevStep = useCallback(() => {
    setStep((prev) => Math.max(prev - 1, 1));
  }, []);

  const goToStep = useCallback((s: number) => {
    setStep(Math.max(1, Math.min(s, totalSteps)));
  }, []);

  return (
    <WizardContext.Provider
      value={{ step, totalSteps, data, updateData, nextStep, prevStep, goToStep }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const ctx = useContext(WizardContext);
  if (!ctx) throw new Error("useWizard must be used within WizardProvider");
  return ctx;
}
