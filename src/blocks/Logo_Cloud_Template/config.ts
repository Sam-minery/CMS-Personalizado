import type { Block } from 'payload'

export const LogoCloudTemplate: Block = {
  slug: 'logoCloudTemplate',
  interfaceName: 'LogoCloudTemplateBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Texto principal',
      defaultValue: "Trusted by modern operators across industries. From pilot to scale without chaos.",
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      defaultValue: [
        {
          title: 'Open AI',
          useMedia: false,
          src: 'https://assets.aceternity.com/logos/openai.png',
          alt: 'Open AI',
        },
        {
          title: 'Hello Patient',
          useMedia: false,
          src: 'https://assets.aceternity.com/logos/hello-patient.png',
          alt: 'Hello Patient',
        },
        {
          title: 'Granola',
          useMedia: false,
          src: 'https://assets.aceternity.com/logos/granola.png',
          alt: 'Granola',
        },
        {
          title: 'Character AI',
          useMedia: false,
          src: 'https://assets.aceternity.com/logos/characterai.png',
          alt: 'Character AI',
        },
        {
          title: 'Oracle',
          useMedia: false,
          src: 'https://assets.aceternity.com/logos/oracle.png',
          alt: 'Oracle',
        },
        {
          title: 'Portola',
          useMedia: false,
          src: 'https://assets.aceternity.com/logos/portola.png',
          alt: 'Portola',
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Título del logo',
          defaultValue: 'Logo',
        },
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: false,
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Imagen del logo (Media)',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Suba una imagen para el logo',
          },
        },
        {
          name: 'src',
          type: 'text',
          label: 'URL de la imagen',
          defaultValue: '',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia !== true,
            description: 'Ingrese la URL de la imagen del logo',
          },
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Texto alternativo',
          admin: {
            description: 'Descripción de la imagen para accesibilidad',
          },
        },
      ],
    },
  ],
  labels: {
    plural: 'Logo Cloud Template',
    singular: 'Logo Cloud Template',
  },
}

