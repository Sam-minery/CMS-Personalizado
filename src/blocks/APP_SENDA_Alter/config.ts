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

import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'
import { link } from '@/fields/link'

const appSendaAlterRichTextState = {
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

const appRichTextEditor = () =>
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
      TextStateFeature({ state: appSendaAlterRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

const contentImageGroupFields = (imageLabel: string) =>
  [
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
      label: imageLabel,
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
        description: 'Descripción de la imagen para accesibilidad.',
      },
    },
  ] as const

export const AppSendaAlterBlockConfig: Block = {
  slug: 'appSendaAlter',
  interfaceName: 'AppSendaAlterBlock',
  labels: {
    singular: 'App Senda Alter',
    plural: 'App Senda Alter',
  },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description:
          'ID para enlaces ancla (ej: app-senda-alter). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
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
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo del bloque',
      admin: {
        description:
          'Color de fondo: nombre CSS (white, black, transparent) o valor (#f5f5f5, rgb(245,245,245)). Se aplica siempre aunque el navegador esté en modo oscuro.',
        placeholder: '#f5f5f5',
      },
    },
    {
      name: 'applyCustomWidth',
      type: 'checkbox',
      label: 'Aplicar ancho personalizado',
      defaultValue: false,
      admin: {
        description:
          'Si está activo, el contenido (tarjeta con textos, imágenes y botones) usa el ancho en % del viewport; el fondo del bloque sigue a ancho completo. Si no lo marcas, el diseño no cambia.',
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
      name: 'cardBackgroundColor',
      type: 'text',
      label: 'Color de fondo de la caja',
      admin: {
        description:
          'Color de la tarjeta interior. Nombre CSS (white, gray) o valor (#ffffff, rgb(255,255,255)).',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'contentColor',
      type: 'text',
      label: 'Color del texto (título y descripción)',
      admin: {
        description:
          'Color del texto del primer RichText. Nombre (black, gray) o valor (#111827, rgba(0,0,0,0.8)). Se respeta en modo claro y oscuro.',
        placeholder: '#111827',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
      admin: {
        description:
          'Color para <strong> y <b> en content, contentDesktop y contentMobile. Nombre CSS o valor hex/rgba. Vacío = hereda del color del texto.',
        placeholder: '#111827',
      },
    },
    {
      name: 'contentBelowImagesColor',
      type: 'text',
      label: 'Color del texto (contentDesktop y contentMobile)',
      admin: {
        description:
          'Color del RichText escritorio (izquierda de la imagen) y de los tres RichText solo móvil. Nombre CSS o valor hex/rgba.',
        placeholder: '#111827',
      },
    },
    {
      name: 'buttonsBackgroundColor',
      type: 'text',
      label: 'Color de fondo de los botones',
      admin: {
        description:
          'Fondo de los botones: nombre (blue, #007AFF) o valor CSS. Vacío = azul por defecto.',
        placeholder: '#007AFF',
      },
    },
    {
      name: 'buttonsTextColor',
      type: 'text',
      label: 'Color del texto de los botones',
      admin: {
        description:
          'Texto de los botones: nombre (white) o valor CSS. Vacío = blanco.',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Content (móvil y escritorio)',
      editor: appRichTextEditor(),
      admin: {
        description:
          'Campo `content`: texto superior visible en móvil y escritorio (centrado en escritorio, izquierda en móvil).',
      },
    },
    {
      name: 'image1',
      type: 'group',
      label: 'Imagen escritorio (ej. código QR)',
      admin: {
        description: 'Imagen principal en escritorio, a la derecha de contentDesktop.',
      },
      fields: [...contentImageGroupFields('Imagen')],
    },
    {
      name: 'imageMobile1',
      type: 'group',
      label: 'Imagen móvil 1',
      admin: {
        description: 'Primera imagen solo en móvil (tras el primer RichText móvil).',
      },
      fields: [...contentImageGroupFields('Imagen')],
    },
    {
      name: 'imageMobile2',
      type: 'group',
      label: 'Imagen móvil 2',
      admin: {
        description: 'Segunda imagen solo en móvil (tras el segundo RichText móvil).',
      },
      fields: [...contentImageGroupFields('Imagen')],
    },
    {
      name: 'imageMobile3',
      type: 'group',
      label: 'Imagen móvil 3',
      admin: {
        description: 'Tercera imagen solo en móvil (debajo de los botones).',
      },
      fields: [...contentImageGroupFields('Imagen')],
    },
    {
      name: 'contentDesktop',
      type: 'richText',
      label: 'Content escritorio (contentDesktop)',
      editor: appRichTextEditor(),
      admin: {
        description:
          'RichText visible solo en tablet/escritorio, a la izquierda de la imagen escritorio. En móvil no se muestra; ahí se usan contentMobile1–3.',
      },
    },
    {
      name: 'contentMobile1',
      type: 'richText',
      label: 'Content móvil 1 (contentMobile1)',
      editor: appRichTextEditor(),
      admin: {
        description: 'Solo móvil: debajo de content, alineado a la izquierda.',
      },
    },
    {
      name: 'contentMobile2',
      type: 'richText',
      label: 'Content móvil 2 (contentMobile2)',
      editor: appRichTextEditor(),
      admin: {
        description: 'Solo móvil: tras la primera imagen móvil.',
      },
    },
    {
      name: 'contentMobile3',
      type: 'richText',
      label: 'Content móvil 3 (contentMobile3)',
      editor: appRichTextEditor(),
      admin: {
        description: 'Solo móvil: tras la segunda imagen móvil y antes de los botones.',
      },
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del botón',
          defaultValue: 'App Store',
          admin: {
            description: 'Texto visible en el front (ej: "App Store", "Google Play").',
          },
        },
        link({
          disableLabel: true,
          appearances: false,
          overrides: {
            name: 'link',
            label: 'Enlace',
            admin: {
              description: 'URL de la tienda (App Store o Google Play).',
            },
          },
        }),
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
          admin: {
            description: 'Código SVG para el icono (ej. flecha). Si no se define, no se muestra icono.',
          },
        },
      ],
      admin: {
        description: 'Hasta dos botones (ej. App Store y Google Play).',
      },
    },
    {
      name: 'useFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes',
      defaultValue: false,
      admin: {
        description:
          'Tipografía del Font Group en todos los RichText y en el texto de los botones.',
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
        condition: (_, siblingData) => !siblingData?.useFontGroup && !siblingData?.useCustomFont,
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
        condition: (_, siblingData) => siblingData?.useFontGroup !== true,
      },
    },
    {
      name: 'customFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
      },
    },
  ],
}
