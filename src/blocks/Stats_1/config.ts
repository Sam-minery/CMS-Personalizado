import type { Block } from 'payload'

export const Stats1: Block = {
  slug: 'stats1',
  dbName: 'stats_1',
  interfaceName: 'Stats1Block',
  labels: {
    singular: 'Stats 1',
    plural: 'Stats 1',
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
      defaultValue: 'Medium length section heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
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
    {
      name: 'stats',
      type: 'array',
      label: 'Estadísticas',
      minRows: 1,
      fields: [
        {
          name: 'percentage',
          type: 'text',
          required: true,
          label: 'Porcentaje',
          defaultValue: '30%',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Título de la Estadística',
          defaultValue: 'Short heading goes here',
        },
      ],
    },
  ],
}
