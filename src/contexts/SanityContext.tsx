"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { groq } from "next-sanity";
import { liveClient } from "@root/sanity/lib/live-client";

const allDataQuery = groq`{
  "personalInfo": *[_type == "personalInfo"][0],
  "projects": *[_type == "project"] | order(order asc),
  "skillCategories": *[_type == "skillCategory"] | order(order asc),
  "experience": *[_type == "experience"] | order(order asc),
  "services": *[_type == "service"] | order(order asc),
  "achievements": *[_type == "achievement"] | order(order asc),
  "nexoraInfo": *[_type == "nexoraInfo"][0],
}`;

interface SanitySocialLinks { github?: string; linkedin?: string; instagram?: string; }
interface SanityPersonalInfo { name: string; greeting: string; role: string; email: string; phone: string; location: string; resumeUrl: string; shortBio: string; aboutDescription: string; careerObjective: string; socialLinks: SanitySocialLinks; }
interface SanityProject { _id: string; title: string; description: string; technologies: string[]; github: string; live: string; featured: boolean; order: number; }
interface SanitySkillCategory { _id: string; title: string; icon: string; skills: { name: string }[]; order: number; }
interface SanityExperience { _id: string; title: string; organization: string; period: string; description: string; type: string; highlights: string[]; order: number; }
interface SanityService { _id: string; title: string; description: string; icon: string; order: number; }
interface SanityAchievement { _id: string; label: string; value: string; icon: string; suffix: string; order: number; }
interface SanityNexoraInfo { name: string; tagline: string; mission: string; description: string; url: string; services: { title: string; description: string; icon: string }[]; stats: { label: string; value: string; icon: string; suffix: string }[]; techStack: string[]; }
interface SanityAllData { personalInfo: SanityPersonalInfo | null; projects: SanityProject[]; skillCategories: SanitySkillCategory[]; experience: SanityExperience[]; services: SanityService[]; achievements: SanityAchievement[]; nexoraInfo: SanityNexoraInfo | null; }

interface SanityContextValue {
  data: SanityAllData | null;
  loading: boolean;
}

const SanityContext = createContext<SanityContextValue>({ data: null, loading: true });

export function SanityProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SanityAllData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    liveClient.fetch(allDataQuery)
      .then((result: SanityAllData) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return <SanityContext.Provider value={{ data, loading }}>{children}</SanityContext.Provider>;
}

export function useSanity() {
  const ctx = useContext(SanityContext);
  if (!ctx) throw new Error("useSanity must be used within SanityProvider");
  return ctx;
}
