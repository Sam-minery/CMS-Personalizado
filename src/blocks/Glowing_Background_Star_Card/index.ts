import type { Block } from 'payload'
import { simpleLink } from '@/fields/simpleLink'

export const Glowing_Background_Star_Card: Block = {
  slug: 'GlowingStarCard',
  dbName: 'glowing_star_card',
  labels: {
    singular: 'Glowing Background Star Card',
    plural: 'Glowing Background Star Cards',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título',
      required: true,
      defaultValue: 'Next.js 14',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      required: true,
      defaultValue: 'The power of full-stack to the frontend. Read the release notes.',
    },
    {
      name: 'button',
      type: 'group',
      label: 'Configuración del Botón',
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Texto del Botón',
          required: true,
          defaultValue: 'Ver más',
        },
        simpleLink({
          overrides: {
            name: 'link',
            label: 'Enlace',
          },
        }),
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de Fondo',
      defaultValue: 'slate-950',
      options: [
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
      defaultValue: 'auto',
      options: [
        {
          label: 'Automática',
          value: 'auto',
        },
        {
          label: 'Pantalla Completa',
          value: 'screen',
        },
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
      ],
    },
  ],
}
