"use client";

import { WizardProvider } from "@/lib/wizard-context";
import WizardShell from "@/components/wizard/WizardShell";

export default function SetupWizard() {
  return (
    <WizardProvider>
      <WizardShell />
    </WizardProvider>
  );
}
