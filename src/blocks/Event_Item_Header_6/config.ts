import type { Block } from 'payload'

export const EventItemHeader6: Block = {
  slug: 'eventItemHdr6',
  dbName: 'evt_hdr_6',
  interfaceName: 'EventItemHeader6Block',
  fields: [
    {
      name: 'breadcrumbs',
      type: 'array',
      label: 'Breadcrumbs',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del Enlace',
          defaultValue: '#',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del Breadcrumb',
          defaultValue: 'Events',
        },
      ],
      defaultValue: [
        { url: '#', title: 'Events' },
        { url: '#', title: 'Event title' },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título Principal',
      defaultValue: 'Event title heading',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen del Evento',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones',
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
          defaultValue: 'primary',
          admin: {
            description: 'Valores: primary, secondary, link',
          },
        },
        {
          name: 'size',
          type: 'text',
          label: 'Tamaño del Botón',
          defaultValue: 'md',
          admin: {
            description: 'Valores: sm, md, lg',
          },
        },
      ],
      defaultValue: [
        { title: 'Save my spot', variant: 'primary', size: 'md' },
        { title: 'View event', variant: 'secondary', size: 'md' },
      ],
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
          label: 'Año (opcional)',
          defaultValue: '2024',
        },
      ],
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Ubicación',
      defaultValue: 'Location',
    },
    {
      name: 'speakers',
      type: 'text',
      required: true,
      label: 'Ponentes',
      defaultValue: 'Speakers',
    },
  ],
  labels: {
    plural: 'Event Item Headers 6',
    singular: 'Event Item Header 6',
  },
}
