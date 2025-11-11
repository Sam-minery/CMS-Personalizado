import type { Block } from 'payload'

export const AnimatedTestimonialsBlock: Block = {
  slug: 'animatedTestimonials',
  interfaceName: 'AnimatedTestimonialsBlock',
  labels: {
    singular: 'Animated Testimonials',
    plural: 'Animated Testimonials Blocks',
  },
  fields: [
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonios',
      minRows: 1,
      required: true,
      admin: {
        description: 'Agrega testimonios con animación. Cada testimonio incluye una cita, nombre, designación e imagen.',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Cita',
          required: true,
          admin: {
            description: 'El testimonio o cita del cliente',
          },
        },
        {
          name: 'name',
          type: 'text',
          label: 'Nombre',
          required: true,
          admin: {
            description: 'Nombre completo de la persona',
          },
        },
        {
          name: 'designation',
          type: 'text',
          label: 'Designación',
          required: true,
          admin: {
            description: 'Cargo o posición (ej: "Product Manager at TechFlow")',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen',
          required: true,
          admin: {
            description: 'Foto de perfil de la persona',
          },
        },
      ],
    },
    {
      name: 'autoplay',
      type: 'checkbox',
      label: 'Reproducción automática',
      defaultValue: false,
      admin: {
        description: 'Activa la reproducción automática de testimonios cada 5 segundos',
      },
    },
  ],
}

