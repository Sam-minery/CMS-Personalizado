import type { Block } from 'payload'

export const PortfolioHeader1: Block = {
  slug: 'portfolioHeader1',
  interfaceName: 'PortfolioHeader1Block',
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
  ],
  labels: {
    plural: 'Portfolio Headers 1',
    singular: 'Portfolio Header 1',
  },
}
