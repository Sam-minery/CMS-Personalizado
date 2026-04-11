import type { Field } from 'payload'

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
import { linkGroup } from '@/fields/linkGroup'

/** Pesos y tamaño "texto pequeño" para rich text (Hero SENDA y otros que usen el mismo editor). */
const heroRichTextState = {
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

const heroRichTextEditor = () =>
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
      TextStateFeature({ state: heroRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Custom 2',
          value: 'custom2',
        },
        {
          label: 'Header 1',
          value: 'header1',
        },
        {
          label: 'Header 5',
          value: 'header5',
        },
        {
          label: 'Header 138',
          value: 'header138',
        },
        {
          label: 'Hero Template',
          value: 'heroTemplate',
        },
        {
          label: 'Hero SENDA',
          value: 'heroSenda',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: heroRichTextEditor(),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'custom2', 'header1', 'header5'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    // Campos específicos para Hero SENDA
    {
      name: 'heroSendaImage',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'heroSenda',
        description: 'Imagen a la derecha. Puede ser subida (Media) o URL externa.',
      },
      label: 'Imagen del hero (derecha)',
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: true,
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          admin: { condition: (_, siblingData) => siblingData?.useMedia === true },
          label: 'Imagen',
        },
        {
          name: 'url',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'URL de la imagen (si no usas Media)',
          },
          label: 'URL de imagen',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo',
        },
        {
          name: 'useCuImgDims',
          type: 'checkbox',
          label: 'Dimensiones personalizadas (imagen subida)',
          defaultValue: false,
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description:
              'Ancho y alto exactos (px o rem). La imagen rellena ese recuadro; si la proporción no coincide con la foto, se estira o comprime.',
          },
        },
        {
          name: 'customUploadedImageWidth',
          type: 'number',
          label: 'Ancho',
          min: 0,
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
            description: 'Valor numérico (ej. 400 o 25). La unidad se elige al lado.',
          },
        },
        {
          name: 'customUploadedImageWidthUnit',
          type: 'select',
          dbName: 'hs_cu_wu',
          label: 'Unidad del ancho',
          defaultValue: 'px',
          options: [
            { label: 'px', value: 'px' },
            { label: 'rem', value: 'rem' },
          ],
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
          },
        },
        {
          name: 'customUploadedImageHeight',
          type: 'number',
          label: 'Alto',
          min: 0,
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
            description: 'Valor numérico (ej. 300 o 18.75).',
          },
        },
        {
          name: 'customUploadedImageHeightUnit',
          type: 'select',
          dbName: 'hs_cu_hu',
          label: 'Unidad del alto',
          defaultValue: 'px',
          options: [
            { label: 'px', value: 'px' },
            { label: 'rem', value: 'rem' },
          ],
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
          },
        },
        {
          name: 'customUploadedImageMobW',
          type: 'number',
          label: 'Ancho (móvil)',
          min: 0,
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
            description:
              'Opcional. Por debajo de 1024px de ancho (breakpoint lg). Si lo dejas vacío, se usan ancho y alto de escritorio.',
          },
        },
        {
          name: 'customUploadedImageMobWu',
          type: 'select',
          dbName: 'hs_cu_mwu',
          label: 'Unidad ancho (móvil)',
          defaultValue: 'px',
          options: [
            { label: 'px', value: 'px' },
            { label: 'rem', value: 'rem' },
          ],
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
          },
        },
        {
          name: 'customUploadedImageMobH',
          type: 'number',
          label: 'Alto (móvil)',
          min: 0,
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
            description: 'Opcional. Si falta, se usa el alto de escritorio.',
          },
        },
        {
          name: 'customUploadedImageMobHu',
          type: 'select',
          dbName: 'hs_cu_mhu',
          label: 'Unidad alto (móvil)',
          defaultValue: 'px',
          options: [
            { label: 'px', value: 'px' },
            { label: 'rem', value: 'rem' },
          ],
          admin: {
            condition: (_, siblingData) =>
              siblingData?.useMedia === true && siblingData?.useCuImgDims === true,
          },
        },
      ],
    },
    {
      name: 'heroSendaApplyCustomWidth',
      type: 'checkbox',
      label: 'Aplicar ancho personalizado',
      defaultValue: false,
      admin: {
        condition: (_, { type } = {}) => type === 'heroSenda',
        description:
          'Si está activo, en el front el hero usa el ancho indicado (porcentaje del ancho de la ventana), centrado.',
      },
    },
    {
      name: 'heroSendaCustomWidthPercent',
      type: 'number',
      label: 'Ancho respecto a la pantalla (%)',
      min: 0,
      max: 100,
      defaultValue: 100,
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'heroSenda' && siblingData?.heroSendaApplyCustomWidth === true,
        description: 'Valor de 0 a 100. Ej.: 50 = el bloque ocupa el 50% del ancho de la ventana (viewport), centrado.',
      },
    },
    {
      name: 'heroSendaLeftButtons',
      type: 'array',
      dbName: 'hs_left_btns',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Dos botones debajo del texto (izquierda). Permite título, enlace, variante, tamaño e icono SVG.' },
      label: 'Botones izquierda (Hero SENDA)',
      maxRows: 2,
      fields: [
        link({ appearances: false }),
        {
          name: 'appearance',
          type: 'select',
          dbName: 'app',
          label: 'Estilo',
          defaultValue: 'default',
          options: [
            { label: 'Default (relleno)', value: 'default' },
            { label: 'Secondary (outline)', value: 'secondary' },
          ],
        },
        {
          name: 'size',
          type: 'select',
          dbName: 'sz',
          label: 'Tamaño',
          defaultValue: 'sm',
          options: [
            { label: 'Pequeño', value: 'sm' },
            { label: 'Grande', value: 'lg' },
          ],
        },
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG (opcional)',
          admin: { description: 'Código SVG para mostrar a la derecha del texto. Solo se aplica a botones con estilo default para colores personalizados.' },
        },
      ],
    },
    {
      name: 'heroSendaImageButton',
      type: 'group',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda' },
      label: 'Botón debajo de la imagen',
      fields: [
        {
          name: 'useVidivAgent',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Si está activo, en el front se muestra el widget del agente Vidiv en esta posición (sin enlace ni estilos de botón).',
          },
          label: 'Activar agent',
        },
        link({ appearances: false }),
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG (opcional)',
        },
      ],
    },
    {
      name: 'heroSendaBackgroundColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Ej: #ffffff, rgb(255,255,255), transparent' },
      label: 'Color de fondo (Hero SENDA)',
    },
    {
      name: 'heroSendaTextColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Color del texto principal' },
      label: 'Color de texto (Hero SENDA)',
    },
    {
      name: 'heroSendaBoldTextColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Color del texto en negrita' },
      label: 'Color texto negrita (Hero SENDA)',
    },
    {
      name: 'heroSendaButtonBackgroundColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Solo aplica a botones con estilo "Default (relleno)"' },
      label: 'Color de fondo botón (Hero SENDA)',
    },
    {
      name: 'heroSendaButtonTextColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Solo aplica a botones con estilo "Default (relleno)"' },
      label: 'Color de texto del botón (Hero SENDA)',
    },
    {
      name: 'heroSendaButton2BackgroundColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Botón 2 (izquierda, estilo Secondary)' },
      label: 'Color de fondo botón 2 (Hero SENDA)',
    },
    {
      name: 'heroSendaButton2TextColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Botón 2 (izquierda, estilo Secondary)' },
      label: 'Color de texto botón 2 (Hero SENDA)',
    },
    {
      name: 'heroSendaButton3BackgroundColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Botón debajo de la imagen' },
      label: 'Color de fondo botón 3 (Hero SENDA)',
    },
    {
      name: 'heroSendaButton3TextColor',
      type: 'text',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda', description: 'Botón debajo de la imagen' },
      label: 'Color de texto botón 3 (Hero SENDA)',
    },
    {
      name: 'heroSendaUseFontGroup',
      type: 'checkbox',
      label: 'Usar grupo de fuentes (Hero SENDA)',
      admin: { condition: (_, { type } = {}) => type === 'heroSenda' },
      defaultValue: false,
    },
    {
      name: 'heroSendaFontGroup',
      type: 'relationship',
      relationTo: 'font-groups',
      label: 'Grupo de fuentes (Hero SENDA)',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'heroSenda' && siblingData?.heroSendaUseFontGroup === true,
      },
    },
    {
      name: 'heroSendaFontFamily',
      type: 'select',
      label: 'Tipografía (Hero SENDA)',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'heroSenda' && siblingData?.heroSendaUseFontGroup !== true,
        description: 'Selecciona una tipografía. Se ignora si usas grupo de fuentes o fuente personalizada.',
      },
      options: [
        { label: 'Por defecto', value: 'default' },
        { label: 'Arial (Sistema)', value: 'Arial, sans-serif' },
        { label: 'Times New Roman (Sistema)', value: '"Times New Roman", serif' },
        { label: 'Georgia (Sistema)', value: 'Georgia, serif' },
        { label: 'Verdana (Sistema)', value: 'Verdana, sans-serif' },
        { label: 'Helvetica (Sistema)', value: 'Helvetica, Arial, sans-serif' },
        { label: 'Courier New (Sistema)', value: '"Courier New", monospace' },
        { label: 'Roboto (Google Fonts)', value: '"Roboto", sans-serif' },
        { label: 'Open Sans (Google Fonts)', value: '"Open Sans", sans-serif' },
        { label: 'Lato (Google Fonts)', value: '"Lato", sans-serif' },
        { label: 'Montserrat (Google Fonts)', value: '"Montserrat", sans-serif' },
        { label: 'Playfair Display (Google Fonts)', value: '"Playfair Display", serif' },
        { label: 'Inter (Google Fonts)', value: '"Inter", sans-serif' },
        { label: 'Poppins (Google Fonts)', value: '"Poppins", sans-serif' },
        { label: 'Raleway (Google Fonts)', value: '"Raleway", sans-serif' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'heroSendaUseCustomFont',
      type: 'checkbox',
      label: 'Usar fuente personalizada (Hero SENDA)',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'heroSenda' && siblingData?.heroSendaUseFontGroup !== true,
      },
      defaultValue: false,
    },
    {
      name: 'heroSendaCustomFontFile',
      type: 'upload',
      relationTo: 'fonts',
      label: 'Archivo de fuente (Hero SENDA)',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'heroSenda' &&
          siblingData?.heroSendaUseFontGroup !== true &&
          siblingData?.heroSendaUseCustomFont === true,
      },
    },
    {
      name: 'heroSendaCustomFontName',
      type: 'text',
      label: 'Nombre de la fuente (Hero SENDA)',
      admin: {
        condition: (_, siblingData) =>
          siblingData?.type === 'heroSenda' &&
          siblingData?.heroSendaUseFontGroup !== true &&
          siblingData?.heroSendaUseCustomFont === true,
      },
    },
    // Campos específicos para Header138
    {
      name: 'header138Heading',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      defaultValue: 'Medium length hero heading goes here',
      label: 'Heading',
      required: true,
    },
    {
      name: 'header138Description',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      label: 'Description',
    },
    {
      name: 'header138FirstImage',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: false,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen existente o suba una nueva',
          },
        },
        {
          name: 'src',
          type: 'text',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'Ingrese la URL de la imagen principal',
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Relume placeholder image 1',
          admin: {
            description: 'Texto alternativo para accesibilidad',
          },
        },
      ],
      label: 'First Image',
    },
    {
      name: 'header138SecondImage',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: false,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen existente o suba una nueva',
          },
        },
        {
          name: 'src',
          type: 'text',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'Ingrese la URL de la imagen secundaria',
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Relume placeholder image 2',
          admin: {
            description: 'Texto alternativo para accesibilidad',
          },
        },
      ],
      label: 'Second Image',
    },
    // Campos específicos para HeroTemplate
    {
      name: 'heroTemplateHeading',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      defaultValue: 'Agents that do the work <br /> Approvals that keep you safe.',
      label: 'Heading',
    },
    {
      name: 'heroTemplateSubheading',
      type: 'textarea',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      defaultValue: 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
      label: 'Subheading',
    },
    {
      name: 'heroPrimBtn',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Start your free trial',
          label: 'Button Text',
          required: true,
        },
        {
          name: 'link',
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  dbName: 't',
                  admin: {
                    layout: 'horizontal',
                    width: '50%',
                  },
                  defaultValue: 'custom',
                  options: [
                    {
                      label: 'Internal link',
                      value: 'reference',
                    },
                    {
                      label: 'Custom URL',
                      value: 'custom',
                    },
                  ],
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  admin: {
                    style: {
                      alignSelf: 'flex-end',
                    },
                    width: '50%',
                  },
                  label: 'Open in new tab',
                },
              ],
            },
            {
              name: 'reference',
              type: 'relationship',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference',
              },
              label: 'Document to link to',
              relationTo: ['pages', 'posts'],
            },
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom',
              },
              label: 'Custom URL',
              defaultValue: '#',
            },
          ],
          label: 'Button Link',
        },
      ],
      label: 'Primary Button',
    },
    {
      name: 'heroSecBtn',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'View role based demos',
          label: 'Button Text',
          required: true,
        },
        {
          name: 'link',
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  dbName: 't',
                  admin: {
                    layout: 'horizontal',
                    width: '50%',
                  },
                  defaultValue: 'custom',
                  options: [
                    {
                      label: 'Internal link',
                      value: 'reference',
                    },
                    {
                      label: 'Custom URL',
                      value: 'custom',
                    },
                  ],
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  admin: {
                    style: {
                      alignSelf: 'flex-end',
                    },
                    width: '50%',
                  },
                  label: 'Open in new tab',
                },
              ],
            },
            {
              name: 'reference',
              type: 'relationship',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference',
              },
              label: 'Document to link to',
              relationTo: ['pages', 'posts'],
            },
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom',
              },
              label: 'Custom URL',
              defaultValue: '#',
            },
          ],
          label: 'Button Link',
        },
      ],
      label: 'Secondary Button',
    },
    {
      name: 'heroImgs',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      fields: [
        {
          name: 'firstImageType',
          type: 'radio',
          dbName: 'img1_type',
          admin: {
            layout: 'horizontal',
          },
          defaultValue: 'url',
          options: [
            {
              label: 'Upload Image',
              value: 'upload',
            },
            {
              label: 'Image URL',
              value: 'url',
            },
          ],
          label: 'First Image Source',
        },
        {
          name: 'firstImageUpload',
          type: 'upload',
          admin: {
            condition: (_, siblingData) => siblingData?.firstImageType === 'upload',
          },
          relationTo: 'media',
          label: 'First Image Upload',
        },
        {
          name: 'firstImageUrl',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.firstImageType === 'url',
          },
          defaultValue: 'https://assets.aceternity.com/screenshots/4.jpg',
          label: 'First Image URL',
        },
        {
          name: 'secondImageType',
          type: 'radio',
          dbName: 'img2_type',
          admin: {
            layout: 'horizontal',
          },
          defaultValue: 'url',
          options: [
            {
              label: 'Upload Image',
              value: 'upload',
            },
            {
              label: 'Image URL',
              value: 'url',
            },
          ],
          label: 'Second Image Source',
        },
        {
          name: 'secondImageUpload',
          type: 'upload',
          admin: {
            condition: (_, siblingData) => siblingData?.secondImageType === 'upload',
          },
          relationTo: 'media',
          label: 'Second Image Upload',
        },
        {
          name: 'secondImageUrl',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.secondImageType === 'url',
          },
          defaultValue: 'https://assets.aceternity.com/screenshots/1.jpg',
          label: 'Second Image URL',
        },
        {
          name: 'showGradient',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Gradient',
        },
      ],
      label: 'Images',
    },
  ],
  label: false,
}
