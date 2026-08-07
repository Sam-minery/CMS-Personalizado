import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { simpleLink } from '../../fields/simpleLink'

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
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del Botón',
          defaultValue: 'All events',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variante del Botón',
          defaultValue: 'primary',
          options: [
            { label: 'Primario', value: 'primary' },
            { label: 'Secundario', value: 'secondary' },
            { label: 'Enlace', value: 'link' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          label: 'Tamaño del Botón',
          defaultValue: 'default',
          options: [
            { label: 'Pequeño', value: 'sm' },
            { label: 'Mediano', value: 'default' },
            { label: 'Grande', value: 'lg' },
          ],
        },
        simpleLink({
          overrides: {
            name: 'link',
            label: 'Enlace del Botón',
          },
        }),
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
          type: 'select',
          label: 'Variante del Botón',
          defaultValue: 'primary',
          options: [
            { label: 'Primario', value: 'primary' },
            { label: 'Secundario', value: 'secondary' },
            { label: 'Enlace', value: 'link' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          label: 'Tamaño del Botón',
          defaultValue: 'default',
          options: [
            { label: 'Pequeño', value: 'sm' },
            { label: 'Mediano', value: 'default' },
            { label: 'Grande', value: 'lg' },
          ],
        },
      ],
    },
    {
      name: 'termsAndConditions',
      type: 'richText',
      label: 'Términos y Condiciones',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      admin: {
        description: 'Editor de texto enriquecido para términos y condiciones con soporte para enlaces',
      },
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
      name: 'countdown',
      type: 'group',
      label: 'Cuenta Regresiva',
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
          label: 'Fecha de Cuenta Regresiva',
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'time',
          type: 'text',
          required: true,
          label: 'Hora de Cuenta Regresiva',
          admin: {
            description: 'Formato: HH:MM (ej: 14:30)',
          },
          defaultValue: '19:00',
        },
        {
          name: 'timezone',
          type: 'text',
          label: 'Zona Horaria',
          admin: {
            description: 'Zona horaria del evento (ej: Europe/Madrid, America/New_York)',
          },
          defaultValue: 'Europe/Madrid',
        },
      ],
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
