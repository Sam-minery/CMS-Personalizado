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

/** Pesos y tamaño "texto pequeño" alineados con Hero / Pricing SENDA (font groups). */
const cardsSendaRichTextState = {
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

const cardsRichTextEditor = () =>
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
      TextStateFeature({ state: cardsSendaRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const SendaCardsBlockConfig: Block = {
  slug: 'cardsSenda',
  interfaceName: 'CardsSendaBlock',
  labels: {
    singular: 'Cards SENDA',
    plural: 'Cards SENDA',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description: 'ID para enlaces ancla (ej: cards-servicios). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'headerContent',
      type: 'richText',
      label: 'Título y descripción',
      required: true,
      admin: {
        description: 'Contenido del encabezado del bloque (título, descripción, etc.). Un solo campo para todo el texto.',
      },
      editor: cardsRichTextEditor(),
    },
    {
      name: 'headerContentColor',
      type: 'text',
      label: 'Color del texto del encabezado',
      admin: {
        description: 'Cualquier color CSS válido: hexadecimal (#000), rgb(), rgba(), hsl() o nombres (black, white, etc.)',
        placeholder: '#000000, rgb(0,0,0), rgba(0,0,0,0.5), black',
      },
    },
    {
      name: 'headerContentMaxWidth',
      type: 'text',
      label: 'Ancho máximo del encabezado',
      admin: {
        description: 'max-width del contenedor del título y descripción. Si es solo un número (ej: 420) se interpreta como px; si incluye unidades (px, rem, 80%, etc.) se usa tal cual.',
        placeholder: '420, 28rem, 65%',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
      defaultValue: 'transparent',
      admin: {
        description:
          'Color de fondo del bloque. Acepta cualquier formato CSS válido: hexadecimal (#ffffff), RGB (rgb(0, 0, 0)), RGBA (rgba(0, 0, 0, 0.5)), HSL (hsl(0, 0%, 0%)), o nombres de color (black, white, etc.)',
        placeholder: '#ffffff, rgb(0, 0, 0), rgba(0, 0, 0, 0.5), hsl(0, 0%, 0%), black, etc.',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
    },
    {
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
      admin: {
        description: 'Activa para elegir un grupo (Font Groups) en lugar de una sola fuente. Los tamaños e interlineados del grupo se aplican a todos los RichText del bloque.',
      },
    },
    {
      name: 'fontGroup',
      type: 'relationship',
      relationTo: 'font-groups',
      label: 'Grupo de fuentes',
      admin: {
        condition: (_, siblingData) => siblingData?.useFontGroup === true,
        description: 'Selecciona un grupo creado en Font Groups. Tipografía, márgenes e interlineados del CMS se aplican al encabezado y al contenido de cada card.',
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
        condition: (_: unknown, siblingData: { useFontGroup?: boolean }) => siblingData?.useFontGroup !== true,
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
        description: 'Selecciona el espacio entre las cards',
      },
      options: [
        {
          label: 'Muy pequeño (1rem / 16px)',
          value: 'xs',
        },
        {
          label: 'Pequeño (1.5rem / 24px)',
          value: 'sm',
        },
        {
          label: 'Mediano (2rem / 32px)',
          value: 'medium',
        },
        {
          label: 'Grande (3rem / 48px)',
          value: 'lg',
        },
        {
          label: 'Muy grande (4rem / 64px)',
          value: 'xl',
        },
        {
          label: 'Personalizado',
          value: 'custom',
        },
      ],
    },
    {
      name: 'customGap',
      type: 'text',
      label: 'Espaciado personalizado',
      admin: {
        description:
          'Espaciado personalizado en formato CSS (ej: 2.5rem, 40px, 1.5rem 2rem). Solo se usa si "Espaciado entre cards" está en "Personalizado"',
        placeholder: '2.5rem, 40px, etc.',
        condition: (_: unknown, siblingData: { cardsGap?: string }) => siblingData?.cardsGap === 'custom',
      },
    },
    {
      name: 'cardSize',
      type: 'select',
      label: 'Tamaño de las cards',
      defaultValue: 'md',
      admin: {
        description: 'Selecciona el tamaño de las cards (siempre delgadas y alargadas)',
      },
      options: [
        {
          label: 'Pequeñas',
          value: 'sm',
        },
        {
          label: 'Medianas',
          value: 'md',
        },
        {
          label: 'Grandes',
          value: 'lg',
        },
        {
          label: 'Personalizado (rem o px)',
          value: 'custom',
        },
      ],
    },
    {
      name: 'customCardWidth',
      type: 'text',
      label: 'Ancho personalizado (rem o px)',
      admin: {
        description: 'Ancho de la card. Con unidad: 18rem, 360px. Sin unidad: número < 100 → rem (ej: 25); ≥ 100 → px (ej: 400). Solo se usa si el tamaño es "Personalizado"',
        placeholder: '18rem o 360px',
        condition: (_: unknown, siblingData: { cardSize?: string }) => siblingData?.cardSize === 'custom',
      },
    },
    {
      name: 'customCardHeight',
      type: 'text',
      label: 'Altura personalizada (rem o px)',
      admin: {
        description: 'Altura de la card. Con unidad: 32rem, 516px. Sin unidad: número < 100 → rem; ≥ 100 → px. Solo se usa si el tamaño es "Personalizado"',
        placeholder: '32rem o 516px',
        condition: (_: unknown, siblingData: { cardSize?: string }) => siblingData?.cardSize === 'custom',
      },
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      minRows: 1,
      maxRows: 4,
      admin: {
        description: 'Máximo 4 cards permitidas',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          type: 'richText',
          label: 'Título de la card',
          required: true,
          editor: cardsRichTextEditor(),
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Color del título de la card',
          admin: {
            description: 'Cualquier color CSS válido: hexadecimal, rgb(), rgba(), hsl() o nombres (black, white, etc.)',
            placeholder: '#000000, rgb(0,0,0), rgba(0,0,0,0.5), black',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen de fondo',
          admin: {
            description: 'Imagen de fondo de la card (opcional)',
          },
        },
        {
          name: 'expandedContent',
          type: 'richText',
          label: 'Contenido expandible',
          required: false,
          admin: {
            description:
              'Contenido que se mostrará al hacer clic en el botón "+".',
          },
          editor: cardsRichTextEditor(),
        },
        {
          name: 'expandedContentColor',
          type: 'text',
          label: 'Color del contenido expandible',
          admin: {
            description: 'Cualquier color CSS válido: hexadecimal, rgb(), rgba(), hsl() o nombres (black, white, etc.)',
            placeholder: '#000000, rgb(0,0,0), rgba(0,0,0,0.5), black',
          },
        },
        {
          name: 'backContent',
          type: 'richText',
          label: 'Contenido del reverso',
          admin: {
            description:
              'Texto que se mostrará en la cara trasera de la tarjeta cuando se dé la vuelta.',
          },
          editor: cardsRichTextEditor(),
        },
        {
          name: 'backBackgroundColor',
          type: 'text',
          label: 'Color de fondo del reverso',
          admin: {
            description: 'Cualquier color CSS válido: hexadecimal, rgb(), rgba(), hsl() o nombres (black, white, etc.)',
            placeholder: '#ffffff, rgb(255,255,255), rgba(0,0,0,0.1), white',
          },
        },
        {
          name: 'backContentColor',
          type: 'text',
          label: 'Color del texto del reverso',
          admin: {
            description: 'Cualquier color CSS válido: hexadecimal, rgb(), rgba(), hsl() o nombres (black, white, etc.)',
            placeholder: '#1f2937, rgb(31,41,55), black',
          },
        },
        {
          name: 'avatarImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen de avatar',
          admin: {
            description: 'Imagen de avatar del usuario (opcional, se muestra cuando la tarjeta está expandida)',
          },
        },
        {
          name: 'userName',
          type: 'text',
          label: 'Nombre de usuario',
          admin: {
            description: 'Nombre del usuario (opcional, se muestra cuando la tarjeta está expandida)',
          },
        },
        {
          name: 'userNameColor',
          type: 'text',
          label: 'Color del nombre de usuario',
          admin: {
            description: 'Cualquier color CSS válido: hexadecimal, rgb(), rgba(), hsl() o nombres (black, white, etc.)',
            placeholder: '#1f2937, rgb(31,41,55), black',
          },
        },
      ],
    },
  ],
}
