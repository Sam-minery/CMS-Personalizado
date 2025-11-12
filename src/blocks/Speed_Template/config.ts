import type { Block } from 'payload'

export const SpeedTemplate: Block = {
  slug: 'speedTemplate',
  interfaceName: 'SpeedTemplateBlock',
  fields: [
    {
      name: 'speedTemplateHeading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Built for Speed <br /> Designed for Scale',
    },
    {
      name: 'speedTemplateSubheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue: 'Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.',
    },
    {
      name: 'speedImgs',
      type: 'group',
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
          defaultValue: 'https://assets.aceternity.com/screenshots/3.jpg',
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
          defaultValue: 'https://assets.aceternity.com/screenshots/4.jpg',
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
  labels: {
    plural: 'Speed Template',
    singular: 'Speed Template',
  },
}

