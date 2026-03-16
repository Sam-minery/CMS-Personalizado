import type { Block } from 'payload'

export const Event6: Block = {
  slug: 'event6',
  dbName: 'evt_6',
  interfaceName: 'Event6Block',
  labels: {
    singular: 'Event 6',
    plural: 'Events 6',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline',
      defaultValue: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título Principal',
      defaultValue: 'Webinars',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Pestañas de Webinars',
      minRows: 1,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Valor de la Pestaña',
          defaultValue: 'view-all',
        },
        {
          name: 'trigger',
          type: 'text',
          required: true,
          label: 'Texto del Trigger',
          defaultValue: 'View all',
        },
        {
          name: 'content',
          type: 'array',
          label: 'Webinars de la Pestaña',
          minRows: 1,
          fields: [
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'URL del Webinar',
              defaultValue: '#',
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Título del Webinar',
              defaultValue: 'Webinar title heading',
            },
            {
              name: 'duration',
              type: 'text',
              required: true,
              label: 'Duración (en minutos)',
              defaultValue: '45',
            },
            {
              name: 'status',
              type: 'text',
              label: 'Estado del Webinar',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              label: 'Descripción del Webinar',
              defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
            },
            {
              name: 'videoUrl',
              type: 'text',
              label: 'URL del Video',
              admin: {
                description: 'URL del video que se reproducirá al hacer clic en el botón de play. Si no se proporciona, se usará la URL del webinar.',
              },
            },
          ],
        },
      ],
    },
  ],
}
