import type { Block } from 'payload'

export const Logo1: Block = {
  slug: 'logo1',
  interfaceName: 'Logo1Block',
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
    plural: 'Logos 1',
    singular: 'Logo 1',
  },
}
