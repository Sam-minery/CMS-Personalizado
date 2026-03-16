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
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const richTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      AlignFeature(),
      IndentFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      ChecklistFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const LayoutSendaBlock: Block = {
  slug: 'layoutSenda',
  interfaceName: 'LayoutSendaBlock',
  labels: {
    singular: 'Layout SENDA',
    plural: 'Layout SENDA Blocks',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description: 'ID para enlaces ancla (ej: mi-seccion). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: richTextEditor(),
      label: 'Contenido principal (RichText)',
      required: false,
    },
    {
      name: 'image',
      type: 'group',
      label: 'Imagen principal',
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: true,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen de la libreria',
          },
        },
        {
          name: 'src',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'URL de la imagen cuando no se usa media subida',
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo',
          defaultValue: 'Layout SENDA image',
        },
      ],
    },
    {
      name: 'subHeadings',
      type: 'array',
      dbName: 'ls_sub',
      label: 'Subheadings',
      maxRows: 2,
      fields: [
        {
          name: 'icon',
          type: 'group',
          label: 'Icono',
          fields: [
            {
              name: 'useMedia',
              type: 'checkbox',
              label: 'Usar imagen subida',
              defaultValue: false,
            },
            {
              name: 'mediaImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === true,
                description: 'Seleccione una imagen para el icono',
              },
            },
            {
              name: 'iconSVG',
              type: 'textarea',
              label: 'Icono SVG',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
                description: 'Codigo SVG del icono del subheading',
              },
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt del icono',
              defaultValue: 'Subheading icon',
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          editor: richTextEditor(),
          label: 'Contenido del subheading (RichText)',
          required: false,
        },
      ],
    },
    {
      name: 'buttons',
      type: 'array',
      dbName: 'ls_btns',
      label: 'Botones',
      maxRows: 2,
      fields: [
        link({ appearances: false }),
        {
          name: 'appearance',
          type: 'select',
          dbName: 'app',
          label: 'Estilo del boton',
          defaultValue: 'secondary',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Link', value: 'link' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          dbName: 'sz',
          label: 'Tamano del boton',
          defaultValue: 'sm',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Large', value: 'lg' },
            { label: 'Clear', value: 'clear' },
          ],
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del boton (opcional)',
        },
      ],
    },
    {
      name: 'invertLayout',
      type: 'checkbox',
      label: 'Invertir disposicion',
      defaultValue: false,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto principal',
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
    },
    {
      name: 'buttonBackgroundColor',
      type: 'text',
      label: 'Color de fondo de botones',
    },
    {
      name: 'buttonTextColor',
      type: 'text',
      label: 'Color del texto de botones',
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografia',
      admin: {
        condition: (_, siblingData) => !siblingData?.useCustomFont,
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
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente',
      admin: {
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
  ],
}
