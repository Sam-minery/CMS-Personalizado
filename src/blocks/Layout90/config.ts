import type { Block } from 'payload'

export const Layout90Block: Block = {
  slug: 'layout90',
  interfaceName: 'Layout90Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Long heading is what you see here in this feature section',
    },
    {
      name: 'description',
      type: 'text',
      required: false,
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
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
  ],
}

