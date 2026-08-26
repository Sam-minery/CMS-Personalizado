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

import { colorField } from '@/fields/color'
import { iconGroupFields } from '@/fields/iconGroupFields'
import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'

const layout2DropRichTextState = {
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
      TextStateFeature({ state: layout2DropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const Layout2DropBlock: Block = {
  slug: 'layout2Drop',
  // Nombre corto en DB: evita enums/tablas > 63 chars (límite Postgres)
  dbName: 'l2d',
  interfaceName: 'Layout2DropBlock',
  labels: {
    singular: 'Layout2 DROP',
    plural: 'Layout2 DROP Blocks',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenido',
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
                description: 'Título grande. Usa negrita para resaltar palabras (ej. "respaldado").',
              },
            },
            {
              name: 'secondaryContent',
              type: 'richText',
              label: 'RichText secundario',
              editor: richTextEditor(),
              admin: {
                description: 'Subtítulo debajo del separador SVG.',
              },
            },
            {
              name: 'prestaciones',
              type: 'array',
              dbName: 'l2d_pre',
              label: 'Prestaciones',
              maxRows: 6,
              labels: { singular: 'Prestación', plural: 'Prestaciones' },
              admin: {
                description: 'Máximo 6. Desktop: filas de 3. Móvil: carrusel de una tarjeta.',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#PrestacionRowLabel',
                },
              },
              fields: [
                {
                  name: 'icon',
                  type: 'group',
                  label: 'Icono',
                  fields: iconGroupFields({ defaultUseMedia: false }),
                },
                {
                  name: 'content',
                  type: 'richText',
                  label: 'Contenido',
                  required: true,
                  editor: richTextEditor(),
                  admin: {
                    description: 'Título (negrita) y descripción de la prestación.',
                  },
                },
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'backgroundColor',
                      label: 'Color de fondo de subsección',
                      defaultValue: '#ffffff',
                      width: '50%',
                      placeholder: '#ffffff',
                    }),
                    colorField({
                      name: 'iconBackgroundColor',
                      label: 'Color de fondo del icono',
                      defaultValue: '#fce4ec',
                      width: '50%',
                      placeholder: '#fce4ec',
                      admin: {
                        description: 'Círculo detrás del icono.',
                      },
                    }),
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'textColor',
                      label: 'Color de texto subsección',
                      defaultValue: '#5c6b8a',
                      width: '50%',
                      placeholder: '#5c6b8a',
                      admin: {
                        description: 'Color base del RichText de la card.',
                      },
                    }),
                    colorField({
                      name: 'boldTextColor',
                      label: 'Color de texto negrita subsección',
                      defaultValue: '#101835',
                      width: '50%',
                      placeholder: '#101835',
                      admin: {
                        description: 'Color para strong/b (títulos de card).',
                      },
                    }),
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Estilos',
          fields: [
            colorField({
              name: 'backgroundColor',
              label: 'Color de fondo',
              defaultValue: '#ffffff',
              placeholder: '#ffffff',
              admin: {
                description: 'Hex, rgb, rgba o nombre CSS.',
              },
            }),
            {
              type: 'row',
              fields: [
                colorField({
                  name: 'textColorPrimary',
                  label: 'Color de texto principal',
                  defaultValue: '#101835',
                  width: '50%',
                  placeholder: '#101835',
                  admin: {
                    description: 'Aplica al RichText principal.',
                  },
                }),
                colorField({
                  name: 'textColorSecondary',
                  label: 'Color de texto secundario',
                  defaultValue: '#5c6b8a',
                  width: '50%',
                  placeholder: '#5c6b8a',
                  admin: {
                    description: 'Aplica al RichText secundario.',
                  },
                }),
              ],
            },
            colorField({
              name: 'boldTextColor',
              label: 'Color de texto negrita',
              defaultValue: '#a1004a',
              placeholder: '#a1004a',
              admin: {
                description: 'Color para strong/b en ambos RichText del encabezado.',
              },
            }),
          ],
        },
        {
          label: 'Fondo y layout',
          fields: [
            {
              name: 'applyCustomWidth',
              type: 'checkbox',
              label: 'Aplicar ancho personalizado',
              defaultValue: false,
              admin: {
                description:
                  'Si está activo, el contenido del bloque usa el ancho en % del viewport indicado; el fondo sigue a ancho completo. Si no lo marcas, el diseño no cambia.',
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
          ],
        },
      ],
    },
  ],
}
