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

const iconGroupFields = (opts?: { defaultUseMedia?: boolean; description?: string }) => [
  {
    name: 'useMedia',
    type: 'checkbox' as const,
    label: 'Usar imagen / GIF subido',
    defaultValue: opts?.defaultUseMedia ?? true,
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

const textColorFields = [
  {
    name: 'textColor',
    type: 'text' as const,
    label: 'Color del texto principal',
    admin: {
      description: 'Hex, rgb, rgba o nombre CSS.',
      placeholder: '#101835',
    },
  },
  {
    name: 'boldTextColor',
    type: 'text' as const,
    label: 'Color del texto en negrita',
    admin: {
      description: 'Color para strong/b dentro del RichText.',
      placeholder: '#a1004a',
    },
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
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla. Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },

    // ─── 1. Tags ───────────────────────────────────────────────
    {
      name: 'tags',
      type: 'array',
      dbName: 'pd_tags',
      label: 'Tags (píldoras)',
      labels: { singular: 'Tag', plural: 'Tags' },
      admin: {
        description: 'Píldoras arriba a la izquierda. Varias se muestran en fila.',
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
          name: 'content',
          type: 'richText',
          label: 'Texto del tag',
          required: true,
          editor: richTextEditor(),
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo del tag',
          defaultValue: '#fce4ec',
          admin: { placeholder: '#fce4ec' },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Color de texto del tag',
          defaultValue: '#a1004a',
          admin: {
            description: 'También se usa para el reborde fino de la píldora.',
            placeholder: '#a1004a',
          },
        },
      ],
    },

    // ─── 2. Texto principal ────────────────────────────────────
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
      name: 'mainStyle',
      type: 'group',
      label: 'Estilo del texto principal',
      fields: textColorFields,
    },

    // ─── 3. Fondo ──────────────────────────────────────────────
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de fondo',
      admin: {
        description:
          'Desktop: cubre todo el bloque. Móvil: solo a la altura del tag + texto principal, centrada hacia la derecha.',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque (opcional)',
      admin: {
        description:
          'Si no hay imagen, o en móvil para la zona bajo la imagen. Hex, rgb, rgba o nombre CSS.',
        placeholder: '#ffffff',
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
    {
      name: 'animatedAccentColor',
      type: 'text',
      label: 'Color de acentos animados',
      defaultValue: '#a1004a',
      admin: {
        condition: (_: unknown, siblingData: { enableAnimatedBg?: boolean }) =>
          siblingData?.enableAnimatedBg === true,
        description: 'Color de la línea discontinua y de las estrellas / sparkles.',
        placeholder: '#a1004a',
      },
    },

    // ─── 4. Subsección numerada ────────────────────────────────
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
        {
          name: 'iconBackgroundColor',
          type: 'text',
          label: 'Color de fondo del icono',
          defaultValue: '#f8bbd0',
          admin: {
            description: 'También tiñe el círculo del número (el número se oscurece automáticamente).',
            placeholder: '#f8bbd0',
          },
        },
        ...textColorFields,
      ],
    },

    // ─── 5. Sección producto ───────────────────────────────────
    {
      name: 'product',
      type: 'group',
      ...({ dbName: 'prd' } as Record<string, unknown>),
      label: 'Sección producto',
      admin: {
        description: 'Card a la derecha (desktop) / debajo de numerados (móvil).',
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo de la sección',
          defaultValue: '#ffffff',
          admin: { placeholder: '#ffffff' },
        },

        // Tabla comparativa
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
              label: 'Color de fondo del icono',
              defaultValue: '#fce4ec',
              admin: { placeholder: '#fce4ec' },
            },
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
                  name: 'tagBackgroundColor',
                  type: 'text',
                  label: 'Color de fondo del tag',
                  defaultValue: '#c8e6c9',
                  admin: { placeholder: '#c8e6c9' },
                },
                {
                  name: 'tagTextColor',
                  type: 'text',
                  label: 'Color de texto del tag',
                  defaultValue: '#2e7d32',
                  admin: { placeholder: '#2e7d32' },
                },
                {
                  name: 'priceTextColor',
                  type: 'text',
                  label: 'Color de texto del precio',
                  defaultValue: '#a1004a',
                  admin: { placeholder: '#a1004a' },
                },
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
                description: 'Usa el color de texto de precio del último elemento, o el propio campo.',
              },
            },
            {
              name: 'totalPriceColor',
              type: 'text',
              label: 'Color de texto del precio / mes',
              defaultValue: '#a1004a',
              admin: { placeholder: '#a1004a' },
            },
          ],
        },

        // Sección compra
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
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Color de fondo de la sección compra',
              defaultValue: '#faf7f8',
              admin: { placeholder: '#faf7f8' },
            },
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
                {
                  name: 'iconSVG',
                  type: 'textarea',
                  label: 'Icono SVG del botón',
                  admin: {
                    description: 'SVG a la derecha del texto. Dejar vacío para no mostrar icono.',
                  },
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Color de fondo del botón',
                  defaultValue: '#a1004a',
                  admin: { placeholder: '#a1004a' },
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Color de texto del botón',
                  defaultValue: '#ffffff',
                  admin: { placeholder: '#ffffff' },
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

        // Sección final (dentro de producto)
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

    // ─── 6. Letra pequeña ──────────────────────────────────────
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
      name: 'finePrintColor',
      type: 'text',
      label: 'Color de la letra pequeña',
      defaultValue: '#101835',
      admin: { placeholder: '#101835' },
    },

    // ─── 7. Subsección final ───────────────────────────────────
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
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo',
          defaultValue: '#ffffff',
          admin: { placeholder: '#ffffff' },
        },
        {
          name: 'iconBackgroundColor',
          type: 'text',
          label: 'Color de fondo del icono',
          defaultValue: '#fce4ec',
          admin: { placeholder: '#fce4ec' },
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

    // ─── Tipografía ────────────────────────────────────────────
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
}
