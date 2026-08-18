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

import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'

const faqDropRichTextState = {
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

const richTextEditor = () =>
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
      SmallBodyFeature(),
      HorizontalRuleFeature(),
      SubscriptFeature(),
      TextStateFeature({ state: faqDropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

const iconGroupFields = (opts?: { defaultUseMedia?: boolean; description?: string }) => [
  {
    name: 'useMedia',
    type: 'checkbox' as const,
    label: 'Usar imagen / GIF subido',
    defaultValue: opts?.defaultUseMedia ?? false,
    admin: {
      description:
        opts?.description ??
        'Si está desactivado, puedes pegar código SVG en el campo "Código SVG".',
    },
  },
  {
    name: 'mediaImage',
    type: 'upload' as const,
    relationTo: 'media' as const,
    label: 'Icono / GIF (media)',
    admin: {
      condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia === true,
      description: 'Imagen o GIF del icono.',
    },
  },
  {
    name: 'iconSVG',
    type: 'textarea' as const,
    label: 'Código SVG del icono',
    admin: {
      condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia !== true,
      description: 'Pega aquí el código SVG como alternativa a subir media.',
    },
  },
  {
    name: 'alt',
    type: 'text' as const,
    label: 'Texto alternativo',
    defaultValue: 'Icono',
  },
]

export const FAQDropBlock: Block = {
  slug: 'faqDrop',
  // Nombre corto en DB: evita enums/tablas > 63 chars (límite Postgres)
  dbName: 'fqd',
  interfaceName: 'FAQDropBlock',
  labels: {
    singular: 'FAQ DROP',
    plural: 'FAQ DROP Blocks',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla. Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'mainContent',
      type: 'richText',
      label: 'RichText principal',
      required: true,
      editor: richTextEditor(),
      admin: {
        description:
          'Título del bloque. Usa negrita para resaltar palabras (ej. "frecuentes").',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
      defaultValue: '#ffffff',
      admin: {
        description: 'Hex, rgb, rgba o nombre CSS.',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color de texto principal',
      defaultValue: '#101835',
      admin: {
        description:
          'Aplica al RichText principal (texto normal), a las preguntas cerradas y a las respuestas.',
        placeholder: '#101835',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color de texto negrita',
      defaultValue: '#a1004a',
      admin: {
        description: 'Color para strong/b en el RichText principal y para el separador SVG.',
        placeholder: '#a1004a',
      },
    },
    {
      name: 'questionsSectionBackgroundColor',
      type: 'text',
      label: 'Color de fondo de la sección de preguntas',
      defaultValue: '#ffffff',
      admin: {
        description:
          'Fondo del contenedor del cuestionario (card en desktop) y de cada fila de pregunta.',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'questions',
      type: 'array',
      dbName: 'fqd_q',
      label: 'Preguntas frecuentes',
      minRows: 1,
      maxRows: 10,
      labels: { singular: 'Pregunta', plural: 'Preguntas' },
      admin: {
        description: 'Máximo 10. Cada elemento es un acordeón con pregunta y respuesta.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'icon',
          type: 'group',
          label: 'Icono',
          fields: iconGroupFields({ defaultUseMedia: false }),
        },
        {
          name: 'iconBackgroundColor',
          type: 'text',
          label: 'Color de fondo del contenedor del icono',
          defaultValue: '#fce4ec',
          admin: {
            description: 'Círculo detrás del icono.',
            placeholder: '#fce4ec',
          },
        },
        {
          name: 'questionRichText',
          type: 'richText',
          editor: richTextEditor(),
          label: 'Pregunta (RichText)',
          required: true,
        },
        {
          name: 'answerRichText',
          type: 'richText',
          editor: richTextEditor(),
          label: 'Respuesta (RichText)',
          required: true,
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Color de acento y fondo de respuesta',
          defaultValue: '#a1004a',
          admin: {
            description:
              'Color del icono, del +/− y de la pregunta abierta. Un tono más claro se usa para el reborde de la pregunta y el fondo del desplegable de respuesta.',
            placeholder: '#a1004a',
          },
        },
      ],
    },

    // ─── Tipografía ────────────────────────────────────────────
    {
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
      admin: {
        description:
          'Tipografía y tamaños del Font Group se aplican al RichText principal y a preguntas y respuestas del acordeón.',
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
        condition: (_, siblingData) => !siblingData?.useFontGroup && !siblingData?.useCustomFont,
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
        condition: (_, siblingData) => siblingData?.useFontGroup !== true,
      },
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
  ],
}
