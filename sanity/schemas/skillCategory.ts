import { defineType, defineField } from "sanity";

export const skillCategory = defineType({
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "icon", title: "Icon", type: "string" }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", title: "Name", type: "string" },
        ],
      }],
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
