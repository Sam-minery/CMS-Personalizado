import type { Block } from 'payload'
import { simpleLink } from '@/fields/simpleLink'

export const StickyBannerBlock: Block = {
  slug: 'stickyBanner',
  interfaceName: 'StickyBannerBlock',
  labels: {
    singular: 'Sticky Banner',
    plural: 'Sticky Banner Blocks',
  },
  fields: [
    {
      name: 'content',
      type: 'text',
      label: 'Contenido del banner',
      required: true,
      defaultValue: 'Announcing $10M seed funding from project mayhem ventures.',
      admin: {
        description: 'Texto principal que se mostrará en el banner',
      },
    },
    {
      name: 'linkText',
      type: 'text',
      label: 'Texto del enlace',
      admin: {
        description: 'Texto del enlace (opcional). Si se deja vacío, no se mostrará enlace.',
      },
    },
    simpleLink({
      overrides: {
        name: 'link',
        label: 'Enlace',
        admin: {
          description: 'Configura el enlace del banner (opcional)',
        },
      },
    }),
    {
      name: 'bannerColor',
      type: 'select',
      label: 'Color del banner',
      defaultValue: 'blue',
      admin: {
        description: 'Selecciona el color del banner (gradiente)',
      },
      options: [
        {
          label: 'Azul',
          value: 'blue',
        },
        {
          label: 'Rojo',
          value: 'red',
        },
        {
          label: 'Verde',
          value: 'green',
        },
        {
          label: 'Amarillo',
          value: 'yellow',
        },
      ],
    },
    {
      name: 'hideOnScroll',
      type: 'checkbox',
      label: 'Ocultar al hacer scroll',
      defaultValue: false,
      admin: {
        description: 'Si está activado, el banner se ocultará automáticamente al hacer scroll hacia abajo',
      },
    },
  ],
}

