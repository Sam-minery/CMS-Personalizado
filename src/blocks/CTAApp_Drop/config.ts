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
import { iconGroupFields } from '@/fields/iconGroupFields'
import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'
import { link } from '@/fields/link'

const ctaAppDropRichTextState = {
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
      TextStateFeature({ state: ctaAppDropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

const fontFamilyOptions = [
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
]

const sectionTypographyFields = (opts?: {
  fontGroupDescription?: string
  defaultTextColor?: string
  defaultBoldTextColor?: string
  textColorPlaceholder?: string
  boldTextColorPlaceholder?: string
}): Field[] => [
  {
    type: 'row',
    fields: [
      colorField({
        name: 'textColor',
        label: 'Color del texto principal',
        defaultValue: opts?.defaultTextColor,
        width: '50%',
        placeholder: opts?.textColorPlaceholder ?? '#101835',
        admin: {
          description: 'Hex, rgb, rgba o nombre CSS. Aplica al texto de esta sección.',
        },
      }),
      colorField({
        name: 'boldTextColor',
        label: 'Color del texto en negrita',
        defaultValue: opts?.defaultBoldTextColor,
        width: '50%',
        placeholder: opts?.boldTextColorPlaceholder ?? '#C2005F',
        admin: {
          description: 'Color para strong/b dentro del RichText de esta sección.',
        },
      }),
    ],
  },
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
            opts?.fontGroupDescription ??
            'Tipografía, tamaños e interlineados del Font Group se aplican al RichText de esta sección.',
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
        label: 'Tipografia',
        admin: {
          condition: (_, siblingData) => !siblingData?.useFontGroup && !siblingData?.useCustomFont,
        },
        options: fontFamilyOptions,
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
]

export const CTAAppDropBlock: Block = {
  slug: 'ctaAppDrop',
  dbName: 'cta_app',
  interfaceName: 'CTAAppDropBlock',
  labels: {
    singular: 'CTA App Drop',
    plural: 'CTA App Drop Blocks',
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
                  'ID para enlaces ancla (ej: app-drop). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
              },
            },
            {
              name: 'headerContent',
              type: 'richText',
              label: 'Textbox principal',
              required: true,
              editor: richTextEditor(),
              admin: {
                description:
                  'Título (usa negrita para resaltar la marca, ej. "Drop by Sanitas").',
              },
            },
            {
              name: 'subtitleContent',
              type: 'richText',
              label: 'Subtítulo',
              editor: richTextEditor(),
              admin: {
                description: 'Texto bajo el título (ej. "Empieza tu cambio desde dónde quieras").',
              },
            },
            {
              name: 'mockupImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen del mockup (móvil en la mano)',
              admin: {
                description: 'Misma imagen en escritorio y móvil.',
              },
            },
            {
              name: 'features',
              type: 'array',
              dbName: 'cta_app_ft',
              label: 'Listado de ventajas',
              maxRows: 8,
              labels: {
                singular: 'Ventaja',
                plural: 'Ventajas',
              },
              admin: {
                description: 'Máximo 8. En escritorio se muestran en 2 columnas; en móvil en una.',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#FeatureRowLabel',
                },
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Texto',
                  required: true,
                },
              ],
            },
            {
              name: 'downloadCard',
              type: 'group',
              label: 'Tarjeta de descarga',
              admin: {
                description: 'QR (solo escritorio), textos e iconos de App Store / Google Play.',
              },
              fields: [
                {
                  name: 'qrCodes',
                  type: 'array',
                  dbName: 'cta_app_qr',
                  label: 'Códigos QR',
                  maxRows: 2,
                  labels: {
                    singular: 'QR',
                    plural: 'QRs',
                  },
                  admin: {
                    description: 'Hasta 2 imágenes. Solo se muestran en escritorio.',
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/fields/dropArrayRowLabels#QrRowLabel',
                    },
                  },
                  fields: [
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Imagen del QR',
                    },
                    {
                      name: 'alt',
                      type: 'text',
                      label: 'Texto alternativo',
                      defaultValue: 'Código QR',
                    },
                  ],
                },
                {
                  name: 'desktopScanText',
                  type: 'text',
                  label: 'Texto de escaneo (escritorio)',
                  defaultValue: 'Escanea el código QR para descargar la app',
                },
                {
                  name: 'mobileDownloadText',
                  type: 'text',
                  label: 'Texto de descarga (móvil)',
                  defaultValue: 'Descarga la app y lleva tu bienestar siempre contigo',
                },
                {
                  name: 'phoneIcon',
                  type: 'group',
                  label: 'Icono del móvil',
                  fields: iconGroupFields({
                    defaultUseMedia: false,
                    description: 'Si está vacío se usa el icono de smartphone rosa por defecto.',
                    svgDescription:
                      'Pega aquí el código SVG como alternativa a subir media. Si está vacío se usa el icono por defecto.',
                  }),
                },
                {
                  name: 'storeButtons',
                  type: 'array',
                  dbName: 'cta_app_btn',
                  label: 'Botones de tienda',
                  maxRows: 2,
                  labels: {
                    singular: 'Botón',
                    plural: 'Botones',
                  },
                  admin: {
                    description: 'Hasta 2 (App Store y Google Play).',
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/fields/dropArrayRowLabels#StoreButtonRowLabel',
                    },
                  },
                  fields: [
                    {
                      name: 'store',
                      type: 'select',
                      label: 'Tienda',
                      required: true,
                      defaultValue: 'appStore',
                      options: [
                        { label: 'App Store', value: 'appStore' },
                        { label: 'Google Play', value: 'googlePlay' },
                      ],
                    },
                    link({
                      disableLabel: true,
                      appearances: false,
                      overrides: {
                        name: 'link',
                        label: 'Enlace',
                        admin: {
                          description: 'URL de la tienda (App Store o Google Play).',
                        },
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
            {
              name: 'headerStyle',
              type: 'group',
              label: 'Estilo del textbox principal',
              fields: sectionTypographyFields({
                defaultTextColor: '#101835',
                defaultBoldTextColor: '#C2005F',
              }),
            },
            {
              name: 'subtitleStyle',
              type: 'group',
              label: 'Estilo del subtítulo',
              fields: sectionTypographyFields({
                defaultTextColor: '#666666',
                textColorPlaceholder: '#666666',
              }),
            },
            {
              name: 'featuresStyle',
              type: 'group',
              label: 'Estilo del listado',
              fields: [
                ...sectionTypographyFields({
                  defaultTextColor: '#101835',
                }),
                colorField({
                  name: 'checkColor',
                  label: 'Color del check',
                  defaultValue: '#4CAF50',
                  placeholder: '#4CAF50',
                  admin: {
                    description: 'Color del icono de check por defecto. Hex, rgb o nombre CSS.',
                  },
                }),
                {
                  name: 'icon',
                  type: 'group',
                  label: 'Icono del check (opcional)',
                  fields: iconGroupFields({
                    defaultUseMedia: false,
                    description:
                      'Si está vacío se usa el check verde por defecto. Media o SVG sustituyen el icono de todas las filas.',
                    svgDescription:
                      'Pega aquí el código SVG como alternativa a subir media. Si está vacío se usa el icono por defecto.',
                  }),
                },
              ],
            },
            {
              type: 'row',
              fields: [
                colorField({
                  name: 'backgroundColor',
                  label: 'Color de fondo del bloque',
                  defaultValue: '#FFFFFF',
                  width: '50%',
                  placeholder: '#FFFFFF',
                }),
                colorField({
                  name: 'decorativeSvgColor',
                  label: 'Color de los SVGs decorativos',
                  defaultValue: '#C2005F',
                  width: '50%',
                  placeholder: '#C2005F',
                  admin: {
                    description: 'Color de arcos, destellos y cruces del fondo.',
                    condition: (_, siblingData) => siblingData?.showDecorativeSvgs !== false,
                  },
                }),
              ],
            },
            {
              name: 'showDecorativeSvgs',
              type: 'checkbox',
              label: 'Mostrar SVGs decorativos',
              defaultValue: true,
              admin: {
                description:
                  'Activa o desactiva los arcos, destellos y cruces del fondo (estilo Drop). La animación solo se reproduce en escritorio; en móvil se muestran fijos.',
              },
            },
            {
              name: 'enableMockupScrollAnimation',
              type: 'checkbox',
              label: 'Animar mockup al hacer scroll (solo escritorio)',
              defaultValue: true,
              admin: {
                description:
                  'Si está activo, en escritorio la imagen de la mano sube a medida que aparece el bloque y baja si se vuelve a subir. En móvil la imagen siempre es fija.',
              },
            },
            {
              name: 'mockupScrollShowPercent',
              type: 'number',
              label: 'Mostrar imagen al % de visibilidad del bloque',
              min: 1,
              max: 100,
              defaultValue: 100,
              admin: {
                condition: (_, siblingData) => siblingData?.enableMockupScrollAnimation === true,
                description:
                  '1–100. Porcentaje del bloque que debe verse para que la imagen llegue a su posición final. 100 = cuando el bloque se ve entero. 50 = cuando se ve la mitad (la imagen aparece antes).',
                placeholder: '100',
              },
            },
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
