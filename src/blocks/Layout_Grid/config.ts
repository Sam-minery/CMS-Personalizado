import type { Block } from 'payload'

export const LayoutGridBlock: Block = {
  slug: 'layoutGrid',
  interfaceName: 'LayoutGridBlock',
  labels: {
    singular: 'Layout Grid',
    plural: 'Layout Grid',
  },
  fields: [
    {
      name: 'height',
      type: 'select',
      label: 'Altura del contenedor',
      defaultValue: 'h-auto',
      options: [
        { label: 'Altura automática (h-auto)', value: 'h-auto' },
        { label: 'Pantalla completa (h-screen)', value: 'h-screen' },
        { label: 'Altura pequeña (h-[50vh])', value: 'h-[50vh]' },
        { label: 'Altura mediana (h-[75vh])', value: 'h-[75vh]' },
      ],
      admin: {
        description: 'Altura del contenedor principal',
      },
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding vertical',
      defaultValue: 'py-20',
      options: [
        { label: 'Sin padding (py-0)', value: 'py-0' },
        { label: 'Padding pequeño (py-10)', value: 'py-10' },
        { label: 'Padding mediano (py-20)', value: 'py-20' },
        { label: 'Padding grande (py-32)', value: 'py-32' },
      ],
      admin: {
        description: 'Padding vertical del contenedor',
      },
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Tarjetas',
      minRows: 1,
      fields: [
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen de la tarjeta',
          admin: {
            description: 'Imagen que se muestra como thumbnail',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          required: true,
          admin: {
            description: 'Título que se muestra cuando la tarjeta está seleccionada',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtítulo',
          admin: {
            description: 'Subtítulo opcional',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          required: true,
          admin: {
            description: 'Texto descriptivo que se muestra cuando la tarjeta está seleccionada',
          },
        },
        {
          name: 'className',
          type: 'select',
          label: 'Tamaño de la tarjeta',
          defaultValue: 'md:col-span-1',
          options: [
            { label: '1 Columna (md:col-span-1)', value: 'md:col-span-1' },
            { label: '2 Columnas (md:col-span-2)', value: 'md:col-span-2' },
          ],
          admin: {
            description: 'Ancho de la tarjeta en el grid',
          },
        },
      ],
    },
  ],
}

