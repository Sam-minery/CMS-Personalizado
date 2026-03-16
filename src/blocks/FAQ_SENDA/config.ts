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
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

const richTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      AlignFeature(),
      IndentFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      ChecklistFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      SubscriptFeature(),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const FAQSendaBlock: Block = {
  slug: 'faqSenda',
  interfaceName: 'FAQSendaBlock',
  labels: {
    singular: 'FAQ SENDA',
    plural: 'FAQ SENDA Blocks',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description: 'ID para enlaces ancla. Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: richTextEditor(),
      label: 'Contenido principal (RichText)',
      required: true,
    },
    {
      name: 'questions',
      type: 'array',
      dbName: 'faq_senda_questions',
      label: 'Preguntas frecuentes',
      minRows: 1,
      maxRows: 50,
      fields: [
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
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG (flecha, chevron, etc.)',
          admin: { description: 'Código SVG del icono. Al abrir la pregunta, el icono girará 180°.' },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
    },
    {
      name: 'questionsSectionBackgroundColor',
      type: 'text',
      label: 'Color de fondo de la sección de preguntas y respuestas',
    },
    {
      name: 'questionsSectionBorderColor',
      type: 'text',
      label: 'Color del borde de cada pregunta (solo cuando está abierta)',
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto principal del bloque',
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita del bloque',
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
}
