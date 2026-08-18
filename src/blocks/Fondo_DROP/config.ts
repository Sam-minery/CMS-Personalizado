import type { Block } from 'payload'

export const FondoDropBlock: Block = {
  slug: 'fondoDrop',
  interfaceName: 'FondoDropBlock',
  labels: {
    singular: 'Fondo DROP',
    plural: 'Fondos DROP',
  },
  fields: [
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
      required: true,
      defaultValue: '#f8f4ff',
      admin: {
        description:
          'Solo el color plano de la página. Los SVG (olas, círculos, líneas) usan el color de acentuación. Añade este bloque una sola vez. En Layout DROP y otros bloques, usa fondo transparente para que se vea. Hex, rgb, rgba o nombre CSS (ej: #f8f4ff).',
        placeholder: '#f8f4ff',
      },
    },
    {
      name: 'accentColor',
      type: 'text',
      label: 'Color de acentuación',
      admin: {
        description:
          'Color de olas, formas, líneas y nodos (tonalidades y transparencias derivadas). Si se deja vacío, se deriva del color de fondo.',
        placeholder: '#c2185b',
      },
    },
    {
      name: 'enableParallax',
      type: 'checkbox',
      label: 'Activar parallax vertical',
      defaultValue: true,
      admin: {
        description:
          'Ligero desplazamiento vertical distinto entre capas SVG y el contenido al hacer scroll.',
      },
    },
    {
      name: 'parallaxIntensity',
      type: 'number',
      label: 'Intensidad del parallax',
      defaultValue: 0.35,
      min: 0,
      max: 1,
      admin: {
        description: '0 = sin movimiento extra, 1 = máximo. Recomendado: 0.25–0.45.',
        step: 0.05,
        condition: (_, siblingData) => siblingData?.enableParallax !== false,
      },
    },
  ],
}
