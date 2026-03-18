import type { Block } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { link } from '@/fields/link'

export const CTA1SendaAlterBlock: Block = {
  slug: 'cta1SendaAlter',
  dbName: 'cta1_alt',
  interfaceName: 'CTA1SendaAlterBlock',
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'ID ancla',
      admin: {
        description: 'ID para enlaces ancla (ej: mi-cta). Usar el mismo valor en el navbar en "Id ancla (misma página)".',
      },
    },
    {
      name: 'title',
      type: 'richText',
      required: true,
      label: 'Título y descripción',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          return [
            ...defaultFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }),
            AlignFeature(),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      admin: {
        description: 'Contenido de cabecera (título y descripción en un único bloque). Se muestra en área 929×120px.',
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Color del texto',
      admin: {
        description: 'Color del texto principal. Cualquier formato CSS válido: hex (#fff), rgb/rgba, o nombre (white).',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'boldTextColor',
      type: 'text',
      label: 'Color del texto en negrita',
      admin: {
        description: 'Color para <strong> y <b>. Hex, rgb, rgba o nombre de color.',
        placeholder: '#ffffff',
      },
    },
    {
      name: 'blockHeightMode',
      type: 'select',
      label: 'Altura del bloque',
      defaultValue: 'viewport',
      options: [
        { label: 'Automática (depende del contenido)', value: 'auto' },
        { label: 'Alta (relativa al viewport)', value: 'viewport' },
        { label: 'Personalizada (px)', value: 'custom' },
      ],
      admin: {
        description: 'Controla la altura mínima del bloque.',
      },
    },
    {
      name: 'customBlockHeightPx',
      type: 'number',
      label: 'Altura personalizada (min-height en px)',
      admin: {
        description: 'Define la altura mínima en píxeles cuando la altura es "Personalizada (px)".',
        condition: (_, siblingData) => siblingData?.blockHeightMode === 'custom',
      },
    },
    {
      name: 'backgroundType',
      type: 'select',
      label: 'Tipo de fondo',
      defaultValue: 'video',
      options: [
        { label: 'Video de YouTube', value: 'video' },
        { label: 'Imagen de fondo', value: 'image' },
        { label: 'Color plano', value: 'color' },
      ],
      admin: {
        description: 'Elige si el fondo será un video, una imagen o un color sólido',
      },
    },
    {
      name: 'videocallSection',
      type: 'group',
      label: 'Sección Videollamada',
      fields: [
        {
          name: 'icon',
          type: 'group',
          label: 'Icono',
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
              label: 'Icono (media)',
              admin: { condition: (_, siblingData) => siblingData?.useMedia === true },
            },
            {
              name: 'iconSVG',
              type: 'textarea',
              label: 'Código SVG',
              admin: { condition: (_, siblingData) => siblingData?.useMedia !== true },
            },
          ],
        },
        {
          name: 'labelRichText',
          type: 'richText',
          label: 'Texto descriptivo',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              AlignFeature(),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
          admin: { description: 'Ej: "Videollamada gratuita". RichText con formato.' },
        },
        {
          name: 'labelTextColor',
          type: 'text',
          label: 'Color del texto descriptivo',
          admin: { placeholder: '#ffffff', description: 'Hex, rgb, rgba o nombre.' },
        },
        {
          name: 'buttonBackgroundColor',
          type: 'text',
          label: 'Color de fondo del botón',
          admin: { placeholder: 'rgba(255,255,255,0.2)', description: 'Hex, rgb, rgba o nombre.' },
        },
        {
          name: 'buttonTextColor',
          type: 'text',
          label: 'Color del texto del botón',
          admin: { placeholder: '#ffffff', description: 'Hex, rgb, rgba o nombre.' },
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
          admin: { description: 'Ej. flecha a la derecha' },
        },
        link({
          appearances: false,
          overrides: {
            name: 'link',
            label: 'Enlace del botón',
          },
        }),
      ],
    },
    {
      name: 'phoneSection',
      type: 'group',
      // dbName acorta el nombre del enum en DB (límite 63 caracteres en PostgreSQL)
      ...({ dbName: 'ph_sec' } as Record<string, unknown>),
      label: 'Sección Llamada telefónica',
      fields: [
        {
          name: 'icon',
          type: 'group',
          label: 'Icono',
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
              label: 'Icono (media)',
              admin: { condition: (_, siblingData) => siblingData?.useMedia === true },
            },
            {
              name: 'iconSVG',
              type: 'textarea',
              label: 'Código SVG',
              admin: { condition: (_, siblingData) => siblingData?.useMedia !== true },
            },
          ],
        },
        {
          name: 'labelRichText',
          type: 'richText',
          label: 'Texto descriptivo',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              AlignFeature(),
              FixedToolbarFeature(),
              InlineToolbarFeature(),
            ],
          }),
          admin: { description: 'Ej: "Te llamamos por teléfono". RichText con formato.' },
        },
        {
          name: 'labelTextColor',
          type: 'text',
          label: 'Color del texto descriptivo',
          admin: { placeholder: '#ffffff', description: 'Hex, rgb, rgba o nombre.' },
        },
        {
          name: 'buttonBackgroundColor',
          type: 'text',
          label: 'Color de fondo del botón',
          admin: { placeholder: 'rgba(255,255,255,0.2)', description: 'Hex, rgb, rgba o nombre.' },
        },
        {
          name: 'buttonTextColor',
          type: 'text',
          label: 'Color del texto del botón',
          admin: { placeholder: '#ffffff', description: 'Hex, rgb, rgba o nombre.' },
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón (opcional)',
          admin: { description: 'Ej. flecha a la derecha' },
        },
        link({
          appearances: false,
          overrides: {
            name: 'link',
            label: 'Enlace del botón',
          },
        }),
        {
          name: 'phonePopup',
          type: 'group',
          // dbName acorta el nombre del enum en DB (límite 63 caracteres en PostgreSQL)
          ...({ dbName: 'ph_pop' } as Record<string, unknown>),
          label: 'Popup al pulsar el botón (teléfono)',
          admin: { description: 'Si está configurado, el botón abrirá este popup en lugar de seguir el enlace.' },
          fields: [
            {
              name: 'usePopup',
              type: 'checkbox',
              label: 'Abrir popup al pulsar el botón',
              defaultValue: false,
              admin: { description: 'Activar para mostrar un formulario en popup en lugar de ir al enlace.' },
            },
            {
              name: 'closeButtonSVG',
              type: 'textarea',
              label: 'SVG del botón cerrar (X)',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                description: 'Código SVG del icono para cerrar el popup. Se muestra fuera del popup, encima de la esquina superior derecha.',
              },
            },
            {
              name: 'title',
              type: 'richText',
              label: 'Título del popup',
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
                  AlignFeature(),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                ],
              }),
              admin: {
                description: 'Ej: "Déjanos tus datos y te llamamos lo antes posible"',
                condition: (_, siblingData) => siblingData?.usePopup === true,
              },
            },
            {
              name: 'titleTextColor',
              type: 'text',
              label: 'Color del título del popup',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                placeholder: '#ffffff',
                description: 'Hex, rgb, rgba o nombre. Igual que en las secciones.',
              },
            },
            {
              name: 'titleBoldTextColor',
              type: 'text',
              label: 'Color del texto en negrita del título',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                placeholder: '#ffffff',
                description: 'Color para <strong> y <b> dentro del título.',
              },
            },
            {
              name: 'nameLabel',
              type: 'text',
              label: 'Etiqueta campo nombre',
              defaultValue: 'Nombre y apellidos *',
              admin: { condition: (_, siblingData) => siblingData?.usePopup === true },
            },
            {
              name: 'phoneLabel',
              type: 'text',
              label: 'Etiqueta campo teléfono',
              defaultValue: 'Número de teléfono *',
              admin: { condition: (_, siblingData) => siblingData?.usePopup === true },
            },
            {
              name: 'button',
              type: 'group',
              label: 'Botón del popup',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                description: 'Botón tipo enlace (CMSLink) con colores. Mismo tamaño que secciones (180×48px).',
              },
              fields: [
                link({
                  appearances: false,
                  overrides: {
                    name: 'link',
                    label: 'Enlace del botón',
                  },
                }),
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Color de fondo del botón',
                  admin: { placeholder: 'rgba(255,255,255,0.2)' },
                },
                {
                  name: 'textColor',
                  type: 'text',
                  label: 'Color del texto del botón',
                  admin: { placeholder: '#ffffff' },
                },
              ],
            },
            {
              name: 'termsRichText',
              type: 'richText',
              label: 'Texto términos y condiciones (junto al checkbox)',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  AlignFeature(),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                ],
              }),
              admin: {
                description: 'Texto que aparece junto al checkbox. Ej: "He leído y acepto las instrucciones del tratamiento."',
                condition: (_, siblingData) => siblingData?.usePopup === true,
              },
            },
            {
              name: 'termsTextColor',
              type: 'text',
              label: 'Color del texto de términos y condiciones',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                placeholder: 'rgba(255,255,255,0.9)',
                description: 'Hex, rgb, rgba o nombre.',
              },
            },
            {
              name: 'dataProtectionRichText',
              type: 'richText',
              label: 'Información sobre Protección de Datos',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  AlignFeature(),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                ],
              }),
              admin: {
                description: 'Texto legal que se muestra debajo del formulario.',
                condition: (_, siblingData) => siblingData?.usePopup === true,
              },
            },
            {
              name: 'dataProtectionTextColor',
              type: 'text',
              label: 'Color del texto de información sobre Protección de Datos',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                placeholder: 'rgba(255,255,255,0.8)',
                description: 'Hex, rgb, rgba o nombre.',
              },
            },
            {
              name: 'gradientStartColor',
              type: 'text',
              label: 'Color inicial del degradado del popup',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                placeholder: '#1e3a5f',
              },
            },
            {
              name: 'gradientEndColor',
              type: 'text',
              label: 'Color final del degradado del popup',
              admin: {
                condition: (_, siblingData) => siblingData?.usePopup === true,
                placeholder: '#4a2c7a',
              },
            },
            {
              name: 'gradientDirection',
              type: 'select',
              dbName: 'grad_dir',
              label: 'Dirección del degradado',
              defaultValue: 'to-br',
              options: [
                { label: 'Diagonal (↘ superior izq. a inferior der.)', value: 'to-br' },
                { label: 'Diagonal (↗)', value: 'to-tr' },
                { label: 'Horizontal →', value: 'to-right' },
                { label: 'Vertical ↓', value: 'to-bottom' },
              ],
              admin: { condition: (_, siblingData) => siblingData?.usePopup === true },
            },
          ],
        },
      ],
    },
    {
      name: 'video',
      type: 'group',
      label: 'Video',
      fields: [
        {
          name: 'youtubeUrl',
          type: 'text',
          required: false,
          label: 'URL de YouTube',
          admin: {
            description: 'Pega la URL del video de YouTube (ej: https://www.youtube.com/watch?v=VIDEO_ID)',
          },
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen de fondo',
      admin: {
        description: 'Imagen que se usará como fondo del CTA cuando el tipo de fondo sea "Imagen"',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
      admin: {
        description: 'Color plano. Hex, rgb, rgba o nombre (ej: #000000, rgba(0,0,0,0.5))',
        placeholder: '#000000',
      },
    },
    {
      name: 'backgroundColorMode',
      type: 'select',
      label: 'Modo de color de fondo',
      defaultValue: 'solid',
      options: [
        { label: 'Color sólido', value: 'solid' },
        { label: 'Degradado', value: 'gradient' },
      ],
      admin: {
        description: 'Elige si el color será sólido o un degradado',
        condition: (_, siblingData) => siblingData?.backgroundType === 'color',
      },
    },
    {
      name: 'gradientStartColor',
      type: 'text',
      label: 'Color inicial del degradado',
      admin: {
        description: 'Hex, rgb, rgba o nombre.',
        placeholder: '#ff0000',
        condition: (_, siblingData) =>
          siblingData?.backgroundType === 'color' &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'gradientEndColor',
      type: 'text',
      label: 'Color final del degradado',
      admin: {
        description: 'Hex, rgb, rgba o nombre.',
        placeholder: '#0000ff',
        condition: (_, siblingData) =>
          siblingData?.backgroundType === 'color' &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'gradientDirection',
      type: 'select',
      label: 'Dirección del degradado',
      defaultValue: 'to-right',
      options: [
        { label: 'De izquierda a derecha', value: 'to-right' },
        { label: 'De derecha a izquierda', value: 'to-left' },
        { label: 'De arriba hacia abajo', value: 'to-bottom' },
        { label: 'De abajo hacia arriba', value: 'to-top' },
        { label: 'Diagonal (↘︎)', value: 'diagonal-down' },
        { label: 'Diagonal (↗︎)', value: 'diagonal-up' },
      ],
      admin: {
        condition: (_, siblingData) =>
          siblingData?.backgroundType === 'color' &&
          siblingData?.backgroundColorMode === 'gradient',
      },
    },
    {
      name: 'fontFamily',
      type: 'select',
      label: 'Tipografía',
      admin: {
        condition: (_, siblingData) => !siblingData?.useCustomFont,
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
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
    {
      name: 'customFontName',
      type: 'text',
      label: 'Nombre de la fuente personalizada',
      admin: {
        condition: (_, siblingData) => siblingData?.useCustomFont === true,
      },
    },
  ],
  labels: {
    singular: 'CTA1 SENDA Alter',
    plural: 'CTA1 SENDA Alter',
  },
}
