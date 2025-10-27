import type { Block } from 'payload'

export const PortfolioHeader2: Block = {
  slug: 'portfolioHeader2',
  interfaceName: 'PortfolioHeader2Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título Principal',
      defaultValue: 'Project name here',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Etiquetas',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Texto de la Etiqueta',
          defaultValue: 'Tag one',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL de la Etiqueta',
          defaultValue: '#',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen de Fondo',
    },
  ],
  labels: {
    plural: 'Portfolio Headers 2',
    singular: 'Portfolio Header 2',
  },
}
