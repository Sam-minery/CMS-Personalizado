import type { Block } from 'payload'

export const EvervaultCardBlock: Block = {
  slug: 'evervaultCard',
  interfaceName: 'EvervaultCardBlock',
  labels: {
    singular: 'Evervault Card',
    plural: 'Evervault Cards',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      label: 'Diseño',
      defaultValue: 'grid',
      options: [
        { label: 'Grid', value: 'grid' },
        { label: 'Flex (Horizontal)', value: 'flex-horizontal' },
        { label: 'Flex (Vertical)', value: 'flex-vertical' },
      ],
      admin: {
        description: 'Cómo se mostrarán las múltiples cards',
      },
    },
    {
      name: 'gridColumns',
      type: 'select',
      label: 'Columnas del grid',
      defaultValue: '3',
      options: [
        { label: '1 Columna', value: '1' },
        { label: '2 Columnas', value: '2' },
        { label: '3 Columnas', value: '3' },
        { label: '4 Columnas', value: '4' },
      ],
      admin: {
        description: 'Número de columnas cuando el diseño es Grid',
        condition: (data) => data?.layout === 'grid',
      },
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Texto de la card',
          required: true,
          defaultValue: 'hover',
          admin: {
            description: 'Texto que se muestra en el centro de la card',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          admin: {
            description: 'Título que aparece debajo de la card',
          },
        },
        {
          name: 'badgeText',
          type: 'text',
          label: 'Texto del badge',
          defaultValue: 'Watch me hover',
          admin: {
            description: 'Texto del badge/botón',
          },
        },
        {
          name: 'height',
          type: 'select',
          label: 'Altura de la card',
          defaultValue: 'h-[30rem]',
          options: [
            { label: 'Pequeña (h-[25rem])', value: 'h-[25rem]' },
            { label: 'Mediana (h-[30rem])', value: 'h-[30rem]' },
            { label: 'Grande (h-[35rem])', value: 'h-[35rem]' },
            { label: 'Extra Grande (h-[40rem])', value: 'h-[40rem]' },
          ],
        },
        {
          name: 'maxWidth',
          type: 'select',
          label: 'Ancho máximo',
          defaultValue: 'max-w-sm',
          options: [
            { label: 'Pequeño (max-w-sm)', value: 'max-w-sm' },
            { label: 'Mediano (max-w-md)', value: 'max-w-md' },
            { label: 'Grande (max-w-lg)', value: 'max-w-lg' },
            { label: 'Extra Grande (max-w-xl)', value: 'max-w-xl' },
          ],
        },
      ],
    },
  ],
}

