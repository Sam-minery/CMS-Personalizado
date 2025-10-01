import type { Block } from 'payload'

import { simpleLink } from '@/fields/simpleLink'

export const Career6: Block = {
  slug: 'career6',
  interfaceName: 'Career6Block',
  fields: [
    {
      name: 'tagline',
      type: 'text',
      required: true,
      label: 'Tagline',
      defaultValue: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título Principal',
      defaultValue: 'Job Openings',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'jobDepartments',
      type: 'array',
      label: 'Departamentos de Trabajo',
      minRows: 1,
      dbName: 'career6_depts',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del Departamento',
          defaultValue: 'Job Department',
        },
        {
          name: 'jobs',
          type: 'array',
          label: 'Trabajos',
          minRows: 1,
          dbName: 'career6_jobs',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Título del Trabajo',
              defaultValue: 'Job Title',
            },
            {
              name: 'location',
              type: 'text',
              required: true,
              label: 'Ubicación',
              defaultValue: 'Location',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              label: 'Descripción del Trabajo',
              defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
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
            simpleLink({
              overrides: {
                name: 'link',
                label: 'Enlace de Aplicación',
              },
            }),
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Secciones de Carrera 6',
    singular: 'Career 6',
  },
}
