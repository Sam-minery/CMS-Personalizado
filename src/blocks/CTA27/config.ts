import type { Block } from 'payload'

import { link } from '@/fields/link'

export const CTA27Block: Block = {
  slug: 'cta27',
  interfaceName: 'CTA27Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Medium length heading goes here',
    },
    {
      name: 'description',
      type: 'text',
      required: false,
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'image',
      type: 'group',
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: false,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen existente o suba una nueva',
          },
        },
        {
          name: 'src',
          type: 'text',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'Ingrese la URL de la imagen de fondo',
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Relume placeholder image',
          admin: {
            description: 'Texto alternativo para accesibilidad',
          },
        },
      ],
    },
    {
      name: 'buttons',
      type: 'array',
      required: false,
      maxRows: 2,
      fields: [
        link({
          overrides: {
            name: 'link',
            admin: {
              description: 'Configure el enlace para este botón',
            },
          },
        }),
      ],
      defaultValue: [
        {
          link: {
            type: 'custom',
            url: '#',
            label: 'Button',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '#',
            label: 'Button',
            appearance: 'outline',
          },
        },
      ],
    },
  ],
}

