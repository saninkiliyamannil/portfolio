import { client } from "./client";
import { allDataQuery } from "./queries";

export interface SanitySocialLinks {
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export interface SanityPersonalInfo {
  name: string;
  greeting: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  shortBio: string;
  aboutDescription: string;
  careerObjective: string;
  socialLinks: SanitySocialLinks;
}

export interface SanityProject {
  _id: string;
  title: string;
  description: string;
  image: any;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
  order: number;
}

export interface SanitySkillCategory {
  _id: string;
  title: string;
  icon: string;
  skills: { name: string }[];
  order: number;
}

export interface SanityExperience {
  _id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "experience" | "education" | "certification" | "workshop" | "goal";
  highlights: string[];
  order: number;
}

export interface SanityService {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface SanityAchievement {
  _id: string;
  label: string;
  value: string;
  icon: string;
  suffix: string;
  order: number;
}

export interface SanityNexoraInfo {
  name: string;
  tagline: string;
  mission: string;
  description: string;
  url: string;
  services: { title: string; description: string; icon: string }[];
  stats: { label: string; value: string; icon: string; suffix: string }[];
  techStack: string[];
}

export interface SanityAllData {
  personalInfo: SanityPersonalInfo | null;
  projects: SanityProject[];
  skillCategories: SanitySkillCategory[];
  experience: SanityExperience[];
  services: SanityService[];
  achievements: SanityAchievement[];
  nexoraInfo: SanityNexoraInfo | null;
}

export async function fetchAllData(): Promise<SanityAllData> {
  return client.fetch(allDataQuery, {}, { next: { revalidate: 60 } });
}
