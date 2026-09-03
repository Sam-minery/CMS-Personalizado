import type { Field } from 'payload'

import { svgCodeField } from '@/fields/svgCode'

type IconGroupFieldsOptions = {
  defaultUseMedia?: boolean
  description?: string
  svgDescription?: string
  /** Nombre del upload (Hero Drop usa `img`). */
  mediaName?: string
  /** Nombre del textarea SVG (Hero Drop usa `svg`). */
  svgName?: string
}

/** Icono: media/GIF subido o código SVG con preview en el admin. */
export function iconGroupFields(opts?: IconGroupFieldsOptions): Field[] {
  return [
    {
      name: 'useMedia',
      type: 'checkbox',
      label: 'Usar imagen / GIF subido',
      defaultValue: opts?.defaultUseMedia ?? true,
      admin: {
        description:
          opts?.description ??
          'Si está desactivado, puedes pegar código SVG en el campo "Código SVG".',
      },
    },
    {
      name: opts?.mediaName ?? 'mediaImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Icono / GIF (media)',
      admin: {
        condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia === true,
        description: 'Imagen o GIF del icono.',
      },
    },
    svgCodeField({
      name: opts?.svgName ?? 'iconSVG',
      label: 'Código SVG del icono',
      admin: {
        condition: (_: unknown, siblingData: { useMedia?: boolean }) => siblingData?.useMedia !== true,
        description:
          opts?.svgDescription ?? 'Pega aquí el código SVG como alternativa a subir media.',
      },
    }),
    {
      name: 'alt',
      type: 'text',
      label: 'Texto alternativo',
      defaultValue: 'Icono',
    },
  ]
}
