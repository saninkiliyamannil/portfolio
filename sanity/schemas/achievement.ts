import { defineType, defineField } from "sanity";

export const achievement = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "value", title: "Value", type: "string" }),
    defineField({ name: "icon", title: "Icon", type: "string" }),
    defineField({ name: "suffix", title: "Suffix", type: "string" }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
});
