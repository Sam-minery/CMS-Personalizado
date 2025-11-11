import type { Block } from 'payload'

export const SparklesBlock: Block = {
  slug: 'sparkles',
  interfaceName: 'SparklesBlock',
  labels: {
    singular: 'Sparkles',
    plural: 'Sparkles',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
      defaultValue: 'Aceternity',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      defaultValue: 'black',
      options: [
        { label: 'Negro', value: 'black' },
        { label: 'Slate 950', value: 'slate-950' },
        { label: 'Zinc 950', value: 'zinc-950' },
        { label: 'Neutral 950', value: 'neutral-950' },
        { label: 'Gray 950', value: 'gray-950' },
      ],
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura del componente',
      defaultValue: '40rem',
      options: [
        { label: 'Pequeño (30rem)', value: '30rem' },
        { label: 'Mediano (40rem)', value: '40rem' },
        { label: 'Grande (50rem)', value: '50rem' },
        { label: 'Extra Grande (60rem)', value: '60rem' },
      ],
    },
    {
      name: 'minSize',
      type: 'number',
      label: 'Tamaño mínimo de partícula',
      defaultValue: 0.4,
      admin: {
        description: 'Tamaño mínimo de las partículas sparkles',
      },
    },
    {
      name: 'maxSize',
      type: 'number',
      label: 'Tamaño máximo de partícula',
      defaultValue: 1,
      admin: {
        description: 'Tamaño máximo de las partículas sparkles',
      },
    },
    {
      name: 'particleDensity',
      type: 'number',
      label: 'Densidad de partículas',
      defaultValue: 1200,
      admin: {
        description: 'Cantidad de partículas (mayor número = más partículas)',
      },
    },
    {
      name: 'particleColor',
      type: 'text',
      label: 'Color de las partículas',
      defaultValue: '#FFFFFF',
      admin: {
        description: 'Color hexadecimal de las partículas (ej: #FFFFFF, #FF0000)',
      },
    },
    {
      name: 'showGradients',
      type: 'checkbox',
      label: 'Mostrar gradientes',
      defaultValue: true,
      admin: {
        description: 'Mostrar las líneas de gradiente debajo del título',
      },
    },
  ],
}

