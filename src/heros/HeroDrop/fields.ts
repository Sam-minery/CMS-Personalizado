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

import { colorField } from '@/fields/color'
import { dropButtonBackgroundSecondaryField } from '@/fields/dropButtonBackgroundSecondary'
import { iconGroupFields } from '@/fields/iconGroupFields'
import { svgCodeField } from '@/fields/svgCode'
import { SmallBodyFeature } from '@/lexical-features/small-body/feature.server'

const heroDropRichTextState = {
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
      TextStateFeature({ state: heroDropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

const heroIconFields = () =>
  iconGroupFields({
    defaultUseMedia: false,
    mediaName: 'img',
    svgName: 'svg',
  })

const fontFamilyOptions = [
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
]

/** Tipografía con nombres cortos (límite Postgres 63 chars en `_pages_v`). */
const sectionTypographyFields = (dbPrefix: string): Field[] => [
  {
    type: 'row',
    fields: [
      colorField({
        name: 'color',
        label: 'Color del texto principal',
        width: '50%',
        placeholder: '#101835',
        admin: {
          description: 'Hex, rgb, rgba o nombre CSS.',
        },
      }),
      colorField({
        name: 'bold',
        label: 'Color del texto en negrita',
        width: '50%',
        placeholder: '#C2005F',
        admin: {
          description: 'Color para strong/b dentro del RichText.',
        },
      }),
    ],
  },
  {
    type: 'collapsible',
    label: 'Tipografía',
    admin: { initCollapsed: true },
    fields: [
      {
        name: 'useFG',
        type: 'checkbox',
        label: 'Usar grupo de fuentes',
        defaultValue: false,
      },
      {
        name: 'fg',
        type: 'relationship',
        relationTo: 'font-groups',
        label: 'Grupo de fuentes',
        admin: {
          condition: (_, siblingData) => siblingData?.useFG === true,
        },
      },
      {
        name: 'ff',
        type: 'select',
        dbName: `${dbPrefix}_ff`,
        label: 'Tipografia',
        admin: {
          condition: (_, siblingData) => !siblingData?.useFG && !siblingData?.useCF,
        },
        options: fontFamilyOptions,
        defaultValue: 'default',
      },
      {
        name: 'useCF',
        type: 'checkbox',
        label: 'Usar fuente personalizada',
        defaultValue: false,
        admin: {
          condition: (_, siblingData) => siblingData?.useFG !== true,
        },
      },
      {
        name: 'cFont',
        type: 'upload',
        relationTo: 'fonts',
        label: 'Archivo de fuente',
        admin: {
          condition: (_, siblingData) => siblingData?.useFG !== true && siblingData?.useCF === true,
        },
      },
      {
        name: 'cFontNm',
        type: 'text',
        label: 'Nombre de la fuente personalizada',
        admin: {
          condition: (_, siblingData) => siblingData?.useFG !== true && siblingData?.useCF === true,
        },
      },
    ],
  },
]

/** Link compacto con dbNames cortos (evita enums > 63 chars). */
const shortLinkFields = (
  typeDbName: string,
  opts?: { defaultLabel?: string; requireLabel?: boolean },
): Field[] => [
  {
    type: 'row',
    fields: [
      {
        name: 'type',
        type: 'radio',
        dbName: typeDbName,
        admin: { layout: 'horizontal', width: '50%' },
        defaultValue: 'custom',
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
    name: 'reference',
    type: 'relationship',
    admin: { condition: (_, siblingData) => siblingData?.type === 'reference' },
    label: 'Document to link to',
    relationTo: ['pages', 'posts'],
  },
  {
    name: 'url',
    type: 'text',
    admin: { condition: (_, siblingData) => siblingData?.type === 'custom' },
    label: 'Custom URL',
    defaultValue: '#',
  },
  {
    name: 'label',
    type: 'text',
    label: 'Label',
    required: opts?.requireLabel ?? true,
    ...(opts?.defaultLabel ? { defaultValue: opts.defaultLabel } : {}),
  },
]

const buttonColorRow = (opts: {
  bg: string
  bg2: string
  fg: string
  bgLabel: string
  bg2Label: string
  fgLabel: string
  bgDefault: string
  fgDefault: string
}): Field => ({
  type: 'row',
  fields: [
    colorField({
      name: opts.bg,
      label: opts.bgLabel,
      defaultValue: opts.bgDefault,
      width: '33%',
      placeholder: opts.bgDefault,
    }),
    dropButtonBackgroundSecondaryField({
      name: opts.bg2,
      label: opts.bg2Label,
      width: '33%',
    }),
    colorField({
      name: opts.fg,
      label: opts.fgLabel,
      defaultValue: opts.fgDefault,
      width: '33%',
      placeholder: opts.fgDefault,
    }),
  ],
})

const isHeroDrop = (_: unknown, { type }: { type?: string } = {}) => type === 'heroDrop'

/** Campos específicos del Hero Drop (condicionados a type === 'heroDrop'). */
export const heroDropFields: Field[] = [
  {
    name: 'hd',
    type: 'group',
    label: 'Hero Drop',
    admin: {
      condition: isHeroDrop,
      description: 'Contenido y estilos del Hero Drop. Nombres cortos por límite Postgres (63).',
    },
    fields: [
      {
        type: 'tabs',
        tabs: [
          {
            label: 'Contenido',
            fields: [
              {
                name: 'tag',
                type: 'group',
                label: 'Tag superior',
                fields: [
                  {
                    name: 'icon',
                    type: 'group',
                    label: 'Icono',
                    fields: heroIconFields(),
                  },
                  {
                    name: 'label',
                    type: 'text',
                    label: 'Texto del tag',
                    defaultValue: 'Clínica digital de pérdida de peso',
                  },
                  {
                    type: 'row',
                    fields: [
                      colorField({
                        name: 'backgroundColor',
                        label: 'Color de fondo',
                        defaultValue: '#FCE4EC',
                        width: '50%',
                        placeholder: '#FCE4EC',
                        admin: {
                          description:
                            'También se aplica al fondo de los iconos (features, footer y calculadora).',
                        },
                      }),
                      colorField({
                        name: 'textColor',
                        label: 'Color de texto',
                        defaultValue: '#C2005F',
                        width: '50%',
                        placeholder: '#C2005F',
                        admin: {
                          description: 'Color del texto del tag.',
                        },
                      }),
                    ],
                  },
                ],
              },
              {
                name: 'hdr',
                type: 'richText',
                label: 'Textbox principal',
                required: true,
                editor: richTextEditor(),
                admin: {
                  description:
                    'Título y descripción. Usa negrita para resaltar (p. ej. “en equilibrio.”).',
                },
              },
              {
                name: 'buttons',
                type: 'array',
                dbName: 'hd_btn',
                label: 'Botones CTA',
                maxRows: 2,
                labels: { singular: 'Botón', plural: 'Botones' },
                admin: {
                  description: 'Máximo 2. El primero es primario; el segundo, secundario.',
                  initCollapsed: true,
                  components: {
                    RowLabel: '@/fields/dropArrayRowLabels#ButtonRowLabel',
                  },
                },
                fields: [
                  {
                    name: 'link',
                    type: 'group',
                    label: 'Enlace',
                    fields: shortLinkFields('t'),
                  },
                  svgCodeField({
                    name: 'iconSVG',
                    label: 'Icono SVG del botón (opcional)',
                  }),
                ],
              },
              {
                name: 'features',
                type: 'array',
                dbName: 'hd_feat',
                label: 'Sub sección',
                maxRows: 3,
                labels: { singular: 'Item', plural: 'Items' },
                admin: {
                  description: 'Máximo 3. Cada uno con icono y texto.',
                  initCollapsed: true,
                  components: {
                    RowLabel: '@/fields/dropArrayRowLabels#HeroFeatureRowLabel',
                  },
                },
                fields: [
                  {
                    name: 'icon',
                    type: 'group',
                    label: 'Icono',
                    fields: heroIconFields(),
                  },
                  {
                    name: 'content',
                    type: 'richText',
                    label: 'Textbox',
                    required: true,
                    editor: richTextEditor(),
                  },
                ],
              },
              {
                name: 'media',
                type: 'upload',
                relationTo: 'media',
                label: 'Imagen principal',
                admin: {
                  description: 'Foto del hero (lado derecho en desktop).',
                },
              },
              {
                name: 'imgAlt',
                type: 'text',
                label: 'Texto alternativo de la imagen',
                defaultValue: 'Hero',
              },
              {
                name: 'footerItems',
                type: 'array',
                dbName: 'hd_foot',
                label: 'Sección final',
                maxRows: 3,
                labels: { singular: 'Item', plural: 'Items' },
                admin: {
                  description: 'Máximo 3. Barra inferior con icono + texto.',
                  initCollapsed: true,
                  components: {
                    RowLabel: '@/fields/dropArrayRowLabels#FooterItemRowLabel',
                  },
                },
                fields: [
                  {
                    name: 'icon',
                    type: 'group',
                    label: 'Icono',
                    fields: heroIconFields(),
                  },
                  {
                    name: 'content',
                    type: 'richText',
                    label: 'Textbox',
                    required: true,
                    editor: richTextEditor(),
                  },
                ],
              },
            ],
          },
          {
            label: 'Estilos',
            fields: [
              {
                name: 'hsty',
                type: 'group',
                label: 'Estilo del textbox principal',
                fields: sectionTypographyFields('h'),
              },
              {
                name: 'fsty',
                type: 'group',
                label: 'Estilo de la sub sección',
                fields: sectionTypographyFields('f'),
              },
              {
                name: 'osty',
                type: 'group',
                label: 'Estilo de la sección final',
                fields: sectionTypographyFields('o'),
              },
              {
                name: 'curves',
                type: 'checkbox',
                label: 'Mostrar SVG decorativos de fondo',
                defaultValue: true,
                admin: {
                  description:
                    'Activa o desactiva las curvas SVG animadas del fondo (desktop y mobile).',
                },
              },
              {
                type: 'row',
                fields: [
                  colorField({
                    name: 'accent',
                    label: 'Color de acento',
                    defaultValue: '#C2005F',
                    width: '50%',
                    placeholder: '#C2005F',
                  }),
                  colorField({
                    name: 'bg',
                    label: 'Color de fondo (base)',
                    defaultValue: '#FFFFFF',
                    width: '50%',
                    placeholder: '#FFFFFF',
                  }),
                ],
              },
              {
                name: 'bgGrad',
                type: 'text',
                label: 'Gradiente de fondo (CSS opcional)',
                defaultValue: 'linear-gradient(180deg, #FFF5F8 0%, #FFFFFF 55%)',
                admin: {
                  description: 'Ej: linear-gradient(...). Si está vacío, usa solo el color base.',
                },
              },
              buttonColorRow({
                bg: 'pBtnBg',
                bg2: 'pBtnBg2',
                fg: 'pBtnFg',
                bgLabel: 'Color fondo CTA primario',
                bg2Label: 'Color fondo CTA primario secundario',
                fgLabel: 'Color texto CTA primario',
                bgDefault: '#C2005F',
                fgDefault: '#FFFFFF',
              }),
              colorField({
                name: 'sBtnFg',
                label: 'Color texto CTA secundario',
                defaultValue: '#101835',
                placeholder: '#101835',
              }),
            ],
          },
          {
            label: 'Calculadora',
            fields: [
              {
                name: 'calc',
                type: 'group',
                label: 'Calculadora IMC',
                fields: [
                  {
                    name: 'icon',
                    type: 'group',
                    label: 'Icono',
                    fields: heroIconFields(),
                  },
                  {
                    name: 'content',
                    type: 'richText',
                    label: 'Textbox',
                    editor: richTextEditor(),
                    admin: {
                      description: 'Título y subtítulo de la card (ej: “Calcula tu IMC”).',
                    },
                  },
                  {
                    type: 'row',
                    fields: [
                      {
                        name: 'hLabel',
                        type: 'text',
                        label: 'Título estatura',
                        defaultValue: 'Estatura',
                        admin: { width: '50%' },
                      },
                      {
                        name: 'hPh',
                        type: 'text',
                        label: 'Placeholder estatura',
                        defaultValue: 'Ej. 170',
                        admin: { width: '50%' },
                      },
                    ],
                  },
                  {
                    name: 'hUnit',
                    type: 'text',
                    label: 'Unidad estatura',
                    defaultValue: 'cm',
                  },
                  {
                    type: 'row',
                    fields: [
                      {
                        name: 'wLabel',
                        type: 'text',
                        label: 'Título peso',
                        defaultValue: 'Peso',
                        admin: { width: '50%' },
                      },
                      {
                        name: 'wPh',
                        type: 'text',
                        label: 'Placeholder peso',
                        defaultValue: 'Ej. 70',
                        admin: { width: '50%' },
                      },
                    ],
                  },
                  {
                    name: 'wUnit',
                    type: 'text',
                    label: 'Unidad peso',
                    defaultValue: 'kg',
                  },
                  {
                    name: 'btnLabel',
                    type: 'text',
                    label: 'Texto del botón',
                    defaultValue: 'Calcular mi IMC',
                  },
                  svgCodeField({
                    name: 'btnSvg',
                    label: 'Icono SVG del botón (opcional)',
                  }),
                  {
                    name: 'ptag',
                    type: 'group',
                    label: 'Tag + icono (bajo el botón)',
                    fields: [
                      {
                        name: 'icon',
                        type: 'group',
                        label: 'Icono',
                        fields: heroIconFields(),
                      },
                      {
                        name: 'label',
                        type: 'text',
                        label: 'Texto del tag',
                        defaultValue: 'Tus datos están protegidos',
                      },
                    ],
                  },
                  svgCodeField({
                    name: 'floatSvg',
                    label: 'Icono flotante (corazón, opcional)',
                    admin: {
                      description: 'SVG del badge circular sobre la esquina de la card.',
                    },
                  }),
                  buttonColorRow({
                    bg: 'btnBg',
                    bg2: 'btnBg2',
                    fg: 'btnFg',
                    bgLabel: 'Color fondo botón',
                    bg2Label: 'Color fondo secundario',
                    fgLabel: 'Color texto botón',
                    bgDefault: '#C2005F',
                    fgDefault: '#FFFFFF',
                  }),
                  {
                    type: 'row',
                    fields: [
                      colorField({
                        name: 'cardBg',
                        label: 'Color de fondo de la card',
                        defaultValue: '#FFFFFF',
                        width: '50%',
                        placeholder: '#FFFFFF',
                      }),
                      colorField({
                        name: 'modalBg',
                        label: 'Color de fondo del modal',
                        defaultValue: '#FFFFFF',
                        width: '50%',
                        placeholder: '#FFFFFF',
                      }),
                    ],
                  },
                  {
                    name: 'modalTitle',
                    type: 'text',
                    label: 'Título del modal (paso calcular)',
                    defaultValue: 'Calcula tu IMC',
                  },
                  {
                    name: 'recalcTxt',
                    type: 'text',
                    label: 'Texto “Volver a calcular”',
                    defaultValue: 'Volver a calcular',
                  },
                  {
                    name: 'cats',
                    type: 'array',
                    dbName: 'hd_cat',
                    label: 'Categorías IMC (para emparejar resultado)',
                    maxRows: 8,
                    labels: { singular: 'Categoría', plural: 'Categorías' },
                    admin: {
                      description:
                        'Rangos imcMin/imcMax y “Es apto” definen el resultado del popup (como CalculadoraIMC_Drop).',
                      initCollapsed: true,
                      components: {
                        RowLabel: '@/fields/dropArrayRowLabels#HeroCategoryRowLabel',
                      },
                    },
                    fields: [
                      {
                        name: 'icon',
                        type: 'group',
                        label: 'Icono',
                        fields: heroIconFields(),
                      },
                      {
                        name: 'catLbl',
                        type: 'text',
                        label: 'Texto categoría',
                        required: true,
                      },
                      {
                        name: 'imcLbl',
                        type: 'text',
                        label: 'Texto IMC',
                        required: true,
                      },
                      {
                        type: 'row',
                        fields: [
                          {
                            name: 'imcMin',
                            type: 'number',
                            label: 'IMC mínimo (inclusivo)',
                            required: true,
                            admin: { width: '50%' },
                          },
                          {
                            name: 'imcMax',
                            type: 'number',
                            label: 'IMC máximo (exclusivo)',
                            admin: {
                              width: '50%',
                              description: 'Vacío = sin tope.',
                            },
                          },
                        ],
                      },
                      {
                        name: 'eligible',
                        type: 'checkbox',
                        label: 'Es apto para el tratamiento',
                        defaultValue: false,
                      },
                    ],
                  },
                  {
                    name: 'enableContact',
                    type: 'checkbox',
                    label: 'Usar versión apto con formulario de contacto',
                    defaultValue: true,
                    admin: {
                      description:
                        'Si está activo, cuando el IMC es apto se muestra primero el formulario de contacto y después el resultado. Si no es apto, el resultado se muestra directamente.',
                    },
                  },
                  {
                    name: 'contact',
                    type: 'group',
                    label: 'Formulario de contacto (antes del resultado apto)',
                    admin: {
                      condition: (_, siblingData) => siblingData?.enableContact === true,
                      description: 'Se muestra tras calcular un IMC apto, antes del resultado final.',
                    },
                    fields: [
                      {
                        name: 'title',
                        type: 'richText',
                        label: 'Título',
                        editor: richTextEditor(),
                      },
                      {
                        name: 'desc',
                        type: 'richText',
                        label: 'Descripción',
                        editor: richTextEditor(),
                      },
                      {
                        type: 'row',
                        fields: [
                          {
                            name: 'nPh',
                            type: 'text',
                            label: 'Placeholder nombre',
                            defaultValue: 'Nombre',
                            admin: { width: '33%' },
                          },
                          {
                            name: 'pPh',
                            type: 'text',
                            label: 'Placeholder teléfono',
                            defaultValue: 'Teléfono',
                            admin: { width: '33%' },
                          },
                          {
                            name: 'ePh',
                            type: 'text',
                            label: 'Placeholder email',
                            defaultValue: 'Email',
                            admin: { width: '34%' },
                          },
                        ],
                      },
                      {
                        name: 'nIcon',
                        type: 'group',
                        label: 'Icono nombre',
                        fields: heroIconFields(),
                      },
                      {
                        name: 'pIcon',
                        type: 'group',
                        label: 'Icono teléfono',
                        fields: heroIconFields(),
                      },
                      {
                        name: 'eIcon',
                        type: 'group',
                        label: 'Icono email',
                        fields: heroIconFields(),
                      },
                      {
                        name: 'privacy',
                        type: 'richText',
                        label: 'Texto de privacidad / consentimiento',
                        editor: richTextEditor(),
                      },
                      {
                        name: 'privReq',
                        type: 'checkbox',
                        label: 'Consentimiento obligatorio',
                        defaultValue: true,
                      },
                      {
                        name: 'contBtn',
                        type: 'richText',
                        label: 'Texto del botón Continuar',
                        editor: richTextEditor(),
                      },
                      buttonColorRow({
                        bg: 'contBg',
                        bg2: 'contBg2',
                        fg: 'contFg',
                        bgLabel: 'Color fondo Continuar',
                        bg2Label: 'Color fondo secundario',
                        fgLabel: 'Color texto Continuar',
                        bgDefault: '#C2005F',
                        fgDefault: '#FFFFFF',
                      }),
                    ],
                  },
                  {
                    name: 'eligContent',
                    type: 'richText',
                    label: 'Contenido resultado apto',
                    editor: richTextEditor(),
                    admin: {
                      description: 'Usa {bmi} para insertar el valor (ej. 28,4).',
                    },
                  },
                  {
                    name: 'eligBtns',
                    type: 'array',
                    dbName: 'hd_el',
                    label: 'Botones CTA (apto)',
                    maxRows: 2,
                    labels: { singular: 'Botón', plural: 'Botones' },
                    admin: {
                      initCollapsed: true,
                      components: {
                        RowLabel: '@/fields/dropArrayRowLabels#ButtonRowLabel',
                      },
                    },
                    fields: [
                      {
                        name: 'link',
                        type: 'group',
                        label: 'Enlace',
                        fields: shortLinkFields('elt', { requireLabel: true }),
                      },
                      svgCodeField({
                        name: 'svg',
                        label: 'Icono SVG (opcional)',
                      }),
                    ],
                  },
                  buttonColorRow({
                    bg: 'eligBg',
                    bg2: 'eligBg2',
                    fg: 'eligFg',
                    bgLabel: 'Color fondo botón apto',
                    bg2Label: 'Color fondo secundario',
                    fgLabel: 'Color texto botón apto',
                    bgDefault: '#C2005F',
                    fgDefault: '#FFFFFF',
                  }),
                  {
                    name: 'noEligContent',
                    type: 'richText',
                    label: 'Contenido resultado no apto',
                    editor: richTextEditor(),
                    admin: {
                      description: 'Usa {bmi} para insertar el valor.',
                    },
                  },
                  {
                    name: 'noEligBtns',
                    type: 'array',
                    dbName: 'hd_nel',
                    label: 'Botón CTA (no apto)',
                    maxRows: 1,
                    labels: { singular: 'Botón', plural: 'Botones' },
                    admin: {
                      initCollapsed: true,
                      components: {
                        RowLabel: '@/fields/dropArrayRowLabels#ButtonRowLabel',
                      },
                    },
                    fields: [
                      {
                        name: 'link',
                        type: 'group',
                        label: 'Enlace',
                        fields: shortLinkFields('nlt', { requireLabel: true }),
                      },
                      svgCodeField({
                        name: 'svg',
                        label: 'Icono SVG (opcional)',
                      }),
                    ],
                  },
                  buttonColorRow({
                    bg: 'noEligBg',
                    bg2: 'noEligBg2',
                    fg: 'noEligFg',
                    bgLabel: 'Color fondo botón no apto',
                    bg2Label: 'Color fondo secundario',
                    fgLabel: 'Color texto botón no apto',
                    bgDefault: '#C2005F',
                    fgDefault: '#FFFFFF',
                  }),
                  {
                    type: 'row',
                    fields: [
                      colorField({
                        name: 'tagBg',
                        label: 'Color fondo tag Apto',
                        defaultValue: '#E8F5E9',
                        width: '50%',
                        placeholder: '#E8F5E9',
                      }),
                      colorField({
                        name: 'tagFg',
                        label: 'Color texto tag Apto',
                        defaultValue: '#2E7D32',
                        width: '50%',
                        placeholder: '#2E7D32',
                      }),
                    ],
                  },
                ],
              },
            ],
          },
          {
            label: 'Fondo y layout',
            fields: [
              {
                name: 'applyCustomWidth',
                type: 'checkbox',
                label: 'Aplicar ancho personalizado',
                defaultValue: false,
                admin: {
                  description:
                    'Si está activo, el contenido del hero usa el ancho en % del viewport indicado; el fondo y la decoración siguen a ancho completo. Los popups (calculadora IMC) no cambian de ancho ni de estilo. Si no lo marcas, el diseño no cambia.',
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
            ],
          },
        ],
      },
    ],
  },
]
