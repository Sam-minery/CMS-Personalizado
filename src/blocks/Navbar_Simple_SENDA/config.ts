import type { Block, GroupField } from 'payload'

import { link } from '@/fields/link'

export const NavbarSimpleSendaBlock = {
  slug: 'navbarSimpleSenda',
  dbName: 'nb_simple_senda',
  interfaceName: 'NavbarSimpleSendaBlock',
  labels: {
    singular: 'Navbar Simple SENDA',
    plural: 'Navbar Simple SENDA Blocks',
  },
  fields: [
    {
      name: 'image',
      type: 'group',
      label: 'Imagen (centro)',
      admin: {
        description: 'Imagen que se muestra centrada en la parte superior. Media subida o URL.',
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
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen de la librería.',
          },
        },
        {
          name: 'src',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'URL de la imagen cuando no se usa media subida.',
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo',
          defaultValue: 'Navbar image',
        },
      ],
    },
    {
      name: 'iconLink',
      type: 'group',
      dbName: 'il',
      label: 'Icono / botón (esquina superior izquierda)',
      admin: {
        description: 'Enlace que muestra solo el icono SVG (sin texto). Al hacer clic navega al destino configurado.',
      },
      fields: [
        link({ disableLabel: true, overrides: { dbName: 'lnk' } as Partial<GroupField> & { dbName: string } }),
        {
          name: 'iconSVG',
          type: 'textarea',
          label: 'Icono SVG',
          admin: {
            description: 'Código SVG del icono. Se muestra como botón enlace en la esquina superior izquierda.',
          },
        },
      ],
    } as Block['fields'][number],
  ],
} satisfies Block
