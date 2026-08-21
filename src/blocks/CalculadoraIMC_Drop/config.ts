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

const iconGroupFields = (opts?: { defaultUseMedia?: boolean; description?: string }) => [
  {
    name: 'useMedia',
    type: 'checkbox' as const,
    label: 'Usar imagen / GIF subido',
    defaultValue: opts?.defaultUseMedia ?? false,
    admin: {
      description:
        opts?.description ??
        'Si está desactivado, puedes pegar código SVG en el campo "Código SVG".',
    },
  },
  {
    name: 'mediaImage',
    type: 'upload' as const,
    relationTo: 'media' as const,
    label: 'Icono / GIF (media)',
    admin: {
      condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia === true,
      description: 'Imagen o GIF del icono.',
    },
  },
  {
    name: 'iconSVG',
    type: 'textarea' as const,
    label: 'Código SVG del icono',
    admin: {
      condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia !== true,
      description: 'Pega aquí el código SVG como alternativa a subir media.',
    },
  },
  {
    name: 'alt',
    type: 'text' as const,
    label: 'Texto alternativo',
    defaultValue: 'Icono',
  },
]

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
    name: 'textColor',
    type: 'text',
    label: 'Color del texto principal',
    admin: {
      description: 'Hex, rgb, rgba o nombre CSS. Aplica al texto de esta sección.',
      placeholder: '#101835',
    },
  },
  {
    name: 'boldTextColor',
    type: 'text',
    label: 'Color del texto en negrita',
    admin: {
      description: 'Color para strong/b dentro del RichText de esta sección.',
      placeholder: '#c2185b',
    },
  },
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
]

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
  },
  fields: [
    link({ appearances: false }),
    {
      name: 'iconSVG',
      type: 'textarea' as const,
      label: 'Icono SVG del botón (opcional)',
      admin: {
        description: 'Código SVG del icono (ej. flecha).',
      },
    },
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
      name: 'headerStyle',
      type: 'group',
      label: 'Estilo del textbox principal',
      fields: sectionTypographyFields(),
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
            {
              name: 'tagIconSVG',
              type: 'textarea',
              label: 'Icono SVG del tag (opcional)',
              admin: {
                condition: (_: unknown, siblingData: { showTag?: boolean }) =>
                  siblingData?.showTag === true,
                description: 'SVG pequeño (ej. check) junto al texto del tag.',
              },
            },
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
        {
          name: 'circleColor',
          type: 'text',
          label: 'Color del círculo decorativo',
          defaultValue: '#F8D4E0',
          admin: {
            description: 'Color del círculo rosa detrás de la imagen.',
            placeholder: '#F8D4E0',
          },
        },
      ],
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
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG (opcional)',
          admin: {
            description: 'Código SVG (ej. flecha) a la derecha del texto.',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Color de fondo',
              defaultValue: '#C2005F',
              admin: { width: '50%', placeholder: '#C2005F' },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Color del texto',
              defaultValue: '#FFFFFF',
              admin: { width: '50%', placeholder: '#FFFFFF' },
            },
          ],
        },
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
    {
      name: 'footerStyle',
      type: 'group',
      label: 'Estilo del textbox final',
      fields: sectionTypographyFields(),
    },
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
        {
          name: 'calculateButtonIconSVG',
          type: 'textarea',
          label: 'Icono SVG del botón calcular (opcional)',
        },
        {
          name: 'recalculateButtonText',
          type: 'text',
          label: 'Texto “Volver a calcular”',
          defaultValue: 'Volver a calcular',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'calculateButtonColor',
              type: 'text',
              label: 'Color fondo botón calcular',
              defaultValue: '#C2005F',
              admin: { width: '50%', placeholder: '#C2005F' },
            },
            {
              name: 'calculateButtonTextColor',
              type: 'text',
              label: 'Color texto botón calcular',
              defaultValue: '#FFFFFF',
              admin: { width: '50%', placeholder: '#FFFFFF' },
            },
          ],
        },
        {
          name: 'modalCardBackgroundColor',
          type: 'text',
          label: 'Color de fondo del modal',
          defaultValue: '#FFFFFF',
          admin: { placeholder: '#FFFFFF' },
        },
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
            description:
              'Se muestra tras calcular un IMC apto, antes del resultado final.',
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
                description:
                  'Texto bajo el título del formulario de contacto.',
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
            {
              type: 'row',
              fields: [
                {
                  name: 'continueButtonColor',
                  type: 'text',
                  label: 'Color fondo botón Continuar',
                  defaultValue: '#C2005F',
                  admin: { width: '50%' },
                },
                {
                  name: 'continueButtonTextColor',
                  type: 'text',
                  label: 'Color texto botón Continuar',
                  defaultValue: '#FFFFFF',
                  admin: { width: '50%' },
                },
              ],
            },
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
        {
          type: 'row',
          fields: [
            {
              name: 'eligibleButtonColor',
              type: 'text',
              label: 'Color fondo botón apto',
              defaultValue: '#C2005F',
              admin: { width: '50%' },
            },
            {
              name: 'eligibleButtonTextColor',
              type: 'text',
              label: 'Color texto botón apto',
              defaultValue: '#FFFFFF',
              admin: { width: '50%' },
            },
          ],
        },
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
        {
          type: 'row',
          fields: [
            {
              name: 'notEligibleButtonColor',
              type: 'text',
              label: 'Color fondo botón no apto',
              defaultValue: '#C2005F',
              admin: { width: '50%' },
            },
            {
              name: 'notEligibleButtonTextColor',
              type: 'text',
              label: 'Color texto botón no apto',
              defaultValue: '#FFFFFF',
              admin: { width: '50%' },
            },
          ],
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Colores y estilo del bloque',
      fields: [
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo del bloque',
          defaultValue: '#FFFFFF',
          admin: { placeholder: '#FFFFFF' },
        },
        {
          name: 'tableHeaderBackgroundColor',
          type: 'text',
          label: 'Color fondo cabecera tabla',
          defaultValue: '#FDF2F7',
          admin: {
            placeholder: '#FDF2F7',
            description:
              'Se usa si “Color de fondo categoría” está vacío.',
          },
        },
        {
          name: 'categoryBackgroundColor',
          type: 'text',
          label: 'Color de fondo categoría',
          defaultValue: '#FDF2F7',
          admin: {
            placeholder: '#FDF2F7',
            description:
              'Color de la cabecera de la tabla. Las filas alternan blanco y una versión más lavada de este color. Las líneas SVG decorativas usan este color y los círculos, una versión más lavada.',
          },
        },
        {
          name: 'showDecorativeSvg',
          type: 'checkbox',
          label: 'Mostrar SVG decorativos',
          defaultValue: true,
          admin: {
            description: 'Líneas y círculos alrededor de la imagen. Desactívalo para ocultarlos.',
          },
        },
        {
          name: 'tableCardBackgroundColor',
          type: 'text',
          label: 'Color fondo card tabla',
          defaultValue: '#FFFFFF',
          admin: { placeholder: '#FFFFFF' },
        },
        {
          name: 'tagBackgroundColor',
          type: 'text',
          label: 'Color fondo tag Apto',
          defaultValue: '#E8F5E9',
          admin: { placeholder: '#E8F5E9' },
        },
        {
          name: 'tagTextColor',
          type: 'text',
          label: 'Color texto tag Apto',
          defaultValue: '#2E7D32',
          admin: { placeholder: '#2E7D32' },
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Color acento (iconos)',
          defaultValue: '#C2005F',
          admin: { placeholder: '#C2005F' },
        },
      ],
    },
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
}
