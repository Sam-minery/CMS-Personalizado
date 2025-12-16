import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Custom 2',
          value: 'custom2',
        },
        {
          label: 'Header 1',
          value: 'header1',
        },
        {
          label: 'Header 5',
          value: 'header5',
        },
        {
          label: 'Header 138',
          value: 'header138',
        },
        {
          label: 'Hero Template',
          value: 'heroTemplate',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact', 'custom2', 'header1', 'header5'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    // Campos específicos para Header138
    {
      name: 'header138Heading',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      defaultValue: 'Medium length hero heading goes here',
      label: 'Heading',
      required: true,
    },
    {
      name: 'header138Description',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
      label: 'Description',
    },
    {
      name: 'header138FirstImage',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: false,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen existente o suba una nueva',
          },
        },
        {
          name: 'src',
          type: 'text',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'Ingrese la URL de la imagen principal',
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Relume placeholder image 1',
          admin: {
            description: 'Texto alternativo para accesibilidad',
          },
        },
      ],
      label: 'First Image',
    },
    {
      name: 'header138SecondImage',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'header138',
      },
      fields: [
        {
          name: 'useMedia',
          type: 'checkbox',
          label: 'Usar imagen subida',
          defaultValue: false,
        },
        {
          name: 'mediaImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === true,
            description: 'Seleccione una imagen existente o suba una nueva',
          },
        },
        {
          name: 'src',
          type: 'text',
          defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image-portrait-dim.png',
          admin: {
            condition: (_, siblingData) => siblingData?.useMedia === false,
            description: 'Ingrese la URL de la imagen secundaria',
          },
        },
        {
          name: 'alt',
          type: 'text',
          defaultValue: 'Relume placeholder image 2',
          admin: {
            description: 'Texto alternativo para accesibilidad',
          },
        },
      ],
      label: 'Second Image',
    },
    // Campos específicos para HeroTemplate
    {
      name: 'heroTemplateHeading',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      defaultValue: 'Agents that do the work <br /> Approvals that keep you safe.',
      label: 'Heading',
    },
    {
      name: 'heroTemplateSubheading',
      type: 'textarea',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      defaultValue: 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
      label: 'Subheading',
    },
    {
      name: 'heroPrimBtn',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'Start your free trial',
          label: 'Button Text',
          required: true,
        },
        {
          name: 'link',
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  dbName: 't',
                  admin: {
                    layout: 'horizontal',
                    width: '50%',
                  },
                  defaultValue: 'custom',
                  options: [
                    {
                      label: 'Internal link',
                      value: 'reference',
                    },
                    {
                      label: 'Custom URL',
                      value: 'custom',
                    },
                  ],
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  admin: {
                    style: {
                      alignSelf: 'flex-end',
                    },
                    width: '50%',
                  },
                  label: 'Open in new tab',
                },
              ],
            },
            {
              name: 'reference',
              type: 'relationship',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference',
              },
              label: 'Document to link to',
              relationTo: ['pages', 'posts'],
            },
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom',
              },
              label: 'Custom URL',
              defaultValue: '#',
            },
          ],
          label: 'Button Link',
        },
      ],
      label: 'Primary Button',
    },
    {
      name: 'heroSecBtn',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          defaultValue: 'View role based demos',
          label: 'Button Text',
          required: true,
        },
        {
          name: 'link',
          type: 'group',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'type',
                  type: 'radio',
                  dbName: 't',
                  admin: {
                    layout: 'horizontal',
                    width: '50%',
                  },
                  defaultValue: 'custom',
                  options: [
                    {
                      label: 'Internal link',
                      value: 'reference',
                    },
                    {
                      label: 'Custom URL',
                      value: 'custom',
                    },
                  ],
                },
                {
                  name: 'newTab',
                  type: 'checkbox',
                  admin: {
                    style: {
                      alignSelf: 'flex-end',
                    },
                    width: '50%',
                  },
                  label: 'Open in new tab',
                },
              ],
            },
            {
              name: 'reference',
              type: 'relationship',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'reference',
              },
              label: 'Document to link to',
              relationTo: ['pages', 'posts'],
            },
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: (_, siblingData) => siblingData?.type === 'custom',
              },
              label: 'Custom URL',
              defaultValue: '#',
            },
          ],
          label: 'Button Link',
        },
      ],
      label: 'Secondary Button',
    },
    {
      name: 'heroImgs',
      type: 'group',
      admin: {
        condition: (_, { type } = {}) => type === 'heroTemplate',
      },
      fields: [
        {
          name: 'firstImageType',
          type: 'radio',
          dbName: 'img1_type',
          admin: {
            layout: 'horizontal',
          },
          defaultValue: 'url',
          options: [
            {
              label: 'Upload Image',
              value: 'upload',
            },
            {
              label: 'Image URL',
              value: 'url',
            },
          ],
          label: 'First Image Source',
        },
        {
          name: 'firstImageUpload',
          type: 'upload',
          admin: {
            condition: (_, siblingData) => siblingData?.firstImageType === 'upload',
          },
          relationTo: 'media',
          label: 'First Image Upload',
        },
        {
          name: 'firstImageUrl',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.firstImageType === 'url',
          },
          defaultValue: 'https://assets.aceternity.com/screenshots/4.jpg',
          label: 'First Image URL',
        },
        {
          name: 'secondImageType',
          type: 'radio',
          dbName: 'img2_type',
          admin: {
            layout: 'horizontal',
          },
          defaultValue: 'url',
          options: [
            {
              label: 'Upload Image',
              value: 'upload',
            },
            {
              label: 'Image URL',
              value: 'url',
            },
          ],
          label: 'Second Image Source',
        },
        {
          name: 'secondImageUpload',
          type: 'upload',
          admin: {
            condition: (_, siblingData) => siblingData?.secondImageType === 'upload',
          },
          relationTo: 'media',
          label: 'Second Image Upload',
        },
        {
          name: 'secondImageUrl',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.secondImageType === 'url',
          },
          defaultValue: 'https://assets.aceternity.com/screenshots/1.jpg',
          label: 'Second Image URL',
        },
        {
          name: 'showGradient',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Gradient',
        },
      ],
      label: 'Images',
    },
  ],
  label: false,
}
