import { defineType, defineField } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "organization", title: "Organization", type: "string" }),
    defineField({ name: "period", title: "Period", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "type", title: "Type", type: "string", options: { list: ["experience", "education", "certification", "workshop", "goal"] } }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
