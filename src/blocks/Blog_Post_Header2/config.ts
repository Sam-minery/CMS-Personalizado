import type { Block } from 'payload'
import { simpleLink } from '@/fields/simpleLink'

export const BlogPostHeader2Block: Block = {
  slug: 'blogPostHeader2',
  interfaceName: 'BlogPostHeader2Block',
  fields: [
    {
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'All Posts',
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Destructive', value: 'destructive' },
            { label: 'Outline', value: 'outline' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'link',
        },
        {
          name: 'size',
          type: 'select',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'link',
        },
        simpleLink(),
      ],
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      defaultValue: 'Category',
    },
    {
      name: 'readTime',
      type: 'text',
      required: true,
      defaultValue: '5 min read',
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
      name: 'authorName',
      type: 'text',
      required: true,
      defaultValue: 'Full Name',
    },
    {
      name: 'publishedDate',
      type: 'text',
      required: true,
      defaultValue: '22 January 2021',
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      dbName: 'blog_post_header2_social_links',
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
