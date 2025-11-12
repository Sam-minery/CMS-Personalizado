import type { Block } from 'payload'

export const Background_Ripple_Effect: Block = {
  slug: 'backgroundRippleEffect',
  labels: {
    singular: 'Background Ripple Effect',
    plural: 'Background Ripple Effects',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título principal',
      defaultValue: 'Background cell animation with framer motion',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtítulo (opcional)',
      defaultValue: '',
    },
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
      defaultValue: 'screen',
      options: [
        {
          label: 'Pantalla completa (100vh)',
          value: 'screen',
        },
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
      name: 'rippleColor',
      type: 'select',
      label: 'Color del efecto ripple',
      defaultValue: 'blue',
      options: [
        {
          label: 'Azul',
          value: 'blue',
        },
        {
          label: 'Cian',
          value: 'cyan',
        },
        {
          label: 'Verde',
          value: 'green',
        },
        {
          label: 'Púrpura',
          value: 'purple',
        },
        {
          label: 'Rosa',
          value: 'pink',
        },
      ],
    },
    {
      name: 'gridSize',
      type: 'select',
      label: 'Tamaño de la cuadrícula',
      defaultValue: 'medium',
      options: [
        {
          label: 'Pequeño (37x25)',
          value: 'small',
        },
        {
          label: 'Mediano (47x30)',
          value: 'medium',
        },
        {
          label: 'Grande (57x35)',
          value: 'large',
        },
      ],
    },
  ],
}
