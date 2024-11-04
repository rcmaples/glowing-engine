import { defineField, defineType } from "sanity";

export const toggleTestType = defineType({
  name: "toggle_test",
  title: "Toggle Test",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "is_enabled",
      title: "Is enabled?",
      type: "boolean",
      readOnly: true,
      initialValue: true,
    }),
  ],
});
