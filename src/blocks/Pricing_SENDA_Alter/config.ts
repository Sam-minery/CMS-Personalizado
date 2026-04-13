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

const fontGroupWeightState = {
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
      HorizontalRuleFeature(),
      SubscriptFeature(),
      TextStateFeature({ state: fontGroupWeightState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const PricingSendaAlterBlock: Block = {
  slug: 'pricingSendaAlter',
  interfaceName: 'PricingSendaAlterBlock',
  labels: {
    singular: 'Pricing SENDA Alter',
    plural: 'Pricing SENDA Alter',
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
      dbName: 'psa_plans',
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
          dbName: 'psa_elements',
          label: 'Elementos del plan (derecha)',
          fields: [
            {
              name: 'iconSVG',
              type: 'textarea',
              label: 'Icono SVG',
              admin: { description: 'Código SVG del icono' },
            },
            {
              name: 'richText',
              type: 'richText',
              editor: richTextEditor(),
              label: 'Texto (RichText)',
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
          name: 'enable3DGradient',
          type: 'checkbox',
          label: 'Efecto 3D (gradiente sobre el fondo)',
          defaultValue: false,
          admin: {
            description:
              'Capa con gradiente sobre el fondo. El color base lo defines abajo en “Color del gradiente 3D (bloque)”.',
          },
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
      name: 'applyCustomWidth',
      type: 'checkbox',
      label: 'Aplicar ancho personalizado',
      defaultValue: false,
      admin: {
        description:
          'Si está activo, el contenido (cabecera y rejilla de planes) usa el ancho en % del viewport; el color de fondo del bloque sigue a ancho completo. Si no lo marcas, el diseño no cambia.',
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
      name: 'planGradientColor',
      type: 'text',
      label: 'Color del gradiente 3D (bloque)',
      admin: {
        description:
          'Usado cuando un plan tiene “Efecto 3D” activo. Sustituye el degradado oscuro fijo del bloque clásico (ej. #1a1a1a o rgb). Si está vacío, se usa negro como en Pricing SENDA.',
      },
    },
    {
      name: 'planDropShadowColor',
      type: 'text',
      label: 'Color del glow / sombra de las tarjetas',
      admin: {
        description:
          'Halo alrededor de cada tarjeta de plan. Si está vacío, se usa blanco como en Pricing SENDA (rgba 255,255,255).',
      },
    },
    {
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
      admin: {
        description: 'Activa para elegir un grupo de fuentes (font-groups) en lugar de una sola fuente.',
      },
    },
    {
      name: 'fontGroup',
      type: 'relationship',
      relationTo: 'font-groups',
      label: 'Grupo de fuentes',
      admin: {
        condition: (_, siblingData) => siblingData?.useFontGroup === true,
        description: 'Selecciona un grupo creado en Font Groups. Se aplicarán sus fuentes y tamaños de tipografía.',
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
        condition: (_, siblingData) => siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_, siblingData) => siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
  ],
}
