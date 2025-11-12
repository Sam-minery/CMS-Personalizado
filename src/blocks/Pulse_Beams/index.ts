import type { Block } from 'payload'

import { simpleLink } from '@/fields/simpleLink'

export const Pulse_Beams: Block = {
  slug: 'pulseBeams',
  labels: {
    singular: 'Pulse Beam',
    plural: 'Pulse Beams',
  },
  fields: [
    {
      name: 'buttonText',
      type: 'text',
      label: 'Texto del botón',
      defaultValue: 'Connect',
      required: true,
    },
    simpleLink({
      overrides: {
        name: 'buttonLink',
        label: 'Enlace del botón',
      },
    }),
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      defaultValue: 'slate-950',
      options: [
        {
          label: 'Slate 950 (Oscuro)',
          value: 'slate-950',
        },
        {
          label: 'Zinc 950 (Oscuro)',
          value: 'zinc-950',
        },
        {
          label: 'Gray 950 (Oscuro)',
          value: 'gray-950',
        },
        {
          label: 'Neutral 950 (Oscuro)',
          value: 'neutral-950',
        },
      ],
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura del componente',
      defaultValue: '40rem',
      options: [
        {
          label: 'Pequeño (30rem)',
          value: '30rem',
        },
        {
          label: 'Mediano (40rem)',
          value: '40rem',
        },
        {
          label: 'Grande (50rem)',
          value: '50rem',
        },
        {
          label: 'Extra Grande (60rem)',
          value: '60rem',
        },
      ],
    },
    {
      name: 'buttonSize',
      type: 'select',
      label: 'Tamaño del botón',
      defaultValue: 'medium',
      options: [
        {
          label: 'Pequeño',
          value: 'small',
        },
        {
          label: 'Mediano',
          value: 'medium',
        },
        {
          label: 'Grande',
          value: 'large',
        },
        {
          label: 'Extra Grande',
          value: 'xlarge',
        },
      ],
    },
  ],
}
