import type { Block } from 'payload'

export const FocusCardsBlock: Block = {
  slug: 'focusCards',
  interfaceName: 'FocusCardsBlock',
  labels: {
    singular: 'Focus Cards',
    plural: 'Focus Cards',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Tarjetas',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          required: true,
          admin: {
            description: 'Título que se muestra cuando se hace hover sobre la tarjeta',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
          admin: {
            description: 'Imagen de la tarjeta',
          },
        },
      ],
    },
  ],
}
