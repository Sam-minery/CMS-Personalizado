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
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const PricingSendaBlock: Block = {
  slug: 'pricingSenda',
  interfaceName: 'PricingSendaBlock',
  labels: {
    singular: 'Pricing SENDA',
    plural: 'Pricing SENDA Blocks',
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
      name: 'plans',
      type: 'array',
      dbName: 'ps_plans',
      label: 'Planes',
      fields: [
        {
          name: 'richText',
          type: 'richText',
          editor: richTextEditor(),
          label: 'Contenido del plan (RichText, izquierda)',
          required: false,
        },
        {
          name: 'planElements',
          type: 'array',
          dbName: 'ps_elements',
          label: 'Elementos del plan (derecha)',
          fields: [
            {
              name: 'iconSVG',
              type: 'textarea',
              label: 'Icono SVG',
              admin: { description: 'Código SVG del icono' },
            },
            {
              name: 'text',
              type: 'text',
              label: 'Texto',
              required: false,
            },
          ],
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo de esta sección',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Color del texto principal de esta sección',
        },
        {
          name: 'boldTextColor',
          type: 'text',
          label: 'Color del texto en negrita de esta sección',
        },
        {
          name: 'enableLink',
          type: 'checkbox',
          label: 'Convertir en enlace',
          defaultValue: false,
          admin: {
            description: 'Active para hacer este plan clickeable (enlace interno o externo)',
          },
        },
        {
          name: 'link',
          type: 'group',
          admin: {
            hideGutter: true,
            condition: (_, siblingData) => siblingData?.enableLink === true,
            description: 'Configure el enlace para este plan',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  admin: { layout: 'horizontal', width: '50%' },
                  defaultValue: 'reference',
                  options: [
                    { label: 'Internal link', value: 'reference' },
                    { label: 'Custom URL', value: 'custom' },
                  ],
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  admin: {
                    style: { alignSelf: 'flex-end' },
                    width: '50%',
                  },
                  label: 'Open in new tab',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'reference',
                  type: 'relationship',
                  relationTo: ['pages', 'posts'],
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'reference',
                    width: '50%',
                  },
                  label: 'Document to link to',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'custom',
                    width: '50%',
                  },
                  label: 'Custom URL',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  admin: { width: '50%' },
                  label: 'Label',
                  required: false,
                },
              ],
            },
            {
              name: 'appearance',
              type: 'select',
              admin: { description: 'Choose how the link should be rendered.' },
              defaultValue: 'default',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Outline', value: 'outline' },
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
