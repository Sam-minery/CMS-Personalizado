import type { Block } from 'payload'

import { link } from '@/fields/link'

export const Layout304Block: Block = {
  slug: 'layout304',
  interfaceName: 'Layout304Block',
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
        {
          name: 'enableLink',
          type: 'checkbox',
          label: 'Convertir en enlace',
          defaultValue: false,
          admin: {
            description: 'Active esta opción para hacer esta sección clickeable',
          },
        },
        {
          name: 'link',
          type: 'group',
          admin: {
            hideGutter: true,
            condition: (_, siblingData) => siblingData?.enableLink === true,
            description: 'Configure el enlace para esta sección',
          },
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  admin: {
                    layout: 'horizontal',
                    width: '50%',
                  },
                  defaultValue: 'reference',
                  options: [
                    {
                      label: 'Internal link',
                      value: 'reference',
                    },
                    {
                      label: 'Custom URL',
                      value: 'custom',
                    },
                  ],
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  admin: {
                    style: {
                      alignSelf: 'flex-end',
                    },
                    width: '50%',
                  },
                  label: 'Open in new tab',
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'reference',
                  type: 'relationship',
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'reference',
                    width: '50%',
                  },
                  label: 'Document to link to',
                  relationTo: ['pages', 'posts'],
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'custom',
                    width: '50%',
                  },
                  label: 'Custom URL',
                  required: true,
                },
                {
                  name: 'label',
                  type: 'text',
                  admin: {
                    width: '50%',
                  },
                  label: 'Label',
                  required: false,
                },
              ],
            },
            {
              name: 'appearance',
              type: 'select',
              admin: {
                description: 'Choose how the link should be rendered.',
              },
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Outline',
                  value: 'outline',
                },
              ],
            },
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
          heading: 'Medium length section heading goes here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 2',
          },
          heading: 'Medium length section heading goes here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 3',
          },
          heading: 'Medium length section heading goes here',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
        },
        {
          icon: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
            alt: 'Relume logo 4',
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

