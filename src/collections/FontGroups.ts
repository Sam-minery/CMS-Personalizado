import type { CollectionConfig, Field } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

/** Tamaño, interlineado y márgenes verticales (escritorio o móvil por grupo). */
const richTextStyleFields = (): Field[] => [
  {
    name: 'fontSize',
    type: 'text',
    label: 'Tamaño (font-size)',
    admin: { placeholder: 'ej: 1.5rem, 16px' },
  },
  {
    name: 'lineHeight',
    type: 'text',
    label: 'Interlineado (line-height)',
    admin: { placeholder: 'ej: 1.2, 1.5rem, 140%' },
  },
  {
    name: 'marginTop',
    type: 'text',
    label: 'Margen superior (margin-top)',
    admin: { placeholder: 'ej: 1rem, 0' },
  },
  {
    name: 'marginBottom',
    type: 'text',
    label: 'Margen inferior (margin-bottom)',
    admin: { placeholder: 'ej: 0.75rem, 0' },
  },
]

const captionSizeFields = (): Field[] => [
  {
    name: 'fontSize',
    type: 'text',
    label: 'Tamaño (font-size)',
    admin: {
      placeholder: 'ej: 0.875rem',
      description: 'El caption hereda interlineado y márgenes del bloque contenedor salvo que el front lo amplíe.',
    },
  },
]

function headingPair(n: number): Field[] {
  return [
    {
      name: `heading${n}Desktop`,
      type: 'group',
      label: `Encabezado H${n} · escritorio`,
      admin: {
        description: `Tipografía y ritmo vertical de H${n} desde el breakpoint md (≥768px).`,
      },
      fields: richTextStyleFields(),
    },
    {
      name: `heading${n}Mobile`,
      type: 'group',
      label: `Encabezado H${n} · móvil`,
      admin: {
        description: `Opcional. Por debajo de md (≤767px). Si un campo está vacío, se usa el valor de escritorio de H${n}.`,
      },
      fields: richTextStyleFields(),
    },
  ]
}

const fontVariantOptions = [
  { label: 'Regular (400)', value: 'regular' },
  { label: 'Regular Italic (400)', value: 'regularItalic' },
  { label: 'Medium (500)', value: 'medium' },
  { label: 'Medium Italic (500)', value: 'mediumItalic' },
  { label: 'Semibold (600)', value: 'semibold' },
  { label: 'Semibold Italic (600)', value: 'semiboldItalic' },
  { label: 'Bold (700)', value: 'bold' },
  { label: 'Bold Italic (700)', value: 'boldItalic' },
  { label: 'Light (300)', value: 'light' },
  { label: 'Light Italic (300)', value: 'lightItalic' },
  { label: 'Heavy (800)', value: 'heavy' },
  { label: 'Heavy Italic (800)', value: 'heavyItalic' },
] as const

export const FontGroups: CollectionConfig = {
  slug: 'font-groups',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'fontFamilyName', 'preloadFonts', 'updatedAt'],
    description:
      'Crea grupos de tipografías: fuentes, y por cada nivel (H1–H6, párrafos, listas, citas/blockquote, cuerpo pequeño / small body, caption) el tamaño, interlineado y márgenes en escritorio y móvil. Si activas "Precargar siempre", las fuentes se cargarán al inicio de cada página.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre del grupo',
      required: true,
      admin: {
        description: 'Nombre descriptivo del grupo (ej: "Saans", "Mi familia principal")',
      },
    },
    {
      name: 'fontFamilyName',
      type: 'text',
      label: 'Nombre de la familia (CSS)',
      required: true,
      admin: {
        description:
          'Nombre que se usará en font-family en el CSS. Debe ser el mismo para todas las variantes (ej: "Saans"). Sin comillas.',
      },
    },
    {
      name: 'fonts',
      type: 'array',
      label: 'Fuentes del grupo',
      minRows: 1,
      admin: {
        description: 'Añade cada archivo de fuente y asígnale una variante (regular, bold, semibold, etc.).',
      },
      fields: [
        {
          name: 'font',
          type: 'upload',
          relationTo: 'fonts',
          label: 'Archivo de fuente',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variante',
          required: true,
          options: [...fontVariantOptions],
          admin: {
            description: 'Peso y estilo que representa este archivo (se usará en @font-face como font-weight/font-style).',
          },
        },
      ],
    },
    ...([1, 2, 3, 4, 5, 6] as const).flatMap((n) => headingPair(n)),
    {
      name: 'bodyTextDesktop',
      type: 'group',
      label: 'Párrafos (body) · escritorio',
      admin: {
        description: 'Texto en <p>. Las listas tienen grupo aparte.',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'bodyTextMobile',
      type: 'group',
      label: 'Párrafos (body) · móvil',
      admin: {
        description: 'Opcional. Si un campo está vacío, se usa el valor de escritorio de párrafos.',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'listsTextDesktop',
      type: 'group',
      label: 'Listas (ul / ol) · escritorio',
      admin: {
        description: 'Tamaño, interlineado y márgenes de bloques de lista.',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'listsTextMobile',
      type: 'group',
      label: 'Listas (ul / ol) · móvil',
      admin: {
        description: 'Opcional. Si un campo está vacío, se usa el valor de escritorio de listas.',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'quoteTextDesktop',
      type: 'group',
      label: 'Citas (blockquote) · escritorio',
      admin: {
        description: 'Bloques de cita del rich text (<blockquote>).',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'quoteTextMobile',
      type: 'group',
      label: 'Citas (blockquote) · móvil',
      admin: {
        description: 'Opcional. Si un campo está vacío, se usa el valor de escritorio de citas.',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'smallBodyTextDesktop',
      type: 'group',
      label: 'Cuerpo pequeño (small body) · escritorio',
      admin: {
        description:
          'Bloque de párrafo compacto en Rich Text (clase payload-richtext-small-body). Tamaño, interlineado y márgenes del bloque.',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'smallBodyTextMobile',
      type: 'group',
      label: 'Cuerpo pequeño (small body) · móvil',
      admin: {
        description: 'Opcional. Si un campo está vacío, se usa el valor de escritorio de cuerpo pequeño.',
      },
      fields: richTextStyleFields(),
    },
    {
      name: 'captionTextDesktop',
      type: 'group',
      label: 'Texto pequeño / caption · escritorio',
      fields: captionSizeFields(),
    },
    {
      name: 'captionTextMobile',
      type: 'group',
      label: 'Texto pequeño / caption · móvil',
      admin: {
        description: 'Opcional. Si está vacío, se usa el tamaño de escritorio.',
      },
      fields: captionSizeFields(),
    },
    {
      name: 'preloadFonts',
      type: 'checkbox',
      label: 'Precargar siempre',
      defaultValue: false,
      admin: {
        description:
          'Si está activado, todos los archivos de fuentes de este grupo se precargarán en el front (en cada página) para evitar que el texto se muestre con otra fuente al recargar.',
      },
    },
  ],
}
