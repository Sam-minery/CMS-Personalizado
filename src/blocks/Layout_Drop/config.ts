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

import { dropButtonBackgroundSecondaryField } from '@/fields/dropButtonBackgroundSecondary'
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

/** Tipografía + colores por sección (mismo set que Layout_SENDA). */
const sectionTypographyFields = (opts?: {
  fontGroupDescription?: string
}): Field[] => [
  {
    name: 'textColor',
    type: 'text',
    label: 'Color del texto principal',
    admin: {
      description: 'Hex, rgb, rgba o nombre CSS. Aplica al texto de esta sección.',
      placeholder: '#101835',
    },
  },
  {
    name: 'boldTextColor',
    type: 'text',
    label: 'Color del texto en negrita',
    admin: {
      description: 'Color para strong/b dentro del RichText de esta sección.',
      placeholder: '#c2185b',
    },
  },
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
]

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
      name: 'headerStyle',
      type: 'group',
      label: 'Estilo del textbox principal',
      admin: {
        description: 'Colores y tipografía del header.',
      },
      fields: sectionTypographyFields(),
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
      name: 'elementsStyle',
      type: 'group',
      label: 'Estilo de la sección elementos',
      admin: {
        description: 'Colores, borde y tipografía de las cards (todos los elementos).',
      },
      fields: [
        {
          name: 'borderColor',
          type: 'text',
          label: 'Color del borde de las cards',
          defaultValue: '#e5e7eb',
          admin: {
            description: 'Hex, rgb, rgba o nombre CSS. Ej: #e5e7eb, #c2185b',
            placeholder: '#e5e7eb',
          },
        },
        {
          name: 'hoverColor',
          type: 'text',
          label: 'Color de hover y círculos de iconos',
          defaultValue: '#E91E63',
          admin: {
            description:
              'Color del resplandor al pasar el ratón sobre las cards y del círculo de fondo de los iconos.',
            placeholder: '#E91E63',
          },
        },
        {
          name: 'shadow',
          type: 'select',
          label: 'Sombra de las cards',
          defaultValue: 'none',
          options: [
            { label: 'Sin sombra', value: 'none' },
            { label: 'Suave', value: 'sm' },
            { label: 'Media', value: 'md' },
            { label: 'Fuerte', value: 'lg' },
            { label: 'Muy fuerte', value: 'xl' },
          ],
          admin: {
            description: 'Intensidad de la sombra aplicada a las cards.',
          },
        },
        ...sectionTypographyFields(),
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
        {
          name: 'borderColor',
          type: 'text',
          label: 'Color del borde del formulario',
          defaultValue: '#e5e7eb',
          admin: {
            description: 'Hex, rgb, rgba o nombre CSS. Ej: #e5e7eb, #c2185b',
            placeholder: '#e5e7eb',
          },
        },
        {
          name: 'shadow',
          type: 'select',
          label: 'Sombra del formulario',
          defaultValue: 'lg',
          options: [
            { label: 'Sin sombra', value: 'none' },
            { label: 'Suave', value: 'sm' },
            { label: 'Media', value: 'md' },
            { label: 'Fuerte', value: 'lg' },
            { label: 'Muy fuerte', value: 'xl' },
          ],
          admin: {
            description: 'Intensidad de la sombra aplicada a la caja del formulario.',
          },
        },
        ...sectionTypographyFields({
          fontGroupDescription:
            'Tipografía del título del formulario. El texto del botón usa el tamaño “texto normal” (body) del grupo.',
        }),
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
        ...sectionTypographyFields(),
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
            description: 'Color sólido. Si también rellenas el secundario, se usa como degradado.',
            placeholder: '#e91e63',
          },
        },
        dropButtonBackgroundSecondaryField({
          placeholder: '#6a1b4d',
        }),
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
      name: 'blockHeightMode',
      type: 'select',
      label: 'Altura del bloque',
      defaultValue: 'auto',
      options: [
        { label: 'Automática (depende del contenido)', value: 'auto' },
        { label: 'Alta (relativa al viewport)', value: 'viewport' },
        { label: 'Personalizada (px)', value: 'custom' },
      ],
      admin: {
        description: 'Controla la altura mínima del bloque.',
      },
    },
    {
      name: 'customBlockHeightPx',
      type: 'number',
      label: 'Altura personalizada (min-height en px)',
      admin: {
        description: 'Define la altura mínima en píxeles cuando la altura es "Personalizada (px)".',
        condition: (_, siblingData) => siblingData?.blockHeightMode === 'custom',
      },
    },
    {
      name: 'backgroundType',
      type: 'select',
      label: 'Tipo de fondo',
      defaultValue: 'color',
      options: [
        { label: 'Color plano', value: 'color' },
        { label: 'Imagen de fondo', value: 'image' },
        { label: 'Video de YouTube', value: 'video' },
      ],
      admin: {
        description: 'Elige si el fondo será un color, una imagen o un video.',
      },
    },
    {
      name: 'video',
      type: 'group',
      label: 'Video',
      admin: {
        condition: (_, siblingData) => siblingData?.backgroundType === 'video',
      },
      fields: [
        {
          name: 'youtubeUrl',
          type: 'text',
          required: false,
          label: 'URL de YouTube',
          admin: {
            description:
              'Pega la URL del video de YouTube (ej: https://www.youtube.com/watch?v=VIDEO_ID)',
          },
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de fondo',
      admin: {
        description: 'Imagen de fondo cuando el tipo de fondo es "Imagen".',
        condition: (_, siblingData) => siblingData?.backgroundType === 'image',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
      defaultValue: '#ffffff',
      admin: {
        description: 'Color plano. Hex, rgb, rgba o nombre (ej: #ffffff, rgba(0,0,0,0.5))',
        placeholder: '#ffffff',
        condition: (_, siblingData) =>
          !siblingData?.backgroundType || siblingData?.backgroundType === 'color',
      },
    },
    {
      name: 'backgroundColorMode',
      type: 'select',
      label: 'Modo de color de fondo',
      defaultValue: 'solid',
      options: [
        { label: 'Color sólido', value: 'solid' },
        { label: 'Degradado', value: 'gradient' },
      ],
      admin: {
        description: 'Elige si el color será sólido o un degradado',
        condition: (_, siblingData) =>
          !siblingData?.backgroundType || siblingData?.backgroundType === 'color',
      },
    },
    {
      name: 'gradientStartColor',
      type: 'text',
      label: 'Color inicial del degradado',
      admin: {
        description: 'Hex, rgb, rgba o nombre.',
        placeholder: '#ff0000',
        condition: (_, siblingData) =>
          (!siblingData?.backgroundType || siblingData?.backgroundType === 'color') &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'gradientEndColor',
      type: 'text',
      label: 'Color final del degradado',
      admin: {
        description: 'Hex, rgb, rgba o nombre.',
        placeholder: '#0000ff',
        condition: (_, siblingData) =>
          (!siblingData?.backgroundType || siblingData?.backgroundType === 'color') &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'gradientDirection',
      type: 'select',
      label: 'Dirección del degradado',
      defaultValue: 'to-right',
      options: [
        { label: 'De izquierda a derecha', value: 'to-right' },
        { label: 'De derecha a izquierda', value: 'to-left' },
        { label: 'De arriba hacia abajo', value: 'to-bottom' },
        { label: 'De abajo hacia arriba', value: 'to-top' },
        { label: 'Diagonal (↘︎)', value: 'diagonal-down' },
        { label: 'Diagonal (↗︎)', value: 'diagonal-up' },
      ],
      admin: {
        condition: (_, siblingData) =>
          (!siblingData?.backgroundType || siblingData?.backgroundType === 'color') &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
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
}
