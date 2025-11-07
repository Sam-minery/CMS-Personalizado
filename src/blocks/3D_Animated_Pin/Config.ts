import type { Block } from 'payload'

export const AnimatedPin3DBlock: Block = {
  slug: 'animatedPin3D',
  labels: {
    singular: '3D Animated Pin',
    plural: '3D Animated Pins',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      defaultValue: 'Aceternity UI',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Descripción',
      defaultValue: 'Customizable Tailwind CSS and Framer Motion Components.',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen (opcional)',
      admin: {
        description: 'Si no se proporciona imagen, se mostrará un gradiente por defecto',
      },
    },
    {
      name: 'pinTitle',
      type: 'text',
      label: 'Título del Pin (hover)',
      defaultValue: '/ui.aceternity.com',
      required: true,
    },
    {
      name: 'href',
      type: 'text',
      label: 'Enlace (opcional)',
      admin: {
        description: 'URL a la que dirigir cuando se haga clic en el pin',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo del gradiente',
      defaultValue: 'violet-purple-blue',
      options: [
        {
          label: 'Violeta - Púrpura - Azul',
          value: 'violet-purple-blue',
        },
        {
          label: 'Verde - Azul - Cian',
          value: 'green-blue-cyan',
        },
        {
          label: 'Rosa - Rojo - Naranja',
          value: 'pink-red-orange',
        },
        {
          label: 'Amarillo - Naranja - Rojo',
          value: 'yellow-orange-red',
        },
      ],
    },
  ],
}
