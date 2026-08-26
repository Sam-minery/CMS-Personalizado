import type { Block, Field } from 'payload'

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
import { link } from '@/fields/link'

const imcDropRichTextState = {
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
      TextStateFeature({ state: imcDropRichTextState }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
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

const sectionTypographyFields = (opts?: { fontGroupDescription?: string }): Field[] => [
  {
    type: 'row',
    fields: [
      colorField({
        name: 'textColor',
        label: 'Color del texto principal',
        width: '50%',
        placeholder: '#101835',
        admin: {
          description: 'Hex, rgb, rgba o nombre CSS. Aplica al texto de esta sección.',
        },
      }),
      colorField({
        name: 'boldTextColor',
        label: 'Color del texto en negrita',
        width: '50%',
        placeholder: '#c2185b',
        admin: {
          description: 'Color para strong/b dentro del RichText de esta sección.',
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
        name: 'useFontGroup',
        type: 'checkbox',
        label: 'Usar grupo de fuentes',
        defaultValue: false,
        admin: {
          description:
            opts?.fontGroupDescription ??
            'Tipografía, tamaños e interlineados del Font Group se aplican al RichText de esta sección.',
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
        label: 'Tipografia',
        admin: {
          condition: (_, siblingData) => !siblingData?.useFontGroup && !siblingData?.useCustomFont,
        },
        options: fontFamilyOptions,
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
  },
]

const buttonColorRow = (opts: {
  bgName: string
  bgLabel: string
  secondaryName?: string
  secondaryLabel?: string
  textName: string
  textLabel: string
}) => ({
  type: 'row' as const,
  fields: [
    colorField({
      name: opts.bgName,
      label: opts.bgLabel,
      defaultValue: '#C2005F',
      width: '33%',
      placeholder: '#C2005F',
    }),
    dropButtonBackgroundSecondaryField({
      ...(opts.secondaryName ? { name: opts.secondaryName } : {}),
      ...(opts.secondaryLabel ? { label: opts.secondaryLabel } : {}),
      width: '33%',
    }),
    colorField({
      name: opts.textName,
      label: opts.textLabel,
      defaultValue: '#FFFFFF',
      width: '33%',
      placeholder: '#FFFFFF',
    }),
  ],
})

const resultButtonFields = (
  dbName: string,
  label: string,
  opts?: { maxRows?: number; description?: string },
) => ({
  name: 'buttons',
  type: 'array' as const,
  dbName,
  label,
  maxRows: opts?.maxRows ?? 1,
  labels: {
    singular: 'Botón',
    plural: 'Botones',
  },
  admin: {
    description: opts?.description,
    initCollapsed: true,
    components: {
      RowLabel: '@/blocks/CalculadoraIMC_Drop/RowLabel#ButtonRowLabel',
    },
  },
  fields: [
    link({ appearances: false }),
    svgCodeField({
      name: 'iconSVG',
      label: 'Icono SVG del botón (opcional)',
      admin: {
        description: 'Código SVG del icono (ej. flecha).',
      },
    }),
  ],
})

export const CalculadoraIMCDropBlock: Block = {
  slug: 'calculadoraIMCDrop',
  dbName: 'imc_drop',
  interfaceName: 'CalculadoraIMCDropBlock',
  labels: {
    singular: 'Calculadora IMC Drop',
    plural: 'Calculadoras IMC Drop',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenido',
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
              name: 'headerContent',
              type: 'richText',
              label: 'Textbox principal',
              required: true,
              editor: richTextEditor(),
              admin: {
                description:
                  'Título y descripción (usa negrita/colores para resaltar parte del título, ej. "el tratamiento").',
              },
            },
            {
              type: 'collapsible',
              label: 'Tabla Categoría / IMC',
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'categoryHeaderLabel',
                      type: 'text',
                      label: 'Cabecera columna Categoría',
                      defaultValue: 'Categoría',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'imcHeaderLabel',
                      type: 'text',
                      label: 'Cabecera columna IMC',
                      defaultValue: 'IMC',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  name: 'categoryHeaderIcon',
                  type: 'group',
                  label: 'Icono cabecera Categoría',
                  fields: iconGroupFields({ defaultUseMedia: false }),
                },
                {
                  name: 'imcHeaderIcon',
                  type: 'group',
                  label: 'Icono cabecera IMC',
                  fields: iconGroupFields({ defaultUseMedia: false }),
                },
                {
                  name: 'categories',
                  type: 'array',
                  dbName: 'imc_d_cat',
                  label: 'Filas de la tabla',
                  maxRows: 8,
                  labels: {
                    singular: 'Categoría',
                    plural: 'Categorías',
                  },
                  admin: {
                    description:
                      'Máximo 8 filas. Usa imcMin/imcMax para emparejar el IMC calculado y "Es apto" para el resultado del modal.',
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/blocks/CalculadoraIMC_Drop/RowLabel#CategoryRowLabel',
                    },
                  },
                  fields: [
                    {
                      name: 'icon',
                      type: 'group',
                      label: 'Icono de la fila',
                      fields: iconGroupFields({ defaultUseMedia: false }),
                    },
                    {
                      name: 'categoryLabel',
                      type: 'text',
                      label: 'Texto categoría',
                      required: true,
                      admin: {
                        description: 'Ej: Sobrepeso Grado II',
                      },
                    },
                    {
                      name: 'imcLabel',
                      type: 'text',
                      label: 'Texto IMC',
                      required: true,
                      admin: {
                        description: 'Texto visible en la tabla. Ej: 27 - 29.9 o >50',
                      },
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'imcMin',
                          type: 'number',
                          label: 'IMC mínimo (inclusivo)',
                          required: true,
                          admin: {
                            width: '50%',
                            description: 'Límite inferior para emparejar el cálculo. Ej: 27',
                          },
                        },
                        {
                          name: 'imcMax',
                          type: 'number',
                          label: 'IMC máximo (exclusivo)',
                          admin: {
                            width: '50%',
                            description:
                              'Límite superior exclusivo. Déjalo vacío para “sin tope” (ej. >50 → min 50, max vacío).',
                          },
                        },
                      ],
                    },
                    {
                      name: 'isEligible',
                      type: 'checkbox',
                      label: 'Es apto para el tratamiento',
                      defaultValue: false,
                      admin: {
                        description:
                          'Si el IMC del usuario cae en esta fila y está marcado, el modal muestra el resultado “apto”.',
                      },
                    },
                    {
                      name: 'showTag',
                      type: 'checkbox',
                      label: 'Mostrar tag en la tabla',
                      defaultValue: false,
                    },
                    {
                      name: 'tagLabel',
                      type: 'text',
                      label: 'Texto del tag',
                      defaultValue: 'Apto',
                      admin: {
                        condition: (_: unknown, siblingData: { showTag?: boolean }) =>
                          siblingData?.showTag === true,
                      },
                    },
                    svgCodeField({
                      name: 'tagIconSVG',
                      label: 'Icono SVG del tag (opcional)',
                      admin: {
                        condition: (_: unknown, siblingData: { showTag?: boolean }) =>
                          siblingData?.showTag === true,
                        description: 'SVG pequeño (ej. check) junto al texto del tag.',
                      },
                    }),
                  ],
                },
              ],
            },
            {
              name: 'image',
              type: 'group',
              label: 'Imagen',
              fields: [
                {
                  name: 'mediaImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Imagen',
                  admin: {
                    description: 'Foto principal (idealmente recortada / sin fondo).',
                  },
                },
                {
                  name: 'alt',
                  type: 'text',
                  label: 'Texto alternativo',
                  defaultValue: 'Imagen',
                },
                colorField({
                  name: 'circleColor',
                  label: 'Color del círculo decorativo',
                  defaultValue: '#F8D4E0',
                  placeholder: '#F8D4E0',
                  admin: {
                    description: 'Color del círculo rosa detrás de la imagen.',
                  },
                }),
              ],
            },
            {
              name: 'footerContent',
              type: 'richText',
              label: 'Textbox final (disclaimer)',
              editor: richTextEditor(),
              admin: {
                description: 'Texto pequeño bajo el botón/imagen (disclaimer del IMC).',
              },
            },
          ],
        },
        {
          label: 'Estilos',
          fields: [
            {
              name: 'headerStyle',
              type: 'group',
              label: 'Estilo del textbox principal',
              fields: sectionTypographyFields(),
            },
            {
              name: 'footerStyle',
              type: 'group',
              label: 'Estilo del textbox final',
              fields: sectionTypographyFields(),
            },
            {
              name: 'openButton',
              type: 'group',
              label: 'Botón (abre calculadora)',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Texto del botón',
                  defaultValue: 'Calcula tu IMC',
                  required: true,
                },
                svgCodeField({
                  name: 'iconSVG',
                  label: 'Icono SVG (opcional)',
                  admin: {
                    description: 'Código SVG (ej. flecha) a la derecha del texto.',
                  },
                }),
                buttonColorRow({
                  bgName: 'backgroundColor',
                  bgLabel: 'Color de fondo',
                  textName: 'textColor',
                  textLabel: 'Color del texto',
                }),
              ],
            },
            {
              type: 'collapsible',
              label: 'Colores y estilo del bloque',
              fields: [
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'backgroundColor',
                      label: 'Color de fondo del bloque',
                      defaultValue: '#FFFFFF',
                      width: '50%',
                      placeholder: '#FFFFFF',
                    }),
                    colorField({
                      name: 'tableCardBackgroundColor',
                      label: 'Color fondo card tabla',
                      defaultValue: '#FFFFFF',
                      width: '50%',
                      placeholder: '#FFFFFF',
                    }),
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'tableHeaderBackgroundColor',
                      label: 'Color fondo cabecera tabla',
                      defaultValue: '#FDF2F7',
                      width: '50%',
                      placeholder: '#FDF2F7',
                      admin: {
                        description: 'Se usa si “Color de fondo categoría” está vacío.',
                      },
                    }),
                    colorField({
                      name: 'categoryBackgroundColor',
                      label: 'Color de fondo categoría',
                      defaultValue: '#FDF2F7',
                      width: '50%',
                      placeholder: '#FDF2F7',
                      admin: {
                        description:
                          'Color de la cabecera de la tabla. Las filas alternan blanco y una versión más lavada de este color. Las líneas SVG decorativas usan este color y los círculos, una versión más lavada.',
                      },
                    }),
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'tagBackgroundColor',
                      label: 'Color fondo tag Apto',
                      defaultValue: '#E8F5E9',
                      width: '50%',
                      placeholder: '#E8F5E9',
                    }),
                    colorField({
                      name: 'tagTextColor',
                      label: 'Color texto tag Apto',
                      defaultValue: '#2E7D32',
                      width: '50%',
                      placeholder: '#2E7D32',
                    }),
                  ],
                },
                colorField({
                  name: 'accentColor',
                  label: 'Color acento (iconos)',
                  defaultValue: '#C2005F',
                  placeholder: '#C2005F',
                }),
                {
                  name: 'showDecorativeSvg',
                  type: 'checkbox',
                  label: 'Mostrar SVG decorativos',
                  defaultValue: true,
                  admin: {
                    description: 'Líneas y círculos alrededor de la imagen. Desactívalo para ocultarlos.',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Calculadora',
          fields: [
            {
              type: 'collapsible',
              label: 'Modal / Calculadora',
              admin: {
                initCollapsed: false,
                description: 'Campos del popup que se abre al pulsar el botón.',
              },
              fields: [
                {
                  name: 'modalTitle',
                  type: 'text',
                  label: 'Título del modal',
                  defaultValue: 'Calcula tu IMC',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'heightLabel',
                      type: 'text',
                      label: 'Etiqueta altura',
                      defaultValue: 'Altura (cm)',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'weightLabel',
                      type: 'text',
                      label: 'Etiqueta peso',
                      defaultValue: 'Peso (kg)',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'heightPlaceholder',
                      type: 'text',
                      label: 'Placeholder altura',
                      defaultValue: 'ej: 165',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'weightPlaceholder',
                      type: 'text',
                      label: 'Placeholder peso',
                      defaultValue: 'ej: 92',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  name: 'calculateButtonText',
                  type: 'text',
                  label: 'Texto del botón calcular',
                  defaultValue: 'Calcular',
                },
                svgCodeField({
                  name: 'calculateButtonIconSVG',
                  label: 'Icono SVG del botón calcular (opcional)',
                }),
                {
                  name: 'recalculateButtonText',
                  type: 'text',
                  label: 'Texto “Volver a calcular”',
                  defaultValue: 'Volver a calcular',
                },
                buttonColorRow({
                  bgName: 'calculateButtonColor',
                  bgLabel: 'Color fondo botón calcular',
                  secondaryName: 'calculateButtonColorSecondary',
                  secondaryLabel: 'Color fondo secundario',
                  textName: 'calculateButtonTextColor',
                  textLabel: 'Color texto botón calcular',
                }),
                colorField({
                  name: 'modalCardBackgroundColor',
                  label: 'Color de fondo del modal',
                  defaultValue: '#FFFFFF',
                  placeholder: '#FFFFFF',
                }),
              ],
            },
            {
              type: 'collapsible',
              label: 'Resultado: apto',
              fields: [
                {
                  name: 'enableEligibleContactForm',
                  type: 'checkbox',
                  label: 'Usar versión apto con formulario de contacto',
                  defaultValue: false,
                  admin: {
                    description:
                      'Si está activo, cuando el IMC es apto se muestra primero el formulario de contacto y después el resultado.',
                  },
                },
                {
                  name: 'eligibleContactForm',
                  type: 'group',
                  label: 'Formulario de contacto (antes del resultado apto)',
                  admin: {
                    condition: (_, siblingData) => siblingData?.enableEligibleContactForm === true,
                    description: 'Se muestra tras calcular un IMC apto, antes del resultado final.',
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'richText',
                      label: 'Título',
                      editor: richTextEditor(),
                      admin: {
                        description: 'Ej: "Déjanos tu contacto".',
                      },
                    },
                    {
                      name: 'description',
                      type: 'richText',
                      label: 'Descripción',
                      editor: richTextEditor(),
                      admin: {
                        description: 'Texto bajo el título del formulario de contacto.',
                      },
                    },
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'namePlaceholder',
                          type: 'text',
                          label: 'Placeholder nombre',
                          defaultValue: 'Nombre',
                          admin: {
                            width: '33%',
                            description: 'Texto del input (no admite rich text).',
                          },
                        },
                        {
                          name: 'phonePlaceholder',
                          type: 'text',
                          label: 'Placeholder teléfono',
                          defaultValue: 'Teléfono',
                          admin: {
                            width: '33%',
                            description: 'Texto del input (no admite rich text).',
                          },
                        },
                        {
                          name: 'emailPlaceholder',
                          type: 'text',
                          label: 'Placeholder email',
                          defaultValue: 'Email',
                          admin: {
                            width: '34%',
                            description: 'Texto del input (no admite rich text).',
                          },
                        },
                      ],
                    },
                    {
                      name: 'nameIcon',
                      type: 'group',
                      label: 'Icono nombre',
                      fields: iconGroupFields({ defaultUseMedia: false }),
                    },
                    {
                      name: 'phoneIcon',
                      type: 'group',
                      label: 'Icono teléfono',
                      fields: iconGroupFields({ defaultUseMedia: false }),
                    },
                    {
                      name: 'emailIcon',
                      type: 'group',
                      label: 'Icono email',
                      fields: iconGroupFields({ defaultUseMedia: false }),
                    },
                    {
                      name: 'privacyContent',
                      type: 'richText',
                      label: 'Texto de privacidad / consentimiento',
                      editor: richTextEditor(),
                      admin: {
                        description:
                          'Texto junto al checkbox de consentimiento (puedes enlazar la política de privacidad).',
                      },
                    },
                    {
                      name: 'privacyRequired',
                      type: 'checkbox',
                      label: 'Consentimiento obligatorio',
                      defaultValue: true,
                    },
                    {
                      name: 'continueButtonText',
                      type: 'richText',
                      label: 'Texto del botón Continuar',
                      editor: richTextEditor(),
                      admin: {
                        description: 'Etiqueta del botón de envío del formulario.',
                      },
                    },
                    buttonColorRow({
                      bgName: 'continueButtonColor',
                      bgLabel: 'Color fondo botón Continuar',
                      secondaryName: 'continueButtonColorSecondary',
                      secondaryLabel: 'Color fondo secundario',
                      textName: 'continueButtonTextColor',
                      textLabel: 'Color texto botón Continuar',
                    }),
                  ],
                },
                {
                  name: 'eligibleContent',
                  type: 'richText',
                  label: 'Contenido resultado apto',
                  editor: richTextEditor(),
                  admin: {
                    description:
                      'Se muestra si la categoría emparejada tiene “Es apto”. Usa {bmi} para insertar el valor (ej. 28,4). Si el formulario de contacto está activo, este contenido aparece después de enviarlo.',
                  },
                },
                {
                  name: 'eligibleResult',
                  type: 'group',
                  label: 'Botones CTA (apto)',
                  fields: [
                    resultButtonFields('imc_d_el', 'Botones', {
                      maxRows: 2,
                      description: 'Hasta 2 botones cuando el resultado es apto.',
                    }),
                  ],
                },
                buttonColorRow({
                  bgName: 'eligibleButtonColor',
                  bgLabel: 'Color fondo botón apto',
                  secondaryName: 'eligibleButtonColorSecondary',
                  secondaryLabel: 'Color fondo secundario',
                  textName: 'eligibleButtonTextColor',
                  textLabel: 'Color texto botón apto',
                }),
              ],
            },
            {
              type: 'collapsible',
              label: 'Resultado: no apto',
              fields: [
                {
                  name: 'notEligibleContent',
                  type: 'richText',
                  label: 'Contenido resultado no apto',
                  editor: richTextEditor(),
                  admin: {
                    description:
                      'Se muestra si la categoría emparejada no es apta (o no hay match). Usa {bmi} para insertar el valor.',
                  },
                },
                {
                  name: 'notEligibleResult',
                  type: 'group',
                  label: 'Botón CTA (no apto)',
                  fields: [resultButtonFields('imc_d_nel', 'Botón')],
                },
                buttonColorRow({
                  bgName: 'notEligibleButtonColor',
                  bgLabel: 'Color fondo botón no apto',
                  secondaryName: 'notEligibleButtonColorSecondary',
                  secondaryLabel: 'Color fondo secundario',
                  textName: 'notEligibleButtonTextColor',
                  textLabel: 'Color texto botón no apto',
                }),
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
                  'Si está activo, el contenido del bloque usa el ancho en % del viewport indicado; el fondo sigue a ancho completo. Si no lo marcas, el diseño no cambia.',
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
}
