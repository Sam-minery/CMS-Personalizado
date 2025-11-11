import type { Block } from 'payload'

export const ThreeDMarqueeBlock: Block = {
  slug: '3dMarquee',
  interfaceName: 'ThreeDMarqueeBlock',
  labels: {
    singular: '3D Marquee',
    plural: '3D Marquees',
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      label: 'Imágenes',
      minRows: 1,
      required: true,
      admin: {
        description: 'Agrega imágenes que se mostrarán en el efecto 3D Marquee. Se recomienda agregar múltiples imágenes para un mejor efecto visual.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
          admin: {
            description: 'Imagen para el marquee 3D',
          },
        },
      ],
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding vertical',
      defaultValue: 'my-10',
      options: [
        { label: 'Sin padding (my-0)', value: 'my-0' },
        { label: 'Padding pequeño (my-5)', value: 'my-5' },
        { label: 'Padding mediano (my-10)', value: 'my-10' },
        { label: 'Padding grande (my-20)', value: 'my-20' },
      ],
      admin: {
        description: 'Espaciado vertical del contenedor',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      defaultValue: 'bg-gray-950/5',
      options: [
        { label: 'Gris claro (bg-gray-950/5)', value: 'bg-gray-950/5' },
        { label: 'Blanco (bg-white)', value: 'bg-white' },
        { label: 'Transparente (bg-transparent)', value: 'bg-transparent' },
        { label: 'Negro (bg-black)', value: 'bg-black' },
      ],
      admin: {
        description: 'Color de fondo del contenedor',
      },
    },
  ],
}

