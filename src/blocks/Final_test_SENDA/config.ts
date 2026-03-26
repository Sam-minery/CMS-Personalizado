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

import { link } from '@/fields/link'

const finalTestSendaRichTextState = {
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

const finalTestRichTextEditor = () =>
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
      TextStateFeature({ state: finalTestSendaRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const FinalTestSendaBlockConfig: Block = {
  slug: 'finalTestSenda',
  interfaceName: 'FinalTestSendaBlock',
  labels: {
    singular: 'Final test Senda',
    plural: 'Final test Senda',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla (ej: final-test-senda). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'backgroundImage',
      type: 'group',
      label: 'Imagen de fondo del bloque',
      admin: {
        description: 'Opcional. Si se define, se muestra como fondo de la sección.',
      },
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: true,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen de fondo',
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
              siblingData?.useMedia === true,
          },
        },
        {
          name: 'src',
          type: 'text',
          label: 'URL de la imagen',
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
              siblingData?.useMedia === false,
          },
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque (sección)',
      admin: {
        description:
          'Fondo de la sección si no hay imagen, o detrás del área del componente. Nombre CSS o #hex.',
        placeholder: '#f5f5f5',
      },
    },
    {
      name: 'componentBackgroundColor',
      type: 'text',
      label: 'Color de fondo del área de contenido',
      admin: {
        description:
          'Opcional. Si se rellena, el texto + imagen + botón van dentro de una caja redondeada con este color.',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto normal',
      admin: {
        placeholder: '#111827',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
      admin: {
        placeholder: '#111827',
      },
    },
    {
      name: 'buttonBackgroundColor',
      type: 'text',
      label: 'Color de fondo del botón',
      admin: {
        placeholder: '#007AFF',
      },
    },
    {
      name: 'buttonTextColor',
      type: 'text',
      label: 'Color del texto del botón',
      admin: {
        placeholder: '#ffffff',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Texto de introducción',
      editor: finalTestRichTextEditor(),
    },
    {
      name: 'mainImage',
      type: 'group',
      label: 'Imagen principal',
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: true,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen',
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
              siblingData?.useMedia === true,
          },
        },
        {
          name: 'src',
          type: 'text',
          label: 'URL de la imagen',
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
              siblingData?.useMedia === false,
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo',
        },
      ],
    },
    {
      name: 'button',
      type: 'group',
      label: 'Botón',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Texto del botón',
          defaultValue: 'Más información',
        },
        link({
          disableLabel: true,
          appearances: false,
          overrides: {
            name: 'link',
            label: 'Enlace',
          },
        }),
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
        },
      ],
    },
    {
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
    },
    {
      name: 'fontGroup',
      type: 'relationship',
      relationTo: 'font-groups',
      label: 'Grupo de fuentes',
      admin: {
        condition: (_, siblingData) => siblingData?.useFontGroup === true,
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
