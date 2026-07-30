import { groq } from "next-sanity";

export const personalInfoQuery = groq`*[_type == "personalInfo"][0]`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc)`;

export const skillsQuery = groq`*[_type == "skillCategory"] | order(order asc)`;

export const experienceQuery = groq`*[_type == "experience"] | order(order asc)`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc)`;

export const achievementsQuery = groq`*[_type == "achievement"] | order(order asc)`;

export const nexoraInfoQuery = groq`*[_type == "nexoraInfo"][0]`;

export const allDataQuery = groq`{
  "personalInfo": *[_type == "personalInfo"][0],
  "projects": *[_type == "project"] | order(order asc),
  "skillCategories": *[_type == "skillCategory"] | order(order asc),
  "experience": *[_type == "experience"] | order(order asc),
  "services": *[_type == "service"] | order(order asc),
  "achievements": *[_type == "achievement"] | order(order asc),
  "nexoraInfo": *[_type == "nexoraInfo"][0],
}`;
