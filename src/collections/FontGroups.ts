import type { CollectionConfig, Field } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

/** Campos de tamaño (escritorio o móvil) para el grupo de tipografía del font group. */
const typographySizeFields = (mobile: boolean): Field[] => {
  const suffix = mobile ? ' — móvil' : ''
  return [
    {
      name: 'h1',
      type: 'text',
      label: `Tamaño H1${suffix}`,
      admin: { placeholder: 'ej: 2.5rem' },
    },
    {
      name: 'h2',
      type: 'text',
      label: `Tamaño H2${suffix}`,
      admin: { placeholder: 'ej: 2rem' },
    },
    {
      name: 'h3',
      type: 'text',
      label: `Tamaño H3${suffix}`,
      admin: { placeholder: 'ej: 1.75rem' },
    },
    {
      name: 'h4',
      type: 'text',
      label: `Tamaño H4${suffix}`,
      admin: { placeholder: 'ej: 1.5rem' },
    },
    {
      name: 'h5',
      type: 'text',
      label: `Tamaño H5${suffix}`,
      admin: { placeholder: 'ej: 1.25rem' },
    },
    {
      name: 'h6',
      type: 'text',
      label: `Tamaño H6${suffix}`,
      admin: { placeholder: 'ej: 1.125rem' },
    },
    {
      name: 'body',
      type: 'text',
      label: `Texto normal (párrafos)${suffix}`,
      admin: {
        placeholder: 'ej: 1rem',
        description: 'Solo párrafos. Las listas tienen su propio campo.',
      },
    },
    {
      name: 'lists',
      type: 'text',
      label: `Listas (ordenadas y desordenadas)${suffix}`,
      admin: {
        placeholder: 'ej: 0.9375rem',
        description: 'Tamaño para contenido en listas (ul, ol, li).',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: `Texto pequeño / caption${suffix}`,
      admin: { placeholder: 'ej: 0.875rem' },
    },
  ]
}

/** Márgenes superior e inferior: encabezados, párrafos y listas (mismos valores en escritorio y móvil). */
const contentMarginFields = (): Field[] => {
  const levels = [1, 2, 3, 4, 5, 6] as const
  const headingFields = levels.flatMap((n) => [
    {
      name: `h${n}MarginTop`,
      type: 'text' as const,
      label: `Margen superior H${n}`,
      admin: {
        placeholder: 'ej: 1.5rem, 24px, 0',
        description: 'margin-top del elemento (CSS).',
      },
    },
    {
      name: `h${n}MarginBottom`,
      type: 'text' as const,
      label: `Margen inferior H${n}`,
      admin: {
        placeholder: 'ej: 0.75rem, 12px, 0',
        description: 'margin-bottom del elemento (CSS).',
      },
    },
  ]) satisfies Field[]
  const bodyAndListFields = [
    {
      name: 'bodyMarginTop',
      type: 'text' as const,
      label: 'Margen superior (párrafos)',
      admin: {
        placeholder: 'ej: 1rem, 0',
        description: 'margin-top para párrafos <p> (CSS).',
      },
    },
    {
      name: 'bodyMarginBottom',
      type: 'text' as const,
      label: 'Margen inferior (párrafos)',
      admin: {
        placeholder: 'ej: 1rem, 0',
        description: 'margin-bottom para párrafos <p> (CSS).',
      },
    },
    {
      name: 'listsMarginTop',
      type: 'text' as const,
      label: 'Margen superior (listas)',
      admin: {
        placeholder: 'ej: 1rem, 0',
        description: 'margin-top para listas <ul> y <ol> (CSS).',
      },
    },
    {
      name: 'listsMarginBottom',
      type: 'text' as const,
      label: 'Margen inferior (listas)',
      admin: {
        placeholder: 'ej: 1rem, 0',
        description: 'margin-bottom para listas <ul> y <ol> (CSS).',
      },
    },
  ] satisfies Field[]
  return [...headingFields, ...bodyAndListFields]
}

/** Un campo line-height por tipo de texto (H1–H6, párrafos, listas). Caption / texto pequeño no: hereda el interlineado del bloque donde va (p, h1, etc.). */
const lineHeightFields = (): Field[] =>
  [
    {
      name: 'h1',
      type: 'text' as const,
      label: 'Interlineado H1 (line-height)',
      admin: {
        placeholder: 'ej: 1.2, 1.25rem, 140%',
        description: 'line-height para H1 (entre líneas del mismo encabezado).',
      },
    },
    {
      name: 'h2',
      type: 'text' as const,
      label: 'Interlineado H2 (line-height)',
      admin: {
        placeholder: 'ej: 1.2, 1.25rem',
        description: 'line-height para H2.',
      },
    },
    {
      name: 'h3',
      type: 'text' as const,
      label: 'Interlineado H3 (line-height)',
      admin: { placeholder: 'ej: 1.2', description: 'line-height para H3.' },
    },
    {
      name: 'h4',
      type: 'text' as const,
      label: 'Interlineado H4 (line-height)',
      admin: { placeholder: 'ej: 1.2', description: 'line-height para H4.' },
    },
    {
      name: 'h5',
      type: 'text' as const,
      label: 'Interlineado H5 (line-height)',
      admin: { placeholder: 'ej: 1.2', description: 'line-height para H5.' },
    },
    {
      name: 'h6',
      type: 'text' as const,
      label: 'Interlineado H6 (line-height)',
      admin: { placeholder: 'ej: 1.2', description: 'line-height para H6.' },
    },
    {
      name: 'body',
      type: 'text' as const,
      label: 'Interlineado párrafos (line-height)',
      admin: {
        placeholder: 'ej: 1.5, 1.6rem',
        description: 'line-height para párrafos <p>.',
      },
    },
    {
      name: 'lists',
      type: 'text' as const,
      label: 'Interlineado listas (line-height)',
      admin: {
        placeholder: 'ej: 1.5',
        description: 'line-height para listas (ul, ol, li).',
      },
    },
  ] satisfies Field[]

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
      'Crea grupos de tipografías: añade fuentes de la colección Fonts, asígnales variante (regular, bold, semibold, etc.) y define tamaños para títulos y texto. Si activas "Precargar siempre", las fuentes del grupo se cargarán al inicio de cada página.',
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
    {
      name: 'typography',
      type: 'group',
      label: 'Tamaños de tipografía (escritorio)',
      admin: {
        description:
          'Tamaños por defecto / escritorio. Usa unidades como rem, px (ej: 2rem, 1.5rem, 16px). Los bloques que consuman este grupo aplicarán estos valores según su implementación.',
      },
      fields: typographySizeFields(false),
    },
    {
      name: 'typographyMobile',
      type: 'group',
      label: 'Tamaños de tipografía (móvil)',
      admin: {
        description:
          'Opcional. Mismos conceptos que en escritorio, para pantallas pequeñas.',
      },
      fields: typographySizeFields(true),
    },
    {
      name: 'headingMargins',
      type: 'group',
      label: 'Márgenes de texto',
      admin: {
        description:
          'Margen superior e inferior (margin-top / margin-bottom) para H1–H6, párrafos y listas (ul/ol). Mismos valores en escritorio y móvil. Unidades como rem, px o 0.',
      },
      fields: contentMarginFields(),
    },
    {
      name: 'lineHeights',
      type: 'group',
      label: 'Interlineado (line-height)',
      admin: {
        description:
          'Un valor por tipo de texto (H1–H6, párrafos, listas): line-height en CSS (número, rem, px o %). El texto pequeño / caption no tiene campo aquí: solo cambia tamaño y hereda interlineado y márgenes del elemento contenedor (p, h1, lista, etc.). Mismo juego escritorio/móvil salvo que el bloque decida otro comportamiento.',
      },
      fields: lineHeightFields(),
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
