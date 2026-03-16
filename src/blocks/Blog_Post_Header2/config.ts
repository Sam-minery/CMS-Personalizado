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
          required: false,
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
      required: false,
      defaultValue: 'Category',
    },
    {
      name: 'readTime',
      type: 'text',
      required: false,
      defaultValue: '5 min read',
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
      name: 'authorName',
      type: 'text',
      required: false,
      defaultValue: 'Full Name',
    },
    {
      name: 'publishedDate',
      type: 'text',
      required: false,
      defaultValue: '22 January 2021',
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      dbName: 'blog_post_header2_social_links',
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
