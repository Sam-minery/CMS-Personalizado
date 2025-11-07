import type { Block } from 'payload'

export const Banner9: Block = {
  slug: 'banner9',
  labels: {
    singular: 'Banner 9',
    plural: 'Banner 9',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Medium length banner heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'logoUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'URL de enlace para el logo (opcional)',
      },
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          defaultValue: '#',
        },
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
          ],
        },
      ],
      defaultValue: [
        { url: '#', platform: 'facebook' },
        { url: '#', platform: 'instagram' },
        { url: '#', platform: 'twitter' },
        { url: '#', platform: 'linkedin' },
      ],
    },
  ],
  interfaceName: 'Banner9Block',
}
