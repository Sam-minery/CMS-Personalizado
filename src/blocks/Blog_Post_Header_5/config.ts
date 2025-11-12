import type { Block } from 'payload'

export const BlogPostHeader5: Block = {
  slug: 'blogPostHeader5',
  interfaceName: 'BlogPostHeader5BlockType',
  dbName: 'blog_post_header5',
  labels: {
    singular: 'Blog Post Header 5',
    plural: 'Blog Post Header 5 Blocks',
  },
  fields: [
    {
      name: 'category',
      type: 'text',
      label: 'Category',
      required: true,
      defaultValue: 'Category',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Blog title heading will go here',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: true,
    },
    {
      name: 'author',
      type: 'group',
      label: 'Author Details',
      fields: [
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          label: 'Author Avatar',
          required: true,
        },
        {
          name: 'fullName',
          type: 'text',
          label: 'Full Name',
          required: true,
          defaultValue: 'Full name',
        },
        {
          name: 'date',
          type: 'text',
          label: 'Publication Date',
          required: true,
          defaultValue: '11 Jan 2022',
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time',
          required: true,
          defaultValue: '5 min read',
        },
      ],
    },
  ],
}
