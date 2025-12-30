import type { Block } from 'payload'

export const InfiniteMovingCardsBlock: Block = {
  slug: 'infiniteMovingCards',
  interfaceName: 'InfiniteMovingCardsBlock',
  fields: [
    {
      name: 'colorScheme',
      type: 'select',
      label: 'Esquema de Colores',
      defaultValue: 'slate',
      options: [
        { label: 'Gris (Slate)', value: 'slate' },
        { label: 'Azul', value: 'blue' },
        { label: 'Rojo', value: 'red' },
        { label: 'Verde', value: 'green' },
        { label: 'Morado', value: 'purple' },
        { label: 'Rosa', value: 'pink' },
        { label: 'Naranja', value: 'orange' },
        { label: 'Emeralda', value: 'emerald' },
        { label: 'Amber', value: 'amber' },
        { label: 'Indigo', value: 'indigo' },
      ],
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura del Contenedor',
      defaultValue: '40rem',
      options: [
        { label: 'Pequeña (30rem)', value: '30rem' },
        { label: 'Mediana (40rem)', value: '40rem' },
        { label: 'Grande (50rem)', value: '50rem' },
        { label: 'Extra Grande (60rem)', value: '60rem' },
      ],
    },
    {
      name: 'direction',
      type: 'select',
      label: 'Dirección',
      defaultValue: 'left',
      options: [
        { label: 'Izquierda', value: 'left' },
        { label: 'Derecha', value: 'right' },
      ],
    },
    {
      name: 'speed',
      type: 'select',
      label: 'Velocidad',
      defaultValue: 'normal',
      options: [
        { label: 'Rápida', value: 'fast' },
        { label: 'Normal', value: 'normal' },
        { label: 'Lenta', value: 'slow' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Tarjetas',
      minRows: 2,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Imagen',
          admin: {
            description: 'Imagen opcional para la tarjeta',
          },
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          label: 'Cita',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Nombre',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
      ],
    },
  ],
  labels: {
    plural: 'Infinite Moving Cards',
    singular: 'Infinite Moving Cards',
  },
}
