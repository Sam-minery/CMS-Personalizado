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

const faqDropRichTextState = {
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
      TextStateFeature({ state: faqDropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const FAQDropBlock: Block = {
  slug: 'faqDrop',
  // Nombre corto en DB: evita enums/tablas > 63 chars (límite Postgres)
  dbName: 'fqd',
  interfaceName: 'FAQDropBlock',
  labels: {
    singular: 'FAQ DROP',
    plural: 'FAQ DROP Blocks',
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
                description:
                  'Título del bloque. Usa negrita para resaltar palabras (ej. "frecuentes").',
              },
            },
            {
              name: 'questions',
              type: 'array',
              dbName: 'fqd_q',
              label: 'Preguntas frecuentes',
              minRows: 1,
              maxRows: 10,
              labels: { singular: 'Pregunta', plural: 'Preguntas' },
              admin: {
                description: 'Máximo 10. Cada elemento es un acordeón con pregunta y respuesta.',
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#QuestionRowLabel',
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
                  label: 'Color de fondo del contenedor del icono',
                  defaultValue: '#fce4ec',
                  placeholder: '#fce4ec',
                  admin: {
                    description: 'Círculo detrás del icono.',
                  },
                }),
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
                colorField({
                  name: 'accentColor',
                  label: 'Color de acento y fondo de respuesta',
                  defaultValue: '#a1004a',
                  placeholder: '#a1004a',
                  admin: {
                    description:
                      'Color del icono, del +/− y de la pregunta abierta. Un tono más claro se usa para el reborde de la pregunta y el fondo del desplegable de respuesta.',
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
              type: 'row',
              fields: [
                colorField({
                  name: 'backgroundColor',
                  label: 'Color de fondo del bloque',
                  defaultValue: '#ffffff',
                  width: '50%',
                  placeholder: '#ffffff',
                  admin: {
                    description: 'Hex, rgb, rgba o nombre CSS.',
                  },
                }),
                colorField({
                  name: 'questionsSectionBackgroundColor',
                  label: 'Color de fondo de la sección de preguntas',
                  defaultValue: '#ffffff',
                  width: '50%',
                  placeholder: '#ffffff',
                  admin: {
                    description:
                      'Fondo del contenedor del cuestionario (card en desktop) y de cada fila de pregunta.',
                  },
                }),
              ],
            },
            {
              type: 'row',
              fields: [
                colorField({
                  name: 'textColor',
                  label: 'Color de texto principal',
                  defaultValue: '#101835',
                  width: '50%',
                  placeholder: '#101835',
                  admin: {
                    description:
                      'Aplica al RichText principal (texto normal), a las preguntas cerradas y a las respuestas.',
                  },
                }),
                colorField({
                  name: 'boldTextColor',
                  label: 'Color de texto negrita',
                  defaultValue: '#a1004a',
                  width: '50%',
                  placeholder: '#a1004a',
                  admin: {
                    description: 'Color para strong/b en el RichText principal y para el separador SVG.',
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
                      'Tipografía y tamaños del Font Group se aplican al RichText principal y a preguntas y respuestas del acordeón.',
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
