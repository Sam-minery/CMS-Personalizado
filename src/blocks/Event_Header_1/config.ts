import type { Block } from 'payload'

export const EventHeader1: Block = {
  slug: 'eventHeader1',
  dbName: 'evt_hdr_1',
  interfaceName: 'EventHeader1Block',
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
      defaultValue: 'Events',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'event',
      type: 'group',
      label: 'Evento Destacado',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del Evento',
          defaultValue: '#',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen del Evento',
        },
        {
          name: 'date',
          type: 'group',
          label: 'Fecha del Evento',
          fields: [
            {
              name: 'weekday',
              type: 'text',
              required: true,
              label: 'Día de la Semana',
              defaultValue: 'Sat',
            },
            {
              name: 'day',
              type: 'text',
              required: true,
              label: 'Día',
              defaultValue: '10',
            },
            {
              name: 'month',
              type: 'text',
              required: true,
              label: 'Mes',
              defaultValue: 'Feb',
            },
            {
              name: 'year',
              type: 'text',
              required: true,
              label: 'Año',
              defaultValue: '2024',
            },
          ],
        },
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Categoría',
          defaultValue: 'Category',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del Evento',
          defaultValue: 'Event title heading',
        },
        {
          name: 'status',
          type: 'text',
          label: 'Estado (opcional)',
          admin: {
            description: 'Dejar vacío si no hay estado especial',
          },
        },
        {
          name: 'location',
          type: 'text',
          required: true,
          label: 'Ubicación',
          defaultValue: 'Location',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción del Evento',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        },
        {
          name: 'button',
          type: 'group',
          label: 'Configuración del Botón',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Texto del Botón',
              defaultValue: 'Save my spot',
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Variante del Botón',
              defaultValue: 'secondary',
              admin: {
                description: 'Valores: primary, secondary, link',
              },
            },
            {
              name: 'size',
              type: 'text',
              label: 'Tamaño del Botón',
              defaultValue: 'primary',
              admin: {
                description: 'Valores: sm, md, lg, primary',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'filters',
      type: 'array',
      label: 'Filtros',
      fields: [
        {
          name: 'button',
          type: 'group',
          label: 'Configuración del Botón de Filtro',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Texto del Botón',
              defaultValue: 'View all',
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Variante del Botón',
              defaultValue: 'secondary',
              admin: {
                description: 'Valores: primary, secondary, link',
              },
            },
            {
              name: 'size',
              type: 'text',
              label: 'Tamaño del Botón',
              defaultValue: 'sm',
              admin: {
                description: 'Valores: sm, md, lg',
              },
            },
          ],
        },
      ],
      defaultValue: [
        {
          button: {
            variant: 'secondary',
            title: 'View all',
            size: 'sm',
          },
        },
        {
          button: {
            variant: 'link',
            title: 'Category one',
            size: 'sm',
          },
        },
        {
          button: {
            variant: 'link',
            title: 'Category two',
            size: 'sm',
          },
        },
        {
          button: {
            variant: 'link',
            title: 'Category three',
            size: 'sm',
          },
        },
        {
          button: {
            variant: 'link',
            title: 'Category four',
            size: 'sm',
          },
        },
      ],
    },
    {
      name: 'events',
      type: 'array',
      label: 'Lista de Eventos',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del Evento',
          defaultValue: '#',
        },
        {
          name: 'date',
          type: 'group',
          label: 'Fecha del Evento',
          fields: [
            {
              name: 'weekday',
              type: 'text',
              required: true,
              label: 'Día de la Semana',
              defaultValue: 'Fri',
            },
            {
              name: 'day',
              type: 'text',
              required: true,
              label: 'Día',
              defaultValue: '09',
            },
            {
              name: 'month',
              type: 'text',
              required: true,
              label: 'Mes',
              defaultValue: 'Feb',
            },
            {
              name: 'year',
              type: 'text',
              required: true,
              label: 'Año',
              defaultValue: '2024',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del Evento',
          defaultValue: 'Event title heading',
        },
        {
          name: 'status',
          type: 'text',
          label: 'Estado (opcional)',
          admin: {
            description: 'Dejar vacío si no hay estado especial',
          },
        },
        {
          name: 'location',
          type: 'text',
          required: true,
          label: 'Ubicación',
          defaultValue: 'Location',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción del Evento',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
          name: 'button',
          type: 'group',
          label: 'Configuración del Botón',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Texto del Botón',
              defaultValue: 'Save my spot',
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Variante del Botón',
              defaultValue: 'secondary',
              admin: {
                description: 'Valores: primary, secondary, link',
              },
            },
            {
              name: 'size',
              type: 'text',
              label: 'Tamaño del Botón',
              defaultValue: 'sm',
              admin: {
                description: 'Valores: sm, md, lg',
              },
            },
          ],
        },
      ],
      defaultValue: [
        {
          url: '#',
          date: {
            weekday: 'Fri',
            day: '09',
            month: 'Feb',
            year: '2024',
          },
          title: 'Event title heading',
          status: 'Sold out',
          location: 'Location',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          button: {
            variant: 'secondary',
            size: 'sm',
            title: 'Save my spot',
          },
        },
        {
          url: '#',
          date: {
            weekday: 'Sat',
            day: '10',
            month: 'Feb',
            year: '2024',
          },
          title: 'Event title heading',
          status: null,
          location: 'Location',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          button: {
            variant: 'secondary',
            size: 'sm',
            title: 'Save my spot',
          },
        },
        {
          url: '#',
          date: {
            weekday: 'Sun',
            day: '11',
            month: 'Feb',
            year: '2024',
          },
          title: 'Event title heading',
          status: null,
          location: 'Location',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          button: {
            variant: 'secondary',
            size: 'sm',
            title: 'Save my spot',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Event Headers 1',
    singular: 'Event Header 1',
  },
}
