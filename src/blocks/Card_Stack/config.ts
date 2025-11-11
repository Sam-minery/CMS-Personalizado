import type { Block } from 'payload'

export const CardStackBlock: Block = {
  slug: 'cardStack',
  interfaceName: 'CardStackBlock',
  fields: [
    {
      name: 'height',
      type: 'select',
      label: 'Altura',
      defaultValue: 'h-[40rem]',
      options: [
        { label: 'Pequeña (h-[30rem])', value: 'h-[30rem]' },
        { label: 'Mediana (h-[40rem])', value: 'h-[40rem]' },
        { label: 'Grande (h-[50rem])', value: 'h-[50rem]' },
        { label: 'Automática', value: 'h-auto' },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Tarjetas',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nombre',
        },
        {
          name: 'designation',
          type: 'text',
          required: true,
          label: 'Designación',
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          label: 'Contenido',
          admin: {
            description: 'Escribe el contenido. Usa **texto** para resaltar palabras o frases.',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Card Stack',
    singular: 'Card Stack',
  },
}

