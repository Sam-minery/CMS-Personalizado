import type { Block } from 'payload'

export const Banner2Block: Block = {
  slug: 'banner2',
  interfaceName: 'Banner2Block',
  labels: {
    singular: 'Banner 2 block',
    plural: 'Banner 2 blocks',
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
      type: 'group',
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar Media',
          defaultValue: false,
        },
        {
          name: 'mediaImage',
          type: 'relationship',
          relationTo: 'media',
          admin: {
            condition: (data, siblingData) => siblingData?.useMedia === true,
          },
        },
        {
          name: 'url',
          type: 'text',
          defaultValue: '#',
          admin: {
            condition: (data, siblingData) => siblingData?.useMedia === false,
          },
        },
        {
          name: 'src',
          type: 'text',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
          admin: {
            condition: (data, siblingData) => siblingData?.useMedia === false,
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Relume logo',
        },
      ],
    },
    {
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Button',
        },
        {
          name: 'size',
          type: 'select',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
          defaultValue: 'sm',
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Destructive', value: 'destructive' },
            { label: 'Outline', value: 'outline' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'default',
        },
      ],
    },
  ],
}
