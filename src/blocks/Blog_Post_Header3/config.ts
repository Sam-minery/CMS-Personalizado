import type { Block } from 'payload'
import { simpleLink } from '@/fields/simpleLink'

export const BlogPostHeader3Block: Block = {
  slug: 'blogPostHeader3',
  interfaceName: 'BlogPostHeader3Block',
  fields: [
    {
      name: 'breadcrumbs',
      type: 'array',
      dbName: 'breadcrumbs',
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
      required: true,
      defaultValue: 'Blog title heading will go here',
    },
    {
      name: 'image',
      type: 'group',
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar Media',
          defaultValue: false,
        },
        {
          name: 'mediaImage',
          type: 'relationship',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.useMedia === true,
          },
        },
        {
          name: 'src',
          type: 'text',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
          admin: {
            condition: (data, siblingData) => siblingData?.useMedia === false,
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Relume placeholder image',
        },
      ],
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'avatar',
          type: 'group',
          fields: [
            {
              name: 'useMedia',
              type: 'checkbox',
              label: 'Usar Media',
              defaultValue: false,
            },
            {
              name: 'mediaImage',
              type: 'relationship',
              relationTo: 'media',
              admin: {
                condition: (data, siblingData) => siblingData?.useMedia === true,
              },
            },
            {
              name: 'src',
              type: 'text',
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
              admin: {
                condition: (data, siblingData) => siblingData?.useMedia === false,
              },
            },
            {
              name: 'alt',
              type: 'text',
              defaultValue: 'Relume placeholder avatar',
            },
          ],
        },
        {
          name: 'fullName',
          type: 'text',
          required: true,
          defaultValue: 'Full name',
        },
        {
          name: 'date',
          type: 'text',
          required: true,
          defaultValue: '11 Jan 2022',
        },
        {
          name: 'readTime',
          type: 'text',
          required: true,
          defaultValue: '5 min read',
        },
      ],
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      dbName: 'social_links',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: [
            { label: 'Link', value: 'link' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
          ],
          required: true,
          defaultValue: 'link',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          defaultValue: '#',
        },
      ],
    },
  ],
}
