import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const BloqueIMCSendaBlockConfig: Block = {
  slug: 'bloqueIMCSenda',
  dbName: 'imc_senda',
  interfaceName: 'BloqueIMCSendaBlock',
  labels: {
    singular: 'Bloque IMC SENDA',
    plural: 'Bloques IMC SENDA',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla (ej: calculadora-imc). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'title',
      type: 'richText',
      required: true,
      label: 'Título',
      admin: {
        description: 'Título principal del bloque (ej: "Calcula tu IMC")',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Descripción',
      admin: {
        description: 'Texto descriptivo que aparece debajo del título',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'heightLabel',
      type: 'text',
      label: 'Etiqueta del campo de estatura',
      defaultValue: 'Estatura (en cm)',
      admin: {
        description: 'Texto que aparece como etiqueta del campo de estatura',
      },
    },
    {
      name: 'weightLabel',
      type: 'text',
      label: 'Etiqueta del campo de peso',
      defaultValue: 'Peso (en kg)',
      admin: {
        description: 'Texto que aparece como etiqueta del campo de peso',
      },
    },
    {
      name: 'calculateButtonText',
      type: 'text',
      label: 'Texto del botón calcular',
      defaultValue: 'Calcular IMC',
      admin: {
        description: 'Texto que aparece en el botón para calcular el IMC',
      },
    },
    {
      name: 'calculateButtonIconSVG',
      type: 'textarea',
      label: 'Icono SVG del botón calcular (opcional)',
      admin: {
        description: 'Código SVG del icono que se muestra junto al texto (ej. flecha).',
      },
    },
    {
      name: 'resultContent',
      type: 'richText',
      label: 'Contenido del resultado',
      admin: {
        description:
          'Contenido que se mostrará cuando el IMC sea inferior a 25. Puedes usar {bmi} como placeholder para mostrar el valor del IMC.',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
    },
    {
      name: 'resultButton',
      type: 'array',
      dbName: 'imc_res_btn',
      label: 'Botón del resultado (IMC < 25)',
      maxRows: 1,
      fields: [
        link({ appearances: false }),
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
          admin: {
            description: 'Código SVG del icono (ej. flecha).',
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Contenido cuando IMC >= 25',
      fields: [
        {
          name: 'highBMIContent',
          type: 'richText',
          label: 'Contenido descriptivo',
          admin: {
            description:
              'Contenido que se mostrará cuando el IMC sea superior o igual a 25 (ej: "Un IMC superior a 25 se considera sobrepeso...")',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => {
              return [
                ...defaultFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                AlignFeature(),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'highBMIImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen',
          admin: {
            description: 'Imagen que se mostrará cuando el IMC sea >= 25 (ej: foto del profesional)',
          },
        },
        {
          name: 'highBMIName',
          type: 'text',
          label: 'Nombre',
          admin: {
            description: 'Nombre del profesional (ej: "Irene Bretón")',
          },
        },
        {
          name: 'highBMIDescription',
          type: 'richText',
          label: 'Descripción',
          admin: {
            description:
              'Descripción del profesional (ej: "Directora médica de Senda Health. Doctora en Medicina y Cirugía. Especialista en Endocrinología y Nutrición")',
          },
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => {
              return [
                ...defaultFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                AlignFeature(),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ]
            },
          }),
        },
        {
          name: 'highBMIButton',
          type: 'array',
          dbName: 'imc_high_btn',
          label: 'Botón (IMC >= 25)',
          maxRows: 1,
          fields: [
            link({ appearances: false }),
            {
              name: 'iconSVG',
              type: 'textarea',
              label: 'Icono SVG del botón (opcional)',
              admin: {
                description: 'Código SVG del icono (ej. flecha).',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) =>
          !siblingData?.useCustomFont,
      },
      options: [
        { label: 'Por defecto', value: 'default' },
        { label: 'Arial', value: 'Arial, sans-serif' },
        { label: 'Times New Roman', value: '"Times New Roman", serif' },
        { label: 'Georgia', value: 'Georgia, serif' },
        { label: 'Verdana', value: 'Verdana, sans-serif' },
        { label: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
        { label: 'Courier New', value: '"Courier New", monospace' },
        { label: 'Roboto', value: '"Roboto", sans-serif' },
        { label: 'Open Sans', value: '"Open Sans", sans-serif' },
        { label: 'Lato', value: '"Lato", sans-serif' },
        { label: 'Montserrat', value: '"Montserrat", sans-serif' },
        { label: 'Playfair Display', value: '"Playfair Display", serif' },
        { label: 'Inter', value: '"Inter", sans-serif' },
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
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) =>
          siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_: unknown, siblingData: { useCustomFont?: boolean }) =>
          siblingData?.useCustomFont === true,
      },
    },
    {
      type: 'collapsible',
      label: 'Colores',
      admin: {
        description: 'Hex, rgb, rgba o nombre de color (ej: white, #fafafa).',
      },
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo del bloque',
          admin: {
            description: 'Hex, rgb, rgba, nombre o linear-gradient(...).',
            placeholder: '#fafafa o linear-gradient(...)',
          },
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          label: 'Color de fondo de la caja del formulario',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#f5f5f0',
          },
        },
        {
          name: 'resultCardBackgroundColor',
          type: 'text',
          label: 'Color de fondo de la caja (IMC < 25)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#fafafa',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Color del texto',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#000000',
          },
        },
        {
          name: 'labelColor',
          type: 'text',
          label: 'Color de las etiquetas',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#000000',
          },
        },
        {
          name: 'calculateButtonColor',
          type: 'text',
          label: 'Color de fondo del botón calcular',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#2563eb',
          },
        },
        {
          name: 'calculateButtonTextColor',
          type: 'text',
          label: 'Color del texto del botón calcular',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#ffffff',
          },
        },
        {
          name: 'resultButtonColor',
          type: 'text',
          label: 'Color de fondo del botón de resultado',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#2563eb',
          },
        },
        {
          name: 'resultButtonTextColor',
          type: 'text',
          label: 'Color del texto del botón de resultado',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#ffffff',
          },
        },
        {
          name: 'highBMICardBackgroundColor',
          type: 'text',
          label: 'Color de fondo de la caja (IMC >= 25)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#f8f8f8',
          },
        },
        {
          name: 'highBMITextColor',
          type: 'text',
          label: 'Color del texto (IMC >= 25)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#000000',
          },
        },
        {
          name: 'highBMIButtonColor',
          type: 'text',
          label: 'Color de fondo del botón (IMC >= 25)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#2563eb',
          },
        },
        {
          name: 'highBMIButtonTextColor',
          type: 'text',
          label: 'Color del texto del botón (IMC >= 25)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#ffffff',
          },
        },
      ],
    },
  ],
}
