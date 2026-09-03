import type { GlobalConfig } from 'payload'

import { colorField } from '@/fields/color'
import { dropButtonBackgroundSecondaryField } from '@/fields/dropButtonBackgroundSecondary'
import { svgCodeField } from '@/fields/svgCode'
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
        {
          label: 'Navbar Template',
          value: 'navbarTemplate',
        },
        {
          label: 'Navbar DROP',
          value: 'navbar_drop',
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
    {
      name: 'navbarTemplateConfig',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen del logo',
            },
            {
              name: 'text',
              type: 'text',
              label: 'Texto del logo',
              defaultValue: 'Logo',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'navLinks',
          type: 'array',
          label: 'Enlaces de navegación',
          defaultValue: [
            {
              title: 'Features',
              link: {
                type: 'custom',
                url: '/features',
              },
            },
            {
              title: 'Product',
              link: {
                type: 'custom',
                url: '/product',
              },
            },
            {
              title: 'Socials',
              link: {
                type: 'custom',
                url: '/socials',
              },
            },
            {
              title: 'Pricing',
              link: {
                type: 'custom',
                url: '/pricing',
              },
            },
          ],
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Título',
              required: true,
              defaultValue: 'Link',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'loginButton',
          type: 'group',
          label: 'Botón Login',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Texto del botón',
              defaultValue: 'Login',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'signupButton',
          type: 'group',
          label: 'Botón Signup',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Texto del botón',
              defaultValue: 'Signup',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
      ],
      admin: {
        condition: (_, { navbarType }) => navbarType === 'navbarTemplate',
      },
    },
    {
      name: 'navbar_drop_config',
      type: 'group',
      label: 'Config Navbar DROP',
      fields: [
        {
          type: 'tabs',
          tabs: [
            {
              label: 'Contenido',
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
                  dbName: 'drop_nav',
                  label: 'Enlaces de navegación',
                  admin: {
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/fields/dropArrayRowLabels#NavLinkRowLabel',
                    },
                  },
                  fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'home',
            },
            {
              name: 'link',
              type: 'group',
              admin: { hideGutter: true },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'type',
                      type: 'radio',
                      admin: { layout: 'horizontal', width: '50%' },
                      defaultValue: 'reference',
                      options: [
                        { label: 'Internal link', value: 'reference' },
                        { label: 'Custom URL', value: 'custom' },
                        { label: 'Id ancla (misma página)', value: 'anchor' },
                      ],
                    },
                    {
                      name: 'newTab',
                      type: 'checkbox',
                      admin: {
                        condition: (_, siblingData) => siblingData?.type !== 'anchor',
                        style: { alignSelf: 'flex-end' },
                        width: '50%',
                      },
                      label: 'Open in new tab',
                    },
                  ],
                },
                {
                  name: 'reference',
                  type: 'relationship',
                  relationTo: ['pages', 'posts'],
                  admin: { condition: (_, siblingData) => siblingData?.type === 'reference' },
                  label: 'Document to link to',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'custom',
                    description: 'URL (http://, https:// o ruta relativa).',
                  },
                  label: 'Custom URL',
                  required: true,
                },
                {
                  name: 'anchorId',
                  type: 'text',
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'anchor',
                    description:
                      'ID del bloque de destino (ej: mi-seccion). Debe coincidir con el "ID ancla" del bloque.',
                  },
                  label: 'ID ancla',
                  required: true,
                },
              ],
            },
            {
              name: 'subMenuLinks',
              type: 'array',
              dbName: 'drop_sub',
              label: 'Submenú',
              admin: {
                initCollapsed: true,
                components: {
                  RowLabel: '@/fields/dropArrayRowLabels#SubMenuRowLabel',
                },
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  defaultValue: 'google',
                },
                {
                  name: 'link',
                  type: 'group',
                  admin: { hideGutter: true },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'type',
                          type: 'radio',
                          admin: { layout: 'horizontal', width: '50%' },
                          defaultValue: 'reference',
                          options: [
                            { label: 'Internal link', value: 'reference' },
                            { label: 'Custom URL', value: 'custom' },
                            { label: 'Id ancla (misma página)', value: 'anchor' },
                          ],
                        },
                        {
                          name: 'newTab',
                          type: 'checkbox',
                          admin: {
                            condition: (_, siblingData) => siblingData?.type !== 'anchor',
                            style: { alignSelf: 'flex-end' },
                            width: '50%',
                          },
                          label: 'Open in new tab',
                        },
                      ],
                    },
                    {
                      name: 'reference',
                      type: 'relationship',
                      relationTo: ['pages', 'posts'],
                      admin: { condition: (_, siblingData) => siblingData?.type === 'reference' },
                      label: 'Document to link to',
                      required: true,
                    },
                    {
                      name: 'url',
                      type: 'text',
                      admin: {
                        condition: (_, siblingData) => siblingData?.type === 'custom',
                        description: 'URL (http://, https:// o ruta relativa).',
                      },
                      label: 'Custom URL',
                      required: true,
                    },
                    {
                      name: 'anchorId',
                      type: 'text',
                      required: true,
                      admin: {
                        condition: (_, siblingData) => siblingData?.type === 'anchor',
                        description:
                          'ID del bloque de destino. Debe coincidir con el "ID ancla" del bloque.',
                      },
                      label: 'ID ancla',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'buttons',
          type: 'array',
          dbName: 'drop_btns',
          label: 'Botones',
          admin: {
            initCollapsed: true,
            components: {
              RowLabel: '@/fields/dropArrayRowLabels#NamedButtonRowLabel',
            },
          },
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'youtube',
            },
            {
              name: 'link',
              type: 'group',
              admin: { hideGutter: true },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'type',
                      type: 'radio',
                      admin: { layout: 'horizontal', width: '50%' },
                      defaultValue: 'reference',
                      options: [
                        { label: 'Internal link', value: 'reference' },
                        { label: 'Custom URL', value: 'custom' },
                        { label: 'Id ancla (misma página)', value: 'anchor' },
                      ],
                    },
                    {
                      name: 'newTab',
                      type: 'checkbox',
                      admin: {
                        condition: (_, siblingData) => siblingData?.type !== 'anchor',
                        style: { alignSelf: 'flex-end' },
                        width: '50%',
                      },
                      label: 'Open in new tab',
                    },
                  ],
                },
                {
                  name: 'reference',
                  type: 'relationship',
                  relationTo: ['pages', 'posts'],
                  admin: { condition: (_, siblingData) => siblingData?.type === 'reference' },
                  label: 'Document to link to',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'custom',
                    description: 'URL (http://, https:// o ruta relativa).',
                  },
                  label: 'Custom URL',
                  required: true,
                },
                {
                  name: 'anchorId',
                  type: 'text',
                  required: true,
                  admin: {
                    condition: (_, siblingData) => siblingData?.type === 'anchor',
                    description:
                      'ID del bloque de destino. Debe coincidir con el "ID ancla" del bloque.',
                  },
                  label: 'ID ancla',
                },
              ],
            },
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
            svgCodeField({
              name: 'iconSVG',
              label: 'Icono SVG (código seguro)',
              admin: { description: 'Pega aquí el código SVG del icono' },
            }),
          ],
        },
              ],
            },
            {
              label: 'Estilos',
              fields: [
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'backgroundColor',
                      label: 'Color de fondo',
                      width: '50%',
                      placeholder: '#ffffff',
                      admin: { description: 'Ej: #ffffff o transparent' },
                    }),
                    colorField({
                      name: 'mobileMenuBackgroundColor',
                      label: 'Color de fondo del menú desplegable (móvil)',
                      width: '50%',
                      placeholder: '#F5F3EF',
                      admin: {
                        description:
                          'Fondo del panel cuando el menú hamburguesa está abierto. Ej: #F5F3EF. Si se deja vacío, se usa #F5F3EF.',
                      },
                    }),
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'textColor',
                      label: 'Color del texto',
                      width: '50%',
                      placeholder: '#101835',
                    }),
                    colorField({
                      name: 'boldTextColor',
                      label: 'Color del texto en negrita',
                      width: '50%',
                      placeholder: '#C2005F',
                    }),
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'buttonBackgroundColor',
                      label: 'Color de fondo de botones',
                      width: '33%',
                      placeholder: '#C2005F',
                    }),
                    dropButtonBackgroundSecondaryField({
                      name: 'buttonBackgroundColorSecondary',
                      label: 'Color de fondo secundario de botones',
                      width: '33%',
                    }),
                    colorField({
                      name: 'buttonTextColor',
                      label: 'Color del texto de botones',
                      width: '33%',
                      placeholder: '#FFFFFF',
                    }),
                  ],
                },
                {
                  type: 'collapsible',
                  label: 'Tipografía',
                  admin: { initCollapsed: true },
                  fields: [
                    {
                      name: 'useFontGroup',
                      type: 'checkbox',
                      label: 'Usar grupo de fuentes',
                      defaultValue: false,
                      admin: {
                        description:
                          'Sube regular + bold (u otras variantes) en Font Groups: mismo nombre de familia y pesos distintos. El enlace activo (ancla en pantalla) usa negrita real. Tamaño del texto normal (body) para enlaces y botones.',
                      },
                    },
                    {
                      name: 'fontGroup',
                      type: 'relationship',
                      relationTo: 'font-groups',
                      label: 'Grupo de fuentes',
                      admin: {
                        condition: (_, siblingData) => siblingData?.useFontGroup === true,
                        description:
                          'En el grupo, añade al menos las variantes regular y bold vinculadas a archivos .woff2/.ttf, etc.',
                      },
                    },
                    {
                      name: 'fontFamily',
                      type: 'select',
                      label: 'Familia de fuente',
                      defaultValue: 'default',
                      options: [
                        { label: 'Por defecto', value: 'default' },
                        { label: 'Arial, sans-serif', value: 'Arial, sans-serif' },
                        { label: 'Times New Roman, serif', value: '"Times New Roman", serif' },
                        { label: 'Georgia, serif', value: 'Georgia, serif' },
                        { label: 'Verdana, sans-serif', value: 'Verdana, sans-serif' },
                        { label: 'Helvetica, Arial, sans-serif', value: 'Helvetica, Arial, sans-serif' },
                        { label: 'Courier New, monospace', value: '"Courier New", monospace' },
                        { label: 'Roboto', value: '"Roboto", sans-serif' },
                        { label: 'Open Sans', value: '"Open Sans", sans-serif' },
                        { label: 'Lato', value: '"Lato", sans-serif' },
                        { label: 'Montserrat', value: '"Montserrat", sans-serif' },
                        { label: 'Playfair Display', value: '"Playfair Display", serif' },
                        { label: 'Inter', value: '"Inter", sans-serif' },
                        { label: 'Poppins', value: '"Poppins", sans-serif' },
                        { label: 'Raleway', value: '"Raleway", sans-serif' },
                      ],
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.useFontGroup !== true && siblingData?.useCustomFont !== true,
                      },
                    },
                    {
                      name: 'useCustomFont',
                      type: 'checkbox',
                      label: 'Usar fuente personalizada',
                      defaultValue: false,
                      admin: {
                        condition: (_, siblingData) => siblingData?.useFontGroup !== true,
                      },
                    },
                    {
                      name: 'customFontFile',
                      type: 'upload',
                      relationTo: 'fonts',
                      label: 'Archivo de fuente',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
                      },
                    },
                    {
                      name: 'customFontName',
                      type: 'text',
                      label: 'Nombre de la fuente personalizada',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.useFontGroup !== true && siblingData?.useCustomFont === true,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      admin: {
        condition: (_, { navbarType }) => navbarType === 'navbar_drop',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
