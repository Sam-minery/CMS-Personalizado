import type { Block } from 'payload'

export const WorldMapBlock: Block = {
  slug: 'worldMap',
  interfaceName: 'WorldMapBlock',
  labels: {
    singular: 'World Map',
    plural: 'World Maps',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Título principal',
      defaultValue: 'Remote',
      required: true,
      admin: {
        description: 'Título principal que se muestra sobre el mapa',
      },
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Texto destacado del título',
      defaultValue: 'Connectivity',
      admin: {
        description: 'Texto que se anima letra por letra en el título',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Descripción',
      defaultValue: 'Break free from traditional boundaries. Work from anywhere, at the comfort of your own studio apartment. Perfect for Nomads and Travellers.',
      admin: {
        description: 'Texto descriptivo que se muestra debajo del título',
      },
    },
    {
      name: 'dots',
      type: 'array',
      label: 'Conexiones del mapa',
      minRows: 1,
      admin: {
        description: 'Define las conexiones entre puntos en el mapa mundial',
      },
      fields: [
        {
          name: 'start',
          type: 'group',
          label: 'Punto de inicio',
          fields: [
            {
              name: 'lat',
              type: 'number',
              label: 'Latitud',
              required: true,
              admin: {
                description: 'Latitud del punto de inicio (ej: 64.2008 para Alaska)',
                step: 0.0001,
              },
            },
            {
              name: 'lng',
              type: 'number',
              label: 'Longitud',
              required: true,
              admin: {
                description: 'Longitud del punto de inicio (ej: -149.4937 para Alaska)',
                step: 0.0001,
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Etiqueta (opcional)',
              admin: {
                description: 'Nombre del lugar para referencia',
              },
            },
          ],
        },
        {
          name: 'end',
          type: 'group',
          label: 'Punto de destino',
          fields: [
            {
              name: 'lat',
              type: 'number',
              label: 'Latitud',
              required: true,
              admin: {
                description: 'Latitud del punto de destino',
                step: 0.0001,
              },
            },
            {
              name: 'lng',
              type: 'number',
              label: 'Longitud',
              required: true,
              admin: {
                description: 'Longitud del punto de destino',
                step: 0.0001,
              },
            },
            {
              name: 'label',
              type: 'text',
              label: 'Etiqueta (opcional)',
              admin: {
                description: 'Nombre del lugar para referencia',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'lineColor',
      type: 'text',
      label: 'Color de las líneas',
      defaultValue: '#0ea5e9',
      admin: {
        description: 'Color hexadecimal de las líneas de conexión (ej: #0ea5e9)',
      },
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding vertical',
      defaultValue: 'py-40',
      options: [
        { label: 'Sin padding (py-0)', value: 'py-0' },
        { label: 'Padding pequeño (py-20)', value: 'py-20' },
        { label: 'Padding mediano (py-40)', value: 'py-40' },
        { label: 'Padding grande (py-60)', value: 'py-60' },
      ],
      admin: {
        description: 'Espaciado vertical del contenedor',
      },
    },
  ],
}

