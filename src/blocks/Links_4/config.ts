import type { Block } from 'payload'

export const Links4: Block = {
  slug: 'links4',
  dbName: 'links_4',
  interfaceName: 'Links4Block',
  labels: {
    singular: 'Links 4',
    plural: 'Links 4',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Imagen de Fondo',
    },
    {
      name: 'author',
      type: 'group',
      label: 'Información del Autor',
      fields: [
        {
          name: 'fullName',
          type: 'text',
          required: true,
          label: 'Nombre Completo',
          defaultValue: 'Name Surname',
        },
        {
          name: 'position',
          type: 'text',
          required: true,
          label: 'Posición/Cargo',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'location',
          type: 'text',
          required: true,
          label: 'Ubicación',
          defaultValue: 'Location',
        },
      ],
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categorías de Enlaces',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Título de la Categoría',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Enlaces',
          minRows: 1,
          fields: [
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'URL del Enlace',
              defaultValue: '#',
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Título del Enlace',
              defaultValue: 'Link title',
            },
            {
              name: 'variant',
              type: 'select',
              label: 'Variante del Botón',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Link', value: 'link' },
              ],
              defaultValue: 'secondary',
            },
          ],
        },
      ],
    },
    {
      name: 'button',
      type: 'group',
      label: 'Botón de Newsletter',
      fields: [
        {
          name: 'variant',
          type: 'select',
          required: true,
          label: 'Variante del Botón',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'secondary',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título Principal del Botón',
          defaultValue: 'Join our newsletter',
        },
        {
          name: 'subtitle',
          type: 'text',
          required: true,
          label: 'Subtítulo del Botón',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
      ],
    },
    {
      name: 'newsLetter',
      type: 'group',
      label: 'Configuración del Newsletter',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
          label: 'Título del Newsletter',
          defaultValue: 'Join our newsletter',
        },
        {
          name: 'description',
          type: 'text',
          required: true,
          label: 'Descripción del Newsletter',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'inputPlaceholder',
          type: 'text',
          label: 'Placeholder del Input',
          defaultValue: 'Enter your email',
        },
        {
          name: 'submitButtonTitle',
          type: 'text',
          required: true,
          label: 'Título del Botón de Envío',
          defaultValue: 'Subscribe',
        },
        {
          name: 'termsAndConditions',
          type: 'richText',
          label: 'Términos y Condiciones',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Enlaces Sociales',
      minRows: 1,
      fields: [
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'URL del Enlace Social',
          defaultValue: '#',
        },
        {
          name: 'platform',
          type: 'select',
          required: true,
          label: 'Plataforma Social',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Twitter/X', value: 'twitter' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
          ],
          defaultValue: 'facebook',
        },
      ],
    },
  ],
}
