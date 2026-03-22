import { defineField, defineType } from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Startup Guide',
          'Compliance',
          'Operations',
          'Branding',
          'Industry',
          'Chef Matchmaking',
          'Sustainability',
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: '8 min read',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout Box',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'body', title: 'Body', type: 'text' },
            {
              name: 'color',
              title: 'Color',
              type: 'string',
              options: {
                list: ['teal', 'amber', 'coral', 'forest'],
              },
            },
          ],
          preview: {
            select: { title: 'title', subtitle: 'body' },
          },
        },
        {
          type: 'object',
          name: 'numberedList',
          title: 'Numbered List',
          fields: [
            { name: 'title', title: 'Section Title', type: 'string' },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'heading', title: 'Heading', type: 'string' },
                    { name: 'body', title: 'Body', type: 'text' },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
        {
          type: 'object',
          name: 'keyTakeaways',
          title: 'Key Takeaways Box',
          fields: [
            {
              name: 'items',
              title: 'Takeaway Points',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            prepare() { return { title: 'Key Takeaways' } },
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt Text', type: 'string' },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
})
