import type { Block } from 'payload'

export const Text_Reveal_Card: Block = {
  slug: 'TextRevealCard',
  dbName: 'text_reveal_card',
  labels: {
    singular: 'Text Reveal Card',
    plural: 'Text Reveal Cards',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
      defaultValue: 'Sometimes, you just need to see it.',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      required: true,
      defaultValue: 'This is a text reveal card. Hover over the card to reveal the hidden text.',
    },
    {
      name: 'visibleText',
      type: 'text',
      label: 'Texto Visible',
      required: true,
      defaultValue: 'You know the business',
    },
    {
      name: 'revealText',
      type: 'text',
      label: 'Texto Revelado',
      required: true,
      defaultValue: 'I know the chemistry',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de Fondo',
      defaultValue: 'dark',
      options: [
        {
          label: 'Oscuro',
          value: 'dark',
        },
        {
          label: 'Slate 950',
          value: 'slate-950',
        },
        {
          label: 'Zinc 950',
          value: 'zinc-950',
        },
        {
          label: 'Gray 950',
          value: 'gray-950',
        },
        {
          label: 'Neutral 950',
          value: 'neutral-950',
        },
      ],
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura del Bloque',
      defaultValue: '40rem',
      options: [
        {
          label: '30rem',
          value: '30rem',
        },
        {
          label: '40rem',
          value: '40rem',
        },
        {
          label: '50rem',
          value: '50rem',
        },
        {
          label: '60rem',
          value: '60rem',
        },
        {
          label: 'Pantalla Completa',
          value: 'screen',
        },
      ],
    },
  ],
}
