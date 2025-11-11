import type { Block } from 'payload'

export const HoverEffectBlock: Block = {
  slug: 'hoverEffect',
  interfaceName: 'HoverEffectBlock',
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
      name: 'projects',
      type: 'array',
      label: 'Proyectos',
      minRows: 1,
      fields: [
        {
          name: 'title',
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
          name: 'link',
          type: 'text',
          required: false,
          label: 'Enlace',
        },
      ],
    },
  ],
  labels: {
    plural: 'Hover Effect',
    singular: 'Hover Effect',
  },
}

