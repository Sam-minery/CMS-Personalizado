import type { Block, GroupField } from 'payload'

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

import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'
import { link } from '@/fields/link'

const multiFormSendaRichTextState = {
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

const richTextEditor = () =>
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
      SmallBodyFeature(),
      HorizontalRuleFeature(),
      SubscriptFeature(),
      TextStateFeature({ state: multiFormSendaRichTextState }),
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
      dbName: 'mf_st',
      label: 'Pasos del formulario',
      minRows: 1,
      admin: {
        description: 'Cada paso muestra un texto, opciones y un botón. El usuario elige una opción y luego pulsa el botón para avanzar (o el botón puede ser un enlace).',
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
        {
          name: 'stepButtonBackgroundColor',
          type: 'text',
          label: 'Color de fondo del botón de paso',
          admin: {
            description: 'Cuando el usuario elige una opción, el botón usará este color de fondo.',
          },
        },
        {
          name: 'stepButtonTextColor',
          type: 'text',
          label: 'Color del texto del botón de paso',
          admin: {
            description: 'Cuando el usuario elige una opción, el botón usará este color de texto.',
          },
        },
        {
          name: 'stepButtonIconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón de paso (opcional)',
        },
        {
          name: 'stepButtonLabel',
          type: 'text',
          label: 'Texto del botón de paso',
          admin: {
            description: 'Cuando el botón no es un enlace, se muestra este texto (ej: Continuar).',
          },
        },
        {
          name: 'convertStepButtonToLink',
          type: 'checkbox',
          label: 'Convertir botón de paso en enlace',
          defaultValue: false,
          admin: {
            description: 'Si está activo, el botón será un enlace (CMSLink). Si no, el botón confirmará la opción elegida y avanzará al siguiente paso.',
          },
        },
        link({
          appearances: false,
          overrides: {
            name: 'stepButtonLink',
            dbName: 'sbl',
            admin: {
              hideGutter: true,
              description: 'Enlace del botón. Solo aplica si "Convertir botón de paso en enlace" está activo.',
              condition: (_: unknown, siblingData: { convertStepButtonToLink?: boolean }) =>
                siblingData?.convertStepButtonToLink === true,
            },
          } as Partial<GroupField>,
        }),
      ],
    },
    {
      name: 'endRichText',
      type: 'richText',
      editor: richTextEditor(),
      label: 'Texto final',
      required: false,
      admin: {
        description: 'Contenido que se muestra al terminar todos los pasos. Si está vacío y no hay botón final, no se mostrará la última pantalla.',
      },
    },
    {
      name: 'endButtonLink',
      type: 'group',
      admin: {
        hideGutter: true,
        description: 'Enlace del botón que se muestra al final (ej: ir a una página). Opcional. No es obligatorio rellenar enlace ni label. Si texto final y enlace están vacíos, no se mostrará la última pantalla.',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'type',
              type: 'radio',
              admin: { layout: 'horizontal', width: '50%' },
              defaultValue: 'reference',
              options: [
                { label: 'Internal link', value: 'reference' },
                { label: 'Custom URL', value: 'custom' },
              ],
            },
            {
              name: 'newTab',
              type: 'checkbox',
              admin: { style: { alignSelf: 'flex-end' }, width: '50%' },
              label: 'Open in new tab',
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'reference',
              type: 'relationship',
              relationTo: ['pages', 'posts'],
              admin: { condition: (_, siblingData) => siblingData?.type === 'reference', width: '50%' },
              label: 'Document to link to',
              required: false,
            },
            {
              name: 'url',
              type: 'text',
              admin: { condition: (_, siblingData) => siblingData?.type === 'custom', width: '50%' },
              label: 'Custom URL',
              required: false,
            },
            {
              name: 'label',
              type: 'text',
              admin: { width: '50%' },
              label: 'Label',
              required: false,
            },
          ],
        },
      ],
    },
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
        description: 'Cualquier color CSS válido (hex, rgb, rgba, hsl, nombres). Se usa si no hay imagen de fondo.',
      },
    },
    {
      name: 'applyCustomWidth',
      type: 'checkbox',
      label: 'Aplicar ancho personalizado',
      defaultValue: false,
      admin: {
        description:
          'Si está activo, el contenido (tarjeta del formulario) usa el ancho en % del viewport; el fondo del bloque sigue a ancho completo. Si no lo marcas, el diseño no cambia.',
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
      name: 'customWidthPercentMobile',
      type: 'number',
      label: 'Ancho personalizado (dispositivos móvil)',
      min: 0,
      max: 100,
      admin: {
        condition: (_, siblingData) => siblingData?.applyCustomWidth === true,
        description:
          'Opcional. Si lo dejas vacío, en móvil se usa el mismo “Ancho respecto a la pantalla (%)” que arriba. Si indicas un valor (0–100), solo en pantallas menores a 768px de ancho el bloque usará ese ancho; desde tablet y desktop sigue el campo principal.',
      },
    },
    {
      name: 'backgroundImage',
      type: 'group',
      label: 'Imagen de fondo del bloque',
      admin: {
        description: 'Opcional. Si se define, puede usarse en lugar del color de fondo. Media subida o URL externa.',
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
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen de la librería. En deploy se usará la URL absoluta correcta.',
          },
        },
        {
          name: 'src',
          type: 'text',
          label: 'URL de la imagen',
          admin: {
            condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia !== true,
            description: 'URL de la imagen cuando no se usa media subida (ej: https://...).',
          },
        },
      ],
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
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
      admin: {
        description:
          'Tipografía y tamaños del Font Group se aplican a introducción, pasos, opciones, cierre y texto de botones.',
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
        condition: (_: unknown, siblingData: { useFontGroup?: boolean; useCustomFont?: boolean }) =>
          !siblingData?.useFontGroup && !siblingData?.useCustomFont,
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
  ],
}
