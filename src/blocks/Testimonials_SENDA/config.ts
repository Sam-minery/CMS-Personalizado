import type { Block } from 'payload'

import {
  AlignFeature,
  BlockquoteFeature,
  ChecklistFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  IndentFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  ParagraphFeature,
  SubscriptFeature,
  TextStateFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

const testimonialsSendaRichTextState = {
  weight: {
    light: { label: 'Light', css: { 'font-weight': '300' } },
    regular: { label: 'Regular', css: { 'font-weight': '400' } },
    medium: { label: 'Medium', css: { 'font-weight': '500' } },
    semibold: { label: 'Semibold', css: { 'font-weight': '600' } },
    heavy: { label: 'Heavy', css: { 'font-weight': '800' } },
  },
  size: {
    caption: { label: 'Texto pequeño', css: {} },
  },
} as const

const testimonialsRichTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
      AlignFeature(),
      IndentFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      ChecklistFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      SubscriptFeature(),
      TextStateFeature({ state: testimonialsSendaRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

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
      editor: testimonialsRichTextEditor(),
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
      name: 'applyCustomWidth',
      type: 'checkbox',
      label: 'Aplicar ancho personalizado',
      defaultValue: false,
      admin: {
        description:
          'Si está activo, el contenido (título y carrusel) usa el ancho en % del viewport; el color de fondo del bloque sigue a ancho completo. Si no lo marcas, el diseño no cambia.',
      },
    },
    {
      name: 'customWidthPercent',
      type: 'number',
      label: 'Ancho respecto a la pantalla (%)',
      min: 0,
      max: 100,
      defaultValue: 100,
      admin: {
        condition: (_, siblingData) => siblingData?.applyCustomWidth === true,
        description:
          '0–100. Ej.: 50 = el contenido ocupa el 50% del ancho de la ventana, centrado; sin paddings laterales extra sobre ese ancho.',
      },
    },
    {
      name: 'customWidthPercentMobile',
      type: 'number',
      label: 'Ancho personalizado (dispositivos móvil)',
      min: 0,
      max: 100,
      admin: {
        condition: (_, siblingData) => siblingData?.applyCustomWidth === true,
        description:
          'Opcional. Si lo dejas vacío, en móvil se usa el mismo “Ancho respecto a la pantalla (%)” que arriba. Si indicas un valor (0–100), solo en pantallas menores a 768px de ancho el bloque usará ese ancho; desde tablet y desktop sigue el campo principal.',
      },
    },
    {
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
      admin: {
        description:
          'Tipografía y tamaños del Font Group se aplican al título del bloque y al contenido de cada tarjeta (cita y nombre/profesión).',
      },
    },
    {
      name: 'fontGroup',
      type: 'relationship',
      relationTo: 'font-groups',
      label: 'Grupo de fuentes',
      admin: {
        condition: (_, siblingData) => siblingData?.useFontGroup === true,
        description: 'Grupo creado en Font Groups.',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean; useCustomFont?: boolean }) =>
          !siblingData?.useFontGroup && !siblingData?.useCustomFont,
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
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean }) =>
          siblingData?.useFontGroup !== true,
      },
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente',
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean; useCustomFont?: boolean }) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean; useCustomFont?: boolean }) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
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
          editor: testimonialsRichTextEditor(),
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
          editor: testimonialsRichTextEditor(),
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
