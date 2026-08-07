import type { Block } from 'payload'

export const Gallery6: Block = {
  slug: 'gallery6',
  interfaceName: 'Gallery6Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título Principal',
      defaultValue: 'Image Gallery',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Imágenes de la Galería',
      minRows: 1,
      maxRows: 12,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL de Enlace',
          defaultValue: '#',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto Alternativo',
          defaultValue: 'Gallery image',
        },
      ],
    },
  ],
  labels: {
    plural: 'Galerías 6',
    singular: 'Gallery 6',
  },
}
