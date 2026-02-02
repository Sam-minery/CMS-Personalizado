import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ParagraphFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { simpleLink } from '@/fields/simpleLink'

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
      required: false,
      defaultValue: 'Category',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
          AlignFeature(),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      label: 'Contenido principal (título / heading)',
      required: true,
      admin: {
        description: 'Añade el título o contenido principal del encabezado con el editor rich text.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      required: false,
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
          required: false,
        },
        {
          name: 'fullName',
          type: 'text',
          label: 'Full Name',
          required: false,
          defaultValue: 'Full name',
        },
        {
          name: 'date',
          type: 'text',
          label: 'Publication Date',
          required: false,
          defaultValue: '11 Jan 2022',
        },
        {
          name: 'readTime',
          type: 'text',
          label: 'Read Time',
          required: false,
          defaultValue: '5 min read',
        },
      ],
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      label: 'Social Media Links',
      minRows: 0,
      maxRows: 10,
      fields: [
        {
          name: 'iconType',
          type: 'select',
          label: 'Icon Type',
          options: [
            { label: 'Link', value: 'link' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'Facebook', value: 'facebook' },
          ],
          required: true,
          defaultValue: 'link',
        },
        simpleLink(),
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
      admin: {
        description: 'Introduce un código de color HTML (ej: #FFFFFF, rgba(0,0,0,0.5), etc.)',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto principal',
      admin: {
        description: 'Introduce un código de color HTML para el texto principal (ej: #FFFFFF, #333333, etc.)',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
      admin: {
        description: 'Introduce un código de color HTML para el texto en negrita (ej: #FF0000, #0000FF, etc.)',
      },
    },
  ],
}
