import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuredMenuCategories',
  title: 'Featured Menu Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Feature Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'short_description',
        title: 'Short Description',
        type: 'string',
        validation: (Rule) => Rule.max(200),
    }),
    defineField({
        name: 'restaurant',
        title: 'Restaurant',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    })
  ],
})
