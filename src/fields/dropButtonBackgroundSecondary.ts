import type { TextField } from 'payload'

export const DROP_BUTTON_BG_SECONDARY_DESCRIPTION =
  'Opcional. Si se rellena, el fondo del botón será un degradado entre el color de fondo y este.'

type DropButtonBgSecondaryOverrides = {
  name?: string
  label?: TextField['label']
  width?: string
  placeholder?: string
}

/** Campo CMS de color secundario para degradado de botones DROP. */
export function dropButtonBackgroundSecondaryField(
  overrides?: DropButtonBgSecondaryOverrides,
): TextField {
  const { width, placeholder, name, label } = overrides ?? {}
  return {
    name: name ?? 'backgroundColorSecondary',
    type: 'text',
    hasMany: false,
    label: label ?? 'Color de fondo secundario',
    admin: {
      description: DROP_BUTTON_BG_SECONDARY_DESCRIPTION,
      placeholder: placeholder ?? '#6a1b4d',
      ...(width ? { width } : {}),
    },
  }
}
