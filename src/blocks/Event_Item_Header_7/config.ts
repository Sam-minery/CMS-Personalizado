import type { Block } from 'payload'

export const EventItemHeader7: Block = {
  slug: 'eventItemHdr7',
  dbName: 'evt_hdr_7',
  interfaceName: 'EventItemHeader7Block',
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
  ],
  labels: {
    plural: 'Event Item Headers 7',
    singular: 'Event Item Header 7',
  },
}
