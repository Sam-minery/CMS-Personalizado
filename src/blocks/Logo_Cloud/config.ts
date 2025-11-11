import type { Block } from 'payload'

export const LogoCloudBlock: Block = {
  slug: 'logoCloud',
  interfaceName: 'LogoCloudBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Trusted by modern operators across industries.',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Descripción',
      defaultValue: 'From pilot to scale without chaos.',
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
          name: 'title',
          type: 'text',
          label: 'Título/Alt del logo',
        },
      ],
    },
  ],
  labels: {
    plural: 'Logo Cloud',
    singular: 'Logo Cloud',
  },
}


