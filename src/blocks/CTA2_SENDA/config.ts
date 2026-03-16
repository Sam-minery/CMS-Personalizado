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

import { link } from '@/fields/link'

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

export const CTA2SendaBlock: Block = {
  slug: 'cta2Senda',
  interfaceName: 'CTA2SendaBlock',
  labels: {
    singular: 'CTA2 SENDA',
    plural: 'CTA2 SENDA Blocks',
  },
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
      name: 'richText',
      type: 'richText',
      editor: richTextEditor(),
      label: 'Contenido principal (RichText)',
      required: true,
    },
    {
      name: 'buttons',
      type: 'array',
      dbName: 'cta2_senda_buttons',
      label: 'Botones',
      maxRows: 4,
      fields: [
        link({ appearances: false }),
        {
          name: 'appearance',
          type: 'select',
          label: 'Estilo del botón',
          defaultValue: 'default',
          options: [
            { label: 'Default (relleno)', value: 'default' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Link', value: 'link' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          label: 'Tamaño del botón',
          defaultValue: 'sm',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Large', value: 'lg' },
            { label: 'Clear', value: 'clear' },
          ],
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen',
    },
    {
      name: 'invertLayout',
      type: 'checkbox',
      label: 'Invertir disposición',
      defaultValue: false,
      admin: {
        description: 'Si está activo: texto y botones a la derecha, imagen a la izquierda. Si está desactivado: texto y botones a la izquierda, imagen a la derecha.',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto principal',
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
    },
    {
      name: 'buttonBackgroundColor',
      type: 'text',
      label: 'Color de fondo de los botones',
    },
    {
      name: 'buttonTextColor',
      type: 'text',
      label: 'Color del texto de los botones',
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) => !siblingData?.useCustomFont,
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
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) => siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) => siblingData?.useCustomFont === true,
      },
    },
  ],
}
