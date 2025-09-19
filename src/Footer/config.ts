import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footerType',
      type: 'select',
      options: [
        {
          label: 'Default Footer',
          value: 'default',
        },
        {
          label: 'Footer 4',
          value: 'footer4',
        },
      ],
      defaultValue: 'default',
      admin: {
        description: 'Selecciona el tipo de footer a usar',
      },
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
        condition: (_, { footerType }) => footerType === 'default',
      },
    },
    {
      name: 'footer4Config',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'url',
              type: 'text',
              defaultValue: '#',
            },
            {
              name: 'src',
              type: 'text',
              required: true,
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
            },
            {
              name: 'alt',
              type: 'text',
              defaultValue: 'Logo image',
            },
          ],
        },
        {
          name: 'columnLinks',
          type: 'array',
          fields: [
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                  defaultValue: '#',
                },
              ],
            },
          ],
        },
        {
          name: 'socialMediaLinks',
          type: 'array',
          fields: [
            {
              name: 'url',
              type: 'text',
              required: true,
              defaultValue: '#',
            },
            {
              name: 'platform',
              type: 'select',
              options: [
                {
                  label: 'Facebook',
                  value: 'facebook',
                },
                {
                  label: 'Instagram',
                  value: 'instagram',
                },
                {
                  label: 'Twitter/X',
                  value: 'twitter',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin',
                },
                {
                  label: 'YouTube',
                  value: 'youtube',
                },
              ],
              required: true,
            },
          ],
        },
        {
          name: 'footerText',
          type: 'text',
          defaultValue: '© 2024 Relume. All rights reserved.',
        },
        {
          name: 'footerLinks',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              defaultValue: '#',
            },
          ],
        },
      ],
      admin: {
        condition: (_, { footerType }) => footerType === 'footer4',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
