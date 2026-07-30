import { defineType, defineField } from "sanity";

export const nexoraInfo = defineType({
  name: "nexoraInfo",
  title: "Nexora Info",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "mission", title: "Mission", type: "text" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "url", title: "Website URL", type: "url" }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "description", title: "Description", type: "text" },
          { name: "icon", title: "Icon", type: "string" },
        ],
      }],
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", title: "Label", type: "string" },
          { name: "value", title: "Value", type: "string" },
          { name: "icon", title: "Icon", type: "string" },
          { name: "suffix", title: "Suffix", type: "string" },
        ],
      }],
    }),
    defineField({ name: "techStack", title: "Tech Stack", type: "array", of: [{ type: "string" }] }),
  ],
});
