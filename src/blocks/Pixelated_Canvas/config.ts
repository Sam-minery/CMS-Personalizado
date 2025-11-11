import type { Block } from 'payload'

export const PixelatedCanvasBlock: Block = {
  slug: 'pixelatedCanvas',
  interfaceName: 'PixelatedCanvasBlock',
  labels: {
    singular: 'Pixelated Canvas',
    plural: 'Pixelated Canvas',
  },
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'Imagen a renderizar en formato pixelado',
      },
    },
    {
      name: 'width',
      type: 'number',
      label: 'Ancho',
      defaultValue: 400,
      admin: {
        description: 'Ancho del canvas en píxeles',
      },
    },
    {
      name: 'height',
      type: 'number',
      label: 'Altura',
      defaultValue: 500,
      admin: {
        description: 'Altura del canvas en píxeles',
      },
    },
    {
      name: 'cellSize',
      type: 'number',
      label: 'Tamaño de celda',
      defaultValue: 3,
      admin: {
        description: 'Tamaño de cada celda (en píxeles CSS) usada para muestreo y espaciado',
      },
    },
    {
      name: 'dotScale',
      type: 'number',
      label: 'Escala del punto',
      defaultValue: 0.9,
      admin: {
        description: 'Tamaño del punto como fracción del tamaño de celda (0..1)',
      },
    },
    {
      name: 'shape',
      type: 'select',
      label: 'Forma',
      defaultValue: 'square',
      options: [
        { label: 'Círculo', value: 'circle' },
        { label: 'Cuadrado', value: 'square' },
      ],
      admin: {
        description: 'Forma del punto dibujado para cada muestra',
      },
    },
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Color de fondo',
      defaultValue: '#000000',
      admin: {
        description: 'Color de fondo del canvas (hexadecimal, ej: #000000)',
      },
    },
    {
      name: 'dropoutStrength',
      type: 'number',
      label: 'Fuerza de eliminación',
      defaultValue: 0.4,
      admin: {
        description: '0..1. Valor más alto elimina más puntos en regiones de bajo contraste',
      },
    },
    {
      name: 'interactive',
      type: 'checkbox',
      label: 'Interactivo',
      defaultValue: true,
      admin: {
        description: 'Habilitar animación de distorsión interactiva con el mouse',
      },
    },
    {
      name: 'distortionStrength',
      type: 'number',
      label: 'Fuerza de distorsión',
      defaultValue: 3,
      admin: {
        description: 'Desplazamiento máximo por punto (px) debido a la distorsión',
        condition: (data) => data?.interactive === true,
      },
    },
    {
      name: 'distortionRadius',
      type: 'number',
      label: 'Radio de distorsión',
      defaultValue: 80,
      admin: {
        description: 'Radio (px) alrededor del puntero que influye en la distorsión',
        condition: (data) => data?.interactive === true,
      },
    },
    {
      name: 'distortionMode',
      type: 'select',
      label: 'Modo de distorsión',
      defaultValue: 'swirl',
      options: [
        { label: 'Repeler', value: 'repel' },
        { label: 'Atraer', value: 'attract' },
        { label: 'Remolino', value: 'swirl' },
      ],
      admin: {
        description: 'Cómo se mueven los píxeles cerca del puntero',
        condition: (data) => data?.interactive === true,
      },
    },
    {
      name: 'followSpeed',
      type: 'number',
      label: 'Velocidad de seguimiento',
      defaultValue: 0.2,
      admin: {
        description: '0..1 factor de suavizado para el seguimiento del puntero',
        condition: (data) => data?.interactive === true,
      },
    },
    {
      name: 'jitterStrength',
      type: 'number',
      label: 'Fuerza de jitter',
      defaultValue: 4,
      admin: {
        description: 'Amplitud del movimiento aleatorio para puntos cerca del puntero',
        condition: (data) => data?.interactive === true,
      },
    },
    {
      name: 'jitterSpeed',
      type: 'number',
      label: 'Velocidad de jitter',
      defaultValue: 4,
      admin: {
        description: 'Factor de velocidad para el movimiento aleatorio',
        condition: (data) => data?.interactive === true,
      },
    },
    {
      name: 'sampleAverage',
      type: 'checkbox',
      label: 'Promedio de muestras',
      defaultValue: true,
      admin: {
        description: 'Promediar múltiples muestras por celda en lugar de una sola muestra central',
      },
    },
    {
      name: 'tintColor',
      type: 'text',
      label: 'Color de tinte',
      defaultValue: '#FFFFFF',
      admin: {
        description: 'Aplicar un tinte de color (ej: #0ea5e9 o rgb(14,165,233))',
      },
    },
    {
      name: 'tintStrength',
      type: 'number',
      label: 'Fuerza de tinte',
      defaultValue: 0.2,
      admin: {
        description: '0..1 cantidad de mezcla de tinte con colores originales',
      },
    },
    {
      name: 'className',
      type: 'text',
      label: 'Clases CSS adicionales',
      admin: {
        description: 'Clases CSS adicionales para el canvas',
      },
    },
  ],
}

