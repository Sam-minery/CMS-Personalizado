import type { Block } from 'payload'

export const LampSectionHeaderBlock: Block = {
  slug: 'lampSectionHeader',
  interfaceName: 'LampSectionHeaderBlock',
  labels: {
    singular: 'Lamp Section Header',
    plural: 'Lamp Section Headers',
  },
  fields: [
    {
      name: 'titleTop',
      type: 'text',
      label: 'Título (línea 1)',
      required: true,
      defaultValue: 'Build lamps',
    },
    {
      name: 'titleBottom',
      type: 'text',
      label: 'Título (línea 2)',
      required: true,
      defaultValue: 'the right way',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      defaultValue: 'slate-950',
      options: [
        { label: 'Slate 950', value: 'slate-950' },
        { label: 'Zinc 950', value: 'zinc-950' },
        { label: 'Neutral 950', value: 'neutral-950' },
        { label: 'Gray 950', value: 'gray-950' },
      ],
    },
    {
      name: 'hue',
      type: 'select',
      label: 'Color principal de la lámpara',
      defaultValue: 'cyan',
      options: [
        { label: 'Cyan', value: 'cyan' },
        { label: 'Emerald', value: 'emerald' },
        { label: 'Violet', value: 'violet' },
        { label: 'Fuchsia', value: 'fuchsia' },
        { label: 'Sky', value: 'sky' },
        { label: 'Indigo', value: 'indigo' },
        { label: 'Amber', value: 'amber' },
        { label: 'Rose', value: 'rose' },
      ],
    },
  ],
}


