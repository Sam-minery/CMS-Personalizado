import type { Block } from 'payload'

export const Comparison13: Block = {
  slug: 'comparison13',
  dbName: 'comparison_13',
  interfaceName: 'Comparison13Block',
  labels: {
    singular: 'Comparison 13',
    plural: 'Comparison 13',
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
        {
          name: 'mainFeatures',
          type: 'array',
          label: 'Características Principales',
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
              minRows: 1,
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
          name: 'features',
          type: 'array',
          label: 'Características Adicionales',
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
              minRows: 1,
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
                  defaultValue: 'check',
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
      ],
    },
  ],
}
