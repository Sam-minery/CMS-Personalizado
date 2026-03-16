import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

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
      label: 'Tamaños de tipografía',
      admin: {
        description: 'Tamaños que se aplicarán a los elementos de texto cuando un bloque use este grupo. Usa unidades como rem, px (ej: 2rem, 1.5rem, 16px).',
      },
      fields: [
        {
          name: 'h1',
          type: 'text',
          label: 'Tamaño H1',
          admin: { placeholder: 'ej: 2.5rem' },
        },
        {
          name: 'h2',
          type: 'text',
          label: 'Tamaño H2',
          admin: { placeholder: 'ej: 2rem' },
        },
        {
          name: 'h3',
          type: 'text',
          label: 'Tamaño H3',
          admin: { placeholder: 'ej: 1.75rem' },
        },
        {
          name: 'h4',
          type: 'text',
          label: 'Tamaño H4',
          admin: { placeholder: 'ej: 1.5rem' },
        },
        {
          name: 'h5',
          type: 'text',
          label: 'Tamaño H5',
          admin: { placeholder: 'ej: 1.25rem' },
        },
        {
          name: 'h6',
          type: 'text',
          label: 'Tamaño H6',
          admin: { placeholder: 'ej: 1.125rem' },
        },
        {
          name: 'body',
          type: 'text',
          label: 'Texto normal (párrafos, listas)',
          admin: { placeholder: 'ej: 1rem' },
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Texto pequeño / caption',
          admin: { placeholder: 'ej: 0.875rem' },
        },
      ],
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
