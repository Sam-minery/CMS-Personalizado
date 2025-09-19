import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navbarType',
      type: 'select',
      options: [
        {
          label: 'Default Navbar',
          value: 'default',
        },
        {
          label: 'Navbar 11',
          value: 'navbar11',
        },
      ],
      defaultValue: 'default',
      admin: {
        description: 'Selecciona el tipo de navbar a usar',
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
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
        condition: (_, { navbarType }) => navbarType === 'default',
      },
    },
    {
      name: 'navbar11Config',
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
              defaultValue: 'Company logo',
            },
          ],
        },
        {
          name: 'navLinks',
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
            {
              name: 'subMenuLinks',
              type: 'array',
              fields: [
                {
                  name: 'icon',
                  type: 'group',
                  fields: [
                    {
                      name: 'src',
                      type: 'text',
                      required: true,
                      defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
                    },
                    {
                      name: 'alt',
                      type: 'text',
                      defaultValue: 'Icon',
                    },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
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
          name: 'buttons',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Secondary',
                  value: 'secondary',
                },
                {
                  label: 'Outline',
                  value: 'outline',
                },
                {
                  label: 'Ghost',
                  value: 'ghost',
                },
              ],
              defaultValue: 'default',
            },
            {
              name: 'size',
              type: 'select',
              options: [
                {
                  label: 'Small',
                  value: 'sm',
                },
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Large',
                  value: 'lg',
                },
              ],
              defaultValue: 'sm',
            },
          ],
        },
      ],
      admin: {
        condition: (_, { navbarType }) => navbarType === 'navbar11',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
