import { defineType } from "sanity";
import { SECTION_TYPES } from "../constants";

export default defineType({
    name: SECTION_TYPES.SERVICES_GUARANTEE,
    type: 'document',
    title: 'Guarantee Section',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
        {
            name: 'backgroundImage',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true, // Enables image cropping
            },
        },
        {
            name: 'buttonText',
            type: 'string',
            title: 'Button Text',
        },
        {
            name: 'buttonLink',
            type: 'url',
            title: 'Button Link',
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
})