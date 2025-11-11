import type { Block } from 'payload'

export const ContainerScrollAnimationBlock: Block = {
  slug: 'containerScrollAnimation',
  interfaceName: 'ContainerScrollAnimationBlock',
  labels: {
    singular: 'Container Scroll Animation',
    plural: 'Container Scroll Animations',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título',
      defaultValue: 'Unleash the power of',
    },
    {
      name: 'highlight',
      type: 'text',
      required: true,
      label: 'Texto destacado',
      defaultValue: 'Scroll Animations',
    },
    {
      name: 'size',
      type: 'select',
      required: true,
      label: 'Tamaño del contenedor',
      defaultValue: 'auto',
      options: [
        { label: 'Auto (según imagen)', value: 'auto' },
        { label: 'Pequeño', value: 'sm' },
        { label: 'Mediano', value: 'md' },
        { label: 'Grande', value: 'lg' },
        { label: 'Extra grande', value: 'xl' },
      ],
      admin: {
        description: 'Controla la altura predefinida del contenedor/animación',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen',
      admin: {
        description: 'Selecciona la imagen desde la biblioteca de medios',
      },
    },
  ],
}


