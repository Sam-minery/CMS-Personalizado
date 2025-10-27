import type { Block } from 'payload'
import { simpleLink } from '@/fields/simpleLink'

export const BlogPostHeader1: Block = {
  slug: 'blogPostHeader1',
  interfaceName: 'BlogPostHeader1BlockType',
  dbName: 'blog_post_header1',
  labels: {
    singular: 'Blog Post Header 1',
    plural: 'Blog Post Header 1 Blocks',
  },
  fields: [
    {
      name: 'breadcrumbs',
      type: 'array',
      label: 'Breadcrumbs',
      dbName: 'blog_post_header1_breadcrumbs',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Blog',
        },
        simpleLink(),
      ],
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
      label: 'Main Image',
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
    {
      name: 'socialMediaLinks',
      type: 'array',
      label: 'Social Media Links',
      dbName: 'blog_post_header1_social_links',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Icon Type',
          dbName: 'icon_type',
          options: [
            { label: 'Link', value: 'link' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
          ],
          required: true,
          defaultValue: 'link',
        },
      ],
    },
  ],
}
