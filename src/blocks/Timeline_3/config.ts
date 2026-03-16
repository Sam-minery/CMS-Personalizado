import type { Block } from 'payload'

export const Timeline3: Block = {
  slug: 'timeline3',
  interfaceName: 'Timeline3Block',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título principal',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones principales',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del botón',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variante',
          options: [
            { label: 'Primario', value: 'default' },
            { label: 'Secundario', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'size',
          type: 'select',
          label: 'Tamaño',
          options: [
            { label: 'Pequeño', value: 'sm' },
            { label: 'Mediano', value: 'default' },
            { label: 'Grande', value: 'lg' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'href',
          type: 'text',
          label: 'Enlace',
        },
      ],
    },
    {
      name: 'timelines',
      type: 'array',
      label: 'Elementos de la línea de tiempo',
      fields: [
        {
          name: 'date',
          type: 'text',
          required: true,
          label: 'Fecha',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Título del elemento',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción del elemento',
        },
        {
          name: 'buttons',
          type: 'array',
          label: 'Botones del elemento',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Texto del botón',
            },
            {
              name: 'variant',
              type: 'select',
              label: 'Variante',
              options: [
                { label: 'Primario', value: 'default' },
                { label: 'Secundario', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Link', value: 'link' },
              ],
              defaultValue: 'default',
            },
            {
              name: 'size',
              type: 'select',
              label: 'Tamaño',
              options: [
                { label: 'Pequeño', value: 'sm' },
                { label: 'Mediano', value: 'default' },
                { label: 'Grande', value: 'lg' },
                { label: 'Link', value: 'link' },
              ],
              defaultValue: 'default',
            },
            {
              name: 'href',
              type: 'text',
              label: 'Enlace',
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen del elemento',
        },
      ],
    },
  ],
  labels: {
    plural: 'Timelines 3',
    singular: 'Timeline 3',
  },
}
