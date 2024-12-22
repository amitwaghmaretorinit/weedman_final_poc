import { defineType } from 'sanity'

export default defineType({
  type: 'document',
  title: 'Franchise',
  name: 'franchise',
  fields: [
    {
      type: 'string',
      title: 'Franchise',
      name: 'franchise_name'
    },
    {
      type: 'slug',
      title: 'Slug',
      name: 'path'
    }
  ]
})
