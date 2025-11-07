import type { Block } from 'payload'

import { link } from '@/fields/link'

export const Feature1Template: Block = {
  slug: 'feature1Template',
  interfaceName: 'Feature1TemplateBlock',
  fields: [
    {
      name: 'feature1TemplateHeading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Built for Fast Moving <br /> Teams That Need Control.',
    },
    {
      name: 'feature1TemplateSubheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue:
        'Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Tarjetas',
      minRows: 3,
      maxRows: 3,
      defaultValue: [
        {
          title: 'Prebuilt Agents, Tuned to Your Workflows',
          skeleton: 'first',
        },
        {
          title: 'Automate Handoffs, Reduce Ops Friction',
          skeleton: 'second',
        },
        {
          title: 'Approvals, Guardrails, and Full Auditability',
          skeleton: 'third',
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
            {
              label: 'Skeleton Three',
              value: 'third',
            },
          ],
          defaultValue: 'first',
        },
        link({
          appearances: false,
          disableLabel: true,
        }),
      ],
    },
  ],
  labels: {
    plural: 'Feature1 Template',
    singular: 'Feature1 Template',
  },
}

