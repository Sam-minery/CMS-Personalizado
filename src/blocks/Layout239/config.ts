import type { Block } from 'payload'

import { link } from '@/fields/link'

export const Layout239Block: Block = {
  slug: 'layout239',
  interfaceName: 'Layout239Block',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: false,
      defaultValue: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Medium length section heading goes here',
    },
    {
      name: 'description',
      type: 'text',
      required: false,
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
    {
      name: 'sections',
      type: 'array',
      required: false,
      maxRows: 3,
      fields: [
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
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === false,
                description: 'Ingrese la URL de la imagen',
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
          name: 'heading',
          type: 'text',
          required: false,
          defaultValue: 'Medium length section heading goes here',
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
      ],
      defaultValue: [
        {
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
            alt: 'Relume placeholder image 1',
          },
          heading: 'Medium length section heading goes here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
            alt: 'Relume placeholder image 2',
          },
          heading: 'Medium length section heading goes here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
            alt: 'Relume placeholder image 3',
          },
          heading: 'Medium length section heading goes here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
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
            admin: {
              description: 'Configure el enlace para este botón',
            },
          },
        }),
      ],
    },
  ],
}

