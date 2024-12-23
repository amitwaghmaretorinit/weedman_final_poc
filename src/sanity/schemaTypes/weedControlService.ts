import { defineType } from "sanity"
import { SECTION_TYPES } from "../constants";

export default defineType({
    name: SECTION_TYPES.WEED_CONTROL_SERVICE,
    type: 'document',
    title: 'Weed Control Service',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Headline',
        description: 'The main title or headline of the service.',
      },
      {
        name: 'sections',
        type: 'array',
        title: 'Service Sections',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                type: 'string',
                title: 'Section Title',
              },
              {
                name: 'description',
                type: 'text',
                title: 'Section Description',
              },
            ],
          },
        ],
      },

    {
        name: 'language',
        type: 'string',
        readOnly: true,
  
      },
    ],
    preview: {
      select: {
        title: 'title',
        language: 'language',
      },
      prepare(select) {
        const { title, language } = select
        return {
          title,
          subtitle: language.toUpperCase(),
        }
  
      }
    }
  });
  