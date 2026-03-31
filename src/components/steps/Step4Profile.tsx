"use client";

import { useWizard } from "@/lib/wizard-context";
import { ACCOUNT_TYPE_LABELS } from "@/lib/wizard-types";
import TextInput from "@/components/ui/TextInput";
import SelectInput from "@/components/ui/SelectInput";
import CheckboxGroup from "@/components/ui/CheckboxGroup";
import Toggle from "@/components/ui/Toggle";

function HeadhunterProfile() {
  const { data, updateData } = useWizard();

  const specializations = [
    "Technology & IT",
    "Finance & Banking",
    "Healthcare & Pharma",
    "Legal",
    "Executive Search",
    "Engineering",
    "Marketing & Sales",
    "Other",
  ];

  return (
    <div className="space-y-6">
      <CheckboxGroup
        label="Areas of specialization"
        options={specializations.map((s) => ({ value: s, label: s }))}
        values={data.specializations}
        onChange={(values) => updateData({ specializations: values })}
        layout="vertical"
      />
      <SelectInput
        label="Years of experience"
        placeholder="Select experience level"
        value={data.yearsExperience}
        onChange={(value) => updateData({ yearsExperience: value })}
        options={[
          { value: "0-2", label: "0-2 years" },
          { value: "3-5", label: "3-5 years" },
          { value: "6-10", label: "6-10 years" },
          { value: "10+", label: "10+ years" },
        ]}
      />
      <TextInput
        label="LinkedIn profile URL"
        placeholder="https://linkedin.com/in/..."
        value={data.linkedinUrl}
        onChange={(e) => updateData({ linkedinUrl: e.target.value })}
      />
    </div>
  );
}

function CandidateProfile() {
  const { data, updateData } = useWizard();

  const skills = [
    "Software Development",
    "Data Science & Analytics",
    "Project Management",
    "UX/UI Design",
    "Marketing",
    "Sales",
    "Finance & Accounting",
    "Human Resources",
    "Operations",
    "Other",
  ];

  return (
    <div className="space-y-6">
      <TextInput
        label="Current or desired job title"
        placeholder="e.g. Senior Software Engineer"
        value={data.jobTitle}
        onChange={(e) => updateData({ jobTitle: e.target.value })}
      />
      <CheckboxGroup
        label="Key skills"
        options={skills.map((s) => ({ value: s, label: s }))}
        values={data.skills}
        onChange={(values) => updateData({ skills: values })}
        layout="vertical"
      />
      <TextInput
        label="Preferred location"
        placeholder="e.g. London, New York, Remote"
        value={data.preferredLocation}
        onChange={(e) => updateData({ preferredLocation: e.target.value })}
      />
      <Toggle
        label="Open to remote work"
        checked={data.openToRemote}
        onChange={(checked) => updateData({ openToRemote: checked })}
      />
    </div>
  );
}

function BusinessOwnerProfile() {
  const { data, updateData } = useWizard();

  const hiringNeeds = [
    "Technical roles",
    "Executive / C-level",
    "Sales & Marketing",
    "Operations & Support",
    "Finance & Legal",
    "Other",
  ];

  return (
    <div className="space-y-6">
      <TextInput
        label="Company name"
        placeholder="Your company name"
        value={data.companyName}
        onChange={(e) => updateData({ companyName: e.target.value })}
      />
      <TextInput
        label="Industry"
        placeholder="e.g. Technology, Finance, Healthcare"
        value={data.industry}
        onChange={(e) => updateData({ industry: e.target.value })}
      />
      <SelectInput
        label="Company size"
        placeholder="Select company size"
        value={data.companySize}
        onChange={(value) => updateData({ companySize: value })}
        options={[
          { value: "1-10", label: "1-10 employees" },
          { value: "11-50", label: "11-50 employees" },
          { value: "51-200", label: "51-200 employees" },
          { value: "201-500", label: "201-500 employees" },
          { value: "500+", label: "500+ employees" },
        ]}
      />
      <CheckboxGroup
        label="What roles are you hiring for?"
        options={hiringNeeds.map((h) => ({ value: h, label: h }))}
        values={data.hiringNeeds}
        onChange={(values) => updateData({ hiringNeeds: values })}
        layout="vertical"
      />
    </div>
  );
}

function ConsultancyProfile() {
  const { data, updateData } = useWizard();

  const services = [
    "Executive Search",
    "Permanent Placement",
    "Contract / Temporary Staffing",
    "RPO (Recruitment Process Outsourcing)",
    "Talent Advisory",
    "Other",
  ];

  const regions = [
    "North America",
    "Europe",
    "Asia-Pacific",
    "Middle East & Africa",
    "Latin America",
    "Global",
  ];

  return (
    <div className="space-y-6">
      <TextInput
        label="Agency name"
        placeholder="Your agency name"
        value={data.agencyName}
        onChange={(e) => updateData({ agencyName: e.target.value })}
      />
      <SelectInput
        label="Team size"
        placeholder="Select team size"
        value={data.teamSize}
        onChange={(value) => updateData({ teamSize: value })}
        options={[
          { value: "1-5", label: "1-5 consultants" },
          { value: "6-20", label: "6-20 consultants" },
          { value: "21-50", label: "21-50 consultants" },
          { value: "50+", label: "50+ consultants" },
        ]}
      />
      <CheckboxGroup
        label="Services offered"
        options={services.map((s) => ({ value: s, label: s }))}
        values={data.servicesOffered}
        onChange={(values) => updateData({ servicesOffered: values })}
        layout="vertical"
      />
      <CheckboxGroup
        label="Regions served"
        options={regions.map((r) => ({ value: r, label: r }))}
        values={data.regionsServed}
        onChange={(values) => updateData({ regionsServed: values })}
        layout="vertical"
      />
    </div>
  );
}

const profileComponents = {
  headhunter: HeadhunterProfile,
  candidate: CandidateProfile,
  business_owner: BusinessOwnerProfile,
  consultancy: ConsultancyProfile,
};

export default function Step4Profile() {
  const { data, nextStep, prevStep } = useWizard();

  const accountType = data.accountType!;
  const ProfileComponent = profileComponents[accountType];

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center px-6 pt-20 md:pt-0 pb-12">
      <div className="w-full max-w-[600px]">
        <p className="text-sm text-muted mb-1">
          I am a {ACCOUNT_TYPE_LABELS[accountType]}
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Tell us about yourself
        </h1>

        <ProfileComponent />

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
            className="px-8 py-3 bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
