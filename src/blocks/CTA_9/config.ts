import type { Block } from 'payload'

export const CTA9Block: Block = {
  slug: 'cta9',
  interfaceName: 'CTA9Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Medium length heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones',
      minRows: 1,
      maxRows: 3,
      defaultValue: [
        {
          title: 'Button',
          variant: 'primary',
          url: '#',
        },
        {
          title: 'Button',
          variant: 'secondary-alt',
          url: '#',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del botón',
          defaultValue: 'Button',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variante del botón',
          defaultValue: 'primary',
          options: [
            {
              label: 'Primario',
              value: 'primary',
            },
            {
              label: 'Secundario',
              value: 'secondary',
            },
            {
              label: 'Secundario Alternativo',
              value: 'secondary-alt',
            },
            {
              label: 'Fantasma',
              value: 'ghost',
            },
            {
              label: 'Enlace',
              value: 'link',
            },
          ],
        },
        {
          name: 'size',
          type: 'select',
          label: 'Tamaño del botón',
          defaultValue: 'default',
          options: [
            { label: 'Pequeño', value: 'sm' },
            { label: 'Mediano', value: 'default' },
            { label: 'Grande', value: 'lg' },
          ],
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del botón',
          defaultValue: '#',
          admin: {
            description: 'URL a la que debe redirigir el botón',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen de fondo',
    },
  ],
  labels: {
    plural: 'CTAs 9',
    singular: 'CTA 9',
  },
}