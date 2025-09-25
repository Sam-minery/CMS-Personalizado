import type { Block } from 'payload'

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
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline',
      defaultValue: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título Principal',
      defaultValue: 'Short heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'comparisonProducts',
      type: 'array',
      label: 'Productos de Comparación',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título de la Comparación',
          defaultValue: 'Product comparison',
        },
        {
          name: 'products',
          type: 'array',
          label: 'Productos',
          minRows: 1,
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Icono del Producto',
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
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del Botón',
          defaultValue: '#',
        },
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
