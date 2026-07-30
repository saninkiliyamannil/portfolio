import { defineType, defineField } from "sanity";

export const personalInfo = defineType({
  name: "personalInfo",
  title: "Personal Info",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "greeting", title: "Greeting", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "resumeUrl", title: "Resume URL", type: "string" }),
    defineField({ name: "shortBio", title: "Short Bio", type: "text" }),
    defineField({ name: "aboutDescription", title: "About Description", type: "text" }),
    defineField({ name: "careerObjective", title: "Career Objective", type: "text" }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", title: "GitHub", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
      ],
    }),
  ],
});
