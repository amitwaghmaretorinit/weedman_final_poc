import { defineType } from "sanity";
import { SECTION_TYPES } from "../constants";

export default defineType({
  name: SECTION_TYPES.SERVICES_WHY_DO_I_NEED_THIS,
  type: "document",
  title: "Services: Why Do I Need This?",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The main heading of the section.",
    },
    {
      name: "description",
      type: "array",
      title: "Description",
      description: "A rich text description explaining the benefits.",
      of: [{ type: "block" }],
    },
    {
      name: "sections",
      type: "array",
      title: "Benefits",
      description: "A list of benefits highlighting key points.",
      of: [
        {
          type: "object",
          name: "benefit",
          title: "Benefit",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Benefit Title",
              description: "The key title or heading for the benefit.",
            },
            {
              name: "description",
              type: "text",
              title: "Benefit Description",
              description: "A detailed description of the benefit.",
            },
          ],
        },
      ],
    },
    {
      name: "video",
      type: "url",
      title: "Video URL",
      description: "The URL of the embedded video.",
    },

    {
      name: "language",
      type: "string",
      readOnly: true,
    },
  ],

  preview: {
    select: {
      title: "title",
      language: "language",
    },
    prepare(select) {
      const { title, language } = select;
      return {
        title,
        subtitle: language.toUpperCase(),
      };
    },
  },
});
