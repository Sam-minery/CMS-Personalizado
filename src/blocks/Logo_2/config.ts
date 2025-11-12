import type { Block } from 'payload'

export const Logo2: Block = {
  slug: 'logo2',
  interfaceName: 'Logo2Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título principal',
      defaultValue: "Used by the world's leading companies",
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen del logo',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo',
        },
      ],
    },
  ],
  labels: {
    plural: 'Logos 2',
    singular: 'Logo 2',
  },
}
