import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const richTextEditor = () =>
  lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      AlignFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const MultiFormSendaBlock: Block = {
  slug: 'multiFormSenda',
  interfaceName: 'MultiFormSendaBlock',
  labels: {
    singular: 'Multi Form SENDA',
    plural: 'Multi Form SENDA Blocks',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description: 'ID para enlaces ancla (ej: formulario). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'introRichText',
      type: 'richText',
      editor: richTextEditor(),
      label: 'Texto de introducción',
      required: true,
      admin: {
        description: 'Contenido que se muestra antes de comenzar el formulario.',
      },
    },
    {
      name: 'startButtonLabel',
      type: 'text',
      label: 'Texto del botón de inicio',
      required: true,
      defaultValue: 'Comenzar',
      admin: {
        description: 'Etiqueta del botón que inicia el formulario (no es un enlace).',
      },
    },
    {
      name: 'startButtonIconSVG',
      type: 'textarea',
      label: 'Icono SVG del botón de inicio (opcional)',
      admin: {
        description: 'SVG que se muestra a la derecha del texto del botón. Dejar vacío para no mostrar icono.',
      },
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Pasos del formulario',
      minRows: 1,
      admin: {
        description: 'Cada paso muestra un texto y unas opciones; al elegir una opción se avanza al siguiente paso.',
      },
      fields: [
        {
          name: 'stepRichText',
          type: 'richText',
          editor: richTextEditor(),
          label: 'Contenido del paso',
          required: true,
        },
        {
          name: 'options',
          type: 'array',
          label: 'Opciones a elegir',
          minRows: 1,
          admin: {
            description: 'El usuario debe elegir una opción para pasar al siguiente paso.',
          },
          fields: [
            {
              name: 'optionRichText',
              type: 'richText',
              editor: richTextEditor(),
              label: 'Texto de la opción',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'endRichText',
      type: 'richText',
      editor: richTextEditor(),
      label: 'Texto final',
      required: true,
      admin: {
        description: 'Contenido que se muestra al terminar todos los pasos.',
      },
    },
    link({
      appearances: false,
      overrides: {
        name: 'endButtonLink',
        admin: {
          hideGutter: true,
          description: 'Enlace del botón que se muestra al final (ej: ir a una página).',
        },
      },
    }),
    {
      name: 'endButtonLabel',
      type: 'text',
      label: 'Texto del botón final',
      admin: {
        description: 'Etiqueta del botón final. Si está vacío se usa el label del enlace.',
      },
    },
    {
      name: 'endButtonIconSVG',
      type: 'textarea',
      label: 'Icono SVG del botón final (opcional)',
      admin: {
        description: 'SVG que se muestra a la derecha del texto del botón. Dejar vacío para no mostrar icono.',
      },
    },
    {
      name: 'optionsBackgroundColor',
      type: 'text',
      label: 'Color de fondo de las opciones',
      admin: {
        description: 'Fondo de cada opción en los pasos del formulario. Cualquier color CSS válido.',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
      admin: {
        description: 'Cualquier color CSS válido (hex, rgb, rgba, hsl, nombres).',
      },
    },
    {
      name: 'formBackgroundColor',
      type: 'text',
      label: 'Color de fondo del formulario',
      defaultValue: '#ffffff',
      admin: {
        description: 'Fondo del área del formulario (intro, pasos y cierre).',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto principal',
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
    },
    {
      name: 'buttonBackgroundColor',
      type: 'text',
      label: 'Color de fondo de los botones',
    },
    {
      name: 'buttonTextColor',
      type: 'text',
      label: 'Color del texto de los botones',
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) => !siblingData?.useCustomFont,
      },
      options: [
        { label: 'Por defecto', value: 'default' },
        { label: 'Arial', value: 'Arial, sans-serif' },
        { label: 'Georgia', value: 'Georgia, serif' },
        { label: 'Inter', value: '"Inter", sans-serif' },
        { label: 'Open Sans', value: '"Open Sans", sans-serif' },
        { label: 'Lato', value: '"Lato", sans-serif' },
        { label: 'Montserrat', value: '"Montserrat", sans-serif' },
        { label: 'Poppins', value: '"Poppins", sans-serif' },
        { label: 'Raleway', value: '"Raleway", sans-serif' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'useCustomFont',
      type: 'checkbox',
      label: 'Usar fuente personalizada',
      defaultValue: false,
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) => siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) => siblingData?.useCustomFont === true,
      },
    },
  ],
}
