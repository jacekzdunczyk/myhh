export type AccountType = "headhunter" | "consultancy" | "business_owner" | "candidate";

export interface WizardData {
  // Step 1: Sign Up
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  newsletter: boolean;

  // Step 2: Account Type
  accountType: AccountType | null;

  // Step 3: Goals
  goals: string[];

  // Step 4: Profile Details (varies by account type)
  // Headhunter
  specializations: string[];
  yearsExperience: string;
  linkedinUrl: string;

  // Candidate
  skills: string[];
  jobTitle: string;
  preferredLocation: string;
  openToRemote: boolean;

  // Business Owner
  companyName: string;
  industry: string;
  companySize: string;
  hiringNeeds: string[];

  // Consultancy
  agencyName: string;
  teamSize: string;
  servicesOffered: string[];
  regionsServed: string[];
}

export const initialWizardData: WizardData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  newsletter: false,
  accountType: null,
  goals: [],
  specializations: [],
  yearsExperience: "",
  linkedinUrl: "",
  skills: [],
  jobTitle: "",
  preferredLocation: "",
  openToRemote: false,
  companyName: "",
  industry: "",
  companySize: "",
  hiringNeeds: [],
  agencyName: "",
  teamSize: "",
  servicesOffered: [],
  regionsServed: [],
};

export const ACCOUNT_TYPE_LABELS: Record<AccountType, string> = {
  headhunter: "Headhunter",
  consultancy: "Consultancy",
  business_owner: "Business owner",
  candidate: "Candidate",
};

export const GOALS_BY_TYPE: Record<AccountType, string[]> = {
  headhunter: [
    "Promoting my headhunting services",
    "Leveling up my career",
    "Connecting with other headhunters",
    "Gaining access to high-profile clients",
    "Other",
  ],
  consultancy: [
    "Growing our client base",
    "Finding top talent for clients",
    "Expanding our professional network",
    "Showcasing our agency's expertise",
    "Other",
  ],
  business_owner: [
    "Hiring top talent for my company",
    "Finding reliable headhunters",
    "Building a strong team",
    "Exploring recruitment solutions",
    "Other",
  ],
  candidate: [
    "Finding my next job opportunity",
    "Exploring a career change",
    "Connecting with headhunters",
    "Getting discovered by employers",
    "Other",
  ],
};
