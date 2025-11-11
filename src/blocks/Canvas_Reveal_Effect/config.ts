import type { Block } from 'payload'

export const CanvasRevealEffectBlock: Block = {
  slug: 'canvasRevealEffect',
  interfaceName: 'CanvasRevealEffectBlock',
  labels: {
    singular: 'Canvas Reveal Effect',
    plural: 'Canvas Reveal Effects',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Tarjetas',
      minRows: 1,
      required: true,
      admin: {
        description: 'Agrega tarjetas con efecto Canvas Reveal. Cada tarjeta mostrará una animación al pasar el mouse.',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          required: true,
          admin: {
            description: 'Título que se mostrará en la tarjeta',
          },
        },
        {
          name: 'animationSpeed',
          type: 'number',
          label: 'Velocidad de animación',
          defaultValue: 5.1,
          admin: {
            description: 'Velocidad de la animación (0.1 = más lento, 10 = más rápido). Valores recomendados: 3-6',
            step: 0.1,
          },
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Clase CSS del contenedor',
          defaultValue: 'bg-emerald-900',
          admin: {
            description: 'Clase CSS para el color de fondo del efecto (ej: bg-emerald-900, bg-black, bg-sky-600)',
          },
        },
        {
          name: 'colors',
          type: 'array',
          label: 'Colores RGB',
          admin: {
            description: 'Colores RGB para el efecto. Puedes agregar 1-3 colores. Cada color se define con valores R, G, B (0-255)',
          },
          fields: [
            {
              name: 'r',
              type: 'number',
              label: 'Rojo (R)',
              required: true,
              defaultValue: 0,
              admin: {
                step: 1,
                description: 'Valor de rojo (0-255)',
              },
              validate: (value: number | null | undefined) => {
                if (value == null) return true
                if (value < 0 || value > 255) {
                  return 'El valor debe estar entre 0 y 255'
                }
                return true
              },
            },
            {
              name: 'g',
              type: 'number',
              label: 'Verde (G)',
              required: true,
              defaultValue: 255,
              admin: {
                step: 1,
                description: 'Valor de verde (0-255)',
              },
              validate: (value: number | null | undefined) => {
                if (value == null) return true
                if (value < 0 || value > 255) {
                  return 'El valor debe estar entre 0 y 255'
                }
                return true
              },
            },
            {
              name: 'b',
              type: 'number',
              label: 'Azul (B)',
              required: true,
              defaultValue: 255,
              admin: {
                step: 1,
                description: 'Valor de azul (0-255)',
              },
              validate: (value: number | null | undefined) => {
                if (value == null) return true
                if (value < 0 || value > 255) {
                  return 'El valor debe estar entre 0 y 255'
                }
                return true
              },
            },
          ],
        },
        {
          name: 'dotSize',
          type: 'number',
          label: 'Tamaño de los puntos',
          admin: {
            description: 'Tamaño de los puntos en el efecto (por defecto: 3). Valores recomendados: 2-5',
            step: 0.1,
          },
        },
        {
          name: 'showRadialGradient',
          type: 'checkbox',
          label: 'Mostrar gradiente radial',
          defaultValue: true,
          admin: {
            description: 'Muestra un gradiente radial para un efecto de desvanecimiento más suave',
          },
        },
      ],
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding vertical',
      defaultValue: 'py-20',
      options: [
        { label: 'Sin padding (py-0)', value: 'py-0' },
        { label: 'Padding pequeño (py-10)', value: 'py-10' },
        { label: 'Padding mediano (py-20)', value: 'py-20' },
        { label: 'Padding grande (py-40)', value: 'py-40' },
      ],
      admin: {
        description: 'Espaciado vertical del contenedor',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Color de fondo',
      defaultValue: 'bg-white dark:bg-black',
      options: [
        { label: 'Blanco/Negro (bg-white dark:bg-black)', value: 'bg-white dark:bg-black' },
        { label: 'Blanco (bg-white)', value: 'bg-white' },
        { label: 'Negro (bg-black)', value: 'bg-black' },
        { label: 'Transparente (bg-transparent)', value: 'bg-transparent' },
      ],
      admin: {
        description: 'Color de fondo del contenedor principal',
      },
    },
  ],
}

