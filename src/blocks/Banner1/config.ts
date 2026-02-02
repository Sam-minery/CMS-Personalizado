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

export const Banner1Block: Block = {
  slug: 'banner1',
  interfaceName: 'Banner1Block',
  labels: {
    singular: 'Banner 1 block',
    plural: 'Banner 1 blocks',
  },
  fields: [
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
        description: 'Add main content with heading and description as needed',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo',
      admin: {
        description: 'Selecciona una imagen para el logo desde la biblioteca de medios',
      },
    },
    {
      name: 'logoUrl',
      type: 'text',
      label: 'URL del logo (opcional)',
      admin: {
        description: 'URL personalizada para el logo (si no se selecciona una imagen)',
        condition: (data) => !data.logo,
      },
    },
    {
      name: 'inputPlaceholder',
      type: 'text',
      required: true,
      defaultValue: 'Enter your email',
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        ...(link({ appearances: false }) as GroupField).fields,
        {
          name: 'size',
          type: 'select',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
          defaultValue: 'sm',
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
          defaultValue: 'default',
        },
        {
          name: 'buttonSubmitsForm',
          type: 'checkbox',
          label: 'Usar botón para enviar el formulario',
          defaultValue: false,
          admin: {
            description: 'Si está marcado, el botón enviará el formulario de email. Si no está marcado, el botón actuará como enlace (interno o externo) con el texto y estilo configurados arriba.',
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
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
      name: 'buttonBackgroundColor',
      type: 'text',
      label: 'Color de fondo del botón',
      admin: {
        description: 'Introduce un código de color HTML para el fondo del botón (ej: #007BFF, #28A745, rgb(0,123,255), etc.)',
      },
    },
    {
      name: 'buttonTextColor',
      type: 'text',
      label: 'Color del texto del botón',
      admin: {
        description: 'Introduce un código de color HTML para el texto del botón (ej: #FFFFFF, #000000, rgb(255,255,255), etc.)',
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
        condition: (_, siblingData) => {
          return siblingData?.useCustomFont === true
        },
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        description: 'Ingresa el nombre de la fuente tal como debe aparecer en CSS (ej: "Mi Fuente", "Custom Font", etc.)',
        condition: (_, siblingData) => {
          return siblingData?.useCustomFont === true
        },
      },
    },
  ],
}
