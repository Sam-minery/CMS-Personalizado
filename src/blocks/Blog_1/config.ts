import type { Block } from 'payload'

export const Blog1: Block = {
  slug: 'blog1',
  interfaceName: 'Blog1BlockType',
  labels: {
    singular: 'Blog 1',
    plural: 'Blog 1 Blocks',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      defaultValue: 'Blog',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Short heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Buttons',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Button Title',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Button Variant',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'secondary',
        },
      ],
    },
    {
      name: 'categoryLink',
      type: 'text',
      label: 'Category Link',
      defaultValue: '#',
    },
    {
      name: 'blogPosts',
      type: 'array',
      label: 'Blog Posts',
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'Post URL',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Post Image',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Post Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Post Description',
          required: true,
        },
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
          label: 'Author Full Name',
          required: true,
        },
        {
          name: 'date',
          type: 'text',
          label: 'Publication Date',
          required: true,
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time',
          required: true,
        },
      ],
    },
  ],
}
