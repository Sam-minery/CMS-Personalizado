import type { Block } from 'payload'

export const WavyBackgroundBlock: Block = {
  slug: 'wavyBackground',
  interfaceName: 'WavyBackgroundBlock',
  labels: {
    singular: 'Wavy Background',
    plural: 'Wavy Background',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título principal',
      defaultValue: 'Hero waves are cool',
      required: true,
      admin: {
        description: 'Título grande que se muestra sobre el fondo ondulado',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      defaultValue: 'Leverage the power of canvas to create a beautiful hero section',
      admin: {
        description: 'Texto descriptivo que se muestra debajo del título',
      },
    },
    {
      name: 'height',
      type: 'select',
      label: 'Altura del contenedor',
      defaultValue: 'h-screen',
      options: [
        { label: 'Pantalla completa (h-screen)', value: 'h-screen' },
        { label: 'Altura automática (h-auto)', value: 'h-auto' },
        { label: 'Altura pequeña (h-[50vh])', value: 'h-[50vh]' },
        { label: 'Altura mediana (h-[75vh])', value: 'h-[75vh]' },
        { label: 'Altura grande (h-[90vh])', value: 'h-[90vh]' },
      ],
      admin: {
        description: 'Altura del componente',
      },
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding del contenedor',
      defaultValue: 'pb-40',
      options: [
        { label: 'Sin padding (pb-0)', value: 'pb-0' },
        { label: 'Padding pequeño (pb-20)', value: 'pb-20' },
        { label: 'Padding mediano (pb-40)', value: 'pb-40' },
        { label: 'Padding grande (pb-60)', value: 'pb-60' },
      ],
      admin: {
        description: 'Padding inferior del contenedor de contenido',
      },
    },
    {
      name: 'maxWidth',
      type: 'select',
      label: 'Ancho máximo del contenido',
      defaultValue: 'max-w-4xl',
      options: [
        { label: 'Pequeño (max-w-2xl)', value: 'max-w-2xl' },
        { label: 'Mediano (max-w-4xl)', value: 'max-w-4xl' },
        { label: 'Grande (max-w-6xl)', value: 'max-w-6xl' },
        { label: 'Extra grande (max-w-7xl)', value: 'max-w-7xl' },
        { label: 'Sin límite (max-w-full)', value: 'max-w-full' },
      ],
      admin: {
        description: 'Ancho máximo del contenedor de contenido',
      },
    },
    {
      name: 'speed',
      type: 'select',
      label: 'Velocidad de las ondas',
      defaultValue: 'fast',
      options: [
        { label: 'Lenta (slow)', value: 'slow' },
        { label: 'Rápida (fast)', value: 'fast' },
      ],
      admin: {
        description: 'Velocidad de animación de las ondas',
      },
    },
    {
      name: 'waveOpacity',
      type: 'number',
      label: 'Opacidad de las ondas',
      defaultValue: 0.5,
      min: 0,
      max: 1,
      admin: {
        description: 'Opacidad de las ondas (0 = transparente, 1 = opaco)',
        step: 0.1,
      },
    },
    {
      name: 'blur',
      type: 'number',
      label: 'Desenfoque (blur)',
      defaultValue: 10,
      min: 0,
      max: 50,
      admin: {
        description: 'Nivel de desenfoque aplicado a las ondas',
        step: 1,
      },
    },
    {
      name: 'waveWidth',
      type: 'number',
      label: 'Ancho de las ondas',
      defaultValue: 50,
      min: 10,
      max: 200,
      admin: {
        description: 'Ancho de las líneas de las ondas',
        step: 5,
      },
    },
    {
      name: 'backgroundFill',
      type: 'text',
      label: 'Color de fondo',
      defaultValue: 'black',
      admin: {
        description: 'Color de fondo del canvas (hex, rgb, o nombre de color)',
      },
    },
  ],
}

