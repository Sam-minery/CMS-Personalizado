import type { Block } from 'payload'

export const Stats3: Block = {
  slug: 'stats3',
  dbName: 'stats_3',
  interfaceName: 'Stats3Block',
  labels: {
    singular: 'Stats 3',
    plural: 'Stats 3',
  },
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
      defaultValue: 'Medium length section heading goes here',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Botones',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Texto del Botón',
          defaultValue: 'Button',
        },
        {
          name: 'variant',
          type: 'select',
          required: true,
          label: 'Variante del Botón',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Secondary Alt', value: 'secondary-alt' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
            { label: 'Link Alt', value: 'link-alt' },
          ],
          defaultValue: 'secondary-alt',
        },
        {
          name: 'size',
          type: 'select',
          required: true,
          label: 'Tamaño del Botón',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'md',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del Botón',
          defaultValue: '#',
        },
        {
          name: 'iconRight',
          type: 'checkbox',
          label: 'Mostrar Icono a la Derecha',
          defaultValue: false,
        },
      ],
    },
    {
      name: 'image',
      type: 'group',
      label: 'Imagen de Fondo',
      fields: [
        {
          name: 'src',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Texto Alternativo',
          defaultValue: 'Background image',
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Estadísticas',
      minRows: 1,
      fields: [
        {
          name: 'percentage',
          type: 'text',
          required: true,
          label: 'Porcentaje',
          defaultValue: '30%',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Título de la Estadística',
          defaultValue: 'Short heading goes here',
        },
      ],
    },
  ],
}
