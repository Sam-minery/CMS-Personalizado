import type { Block } from 'payload'

export const SpotlightBlock: Block = {
  slug: 'spotlight',
  labels: {
    singular: 'Spotlight Block',
    plural: 'Spotlight Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: false,
      defaultValue: 'Spotlight is the new trend.',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      required: false,
    },
    {
      name: 'spotlightColor',
      type: 'select',
      label: 'Color del Spotlight',
      required: true,
      defaultValue: 'white',
      options: [
        {
          label: 'Blanco',
          value: 'white',
        },
        {
          label: 'Azul',
          value: 'blue',
        },
        {
          label: 'Verde',
          value: 'green',
        },
        {
          label: 'Rojo',
          value: 'red',
        },
        {
          label: 'Amarillo',
          value: 'yellow',
        },
        {
          label: 'Púrpura',
          value: 'purple',
        },
        {
          label: 'Rosa',
          value: 'pink',
        },
        {
          label: 'Cian',
          value: 'cyan',
        },
        {
          label: 'Naranja',
          value: 'orange',
        },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de Fondo',
      required: true,
      defaultValue: 'black',
      options: [
        {
          label: 'Negro',
          value: 'black',
        },
        {
          label: 'Blanco',
          value: 'white',
        },
      ],
    },
    {
      name: 'textColor',
      type: 'select',
      label: 'Color del Texto',
      required: true,
      defaultValue: 'white',
      options: [
        {
          label: 'Blanco',
          value: 'white',
        },
        {
          label: 'Negro',
          value: 'black',
        },
      ],
    },
  ],
}
