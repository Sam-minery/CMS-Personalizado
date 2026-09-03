import type { Block, Field } from 'payload'

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
import { dropButtonBackgroundSecondaryField } from '@/fields/dropButtonBackgroundSecondary'
import { iconGroupFields } from '@/fields/iconGroupFields'
import { svgCodeField } from '@/fields/svgCode'
import { link } from '@/fields/link'
import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'

const pricingDropRichTextState = {
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
      TextStateFeature({ state: pricingDropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

const textColorFields: Field[] = [
  {
    type: 'row',
    fields: [
      colorField({
        name: 'textColor',
        label: 'Color del texto principal',
        width: '50%',
        placeholder: '#101835',
        admin: {
          description: 'Hex, rgb, rgba o nombre CSS.',
        },
      }),
      colorField({
        name: 'boldTextColor',
        label: 'Color del texto en negrita',
        width: '50%',
        placeholder: '#a1004a',
        admin: {
          description: 'Color para strong/b dentro del RichText.',
        },
      }),
    ],
  },
]

export const PricingDropBlock: Block = {
  slug: 'pricingDrop',
  // Nombre corto en DB: evita enums/tablas > 63 chars (límite Postgres)
  dbName: 'pd',
  interfaceName: 'PricingDropBlock',
  labels: {
    singular: 'Pricing DROP',
    plural: 'Pricing DROP Blocks',
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
              name: 'tags',
              type: 'array',
              dbName: 'pd_tags',
              label: 'Tags (píldoras)',
              labels: { singular: 'Tag', plural: 'Tags' },
              admin: {
                description: 'Píldoras arriba a la izquierda. Varias se muestran en fila.',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#TagRowLabel',
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
                  label: 'Texto del tag',
                  required: true,
                  editor: richTextEditor(),
                },
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'backgroundColor',
                      label: 'Color de fondo del tag',
                      defaultValue: '#fce4ec',
                      width: '50%',
                      placeholder: '#fce4ec',
                    }),
                    colorField({
                      name: 'textColor',
                      label: 'Color de texto del tag',
                      defaultValue: '#a1004a',
                      width: '50%',
                      placeholder: '#a1004a',
                      admin: {
                        description: 'También se usa para el reborde fino de la píldora.',
                      },
                    }),
                  ],
                },
              ],
            },
            {
              name: 'mainContent',
              type: 'richText',
              label: 'Texto principal',
              required: true,
              editor: richTextEditor(),
              admin: {
                description: 'Título y descripción (usa negrita para resaltar).',
              },
            },
            {
              name: 'numberedItems',
              type: 'array',
              dbName: 'pd_num',
              label: 'Subsección numerada',
              maxRows: 3,
              labels: { singular: 'Elemento', plural: 'Elementos' },
              admin: {
                description: 'Máximo 3. Columna a la izquierda, debajo del texto principal.',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#NumberedItemRowLabel',
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
                },
                colorField({
                  name: 'iconBackgroundColor',
                  label: 'Color de fondo del icono',
                  defaultValue: '#f8bbd0',
                  placeholder: '#f8bbd0',
                  admin: {
                    description:
                      'También tiñe el círculo del número (el número se oscurece automáticamente).',
                  },
                }),
                ...textColorFields,
              ],
            },
            {
              name: 'product',
              type: 'group',
              ...({ dbName: 'prd' } as Record<string, unknown>),
              label: 'Sección producto',
              admin: {
                description: 'Card a la derecha (desktop) / debajo de numerados (móvil).',
              },
              fields: [
                colorField({
                  name: 'backgroundColor',
                  label: 'Color de fondo de la sección',
                  defaultValue: '#ffffff',
                  placeholder: '#ffffff',
                }),
                {
                  name: 'columns',
                  type: 'array',
                  dbName: 'pd_cols',
                  label: 'Columnas de comparativa',
                  maxRows: 2,
                  labels: { singular: 'Columna', plural: 'Columnas' },
                  admin: {
                    description: 'Máximo 2. En fila, separadas por una barra vertical.',
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/fields/dropArrayRowLabels#ColumnRowLabel',
                    },
                  },
                  fields: [
                    {
                      name: 'icon',
                      type: 'group',
                      label: 'Icono',
                      fields: iconGroupFields({ defaultUseMedia: false }),
                    },
                    colorField({
                      name: 'iconBackgroundColor',
                      label: 'Color de fondo del icono',
                      defaultValue: '#fce4ec',
                      placeholder: '#fce4ec',
                    }),
                    {
                      name: 'title',
                      type: 'richText',
                      label: 'Texto principal de columna',
                      editor: richTextEditor(),
                    },
                    {
                      name: 'items',
                      type: 'array',
                      dbName: 'pd_ci',
                      label: 'Elementos de comparativa',
                      maxRows: 6,
                      labels: { singular: 'Elemento', plural: 'Elementos' },
                      admin: {
                        description: 'Máximo 6. Producto a la izquierda; precio o tag a la derecha.',
                        initCollapsed: true,
                        components: {
                          RowLabel: '@/fields/dropArrayRowLabels#CompareItemRowLabel',
                        },
                      },
                      fields: [
                        {
                          name: 'product',
                          type: 'richText',
                          label: 'Producto',
                          required: true,
                          editor: richTextEditor(),
                        },
                        {
                          name: 'price',
                          type: 'richText',
                          label: 'Precio (opcional)',
                          editor: richTextEditor(),
                        },
                        {
                          name: 'tag',
                          type: 'richText',
                          label: 'Tag (opcional)',
                          editor: richTextEditor(),
                          admin: {
                            description: 'Ej: "Incluido". Se muestra como píldora si hay contenido.',
                          },
                        },
                        {
                          type: 'row',
                          fields: [
                            colorField({
                              name: 'tagBackgroundColor',
                              label: 'Color de fondo del tag',
                              defaultValue: '#c8e6c9',
                              width: '50%',
                              placeholder: '#c8e6c9',
                            }),
                            colorField({
                              name: 'tagTextColor',
                              label: 'Color de texto del tag',
                              defaultValue: '#2e7d32',
                              width: '50%',
                              placeholder: '#2e7d32',
                            }),
                          ],
                        },
                        colorField({
                          name: 'priceTextColor',
                          label: 'Color de texto del precio',
                          defaultValue: '#a1004a',
                          placeholder: '#a1004a',
                        }),
                      ],
                    },
                    {
                      name: 'totalLabel',
                      type: 'richText',
                      label: 'Precio total (etiqueta, opcional)',
                      editor: richTextEditor(),
                      admin: { description: 'Ej: "Total estimado".' },
                    },
                    {
                      name: 'totalPrice',
                      type: 'richText',
                      label: 'Precio / mes (opcional)',
                      editor: richTextEditor(),
                      admin: {
                        description:
                          'Usa el color de texto de precio del último elemento, o el propio campo.',
                      },
                    },
                    colorField({
                      name: 'totalPriceColor',
                      label: 'Color de texto del precio / mes',
                      defaultValue: '#a1004a',
                      placeholder: '#a1004a',
                    }),
                  ],
                },
                {
                  name: 'purchase',
                  type: 'group',
                  ...({ dbName: 'buy' } as Record<string, unknown>),
                  label: 'Sección compra',
                  fields: [
                    {
                      name: 'previousPrice',
                      type: 'richText',
                      label: 'Precio anterior',
                      editor: richTextEditor(),
                    },
                    {
                      name: 'currentPrice',
                      type: 'richText',
                      label: 'Precio actual',
                      editor: richTextEditor(),
                    },
                    {
                      name: 'description',
                      type: 'richText',
                      label: 'Descripción',
                      editor: richTextEditor(),
                    },
                    colorField({
                      name: 'backgroundColor',
                      label: 'Color de fondo de la sección compra',
                      defaultValue: '#faf7f8',
                      placeholder: '#faf7f8',
                    }),
                    {
                      name: 'button',
                      type: 'group',
                      ...({ dbName: 'btn' } as Record<string, unknown>),
                      label: 'Botón',
                      fields: [
                        {
                          name: 'label',
                          type: 'text',
                          label: 'Texto del botón',
                          defaultValue: 'Empezar ahora',
                        },
                        svgCodeField({
                          name: 'iconSVG',
                          label: 'Icono SVG del botón',
                          admin: {
                            description: 'SVG a la derecha del texto. Dejar vacío para no mostrar icono.',
                          },
                        }),
                        {
                          type: 'row',
                          fields: [
                            colorField({
                              name: 'backgroundColor',
                              label: 'Color de fondo del botón',
                              defaultValue: '#a1004a',
                              width: '33%',
                              placeholder: '#a1004a',
                            }),
                            dropButtonBackgroundSecondaryField({
                              placeholder: '#6a1b4d',
                              width: '33%',
                            }),
                            colorField({
                              name: 'textColor',
                              label: 'Color de texto del botón',
                              defaultValue: '#ffffff',
                              width: '33%',
                              placeholder: '#ffffff',
                            }),
                          ],
                        },
                        link({
                          appearances: false,
                          disableLabel: true,
                          overrides: {
                            label: 'Enlace del botón (opcional)',
                            ...({ dbName: 'lnk' } as Record<string, unknown>),
                          },
                        }),
                      ],
                    },
                  ],
                },
                {
                  name: 'footerItems',
                  type: 'array',
                  dbName: 'pd_pfi',
                  label: 'Sección final',
                  maxRows: 2,
                  labels: { singular: 'Elemento', plural: 'Elementos' },
                  admin: {
                    description: 'Máximo 2. Debajo de la sección compra, en fila.',
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/fields/dropArrayRowLabels#FooterItemRowLabel',
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
                      label: 'Texto',
                      required: true,
                      editor: richTextEditor(),
                    },
                  ],
                },
              ],
            },
            {
              name: 'finePrint',
              type: 'richText',
              label: 'Letra pequeña',
              editor: richTextEditor(),
              admin: {
                description: 'Debajo de la sección producto, alineada a la derecha en desktop.',
              },
            },
            {
              name: 'stats',
              type: 'array',
              dbName: 'pd_stats',
              label: 'Subsección final',
              maxRows: 3,
              labels: { singular: 'Elemento', plural: 'Elementos' },
              admin: {
                description:
                  'Máximo 3. Al final del bloque: en fila (desktop) / apilados (móvil), centrados.',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#StatRowLabel',
                },
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'backgroundColor',
                      label: 'Color de fondo',
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
                    }),
                  ],
                },
                {
                  name: 'icon',
                  type: 'group',
                  label: 'Icono',
                  fields: iconGroupFields({ defaultUseMedia: false }),
                },
                {
                  name: 'highlight',
                  type: 'richText',
                  label: 'Texto destacado',
                  editor: richTextEditor(),
                  admin: {
                    description:
                      'Opcional. En desktop va encima del contenido; en móvil, a la izquierda (ej: +10%).',
                  },
                },
                {
                  name: 'content',
                  type: 'richText',
                  label: 'Contenido',
                  required: true,
                  editor: richTextEditor(),
                },
                ...textColorFields,
              ],
            },
          ],
        },
        {
          label: 'Estilos',
          fields: [
            {
              name: 'mainStyle',
              type: 'group',
              label: 'Estilo del texto principal',
              fields: textColorFields,
            },
            {
              name: 'hideNumbering',
              type: 'checkbox',
              label: 'Desactivar numeración',
              defaultValue: false,
              admin: {
                description:
                  'Si está activo, las filas numeradas se muestran solo con icono y texto, sin el círculo 1 / 2 / 3. Si no lo marcas, el diseño no cambia.',
              },
            },
            colorField({
              name: 'finePrintColor',
              label: 'Color de la letra pequeña',
              defaultValue: '#101835',
              placeholder: '#101835',
            }),
            {
              type: 'collapsible',
              label: 'Tipografía',
              admin: { initCollapsed: true },
              fields: [
                {
                  name: 'useFontGroup',
                  type: 'checkbox',
                  label: 'Usar grupo de fuentes',
                  defaultValue: false,
                  admin: {
                    description:
                      'Activa para elegir un grupo de fuentes (font-groups). Sus tamaños e interlineados tienen prioridad sobre la tipografía por defecto del bloque.',
                  },
                },
                {
                  name: 'fontGroup',
                  type: 'relationship',
                  relationTo: 'font-groups',
                  label: 'Grupo de fuentes',
                  admin: {
                    condition: (_, siblingData) => siblingData?.useFontGroup === true,
                    description:
                      'Selecciona un grupo creado en Font Groups. Se aplicarán sus fuentes y tamaños de tipografía.',
                  },
                },
                {
                  name: 'fontFamily',
                  type: 'select',
                  label: 'Tipografía',
                  admin: {
                    condition: (_, siblingData) =>
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
            },
          ],
        },
        {
          label: 'Fondo y layout',
          fields: [
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen de fondo',
              admin: {
                description:
                  'Desktop: cubre todo el bloque. Móvil: por defecto solo a la altura del tag + texto principal, hacia la derecha. Activa «Cambiar posición imagen mobile» para centrarla en todo el fondo.',
              },
            },
            colorField({
              name: 'backgroundColor',
              label: 'Color de fondo del bloque (opcional)',
              placeholder: '#ffffff',
              admin: {
                description:
                  'Si no hay imagen, o en móvil para la zona bajo la imagen. Hex, rgb, rgba o nombre CSS.',
              },
            }),
            {
              name: 'centerMobileImage',
              type: 'checkbox',
              label: 'Cambiar posición imagen mobile',
              defaultValue: false,
              admin: {
                description:
                  'En móvil, centra la imagen y el SVG decorativo ocupando todo el fondo del bloque, con transparencia para no tapar el contenido. Si no lo marcas, el diseño móvil no cambia.',
              },
            },
            {
              name: 'enableAnimatedBg',
              type: 'checkbox',
              label: 'Activar fondo animado',
              defaultValue: false,
              admin: {
                description:
                  'Círculo discontinuo giratorio detrás de la imagen y sparkles con parallax al hacer scroll.',
              },
            },
            colorField({
              name: 'animatedAccentColor',
              label: 'Color de acentos animados',
              defaultValue: '#a1004a',
              placeholder: '#a1004a',
              admin: {
                condition: (_: unknown, siblingData: { enableAnimatedBg?: boolean }) =>
                  siblingData?.enableAnimatedBg === true,
                description: 'Color de la línea discontinua y de las estrellas / sparkles.',
              },
            }),
            {
              name: 'applyCustomWidth',
              type: 'checkbox',
              label: 'Aplicar ancho personalizado',
              defaultValue: false,
              admin: {
                description:
                  'Si está activo, el contenido del bloque usa el ancho en % del viewport indicado; el fondo y la decoración siguen a ancho completo. Si no lo marcas, el diseño no cambia.',
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
