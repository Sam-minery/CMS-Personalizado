import type { Block } from 'payload'

import { link } from '@/fields/link'

export const Layout133Block: Block = {
  slug: 'layout133',
  interfaceName: 'Layout133Block',
  fields: [
    {
      name: 'sections',
      type: 'array',
      required: false,
      maxRows: 2,
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
          defaultValue: 'Caption goes here',
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
          name: 'buttons',
          type: 'array',
          required: false,
          maxRows: 1,
          fields: [
            link({
              overrides: {
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
          ],
        },
      ],
      defaultValue: [
        {
          tagline: 'Tagline',
          heading: 'Medium length section heading goes here',
          description: 'Caption goes here',
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
            alt: 'Relume placeholder image 1',
          },
          buttons: [
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
          ],
        },
        {
          tagline: 'Tagline',
          heading: 'Medium length section heading goes here',
          description: 'Caption goes here',
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg',
            alt: 'Relume placeholder image 2',
          },
          buttons: [
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
          ],
        },
      ],
    },
  ],
}

