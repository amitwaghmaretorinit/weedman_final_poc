'use client'
import { documentInternationalization } from '@sanity/document-internationalization'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
// import { workflow } from "sanity-plugin-workflow";

import Icon from '@/components/Icon'
import { sections } from '@/sanity/constants'
import { i18n } from './languages'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { structure } from './src/sanity/structure/index'
import { theme } from './src/sanity/utils/theme'

const allSections= sections.map(i => i.value)

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  icon: Icon,
  theme,
  schema:{...schema,
    // templates:[
    //   {
    //     id: 'page_content-template',
    //     title: 'Page by Franchise',
    //      schemaType: 'page_content',
    //     parameters: [{name: 'franchiseId', type: 'string'},      { name: 'language', type: 'string' },
    //     ],
    //     value: (params:{franchiseId: string}) => {
    //       console.log({params})
    //        return  ({
    //         franchise_type: {_type: 'reference', _ref: params.franchiseId}
    //      })
    //     }
    //   } 
    // ]

  },
  plugins: [
    structureTool({structure}),
  //     workflow({
  //   schemaTypes: [`page_content`, 'page', ...allSections],
  // }),

    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool({defaultApiVersion: apiVersion}),
    documentInternationalization({
      supportedLanguages: i18n.languages,
      schemaTypes: ['page_content', ...allSections],
      languageField: `language`
    }),
  
  ],
})
