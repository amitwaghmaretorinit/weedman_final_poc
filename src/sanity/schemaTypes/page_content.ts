import { defineType } from "sanity";
import { sections } from "../constants";

export default defineType({
    name: 'page_content',
    title: 'Page Content',
    type: 'document',
    fields: [{
        name: 'title',
        title: 'Page Header',
        type: 'string'
    },

    {
        name: 'page_type',
        type: 'reference',
        to: [{ type: 'page' }]
    },
    {
        name: 'sections',
        type: 'array',
        of:
            [{
                type: 'reference', to: [
                    ...sections.map((i) => ({ type: i.value }))
                ]
            }]
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
            pageType: 'page_type.title'
        },
        prepare(select) {
            const { language, pageType } = select
            return {
                title: pageType,
                subtitle: language.toUpperCase(),
            }

        }
    }
})