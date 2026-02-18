import type { Block, GroupField } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ParagraphFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '../../fields/link'

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
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            ParagraphFeature(),
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Contenido principal (título y descripción)',
      required: true,
      admin: {
        description: 'Añade el contenido principal con título y descripción según necesites.',
      },
    },
    {
      name: 'defaultValue',
      type: 'text',
      label: 'Default Tab Value',
      defaultValue: 'view-all',
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Tab Value',
          required: true,
        },
        {
          name: 'trigger',
          type: 'text',
          label: 'Tab Trigger Text',
          required: true,
        },
        {
          name: 'content',
          type: 'array',
          label: 'Tab Content (Blog Posts)',
          minRows: 1,
          maxRows: 20,
          fields: [
            ...(link({ appearances: false, disableLabel: true }) as GroupField).fields,
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
            },
            {
              name: 'postContent',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    ParagraphFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
                    AlignFeature(),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ]
                },
              }),
              label: 'Post Content',
              required: true,
              admin: {
                description: 'Contenido del post (título y descripción en un solo richtext).',
              },
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
            },
            {
              name: 'date',
              type: 'text',
              label: 'Publication Date',
            },
            {
              name: 'readTime',
              type: 'text',
              label: 'Read Time',
            },
          ],
        },
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
        description: 'Introduce un código de color HTML para el texto principal (ej: #000000, #333333, rgb(0,0,0), etc.)',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
      admin: {
        description: 'Introduce un código de color HTML para el texto en negrita (ej: #FF0000, #0000FF, rgb(255,0,0), etc.)',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía del texto',
      admin: {
        description: 'Selecciona una tipografía. Las opciones incluyen fuentes del sistema (sin licencia) y Google Fonts (gratuitas y open source).',
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
        { label: 'Roboto (Google Fonts - Gratuita)', value: '"Roboto", sans-serif' },
        { label: 'Open Sans (Google Fonts - Gratuita)', value: '"Open Sans", sans-serif' },
        { label: 'Lato (Google Fonts - Gratuita)', value: '"Lato", sans-serif' },
        { label: 'Montserrat (Google Fonts - Gratuita)', value: '"Montserrat", sans-serif' },
        { label: 'Playfair Display (Google Fonts - Gratuita)', value: '"Playfair Display", serif' },
        { label: 'Inter (Google Fonts - Gratuita)', value: '"Inter", sans-serif' },
        { label: 'Poppins (Google Fonts - Gratuita)', value: '"Poppins", sans-serif' },
        { label: 'Raleway (Google Fonts - Gratuita)', value: '"Raleway", sans-serif' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'useCustomFont',
      type: 'checkbox',
      label: 'Usar fuente personalizada',
      admin: {
        description: 'Marca esta opción si quieres subir tu propia fuente (.woff, .woff2, .ttf, .otf). Cuando esté marcado, el campo de tipografía anterior será ignorado.',
      },
      defaultValue: false,
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente personalizada',
      required: false,
      admin: {
        description: 'Selecciona una fuente de la colección Fonts o sube un archivo de fuente (.woff, .woff2, .ttf, .otf). Compatible con Google Cloud Storage. Asegúrate de tener la licencia adecuada si es una fuente comercial.',
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        description: 'Ingresa el nombre de la fuente tal como debe aparecer en CSS (ej: "Mi Fuente", "Custom Font", etc.)',
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
  ],
}
