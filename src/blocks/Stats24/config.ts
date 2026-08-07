import type { Block } from 'payload'

export const Stats24Block: Block = {
  slug: 'stats24',
  interfaceName: 'Stats24Block',
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
      name: 'defaultTabValue',
      type: 'text',
      required: false,
      defaultValue: 'tab-1',
      admin: {
        description: 'Valor del tab que se mostrará por defecto (ej: tab-1, tab-2, tab-3)',
      },
    },
    {
      name: 'tabs',
      type: 'array',
      required: false,
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          defaultValue: 'tab-1',
          admin: {
            description: 'Identificador único del tab (ej: tab-1, tab-2, tab-3)',
          },
        },
        {
          name: 'percentage',
          type: 'text',
          required: false,
          defaultValue: '50%',
          admin: {
            description: 'Texto de estadística (ej: 50%, 100%, etc.)',
          },
        },
        {
          name: 'heading',
          type: 'text',
          required: false,
          defaultValue: 'Short heading goes here',
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'useVideo',
          type: 'checkbox',
          label: 'Usar video en lugar de imagen',
          defaultValue: false,
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
          admin: {
            condition: (_, siblingData) => siblingData?.useVideo === false,
          },
        },
        {
          name: 'video',
          type: 'group',
          fields: [
            {
              name: 'image',
              type: 'group',
              label: 'Imagen de miniatura del video',
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
                  defaultValue:
                    'https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg',
                  admin: {
                    condition: (_, siblingData) => siblingData?.useMedia === false,
                    description: 'Ingrese la URL de la imagen de miniatura',
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
              name: 'url',
              type: 'text',
              required: false,
              defaultValue: 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
              admin: {
                description: 'URL del video (YouTube embed o similar)',
              },
            },
          ],
          admin: {
            condition: (_, siblingData) => siblingData?.useVideo === true,
          },
        },
      ],
      defaultValue: [
        {
          value: 'tab-1',
          percentage: '50%',
          heading: 'Short heading goes here',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          useVideo: false,
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
            alt: 'Relume placeholder image 1',
          },
        },
        {
          value: 'tab-2',
          percentage: '50%',
          heading: 'Short heading goes here',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          useVideo: true,
          video: {
            image: {
              useMedia: false,
              src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg',
              alt: 'Relume placeholder image 2',
            },
            url: 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
          },
        },
        {
          value: 'tab-3',
          percentage: '50%',
          heading: 'Short heading goes here',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          useVideo: false,
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
            alt: 'Relume placeholder image 3',
          },
        },
      ],
    },
  ],
}

