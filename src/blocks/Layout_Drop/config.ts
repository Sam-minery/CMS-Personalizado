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

import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'

const layoutDropRichTextState = {
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
      TextStateFeature({ state: layoutDropRichTextState }),
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

const formFieldGroup = (name: string, label: string, defaultValue: string) => ({
  name,
  type: 'group' as const,
  label,
  fields: [
    {
      name: 'icon',
      type: 'group' as const,
      label: 'Icono',
      fields: iconGroupFields({ defaultUseMedia: false }),
    },
    {
      name: 'value',
      type: 'text' as const,
      label: 'Valor (placeholder)',
      required: true,
      defaultValue,
      admin: {
        description: 'Texto placeholder del campo en el formulario.',
      },
    },
  ],
})

export const LayoutDropBlock: Block = {
  slug: 'layoutDrop',
  interfaceName: 'LayoutDropBlock',
  labels: {
    singular: 'Layout Drop',
    plural: 'Layout Drop Blocks',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla (ej: ayuda). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
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
          'Título y descripción en el mismo campo RichText (usa negrita/colores para resaltar parte del título).',
      },
    },
    {
      name: 'elements',
      type: 'array',
      dbName: 'ld_el',
      label: 'Sección elementos',
      minRows: 1,
      maxRows: 6,
      labels: {
        singular: 'Elemento',
        plural: 'Elementos',
      },
      admin: {
        description: 'Máximo 6 elementos. Cada uno con icono/GIF y texto.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'icon',
          type: 'group',
          label: 'Icono / GIF',
          fields: iconGroupFields({ defaultUseMedia: true }),
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
      name: 'contactForm',
      type: 'group',
      label: 'Formulario de contacto',
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
          label: 'Textbox',
          required: true,
          editor: richTextEditor(),
          admin: {
            description: 'Título y subtítulo del formulario (ej: "¿Tienes dudas? Te llamamos.").',
          },
        },
        formFieldGroup('nameField', 'Nombre', 'Nombre'),
        formFieldGroup('phoneField', 'Teléfono', 'Teléfono'),
        formFieldGroup('emailField', 'Email', 'Email'),
      ],
    },
    {
      name: 'privacyPolicy',
      type: 'group',
      label: 'Política de privacidad',
      fields: [
        {
          name: 'required',
          type: 'checkbox',
          label: 'Checkbox obligatorio',
          defaultValue: true,
          admin: {
            description:
              'Si está activo, el usuario debe marcar el checkbox para poder continuar.',
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Textbox',
          required: true,
          editor: richTextEditor(),
          admin: {
            description:
              'Texto junto al checkbox. Usa un enlace o negrita/color para "política de privacidad".',
          },
        },
      ],
    },
    {
      name: 'button',
      type: 'group',
      label: 'Botón',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Texto del botón',
          required: true,
          defaultValue: 'Continuar',
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
          admin: {
            description: 'SVG a la derecha del texto (ej. flecha). Dejar vacío para no mostrar icono.',
          },
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo del botón',
          admin: {
            description:
              'Color sólido o degradado CSS. Ej: #a1004a o linear-gradient(90deg, #e91e63, #6a1b4d)',
            placeholder: 'linear-gradient(90deg, #e91e63, #6a1b4d)',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Color del texto del botón',
          defaultValue: '#ffffff',
          admin: {
            placeholder: '#ffffff',
          },
        },
        {
          name: 'link',
          type: 'group',
          label: 'Enlace del botón (opcional)',
          admin: {
            description:
              'Si se configura, tras enviar el formulario se navega a este enlace. Si está vacío, solo se envía el formulario.',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  admin: { layout: 'horizontal', width: '50%' },
                  defaultValue: 'custom',
                  options: [
                    { label: 'Internal link', value: 'reference' },
                    { label: 'Custom URL', value: 'custom' },
                  ],
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  admin: { style: { alignSelf: 'flex-end' }, width: '50%' },
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
                  required: false,
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'custom',
                    width: '50%',
                  },
                  label: 'Custom URL',
                  required: false,
                },
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
      defaultValue: '#ffffff',
      admin: {
        description: 'Cualquier color CSS válido.',
        placeholder: '#ffffff',
      },
    },
  ],
}
