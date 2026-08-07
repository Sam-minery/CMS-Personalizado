import type { Block } from 'payload'

export const PricingTemplate: Block = {
  slug: 'pricingTemplate',
  interfaceName: 'PricingTemplateBlock',
  fields: [
    {
      name: 'pricingTemplateTopText',
      type: 'text',
      label: 'Texto superior',
      defaultValue: 'Trusted by 500+ enterprise companies',
    },
    {
      name: 'pricingTemplateHeading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Affordable pricing. <br /> Easy scaling.',
    },
    {
      name: 'pricingTemplateSubheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue: 'Start small to explore automation, add agents as you scale, and unlock enterprise-grade guardrails, orchestration, and reporting when you\'re ready',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Características',
      minRows: 1,
      defaultValue: [
        {
          icon: 'lock',
          text: 'Built-in Guardrails',
        },
        {
          icon: 'users',
          text: 'Agent Orchestration',
        },
        {
          icon: 'loop',
          text: 'Human-in-the-Loop',
        },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icono',
          options: [
            {
              label: 'Lock',
              value: 'lock',
            },
            {
              label: 'Users',
              value: 'users',
            },
            {
              label: 'Loop',
              value: 'loop',
            },
          ],
          defaultValue: 'lock',
        },
        {
          name: 'text',
          type: 'text',
          label: 'Texto',
          required: true,
          defaultValue: 'Feature',
        },
      ],
    },
    {
      name: 'pricingCards',
      type: 'array',
      label: 'Tarjetas de precios',
      minRows: 1,
      defaultValue: [
        {
          price: '10',
          description: 'Perfect for individuals or small teams exploring automation.',
          ctaText: 'Start your free trial',
          steps: [
            { item: '1 AI Agent Included' },
            { item: 'Standard Integrations' },
            { item: 'Basic Approval Flows' },
            { item: '7 Day activity logs' },
          ],
        },
        {
          price: '60',
          description: 'Ideal for growing teams ready to scale automation safely.',
          ctaText: 'Contact Sales',
          steps: [
            { item: 'Upto 5 AI Agents' },
            { item: 'Multi Agent Orchestration' },
            { item: 'Advanced Approval Flows' },
            { item: '30 Day activity logs' },
            { item: 'ROI Insights' },
          ],
        },
      ],
      fields: [
        {
          name: 'price',
          type: 'text',
          label: 'Precio',
          required: true,
          defaultValue: '10',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          required: true,
          defaultValue: 'Description',
        },
        {
          name: 'ctaText',
          type: 'text',
          label: 'Texto del botón',
          required: true,
          defaultValue: 'Get Started',
        },
        {
          name: 'ctaLink',
          type: 'group',
          label: 'Enlace del botón',
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
              defaultValue: '/',
            },
          ],
        },
        {
          name: 'steps',
          type: 'array',
          label: 'Características incluidas',
          minRows: 1,
          fields: [
            {
              name: 'item',
              type: 'text',
              label: 'Característica',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Pricing Template',
    singular: 'Pricing Template',
  },
}

