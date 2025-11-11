import type { Block } from 'payload'

export const GlareCardBlock: Block = {
  slug: 'glareCard',
  interfaceName: 'GlareCardBlock',
  labels: {
    singular: 'Glare Card',
    plural: 'Glare Cards',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Tarjetas',
      minRows: 1,
      required: true,
      admin: {
        description: 'Agrega tarjetas con efecto Glare. Cada tarjeta puede ser de tipo icono, imagen o texto.',
      },
      fields: [
        {
          name: 'cardType',
          type: 'select',
          label: 'Tipo de tarjeta',
          required: true,
          defaultValue: 'icon',
          options: [
            { label: 'Icono', value: 'icon' },
            { label: 'Imagen', value: 'image' },
            { label: 'Texto', value: 'text' },
          ],
          admin: {
            description: 'Selecciona el tipo de contenido para esta tarjeta',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen',
          admin: {
            condition: (_data, siblingData) => siblingData?.cardType === 'image',
            description: 'Imagen para la tarjeta (solo para tipo imagen)',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          admin: {
            condition: (_data, siblingData) => siblingData?.cardType === 'text',
            description: 'Título que se mostrará en la tarjeta (solo para tipo texto)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          admin: {
            condition: (_data, siblingData) => siblingData?.cardType === 'text',
            description: 'Descripción que se mostrará en la tarjeta (solo para tipo texto)',
          },
        },
      ],
    },
    {
      name: 'gridCols',
      type: 'select',
      label: 'Número de columnas',
      defaultValue: '3',
      options: [
        { label: '1 columna', value: '1' },
        { label: '2 columnas', value: '2' },
        { label: '3 columnas', value: '3' },
        { label: '4 columnas', value: '4' },
      ],
      admin: {
        description: 'Número de columnas en el grid. En móvil siempre se mostrará 1 columna.',
      },
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding vertical',
      defaultValue: 'py-20',
      options: [
        { label: 'Sin padding (py-0)', value: 'py-0' },
        { label: 'Padding pequeño (py-10)', value: 'py-10' },
        { label: 'Padding mediano (py-20)', value: 'py-20' },
        { label: 'Padding grande (py-40)', value: 'py-40' },
      ],
      admin: {
        description: 'Espaciado vertical del contenedor',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      defaultValue: 'bg-white dark:bg-black',
      options: [
        { label: 'Blanco/Negro (bg-white dark:bg-black)', value: 'bg-white dark:bg-black' },
        { label: 'Blanco (bg-white)', value: 'bg-white' },
        { label: 'Negro (bg-black)', value: 'bg-black' },
        { label: 'Transparente (bg-transparent)', value: 'bg-transparent' },
      ],
      admin: {
        description: 'Color de fondo del contenedor principal',
      },
    },
  ],
}

