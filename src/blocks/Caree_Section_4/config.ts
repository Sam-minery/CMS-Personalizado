import type { Block, GroupField } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ParagraphFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const richTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
      AlignFeature(),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const Career4Block: Block = {
  slug: 'career4',
  labels: {
    singular: 'Career Section 4',
    plural: 'Career Sections 4',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: richTextEditor(),
      label: 'Contenido principal (título y descripción)',
      required: true,
      admin: {
        description: 'Añade el título y descripción del bloque con el editor rich text.',
      },
    },
    {
      name: 'depts4',
      type: 'array',
      label: 'Job Departments',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'richText',
          editor: richTextEditor(),
          label: 'Department Title',
          required: false,
          admin: {
            description: 'Título del departamento con formato rich text.',
          },
        },
        {
          name: 'jobs',
          type: 'array',
          label: 'Jobs',
          minRows: 1,
          fields: [
            {
              name: 'jobContent',
              type: 'richText',
              editor: richTextEditor(),
              label: 'Contenido del puesto (título, ubicación y descripción)',
              required: false,
              admin: {
                description: 'Título del trabajo, ubicación y descripción en un solo rich text.',
              },
            },
            ...(link({ appearances: false, disableLabel: true }) as GroupField).fields,
            {
              name: 'button',
              type: 'group',
              label: 'Configuración del Botón',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: false,
                  label: 'Texto del Botón',
                  defaultValue: 'Apply Now',
                },
                {
                  name: 'variant',
                  type: 'select',
                  label: 'Variante del Botón',
                  dbName: 'var',
                  options: [
                    { label: 'Primario', value: 'default' },
                    { label: 'Secundario', value: 'secondary' },
                    { label: 'Outline', value: 'outline' },
                    { label: 'Ghost', value: 'ghost' },
                  ],
                  defaultValue: 'secondary',
                },
                {
                  name: 'size',
                  type: 'select',
                  label: 'Tamaño del Botón',
                  dbName: 'sz',
                  options: [
                    { label: 'Pequeño', value: 'sm' },
                    { label: 'Mediano', value: 'default' },
                    { label: 'Grande', value: 'lg' },
                  ],
                  defaultValue: 'sm',
                },
              ],
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
      name: 'buttonBackgroundColor',
      type: 'text',
      label: 'Color de fondo del botón',
      admin: {
        description: 'Color de fondo de los botones (ej: #007BFF, #28A745, etc.)',
      },
    },
    {
      name: 'buttonTextColor',
      type: 'text',
      label: 'Color del texto del botón',
      admin: {
        description: 'Color del texto de los botones (ej: #FFFFFF, #000000, etc.)',
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
