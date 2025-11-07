import type { Block } from 'payload'

export const Feature2Template: Block = {
  slug: 'feature2Template',
  interfaceName: 'Feature2TemplateBlock',
  fields: [
    {
      name: 'mainCards',
      type: 'array',
      label: 'Tarjetas Principales',
      minRows: 2,
      maxRows: 2,
      defaultValue: [
        {
          title: 'Agent Studio',
          description: 'Design, launch and customize AI agents for marketing, sales, support and ops, built around your workflows.',
          skeleton: 'first',
        },
        {
          title: 'Multi-Agent Orchestration',
          description: 'Coordinate multiple agents across workflows using memory, interrupts, and conditional logic.',
          skeleton: 'second',
          logo: null,
        },
      ],
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          required: true,
          defaultValue: 'Card Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          required: true,
          defaultValue: 'Card description',
        },
        {
          name: 'skeleton',
          type: 'select',
          label: 'Skeleton',
          required: true,
          options: [
            {
              label: 'Skeleton One',
              value: 'first',
            },
            {
              label: 'Skeleton Two',
              value: 'second',
            },
          ],
          defaultValue: 'first',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo (solo para Skeleton Two)',
          admin: {
            description: 'Logo que se mostrará en el centro del skeleton. Solo aplica para Skeleton Two.',
          },
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Características Adicionales',
      minRows: 3,
      maxRows: 3,
      defaultValue: [
        {
          icon: 'workflow',
          title: 'Workflow Automation',
          description: 'Automate campaigns, tickets and CRM updates without manual handoffs.',
        },
        {
          icon: 'integration',
          title: 'Integration Fabric',
          description: 'Connect CRMs, service desks, data warehouses and cloud apps seamlessly.',
        },
        {
          icon: 'human',
          title: 'Human-in-the-Loop',
          description: 'Add reviews, approvals and escalations without slowing work.',
        },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          label: 'Icono',
          required: true,
          options: [
            {
              label: 'Workflow',
              value: 'workflow',
            },
            {
              label: 'Integration',
              value: 'integration',
            },
            {
              label: 'Human',
              value: 'human',
            },
          ],
          defaultValue: 'workflow',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Título',
          required: true,
          defaultValue: 'Feature Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Descripción',
          required: true,
          defaultValue: 'Feature description',
        },
      ],
    },
  ],
  labels: {
    plural: 'Feature2 Template',
    singular: 'Feature2 Template',
  },
}

