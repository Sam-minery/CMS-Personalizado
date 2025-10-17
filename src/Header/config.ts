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
          label: 'Navbar 1',
          value: 'navbar1',
        },
        {
          label: 'Navbar 5',
          value: 'navbar5',
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
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
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
                      defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
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
    {
      name: 'navbar1Config',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'useMedia',
              type: 'checkbox',
              label: 'Usar imagen subida',
              defaultValue: true,
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === true,
              },
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '#',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
              },
            },
            {
              name: 'src',
              type: 'text',
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
              },
            },
            {
              name: 'alt',
              type: 'text',
              defaultValue: 'Logo image',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
              },
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
              defaultValue: 'home',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
            {
              name: 'subMenuLinks',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  defaultValue: 'google',
                },
                link({
                  appearances: false,
                  disableLabel: true,
                }),
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
              defaultValue: 'youtube',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
            {
              name: 'size',
              type: 'select',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Large', value: 'lg' },
              ],
              defaultValue: 'lg',
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Link', value: 'link' },
              ],
              defaultValue: 'default',
            },
          ],
        },
      ],
      admin: {
        condition: (_, { navbarType }) => navbarType === 'navbar1',
      },
    },
    {
      name: 'navbar5Config',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'useMedia',
              type: 'checkbox',
              label: 'Usar imagen subida',
              defaultValue: true,
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === true,
              },
            },
            {
              name: 'url',
              type: 'text',
              defaultValue: '#',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
              },
            },
            {
              name: 'src',
              type: 'text',
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
              },
            },
            {
              name: 'alt',
              type: 'text',
              defaultValue: 'Logo image',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia !== true,
              },
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'links',
          type: 'array',
          dbName: 'navbar5_links',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'home',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
            {
              name: 'megaMenu',
              type: 'group',
              fields: [
                {
                  name: 'categoryLinks',
                  type: 'array',
                  dbName: 'navbar5_cat_links',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'links',
                      type: 'array',
                      dbName: 'navbar5_cat_link_items',
                      fields: [
                        link({
                          appearances: false,
                          disableLabel: true,
                        }),
                        {
                          name: 'image',
                          type: 'group',
                          fields: [
                            {
                              name: 'src',
                              type: 'text',
                              required: true,
                            },
                            {
                              name: 'alt',
                              type: 'text',
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
                        },
                        {
                          name: 'button',
                          type: 'group',
                          fields: [
                            {
                              name: 'title',
                              type: 'text',
                            },
                            {
                              name: 'size',
                              type: 'select',
                              options: [
                                { label: 'Small', value: 'sm' },
                                { label: 'Primary', value: 'primary' },
                              ],
                              defaultValue: 'sm',
                            },
                            {
                              name: 'variant',
                              type: 'select',
                              options: [
                                { label: 'Primary', value: 'primary' },
                                { label: 'Secondary', value: 'secondary' },
                                { label: 'Ghost', value: 'ghost' },
                                { label: 'Link', value: 'link' },
                              ],
                              defaultValue: 'primary',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'featuredSections',
                  type: 'group',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'links',
                      type: 'array',
                      dbName: 'navbar5_featured_links',
                      fields: [
                        link({
                          appearances: false,
                          disableLabel: true,
                        }),
                        {
                          name: 'image',
                          type: 'group',
                          fields: [
                            {
                              name: 'src',
                              type: 'text',
                              required: true,
                            },
                            {
                              name: 'alt',
                              type: 'text',
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
                        },
                        {
                          name: 'button',
                          type: 'group',
                          fields: [
                            {
                              name: 'title',
                              type: 'text',
                            },
                            {
                              name: 'size',
                              type: 'select',
                              options: [
                                { label: 'Small', value: 'sm' },
                                { label: 'Primary', value: 'primary' },
                              ],
                              defaultValue: 'sm',
                            },
                            {
                              name: 'variant',
                              type: 'select',
                              options: [
                                { label: 'Primary', value: 'primary' },
                                { label: 'Secondary', value: 'secondary' },
                                { label: 'Ghost', value: 'ghost' },
                                { label: 'Link', value: 'link' },
                              ],
                              defaultValue: 'primary',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'button',
                  type: 'group',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'size',
                      type: 'select',
                      options: [
                        { label: 'Small', value: 'sm' },
                        { label: 'Primary', value: 'primary' },
                      ],
                      defaultValue: 'sm',
                    },
                    {
                      name: 'variant',
                      type: 'select',
                      options: [
                        { label: 'Primary', value: 'primary' },
                        { label: 'Secondary', value: 'secondary' },
                        { label: 'Ghost', value: 'ghost' },
                        { label: 'Link', value: 'link' },
                      ],
                      defaultValue: 'primary',
                    },
                    link({
                      appearances: false,
                      disableLabel: true,
                    }),
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'buttons',
          type: 'array',
          dbName: 'navbar5_buttons',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'Button',
            },
            {
              name: 'size',
              type: 'select',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Primary', value: 'primary' },
              ],
              defaultValue: 'sm',
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Link', value: 'link' },
              ],
              defaultValue: 'primary',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
      ],
      admin: {
        condition: (_, { navbarType }) => navbarType === 'navbar5',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
