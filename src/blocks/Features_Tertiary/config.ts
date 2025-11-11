import type { Block } from 'payload'

export const FeaturesTertiaryBlock: Block = {
  slug: 'featuresTertiary',
  interfaceName: 'FeaturesTertiaryBlock',
  fields: [
    {
      name: 'showStyleOne',
      type: 'checkbox',
      label: 'Mostrar Estilo 1 (lista animada)',
      defaultValue: true,
    },
    {
      name: 'showStyleTwo',
      type: 'checkbox',
      label: 'Mostrar Estilo 2 (mosaico de imágenes)',
      defaultValue: true,
    },
    {
      name: 'showStyleThree',
      type: 'checkbox',
      label: 'Mostrar Estilo 3 (píldoras sobre grilla 3D)',
      defaultValue: true,
    },
    {
      name: 'showStyleFour',
      type: 'checkbox',
      label: 'Mostrar Estilo 4 (tarjetas con tags)',
      defaultValue: true,
    },
    // Encabezados y descripciones para cada una de las 4 tarjetas
    {
      name: 'features',
      type: 'array',
      label: 'Características',
      minRows: 1,
      maxRows: 4,
      defaultValue: [
        { title: 'Audit Trail', description: 'Tracks every agent action with full input-output visibility and timestamps.' },
        { title: 'Role-Based Access', description: 'Controls who can launch, review, or manage agents based on roles.' },
        { title: 'Approval Queue', description: "Sends agent-generated content to human reviewers before it's published." },
        { title: 'Guardrail Engine', description: 'Applies brand, tone, and policy checks before output goes live.' },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción',
        },
      ],
    },
    // Estilo 1: lista de items con icono (imagen), título, descripción y badge
    {
      name: 'styleOneItems',
      type: 'array',
      label: 'Estilo 1 - Items',
      admin: {
        description: 'Elementos que aparecen en la lista animada (izquierda-arriba)'
      },
      maxRows: 10,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icono (opcional)'
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Descripción',
        },
        {
          name: 'badgeText',
          type: 'text',
          label: 'Texto del badge (opcional)'
        },
      ],
    },
    // Estilo 2: galería de imágenes (ya existente) para los mosaicos
    {
      name: 'galleryImages',
      type: 'array',
      label: 'Galería (opcional, para segundo estilo)',
      maxRows: 12,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
        },
      ],
    },
    // Estilo 3: dos "píldoras" de texto que se muestran sobre la grilla 3D
    {
      name: 'styleThreePills',
      type: 'array',
      label: 'Estilo 3 - Píldoras',
      maxRows: 2,
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Texto',
        },
      ],
    },
    // Estilo 4: tarjetas con color, título, descripción y tags con icono (imagen)
    {
      name: 'styleFourItems',
      type: 'array',
      label: 'Estilo 4 - Items',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Descripción',
        },
        {
          name: 'color',
          type: 'select',
          label: 'Color',
          defaultValue: 'neutral',
          options: [
            { label: 'Azul', value: 'blue' },
            { label: 'Verde', value: 'green' },
            { label: 'Índigo', value: 'indigo' },
            { label: 'Neutro', value: 'neutral' },
            { label: 'Púrpura', value: 'purple' },
          ],
        },
        {
          name: 'tags',
          type: 'array',
          label: 'Tags',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
              label: 'Texto',
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Icono (opcional)',
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Features Tertiary',
    singular: 'Features Tertiary',
  },
}


