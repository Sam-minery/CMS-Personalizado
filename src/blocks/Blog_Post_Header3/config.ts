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

export const BlogPostHeader3Block: Block = {
  slug: 'blogPostHeader3',
  interfaceName: 'BlogPostHeader3Block',
  fields: [
    {
      name: 'breadcrumbs',
      type: 'array',
      dbName: 'blog_post_header3_breadcrumbs',
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
      label: 'Main Image',
      required: false,
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'fullName',
          type: 'text',
          required: false,
          defaultValue: 'Full name',
        },
        {
          name: 'date',
          type: 'text',
          required: false,
          defaultValue: '11 Jan 2022',
        },
        {
          name: 'readTime',
          type: 'text',
          required: false,
          defaultValue: '5 min read',
        },
      ],
    },
    {
      name: 'shareLabel',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h3', 'h4', 'h5', 'h6'] }),
          AlignFeature(),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
      label: 'Texto "Share this post"',
      required: false,
      admin: {
        description: 'Texto que aparece encima de los iconos de redes sociales (ej: "Share this post"). Editable desde el panel de administración.',
      },
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      dbName: 'blog_post_header3_social_links',
      minRows: 0,
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
        simpleLink(),
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
      admin: {
        description: 'Introduce un código de color HTML (ej: #FFFFFF, #000000, rgb(255,255,255), etc.)',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto principal',
      admin: {
        description: 'Introduce un código de color HTML para el texto principal.',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
      admin: {
        description: 'Introduce un código de color HTML para el texto en negrita.',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía del texto',
      admin: {
        condition: (_, siblingData) => !siblingData?.useCustomFont,
      },
      options: [
        { label: 'Por defecto (Geist Sans)', value: 'default' },
        { label: 'Arial (Sistema)', value: 'Arial, sans-serif' },
        { label: 'Times New Roman (Sistema)', value: '"Times New Roman", serif' },
        { label: 'Georgia (Sistema)', value: 'Georgia, serif' },
        { label: 'Verdana (Sistema)', value: 'Verdana, sans-serif' },
        { label: 'Helvetica (Sistema)', value: 'Helvetica, Arial, sans-serif' },
        { label: 'Courier New (Sistema)', value: '"Courier New", monospace' },
        { label: 'Roboto (Google Fonts)', value: '"Roboto", sans-serif' },
        { label: 'Open Sans (Google Fonts)', value: '"Open Sans", sans-serif' },
        { label: 'Lato (Google Fonts)', value: '"Lato", sans-serif' },
        { label: 'Montserrat (Google Fonts)', value: '"Montserrat", sans-serif' },
        { label: 'Playfair Display (Google Fonts)', value: '"Playfair Display", serif' },
        { label: 'Inter (Google Fonts)', value: '"Inter", sans-serif' },
        { label: 'Poppins (Google Fonts)', value: '"Poppins", sans-serif' },
        { label: 'Raleway (Google Fonts)', value: '"Raleway", sans-serif' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'useCustomFont',
      type: 'checkbox',
      label: 'Usar fuente personalizada',
      defaultValue: false,
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente personalizada',
      required: false,
      admin: {
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
  ],
}
