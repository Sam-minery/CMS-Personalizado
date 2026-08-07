import type { Block } from 'payload'

import { link } from '@/fields/link'

export const Layout222Block: Block = {
  slug: 'layout222',
  interfaceName: 'Layout222Block',
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
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
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
      name: 'features',
      type: 'array',
      required: false,
      maxRows: 4,
      fields: [
        {
          name: 'icon',
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
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === false,
                description: 'Ingrese la URL de la imagen del logo',
              },
            },
            {
              name: 'alt',
              type: 'text',
              defaultValue: 'Relume logo',
              admin: {
                description: 'Texto alternativo para accesibilidad',
              },
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Short heading here',
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
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
        },
      ],
      defaultValue: [
        {
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 1',
          },
          heading: 'Short heading here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
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
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 2',
          },
          heading: 'Short heading here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
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
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 3',
          },
          heading: 'Short heading here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
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
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 4',
          },
          heading: 'Short heading here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
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

