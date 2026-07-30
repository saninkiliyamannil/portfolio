import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: number;
  type: "education" | "experience" | "certification" | "workshop" | "goal";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface Achievement {
  label: string;
  value: string;
  icon: string;
  suffix?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface SocialLink {
  href: string;
  Icon: IconType | LucideIcon;
  label: string;
}

export interface NexoraInfo {
  name: string;
  tagline: string;
  mission: string;
  description: string;
  url: string;
  services: Service[];
  stats: Achievement[];
  techStack: string[];
}

export interface PersonalInfo {
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
}
