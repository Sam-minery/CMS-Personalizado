import type { Block } from 'payload'

export const FAQ2: Block = {
  slug: 'faq2',
  interfaceName: 'FAQ2Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Título Principal',
      defaultValue: 'FAQs',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Descripción',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Preguntas Frecuentes',
      minRows: 1,
      maxRows: 20,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Pregunta',
          defaultValue: 'Question text goes here',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Respuesta',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
        },
      ],
    },
    {
      name: 'footerHeading',
      type: 'text',
      required: true,
      label: 'Título del Pie',
      defaultValue: 'Still have questions?',
    },
    {
      name: 'footerDescription',
      type: 'textarea',
      required: true,
      label: 'Descripción del Pie',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
          defaultValue: 'Contact',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL del Botón',
          defaultValue: '#',
        },
        {
          name: 'variant',
          type: 'select',
          required: true,
          label: 'Variante del Botón',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Link', value: 'link' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'secondary',
        },
        {
          name: 'size',
          type: 'select',
          required: true,
          label: 'Tamaño del Botón',
          options: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'Primary', value: 'primary' },
            { label: 'Link', value: 'link' },
          ],
          defaultValue: 'medium',
        },
      ],
    },
  ],
  labels: {
    plural: 'FAQs 2',
    singular: 'FAQ 2',
  },
}
