import type { Block } from 'payload'

export const Pricing5: Block = {
  slug: 'pricing5',
  interfaceName: 'Pricing5Block',
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
      defaultValue: 'Pricing plan',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'featureSections',
      type: 'array',
      label: 'Secciones de Características',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'group',
          label: 'Icono',
          fields: [
            {
              name: 'src',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Imagen del icono',
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
              label: 'Texto alternativo',
              defaultValue: 'Icon description',
            },
          ],
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Título de la característica',
          defaultValue: 'Key feature heading',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción de la característica',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
      ],
    },
    {
      name: 'pricingPlan',
      type: 'group',
      label: 'Plan de Precios',
      fields: [
        {
          name: 'planName',
          type: 'text',
          required: true,
          label: 'Nombre del Plan',
          defaultValue: 'Basic plan',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Descripción del Plan',
          defaultValue: 'Lorem ipsum dolor sit amet',
        },
        {
          name: 'monthlyPrice',
          type: 'text',
          required: true,
          label: 'Precio Mensual',
          defaultValue: '$19',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Características del Plan',
          minRows: 1,
          maxRows: 15,
          fields: [
            {
              name: 'feature',
              type: 'text',
              required: true,
              label: 'Característica',
              defaultValue: 'Feature text goes here',
            },
          ],
        },
        {
          name: 'button',
          type: 'group',
          label: 'Botón',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Texto del Botón',
              defaultValue: 'Get started',
            },
            {
              name: 'variant',
              type: 'select',
              label: 'Variante del Botón',
              options: [
                { label: 'Primario', value: 'default' },
                { label: 'Secundario', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
                { label: 'Ghost', value: 'ghost' },
              ],
              defaultValue: 'default',
            },
            {
              name: 'size',
              type: 'select',
              label: 'Tamaño del Botón',
              options: [
                { label: 'Pequeño', value: 'sm' },
                { label: 'Mediano', value: 'default' },
                { label: 'Grande', value: 'lg' },
              ],
              defaultValue: 'default',
            },
            {
              name: 'href',
              type: 'text',
              label: 'Enlace (opcional)',
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Pricing 5',
    singular: 'Pricing 5',
  },
}
