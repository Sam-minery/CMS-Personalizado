import type { Block } from 'payload'

export const Testimonial3Block: Block = {
  slug: 'testimonial3',
  interfaceName: 'Testimonial3Block',
  labels: {
    singular: 'Testimonial 3',
    plural: 'Testimonial 3 Blocks',
  },
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
          name: 'image',
          type: 'group',
          fields: [
            {
              name: 'src',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'alt',
              type: 'text',
              required: false,
            },
          ],
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          defaultValue: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
        },
        {
          name: 'avatar',
          type: 'group',
          fields: [
            {
              name: 'src',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
            {
              name: 'alt',
              type: 'text',
              required: false,
            },
          ],
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
          defaultValue: 'Position',
        },
        {
          name: 'companyName',
          type: 'text',
          required: true,
          defaultValue: 'Company name',
        },
      ],
    },
  ],
}
