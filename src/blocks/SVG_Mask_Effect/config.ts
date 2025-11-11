import type { Block } from 'payload'

export const SVGMaskEffectBlock: Block = {
  slug: 'svgMaskEffect',
  interfaceName: 'SVGMaskEffectBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título Principal',
      required: true,
      defaultValue: 'Discover the power of Tailwind CSS v4',
    },
    {
      name: 'highlightedText1',
      type: 'text',
      label: 'Texto Destacado 1',
      required: false,
      defaultValue: 'Tailwind CSS v4',
    },
    {
      name: 'highlightedText2',
      type: 'text',
      label: 'Texto Destacado 2',
      required: false,
      defaultValue: 'advanced animations',
    },
    {
      name: 'additionalText',
      type: 'text',
      label: 'Texto Adicional',
      required: false,
      defaultValue: 'with native CSS variables and container queries with',
    },
    {
      name: 'revealText',
      type: 'textarea',
      label: 'Texto de Revelación',
      required: true,
      defaultValue: 'The first rule of MRR Club is you do not talk about MRR Club. The second rule of MRR Club is you DO NOT talk about MRR Club.',
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura del Contenedor',
      defaultValue: '40rem',
      options: [
        { label: 'Pequeño (30rem)', value: '30rem' },
        { label: 'Mediano (40rem)', value: '40rem' },
        { label: 'Grande (50rem)', value: '50rem' },
        { label: 'Extra Grande (60rem)', value: '60rem' },
      ],
    },
    {
      name: 'textSize',
      type: 'select',
      label: 'Tamaño del Texto',
      defaultValue: '4xl',
      options: [
        { label: 'Pequeño (2xl)', value: '2xl' },
        { label: 'Mediano (3xl)', value: '3xl' },
        { label: 'Grande (4xl)', value: '4xl' },
        { label: 'Extra Grande (5xl)', value: '5xl' },
        { label: 'Gigante (6xl)', value: '6xl' },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de Fondo (Opcional)',
      required: false,
      admin: {
        description: 'Imagen que se revelará con el efecto de máscara. Si no se selecciona, se usará un fondo sólido.',
      },
    },
  ],
  labels: {
    plural: 'SVG Mask Effects',
    singular: 'SVG Mask Effect',
  },
}
