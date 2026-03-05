import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  OrderedListFeature,
  UnorderedListFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TestimonialsSendaBlockConfig: Block = {
  slug: 'testimonialsSenda',
  interfaceName: 'TestimonialsSendaBlock',
  labels: {
    singular: 'Testimonials SENDA',
    plural: 'Testimonials SENDA',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla (ej: testimonios). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'title',
      type: 'richText',
      label: 'Título del bloque',
      required: true,
      admin: {
        description:
          'Título principal del bloque de testimonios (ej: "Profesionales que conocen de cerca el proceso")',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            AlignFeature(),
            OrderedListFeature(),
            UnorderedListFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'titleColor',
      type: 'text',
      label: 'Color del título',
      admin: {
        description:
          'Cualquier formato CSS válido: hex (#000), rgb/rgba, o nombre (black).',
        placeholder: '#000000',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
      defaultValue: 'transparent',
      admin: {
        description:
          'Color de fondo del bloque. Hex, rgb, rgba, hsl o nombre (ej: white, transparent).',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) =>
          !siblingData?.useCustomFont,
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
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) =>
          siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) =>
          siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'cardsGap',
      type: 'select',
      label: 'Espaciado entre cards',
      defaultValue: 'medium',
      admin: {
        description:
          'Selecciona el espacio entre las cards (solo en desktop; en móvil se usa 1.5rem)',
      },
      options: [
        { label: 'Muy pequeño (1rem / 16px)', value: 'xs' },
        { label: 'Pequeño (1.5rem / 24px)', value: 'sm' },
        { label: 'Mediano (2rem / 32px)', value: 'medium' },
        { label: 'Grande (3rem / 48px)', value: 'lg' },
        { label: 'Muy grande (4rem / 64px)', value: 'xl' },
        { label: 'Personalizado', value: 'custom' },
      ],
    },
    {
      name: 'customGap',
      type: 'text',
      label: 'Espaciado personalizado',
      admin: {
        description:
          'Espaciado en formato CSS (ej: 2.5rem, 40px). Solo si "Espaciado entre cards" es "Personalizado"',
        placeholder: '2.5rem, 40px',
        condition: (_, siblingData) => siblingData?.cardsGap === 'custom',
      },
    },
    {
      name: 'cardSize',
      type: 'select',
      label: 'Tamaño de las cards (desktop)',
      defaultValue: 'md',
      admin: {
        description: 'En móvil las cards son siempre 355px de ancho x 602px de alto.',
      },
      options: [
        { label: 'Pequeñas', value: 'sm' },
        { label: 'Medianas', value: 'md' },
        { label: 'Grandes', value: 'lg' },
        { label: 'Personalizado (rem)', value: 'custom' },
      ],
    },
    {
      name: 'customCardWidth',
      type: 'text',
      label: 'Ancho personalizado (rem)',
      admin: {
        description: 'Ancho de la card en rem. Solo si el tamaño es "Personalizado"',
        placeholder: '18rem',
        condition: (_, siblingData) => siblingData?.cardSize === 'custom',
      },
    },
    {
      name: 'customCardHeight',
      type: 'text',
      label: 'Altura personalizada (rem)',
      admin: {
        description: 'Altura de la card en rem. Solo si el tamaño es "Personalizado"',
        placeholder: '32rem',
        condition: (_, siblingData) => siblingData?.cardSize === 'custom',
      },
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonios',
      labels: {
        singular: 'Testimonio',
        plural: 'Testimonios',
      },
      minRows: 1,
      admin: {
        description: 'Añade testimonios con imagen, cita/descripción y nombre/profesión',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image',
          type: 'group',
          label: 'Imagen de perfil',
          fields: [
            {
              name: 'useMedia',
              type: 'checkbox',
              label: 'Usar imagen subida',
              defaultValue: true,
              admin: {
                description: 'Si está desactivado, puedes indicar una URL de imagen en el campo "URL de imagen".',
              },
            },
            {
              name: 'mediaImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen (media)',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === true,
                description: 'Foto de la persona (se muestra en la parte superior de la tarjeta).',
              },
            },
            {
              name: 'src',
              type: 'text',
              label: 'URL de imagen',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
                description: 'URL de la imagen cuando no usas la librería de media (ej: https://...).',
                placeholder: 'https://...',
              },
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Texto alternativo',
              admin: {
                description: 'Alt de la imagen para accesibilidad.',
                placeholder: 'Foto del testimonio',
              },
            },
          ],
        },
        {
          name: 'titleAndDescription',
          type: 'richText',
          label: 'Cita y descripción',
          required: true,
          admin: {
            description: 'Texto principal del testimonio: cita entre comillas y/o descripción',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => {
              return [
                ...defaultFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                AlignFeature(),
                OrderedListFeature(),
                UnorderedListFeature(),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'titleAndDescriptionColor',
          type: 'text',
          label: 'Color del texto (cita/descripción)',
          admin: {
            description: 'Hex, rgb, rgba o nombre de color.',
            placeholder: '#1f2937',
          },
        },
        {
          name: 'nameAndProfession',
          type: 'richText',
          label: 'Nombre y profesión',
          required: true,
          admin: {
            description: 'Nombre en negrita y profesión (ej: en mayúsculas)',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => {
              return [
                ...defaultFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                AlignFeature(),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'nameAndProfessionColor',
          type: 'text',
          label: 'Color del nombre y profesión',
          admin: {
            description: 'Hex, rgb, rgba o nombre de color.',
            placeholder: '#374151',
          },
        },
      ],
    },
  ],
}
