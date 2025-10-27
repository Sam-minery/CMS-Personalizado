import type { Block } from 'payload'

export const Career4Block: Block = {
  slug: 'career4',
  labels: {
    singular: 'Career Section 4',
    plural: 'Career Sections 4',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      required: true,
      defaultValue: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Job Openings',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'depts4',
      type: 'array',
      label: 'Job Departments',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Department Title',
          required: true,
          defaultValue: 'Job Department',
        },
        {
          name: 'jobs',
          type: 'array',
          label: 'Jobs',
          minRows: 1,
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Job Title',
              required: true,
              defaultValue: 'Job Title',
            },
            {
              name: 'location',
              type: 'text',
              label: 'Location',
              required: true,
              defaultValue: 'Location',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Job Description',
              required: true,
              defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Application URL',
              required: true,
              defaultValue: '#',
            },
            {
              name: 'button',
              type: 'group',
              label: 'Configuración del Botón',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  label: 'Texto del Botón',
                  defaultValue: 'Apply Now',
                },
                {
                  name: 'variant',
                  type: 'select',
                  label: 'Variante del Botón',
                  dbName: 'var',
                  options: [
                    { label: 'Primario', value: 'default' },
                    { label: 'Secundario', value: 'secondary' },
                    { label: 'Outline', value: 'outline' },
                    { label: 'Ghost', value: 'ghost' },
                  ],
                  defaultValue: 'secondary',
                },
                {
                  name: 'size',
                  type: 'select',
                  label: 'Tamaño del Botón',
                  dbName: 'sz',
                  options: [
                    { label: 'Pequeño', value: 'sm' },
                    { label: 'Mediano', value: 'default' },
                    { label: 'Grande', value: 'lg' },
                  ],
                  defaultValue: 'sm',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
