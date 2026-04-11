import type { Block } from 'payload'

import {
  AlignFeature,
  BlockquoteFeature,
  ChecklistFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  IndentFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  ParagraphFeature,
  SubscriptFeature,
  TextStateFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

const imcSendaRichTextState = {
  weight: {
    light: { label: 'Light', css: { 'font-weight': '300' } },
    regular: { label: 'Regular', css: { 'font-weight': '400' } },
    medium: { label: 'Medium', css: { 'font-weight': '500' } },
    semibold: { label: 'Semibold', css: { 'font-weight': '600' } },
    heavy: { label: 'Heavy', css: { 'font-weight': '800' } },
  },
  size: {
    caption: { label: 'Texto pequeño', css: {} },
  },
} as const

const imcRichTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
      AlignFeature(),
      IndentFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      ChecklistFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      SubscriptFeature(),
      TextStateFeature({ state: imcSendaRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

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
      name: 'backgroundImage',
      type: 'group',
      label: 'Imagen de fondo',
      admin: {
        description: 'Opcional. Si se define, se muestra como fondo del bloque.',
      },
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: true,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen de fondo',
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
              siblingData?.useMedia === true,
            description: 'Seleccione una imagen de la librería',
          },
        },
        {
          name: 'src',
          type: 'text',
          label: 'URL de la imagen',
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
              siblingData?.useMedia === false,
            description: 'URL externa de la imagen cuando no se usa imagen subida',
          },
        },
      ],
    },
    {
      name: 'title',
      type: 'richText',
      required: true,
      label: 'Título',
      admin: {
        description: 'Título principal del bloque (ej: "Calcula tu IMC")',
      },
      editor: imcRichTextEditor(),
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Descripción',
      admin: {
        description: 'Texto descriptivo que aparece debajo del título',
      },
      editor: imcRichTextEditor(),
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
      label: 'Contenido del resultado (IMC < 26)',
      admin: {
        description:
          'Contenido que se mostrará cuando el IMC sea inferior a 26. Puedes usar {bmi} como placeholder para mostrar el valor del IMC.',
      },
      editor: imcRichTextEditor(),
    },
    {
      name: 'resultButton (IMC < 25)',
      type: 'array',
      dbName: 'imc_res_btn',
      label: 'Botón del resultado (IMC < 26)',
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
      label: 'Contenido cuando IMC >= 26',
      fields: [
        {
          name: 'highBMIContent',
          type: 'richText',
          label: 'Contenido descriptivo',
          admin: {
            description:
              'Contenido que se mostrará cuando el IMC sea superior o igual a 26 (ej: "Un IMC superior o igual a 26...")',
          },
          editor: imcRichTextEditor(),
        },
        {
          name: 'highBMIImage',
          type: 'group',
          label: 'Imagen',
          admin: {
            description: 'Imagen que se mostrará cuando el IMC sea >= 26 (ej: foto del profesional)',
          },
          fields: [
            {
              name: 'useMedia',
              type: 'checkbox',
              label: 'Usar imagen subida',
              defaultValue: true,
            },
            {
              name: 'mediaImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen',
              admin: {
                condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
                  siblingData?.useMedia === true,
                description: 'Seleccione una imagen de la librería',
              },
            },
            {
              name: 'src',
              type: 'text',
              label: 'URL de la imagen',
              admin: {
                condition: (_: unknown, siblingData: { useMedia?: boolean }) =>
                  siblingData?.useMedia === false,
                description: 'URL externa de la imagen cuando no se usa imagen subida',
              },
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Texto alternativo',
              admin: {
                description: 'Alt de la imagen (por defecto se usa el nombre del profesional)',
              },
            },
          ],
        },
        {
          name: 'highBMINameAndDescription',
          type: 'richText',
          label: 'Nombre y descripción',
          admin: {
            description:
              'Texto del profesional: nombre y descripción en un solo bloque (ej: nombre en título y descripción en párrafo)',
          },
          editor: imcRichTextEditor(),
        },
        {
          name: 'highBMIButton',
          type: 'array',
          dbName: 'imc_high_btn',
          label: 'Botón (IMC >= 26)',
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
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
      admin: {
        description:
          'Tipografía del Font Group en títulos, descripciones, resultados y textos de botones (calcular, resultado, IMC alto).',
      },
    },
    {
      name: 'fontGroup',
      type: 'relationship',
      relationTo: 'font-groups',
      label: 'Grupo de fuentes',
      admin: {
        condition: (_, siblingData) => siblingData?.useFontGroup === true,
        description: 'Grupo creado en Font Groups.',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean; useCustomFont?: boolean }) =>
          !siblingData?.useFontGroup && !siblingData?.useCustomFont,
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
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean }) =>
          siblingData?.useFontGroup !== true,
      },
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente',
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean; useCustomFont?: boolean }) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_: unknown, siblingData: { useFontGroup?: boolean; useCustomFont?: boolean }) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
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
          label: 'Color de fondo del bloque principal (en caso de no tener imagen de fondo)',
          admin: {
            description: 'Hex, rgb, rgba, nombre o linear-gradient(...).',
            placeholder: '#fafafa o linear-gradient(...)',
          },
        },
        {
          name: 'applyCustomWidth',
          type: 'checkbox',
          label: 'Aplicar ancho personalizado',
          defaultValue: false,
          admin: {
            description:
              'Si está activo, el contenido (calculadora y resultados) usa el ancho en % del viewport; el fondo (color, degradado o imagen) sigue a ancho completo. Si no lo marcas, el diseño no cambia.',
          },
        },
        {
          name: 'customWidthPercent',
          type: 'number',
          label: 'Ancho respecto a la pantalla (%)',
          min: 0,
          max: 100,
          defaultValue: 100,
          admin: {
            condition: (_, siblingData) => siblingData?.applyCustomWidth === true,
            description:
              '0–100. Ej.: 50 = el contenido ocupa el 50% del ancho de la ventana, centrado; sin paddings laterales extra sobre ese ancho.',
          },
        },
        {
          name: 'cardBackgroundColor',
          type: 'text',
          label: 'Color de fondo de la caja de la Calculadora/formulario',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#f5f5f0',
          },
        },
        {
          name: 'resultCardBackgroundColor',
          type: 'text',
          label: 'Color de fondo de la caja (IMC < 26)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#fafafa',
          },
        },
        {
          name: 'resultTextColor',
          type: 'text',
          label: 'Color del texto (IMC < 26)',
          admin: {
            description: 'Color del texto del resultado cuando el IMC es inferior a 26. Hex, rgb, rgba o nombre.',
            placeholder: '#000000',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Color del texto principal del bloque',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#000000',
          },
        },
        {
          name: 'labelColor',
          type: 'text',
          label: 'Color de las etiquetas peso y estatura',
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
          label: 'Color de fondo del botón de resultado (IMC < 26)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#2563eb',
          },
        },
        {
          name: 'resultButtonTextColor',
          type: 'text',
          label: 'Color del texto del botón de resultado (IMC < 26)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#ffffff',
          },
        },
        {
          name: 'highBMICardBackgroundColor',
          type: 'text',
          label: 'Color de fondo de la caja (IMC >= 26)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#f8f8f8',
          },
        },
        {
          name: 'highBMITextColor',
          type: 'text',
          label: 'Color del texto (IMC >= 26)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#000000',
          },
        },
        {
          name: 'highBMIButtonColor',
          type: 'text',
          label: 'Color de fondo del botón (IMC >= 26)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#2563eb',
          },
        },
        {
          name: 'highBMIButtonTextColor',
          type: 'text',
          label: 'Color del texto del botón (IMC >= 26)',
          admin: {
            description: 'Hex, rgb, rgba o nombre.',
            placeholder: '#ffffff',
          },
        },
      ],
    },
  ],
}
