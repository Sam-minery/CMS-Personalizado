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
import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'
import { link } from '@/fields/link'

const layoutCTADropRichTextState = {
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
      TextStateFeature({ state: layoutCTADropRichTextState }),
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

const sectionTypographyFields = (opts?: { fontGroupDescription?: string }): Field[] => [
  {
    type: 'row',
    fields: [
      colorField({
        name: 'textColor',
        label: 'Color del texto principal',
        width: '50%',
        placeholder: '#101835',
        admin: {
          description: 'Hex, rgb, rgba o nombre CSS. Aplica al texto de esta sección.',
        },
      }),
      colorField({
        name: 'boldTextColor',
        label: 'Color del texto en negrita',
        width: '50%',
        placeholder: '#c2185b',
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

export const LayoutCTADropBlock: Block = {
  slug: 'layoutCTADrop',
  dbName: 'lcta_drop',
  interfaceName: 'LayoutCTADropBlock',
  labels: {
    singular: 'Layout CTA Drop',
    plural: 'Layout CTA Drop Blocks',
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
                  'ID para enlaces ancla (ej: como-empezar). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
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
                  'Título y descripción (usa negrita/colores para resaltar parte del título).',
              },
            },
            {
              name: 'steps',
              type: 'array',
              dbName: 'lcta_steps',
              label: 'Pasos',
              maxRows: 4,
              labels: {
                singular: 'Paso',
                plural: 'Pasos',
              },
              admin: {
                description: 'Máximo 4. Tag, imagen, icono y texto.',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#StepRowLabel',
                },
              },
              fields: [
                {
                  name: 'tag',
                  type: 'group',
                  label: 'Tag',
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Texto del tag',
                      defaultValue: 'Paso 01',
                    },
                    {
                      type: 'row',
                      fields: [
                        colorField({
                          name: 'backgroundColor',
                          label: 'Color de fondo',
                          defaultValue: '#FCE4EC',
                          width: '50%',
                          placeholder: '#FCE4EC',
                          admin: {
                            description:
                              'También se aplica al fondo de los iconos, de las flechas entre pasos y al resplandor de la card al agrandarse.',
                          },
                        }),
                        colorField({
                          name: 'textColor',
                          label: 'Color de texto',
                          defaultValue: '#C2005F',
                          width: '50%',
                          placeholder: '#C2005F',
                          admin: {
                            description:
                              'También se aplica al borde de los iconos y al color de las flechas entre pasos.',
                          },
                        }),
                      ],
                    },
                  ],
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Imagen del paso',
                },
                {
                  name: 'icon',
                  type: 'group',
                  label: 'Icono',
                  fields: iconGroupFields({ defaultUseMedia: false }),
                },
                {
                  name: 'content',
                  type: 'richText',
                  label: 'Textbox',
                  required: true,
                  editor: richTextEditor(),
                },
              ],
            },
            {
              name: 'buttons',
              type: 'array',
              dbName: 'lcta_btn',
              label: 'Botones CTA',
              maxRows: 1,
              labels: {
                singular: 'Botón',
                plural: 'Botones',
              },
              admin: {
                description: 'Botón principal con icono opcional (SVG).',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#ButtonRowLabel',
                },
              },
              fields: [
                link({ appearances: false }),
                svgCodeField({
                  name: 'iconSVG',
                  label: 'Icono SVG del botón (opcional)',
                  admin: {
                    description:
                      'Código SVG del icono (ej. flecha). Si está vacío se usa una flecha por defecto.',
                  },
                }),
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
              fields: sectionTypographyFields(),
            },
            {
              name: 'stepsStyle',
              type: 'group',
              label: 'Estilo de los pasos',
              fields: sectionTypographyFields(),
            },
            {
              type: 'row',
              fields: [
                colorField({
                  name: 'buttonBackgroundColor',
                  label: 'Color de fondo del botón',
                  defaultValue: '#C2005F',
                  width: '33%',
                  placeholder: '#C2005F',
                }),
                dropButtonBackgroundSecondaryField({
                  name: 'buttonBackgroundColorSecondary',
                  label: 'Color de fondo secundario',
                  width: '33%',
                }),
                colorField({
                  name: 'buttonTextColor',
                  label: 'Color de texto del botón',
                  defaultValue: '#FFFFFF',
                  width: '33%',
                  placeholder: '#FFFFFF',
                }),
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
                    description: 'Color de estrellas, arcos y cruces del fondo.',
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
                description: 'Activa o desactiva las estrellas, arcos y cruces animadas del fondo.',
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
