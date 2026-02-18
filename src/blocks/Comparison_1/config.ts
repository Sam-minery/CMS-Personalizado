import type { Block } from 'payload'
import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  ParagraphFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { simpleLink } from '@/fields/simpleLink'

export const Comparison1: Block = {
  slug: 'comparison1',
  dbName: 'comparison_1',
  interfaceName: 'Comparison1Block',
  labels: {
    singular: 'Comparison 1',
    plural: 'Comparison 1',
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      label: 'Contenido principal',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => [
          ...rootFeatures,
          ParagraphFeature(),
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
        ],
      }),
    },
    {
      name: 'background_color',
      type: 'text',
      label: 'Color de fondo',
      admin: { description: 'Ej: #ffffff, rgb(255,255,255)' },
    },
    {
      name: 'text_color',
      type: 'text',
      label: 'Color del texto',
    },
    {
      name: 'bold_text_color',
      type: 'text',
      label: 'Color del texto en negrita',
    },
    {
      name: 'button_background_color',
      type: 'text',
      label: 'Color de fondo de botones',
    },
    {
      name: 'button_text_color',
      type: 'text',
      label: 'Color del texto de botones',
    },
    {
      name: 'comparisonTitle',
      type: 'text',
      required: true,
      label: 'Título de Comparación',
      defaultValue: 'Product comparison',
    },
    {
      name: 'comparisonProducts',
      type: 'array',
      label: 'Productos de Comparación',
      minRows: 1,
      maxRows: 1,
      fields: [
        {
          name: 'products',
          type: 'array',
          label: 'Productos',
          minRows: 1,
          maxRows: 3,
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              required: false,
              label: 'Icono del Producto (Opcional)',
            },
            {
              name: 'productName',
              type: 'text',
              required: true,
              label: 'Nombre del Producto',
              defaultValue: 'Product name',
            },
            {
              name: 'description',
              type: 'text',
              required: true,
              label: 'Descripción del Producto',
              defaultValue: 'Lorem ipsum dolor sit amet',
            },
          ],
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Características',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Texto de la Característica',
          defaultValue: 'Feature text goes here',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Elementos de la Característica',
          minRows: 2,
          maxRows: 3,
          fields: [
            {
              name: 'type',
              type: 'select',
              required: true,
              label: 'Tipo de Elemento',
              options: [
                { label: 'Texto', value: 'text' },
                { label: 'Check (✓)', value: 'check' },
                { label: 'X', value: 'x' },
              ],
              defaultValue: 'text',
            },
            {
              name: 'textValue',
              type: 'text',
              label: 'Valor de Texto',
              admin: {
                condition: (data, siblingData) => siblingData?.type === 'text',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones',
      dbName: 'comparison_1_buttons',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del Botón',
          defaultValue: 'Button',
        },
        {
          name: 'variant',
          type: 'select',
          required: true,
          label: 'Variante del Botón',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'secondary',
        },
        {
          name: 'size',
          type: 'select',
          required: true,
          label: 'Tamaño del Botón',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'md',
        },
        simpleLink({
          overrides: {
            name: 'link',
            label: 'Enlace del Botón',
          }
        }),
        {
          name: 'iconRight',
          type: 'checkbox',
          label: 'Mostrar Icono a la Derecha',
          defaultValue: false,
        },
      ],
    },
  ],
}
