import type { TextField } from 'payload'

type TextFieldSingle = Extract<TextField, { hasMany?: false }>

export type ColorFieldOverrides = Omit<Partial<TextFieldSingle>, 'type' | 'hasMany'> & {
  name?: string
  width?: string
  placeholder?: string
}

/** Campo CMS de color: texto (hex/rgb/nombre) + swatch en el admin. */
export function colorField(overrides?: ColorFieldOverrides): TextField {
  const { width, placeholder, name, label, admin, ...rest } = overrides ?? {}
  const { components: adminComponents, ...adminRest } = admin ?? {}

  return {
    ...rest,
    name: name ?? 'color',
    type: 'text',
    hasMany: false,
    label: label ?? 'Color',
    admin: {
      placeholder: placeholder ?? '#000000',
      ...(width ? { width } : {}),
      ...adminRest,
      components: {
        ...adminComponents,
        Field: {
          path: '@/fields/color/ColorField#ColorField',
        },
      },
    },
  }
}
