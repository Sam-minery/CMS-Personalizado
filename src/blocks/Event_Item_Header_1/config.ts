import type { Block } from 'payload'

export const EventItemHeader1: Block = {
  slug: 'eventItemHdr1',
  dbName: 'evt_hdr_1',
  interfaceName: 'EventItemHeader1Block',
  fields: [
    {
      name: 'backLink',
      type: 'group',
      label: 'Enlace de Regreso',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del Enlace',
          defaultValue: '#',
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
              defaultValue: 'All events',
            },
            {
              name: 'variant',
              type: 'text',
              label: 'Variante del Botón',
              defaultValue: 'link',
              admin: {
                description: 'Valores: primary, secondary, link',
              },
            },
            {
              name: 'size',
              type: 'text',
              label: 'Tamaño del Botón',
              defaultValue: 'link',
              admin: {
                description: 'Valores: sm, md, lg, link',
              },
            },
          ],
        },
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
      name: 'inputPlaceholder',
      type: 'text',
      required: true,
      label: 'Placeholder del Input',
      defaultValue: 'Enter your email',
    },
    {
      name: 'button',
      type: 'group',
      label: 'Configuración del Botón Principal',
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
    },
    {
      name: 'termsAndConditions',
      type: 'richText',
      label: 'Términos y Condiciones',
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
        },
      ],
    },
    {
      name: 'countdownIsoDate',
      type: 'text',
      required: true,
      label: 'Fecha de Cuenta Regresiva (ISO)',
      defaultValue: '2024-12-14T01:23:29.000+01:00',
    },
    {
      name: 'amountLeft',
      type: 'text',
      required: true,
      label: 'Cantidad Restante',
      defaultValue: '10',
    },
  ],
  labels: {
    plural: 'Event Item Headers 1',
    singular: 'Event Item Header 1',
  },
}
