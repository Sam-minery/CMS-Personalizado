import type { Block } from 'payload'

export const Form_custom_2: Block = {
  slug: 'form_custom_2',
  interfaceName: 'Form_custom_2Block',
  fields: [
    {
      name: 'logo',
      type: 'group',
      label: 'Logo',
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'URL del logo',
          defaultValue: '#',
        },
        {
          name: 'src',
          type: 'text',
          label: 'URL de la imagen del logo',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo del logo',
          defaultValue: 'Logo image',
        },
      ],
    },
    {
      name: 'navText',
      type: 'text',
      label: 'Texto de navegación',
      defaultValue: 'Already have an account?',
    },
    {
      name: 'navButton',
      type: 'group',
      label: 'Botón de navegación',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Texto del botón',
          defaultValue: 'Log In',
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Variante del botón',
          options: [
            { label: 'Link', value: 'link' },
            { label: 'Default', value: 'default' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'link',
        },
        {
          name: 'size',
          type: 'select',
          label: 'Tamaño del botón',
          options: [
            { label: 'Link', value: 'link' },
            { label: 'Default', value: 'default' },
            { label: 'Small', value: 'sm' },
            { label: 'Large', value: 'lg' },
          ],
          defaultValue: 'link',
        },
      ],
    },
    {
      name: 'footerText',
      type: 'text',
      label: 'Texto del footer',
      defaultValue: '© 2024 Relume',
    },
    {
      name: 'step1Title',
      type: 'text',
      label: 'Título del paso 1',
      defaultValue: "Let's start with your name & email",
    },
    {
      name: 'step1Description',
      type: 'textarea',
      label: 'Descripción del paso 1',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      name: 'step2Title',
      type: 'text',
      label: 'Título del paso 2',
      defaultValue: 'What can we help you with?',
    },
    {
      name: 'step2Description',
      type: 'textarea',
      label: 'Descripción del paso 2',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      name: 'step3Title',
      type: 'text',
      label: 'Título del paso 3',
      defaultValue: "Let's confirm your company info",
    },
    {
      name: 'step3Description',
      type: 'textarea',
      label: 'Descripción del paso 3',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      name: 'step4Title',
      type: 'text',
      label: 'Título del paso 4',
      defaultValue: "Let's confirm your company info",
    },
    {
      name: 'step4Description',
      type: 'textarea',
      label: 'Descripción del paso 4',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    {
      name: 'serviceTypeOptions',
      type: 'array',
      label: 'Opciones de tipo de servicio',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta',
        },
        {
          name: 'value',
          type: 'text',
          label: 'Valor',
        },
      ],
      defaultValue: [
        { label: 'Website design', value: 'A' },
        { label: 'Webflow development', value: 'B' },
        { label: 'Custom code solutions', value: 'C' },
        { label: 'Other', value: 'D' },
      ],
    },
    {
      name: 'budgetOptions',
      type: 'array',
      label: 'Opciones de presupuesto',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta',
        },
        {
          name: 'value',
          type: 'text',
          label: 'Valor',
        },
      ],
      defaultValue: [
        { label: 'First choice', value: 'first' },
        { label: 'Second choice', value: 'second' },
        { label: 'Third choice', value: 'third' },
      ],
    },
    {
      name: 'employeesOptions',
      type: 'array',
      label: 'Opciones de empleados',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta',
        },
        {
          name: 'value',
          type: 'text',
          label: 'Valor',
        },
      ],
      defaultValue: [
        { label: 'Just me', value: '1' },
        { label: '2-10', value: '2-10' },
        { label: '11-50', value: '11-50' },
        { label: '51-100', value: '51-100' },
        { label: '101-500', value: '101-500' },
        { label: '501+', value: '501+' },
      ],
    },
    {
      name: 'countriesOptions',
      type: 'array',
      label: 'Opciones de países',
      fields: [
        {
          name: 'id',
          type: 'number',
          label: 'ID',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Etiqueta',
        },
        {
          name: 'value',
          type: 'text',
          label: 'Valor',
        },
      ],
      defaultValue: [
        { id: 1, value: 'US', label: 'United States' },
        { id: 2, value: 'CA', label: 'Canada' },
        { id: 3, value: 'GB', label: 'United Kingdom' },
        { id: 4, value: 'AU', label: 'Australia' },
        { id: 5, value: 'DE', label: 'Germany' },
        { id: 6, value: 'FR', label: 'France' },
        { id: 7, value: 'IT', label: 'Italy' },
        { id: 8, value: 'ES', label: 'Spain' },
        { id: 9, value: 'JP', label: 'Japan' },
        { id: 10, value: 'CN', label: 'China' },
        { id: 11, value: 'IN', label: 'India' },
        { id: 12, value: 'BR', label: 'Brazil' },
        { id: 13, value: 'ZA', label: 'South Africa' },
        { id: 14, value: 'RU', label: 'Russia' },
        { id: 15, value: 'MX', label: 'Mexico' },
      ],
    },
  ],
  labels: {
    plural: 'multi-step forms 1',
    singular: 'Multi-step form 1',
  },
} 