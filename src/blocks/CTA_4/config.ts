import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const CTA4Block: Block = {
  slug: 'cta4',
  interfaceName: 'CTA4Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Medium length heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'inputPlaceholder',
      type: 'text',
      label: 'Placeholder del input',
      defaultValue: 'Enter your email',
    },
    {
      name: 'button',
      type: 'group',
      label: 'Botón',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del botón',
          defaultValue: 'Sign up',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variante del botón',
          defaultValue: 'default',
          options: [
            { label: 'Primario', value: 'default' },
            { label: 'Secundario', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          label: 'Tamaño del botón',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen de fondo',
    },
  ],
  labels: {
    plural: 'CTAs 4',
    singular: 'CTA 4',
  },
}