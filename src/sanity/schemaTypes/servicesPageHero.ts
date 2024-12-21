import { defineType } from "sanity"

export default defineType({
    name: 'servicesPageHero',
    type: 'document',
    title: 'Services Page Hero Section',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        description: 'The main title displayed in the hero section.',
        validation: Rule => Rule.required().max(100).warning('Keep the title concise.')
      },
      {
        name: 'subtitle',
        type: 'text',
        title: 'Subtitle',
        description: 'A brief subtitle or tagline.',
        validation: Rule => Rule.max(200).warning('Keep the subtitle concise.')
      },
      {
        name: 'backgroundImage',
        type: 'image',
        title: 'Background Image',
        description: 'The main background image for the hero section.',
        options: {
          hotspot: true // Enables image cropping
        },
        validation: Rule => Rule.required().warning('A background image is required.')
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