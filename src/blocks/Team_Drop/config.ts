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

import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'

const teamDropRichTextState = {
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
      TextStateFeature({ state: teamDropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

const iconGroupFields = (opts?: { defaultUseMedia?: boolean; description?: string }) => [
  {
    name: 'useMedia',
    type: 'checkbox' as const,
    label: 'Usar imagen / GIF subido',
    defaultValue: opts?.defaultUseMedia ?? false,
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
      description: 'Pega aquí el código SVG como alternativa a subir media. Si está vacío se usa el divisor por defecto.',
    },
  },
  {
    name: 'alt',
    type: 'text' as const,
    label: 'Texto alternativo',
    defaultValue: 'Icono',
  },
]

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
      placeholder: '#C2005F',
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

export const TeamDropBlock: Block = {
  slug: 'teamDrop',
  dbName: 'team_drop',
  interfaceName: 'TeamDropBlock',
  labels: {
    singular: 'Drop Team',
    plural: 'Drop Team Blocks',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla (ej: equipo). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
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
          'Título principal (usa negrita/colores para resaltar parte del título, ej. "nuestro equipo").',
      },
    },
    {
      name: 'headerStyle',
      type: 'group',
      label: 'Estilo del textbox principal',
      fields: sectionTypographyFields(),
    },
    {
      name: 'dividerIcon',
      type: 'group',
      label: 'Icono',
      fields: iconGroupFields({
        defaultUseMedia: false,
        description:
          'Icono divisor entre el título y el texto secundario. Si no hay media ni SVG, se muestra el divisor por defecto.',
      }),
    },
    {
      name: 'secondaryContent',
      type: 'richText',
      label: 'Textbox secundario',
      editor: richTextEditor(),
      admin: {
        description: 'Párrafo introductorio bajo el icono divisor.',
      },
    },
    {
      name: 'secondaryStyle',
      type: 'group',
      label: 'Estilo del textbox secundario',
      fields: sectionTypographyFields(),
    },
    {
      name: 'members',
      type: 'array',
      dbName: 'team_members',
      label: 'Sección equipo',
      maxRows: 6,
      labels: {
        singular: 'Miembro',
        plural: 'Miembros',
      },
      admin: {
        description: 'Máximo 6. Imagen + texto (nombre y rol).',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen',
          required: true,
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Textbox',
          required: true,
          editor: richTextEditor(),
          admin: {
            description: 'Nombre (negrita) y rol/descripción debajo.',
          },
        },
      ],
    },
    {
      name: 'membersStyle',
      type: 'group',
      label: 'Estilo de la sección equipo',
      fields: sectionTypographyFields(),
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
      defaultValue: '#FFFFFF',
      admin: {
        placeholder: '#FFFFFF',
      },
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Color de círculo, punto y separador',
      defaultValue: '#C2005F',
      admin: {
        placeholder: '#C2005F',
        description:
          'Color del punto sobre las fotos y del SVG divisor. El círculo degradado detrás de las imágenes usa una versión más clara de este color.',
      },
    },
    {
      name: 'showDecorativeSvgs',
      type: 'checkbox',
      label: 'Mostrar SVGs decorativos',
      defaultValue: true,
      admin: {
        description: 'Activa o desactiva los arcos y destellos animados del fondo.',
      },
    },
    {
      name: 'decorativeSvgColor',
      type: 'text',
      label: 'Color de los SVGs decorativos',
      defaultValue: '#C2005F',
      admin: {
        placeholder: '#C2005F',
        description: 'Color de arcos, destellos y cruces del fondo.',
        condition: (_, siblingData) => siblingData?.showDecorativeSvgs !== false,
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
