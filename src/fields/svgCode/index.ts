import type { TextareaField } from 'payload'

type SvgCodeFieldOverrides = Omit<Partial<TextareaField>, 'type'> & {
  name?: string
}

/** Textarea de código SVG con preview sanitizado en el admin. */
export function svgCodeField(overrides?: SvgCodeFieldOverrides): TextareaField {
  const { name, label, admin, ...rest } = overrides ?? {}
  const { components: adminComponents, ...adminRest } = admin ?? {}

  return {
    ...rest,
    name: name ?? 'iconSVG',
    type: 'textarea',
    label: label ?? 'Código SVG del icono',
    admin: {
      ...adminRest,
      components: {
        ...adminComponents,
        Field: {
          path: '@/fields/svgCode/SvgCodeField#SvgCodeField',
        },
      },
    },
  }
}
