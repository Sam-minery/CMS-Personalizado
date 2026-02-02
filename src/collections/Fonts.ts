import type { CollectionConfig } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export const Fonts: CollectionConfig = {
  slug: 'fonts',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nombre de la fuente',
      admin: {
        description: 'Nombre descriptivo de la fuente (ej: "Mi Fuente Personalizada")',
      },
    },
  ],
  upload: {
    // Si no se usa GCS, guardar en public/fonts
    ...(!process.env.GCS_BUCKET_NAME && {
      staticDir: path.resolve(dirname, '../../public/fonts'),
    }),
    // Permitir tipos MIME de fuentes
    mimeTypes: [
      'font/woff',
      'font/woff2',
      'application/font-woff',
      'application/font-woff2',
      'font/ttf',
      'application/font-ttf',
      'font/otf',
      'application/font-otf',
      'application/x-font-ttf',
      'application/x-font-otf',
    ],
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'filename', 'updatedAt'],
  },
}
