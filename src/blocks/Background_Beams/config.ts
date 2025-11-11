import type { Block } from 'payload'

export const BackgroundBeamsBlock: Block = {
  slug: 'backgroundBeams',
  interfaceName: 'BackgroundBeamsBlock',
  labels: {
    singular: 'Background Beams',
    plural: 'Background Beams',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título principal',
      defaultValue: 'Join the waitlist',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      defaultValue: 'Welcome to MailJet, the best transactional email service on the web. We provide reliable, scalable, and customizable email solutions for your business. Whether you\'re sending order confirmations, password reset emails, or promotional campaigns, MailJet has got you covered.',
    },
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder del input',
      defaultValue: 'hi@manuarora.in',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      defaultValue: 'neutral-950',
      options: [
        {
          label: 'Neutral 950 (Oscuro)',
          value: 'neutral-950',
        },
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
  ],
}

