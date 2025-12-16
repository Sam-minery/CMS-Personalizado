import type { Block } from 'payload'

import { link } from '@/fields/link'

export const Layout10Block: Block = {
  slug: 'layout10',
  interfaceName: 'Layout10Block',
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
      name: 'subHeadings',
      type: 'array',
      required: false,
      maxRows: 2,
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
          name: 'title',
          type: 'text',
          required: false,
          defaultValue: 'Subheading one',
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
      ],
      defaultValue: [
        {
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 1',
          },
          title: 'Subheading one',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 2',
          },
          title: 'Subheading two',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
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
            appearance: 'default',
          },
        },
      ],
    },
  ],
}

