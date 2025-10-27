import type { Block } from 'payload'

export const CTA_custom_2: Block = {
  slug: 'cta_custom_2',
  interfaceName: 'CTA_custom_2Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
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
      label: 'Botones',
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
      label: 'Imagen',
    },
  ],
  labels: {
    plural: 'CTAs 1',
    singular: 'CTA 1',
  },
} 