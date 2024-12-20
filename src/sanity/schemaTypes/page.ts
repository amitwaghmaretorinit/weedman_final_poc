import { defineType } from "sanity";

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string'
    },
    {
        name: 'path',
        title: 'Path',
        type: 'slug'
    },
    ],
     
})