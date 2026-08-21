import type { TextField } from 'payload'

export const DROP_BUTTON_BG_SECONDARY_DESCRIPTION =
  'Opcional. Si se rellena, el fondo del botón será un degradado entre el color de fondo y este.'

/** Campo CMS de color secundario para degradado de botones DROP. */
export function dropButtonBackgroundSecondaryField(
  overrides?: Partial<TextField> & { name?: string; width?: string; placeholder?: string },
): TextField {
  const { width, placeholder, name, label, admin, ...rest } = overrides ?? {}
  return {
    ...rest,
    name: name ?? 'backgroundColorSecondary',
    type: 'text',
    label: label ?? 'Color de fondo secundario',
    admin: {
      description: DROP_BUTTON_BG_SECONDARY_DESCRIPTION,
      placeholder: placeholder ?? '#6a1b4d',
      ...(width ? { width } : {}),
      ...admin,
    },
  }
}
