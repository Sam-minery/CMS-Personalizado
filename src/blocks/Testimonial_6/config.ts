import type { Block } from 'payload'

export const Testimonial6Block: Block = {
  slug: 'testimonial6',
  interfaceName: 'Testimonial6Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Customer testimonials',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'testimonials',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'numberOfStars',
          type: 'number',
          required: true,
          min: 1,
          max: 5,
          defaultValue: 5,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          defaultValue: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Avatar del Testimonio',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          defaultValue: 'Name Surname',
        },
        {
          name: 'position',
          type: 'text',
          required: true,
          defaultValue: 'Position, Company name',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: false,
          label: 'Logo de la Empresa',
        },
      ],
    },
  ],
}
