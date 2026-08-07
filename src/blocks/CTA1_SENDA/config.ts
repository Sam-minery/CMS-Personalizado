import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const CTA1SendaBlock: Block = {
  slug: 'cta1Senda',
  interfaceName: 'CTA1SendaBlock',
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description: 'ID para enlaces ancla (ej: mi-cta). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'icon',
      type: 'group',
      label: 'Icono SVG',
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: true,
          admin: {
            description: 'Si está desactivado, puedes pegar código SVG en el campo "Código SVG".',
          },
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Icono (media)',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Icono que se muestra encima del contenido (recomendado: SVG con trazo blanco para fondos oscuros).',
          },
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Código SVG del icono',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia !== true,
            description: 'Pega aquí el código SVG del icono como alternativa a subir una imagen.',
          },
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Contenido',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      admin: {
        description: 'Add CTA content with headings and text as needed',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto',
      admin: {
        description: 'Color del texto principal. Cualquier formato CSS válido: hex (#fff), rgb/rgba, o nombre (white).',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
      admin: {
        description: 'Color para <strong> y <b>. Hex, rgb, rgba o nombre de color.',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'blockHeightMode',
      type: 'select',
      label: 'Altura del bloque',
      defaultValue: 'viewport',
      options: [
        { label: 'Automática (depende del contenido)', value: 'auto' },
        { label: 'Alta (relativa al viewport)', value: 'viewport' },
        { label: 'Personalizada (px)', value: 'custom' },
      ],
      admin: {
        description: 'Controla la altura mínima del bloque.',
      },
    },
    {
      name: 'customBlockHeightPx',
      type: 'number',
      label: 'Altura personalizada (min-height en px)',
      admin: {
        description: 'Define la altura mínima en píxeles cuando la altura es "Personalizada (px)".',
        condition: (_, siblingData) => siblingData?.blockHeightMode === 'custom',
      },
    },
    {
      name: 'backgroundType',
      type: 'select',
      label: 'Tipo de fondo',
      defaultValue: 'video',
      options: [
        { label: 'Video de YouTube', value: 'video' },
        { label: 'Imagen de fondo', value: 'image' },
        { label: 'Color plano', value: 'color' },
      ],
      admin: {
        description: 'Elige si el fondo será un video, una imagen o un color sólido',
      },
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones',
      minRows: 1,
      maxRows: 3,
      defaultValue: [
        {
          title: 'Call to Action',
          variant: 'primary',
          link: { type: 'custom', url: '#' },
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del botón',
          defaultValue: 'Call to Action',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variante del botón',
          defaultValue: 'primary',
          options: [
            { label: 'Fondo Negro (Texto Blanco)', value: 'primary' },
            { label: 'Fondo Transparente (Borde Blanco)', value: 'secondary' },
          ],
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo del botón (opcional)',
          admin: {
            description: 'Hex, rgb, rgba o nombre. Si se rellena, sobrescribe la variante.',
            placeholder: '#ffffff',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Color del texto del botón (opcional)',
          admin: {
            description: 'Hex, rgb, rgba o nombre. Si se rellena, sobrescribe la variante.',
            placeholder: '#000000',
          },
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
          admin: {
            description: 'Código SVG del icono que se muestra junto al texto del botón (ej. flecha).',
          },
        },
        link({
          overrides: {
            name: 'link',
            label: 'Enlace del botón',
          },
        }),
      ],
    },
    {
      name: 'buttonsAlignment',
      type: 'select',
      label: 'Alineación de los botones',
      defaultValue: 'left',
      options: [
        { label: 'Izquierda', value: 'left' },
        { label: 'Centrado', value: 'center' },
        { label: 'Derecha', value: 'right' },
      ],
      admin: {
        description: 'Define la posición horizontal de los botones dentro del CTA',
      },
    },
    {
      name: 'video',
      type: 'group',
      label: 'Video',
      fields: [
        {
          name: 'youtubeUrl',
          type: 'text',
          required: false,
          label: 'URL de YouTube',
          admin: {
            description: 'Pega la URL del video de YouTube (ej: https://www.youtube.com/watch?v=VIDEO_ID)',
          },
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de fondo',
      admin: {
        description: 'Imagen que se usará como fondo del CTA cuando el tipo de fondo sea "Imagen"',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
      admin: {
        description: 'Color plano. Hex, rgb, rgba o nombre (ej: #000000, rgba(0,0,0,0.5))',
        placeholder: '#000000',
      },
    },
    {
      name: 'backgroundColorMode',
      type: 'select',
      label: 'Modo de color de fondo',
      defaultValue: 'solid',
      options: [
        { label: 'Color sólido', value: 'solid' },
        { label: 'Degradado', value: 'gradient' },
      ],
      admin: {
        description: 'Elige si el color será sólido o un degradado',
        condition: (_, siblingData) => siblingData?.backgroundType === 'color',
      },
    },
    {
      name: 'gradientStartColor',
      type: 'text',
      label: 'Color inicial del degradado',
      admin: {
        description: 'Hex, rgb, rgba o nombre.',
        placeholder: '#ff0000',
        condition: (_, siblingData) =>
          siblingData?.backgroundType === 'color' &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'gradientEndColor',
      type: 'text',
      label: 'Color final del degradado',
      admin: {
        description: 'Hex, rgb, rgba o nombre.',
        placeholder: '#0000ff',
        condition: (_, siblingData) =>
          siblingData?.backgroundType === 'color' &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'gradientDirection',
      type: 'select',
      label: 'Dirección del degradado',
      defaultValue: 'to-right',
      options: [
        { label: 'De izquierda a derecha', value: 'to-right' },
        { label: 'De derecha a izquierda', value: 'to-left' },
        { label: 'De arriba hacia abajo', value: 'to-bottom' },
        { label: 'De abajo hacia arriba', value: 'to-top' },
        { label: 'Diagonal (↘︎)', value: 'diagonal-down' },
        { label: 'Diagonal (↗︎)', value: 'diagonal-up' },
      ],
      admin: {
        condition: (_, siblingData) =>
          siblingData?.backgroundType === 'color' &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_, siblingData) => !siblingData?.useCustomFont,
      },
      options: [
        { label: 'Por defecto', value: 'default' },
        { label: 'Arial', value: 'Arial, sans-serif' },
        { label: 'Times New Roman', value: '"Times New Roman", serif' },
        { label: 'Georgia', value: 'Georgia, serif' },
        { label: 'Verdana', value: 'Verdana, sans-serif' },
        { label: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
        { label: 'Courier New', value: '"Courier New", monospace' },
        { label: 'Roboto', value: '"Roboto", sans-serif' },
        { label: 'Open Sans', value: '"Open Sans", sans-serif' },
        { label: 'Lato', value: '"Lato", sans-serif' },
        { label: 'Montserrat', value: '"Montserrat", sans-serif' },
        { label: 'Playfair Display', value: '"Playfair Display", serif' },
        { label: 'Inter', value: '"Inter", sans-serif' },
        { label: 'Poppins', value: '"Poppins", sans-serif' },
        { label: 'Raleway', value: '"Raleway", sans-serif' },
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
      label: 'Archivo de fuente',
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
  labels: {
    singular: 'CTA1 SENDA',
    plural: 'CTA1 SENDA',
  },
}
