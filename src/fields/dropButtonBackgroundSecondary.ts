import { colorField } from '@/fields/color'
import type { TextField } from 'payload'

export const DROP_BUTTON_BG_SECONDARY_DESCRIPTION =
  'Opcional. Si se rellena, el fondo del botón será un degradado entre el color de fondo y este.'

type TextFieldSingle = Extract<TextField, { hasMany?: false }>

type DropButtonBackgroundSecondaryOverrides = Omit<Partial<TextFieldSingle>, 'type' | 'hasMany'> & {
  name?: string
  width?: string
  placeholder?: string
}

/** Campo CMS de color secundario para degradado de botones DROP. */
export function dropButtonBackgroundSecondaryField(
  overrides?: DropButtonBackgroundSecondaryOverrides,
): TextField {
  const { width, placeholder, name, label, admin, ...rest } = overrides ?? {}
  return colorField({
    ...rest,
    name: name ?? 'backgroundColorSecondary',
    label: label ?? 'Color de fondo secundario',
    placeholder: placeholder ?? '#6a1b4d',
    width,
    admin: {
      description: DROP_BUTTON_BG_SECONDARY_DESCRIPTION,
      ...admin,
    },
  })
}
