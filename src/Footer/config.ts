import type { Field, GlobalConfig } from 'payload'

import {
  AlignFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical'

import { colorField } from '@/fields/color'
import { iconGroupFields } from '@/fields/iconGroupFields'
import { svgCodeField } from '@/fields/svgCode'
import { link } from '@/fields/link'
import { simpleLink } from '@/fields/simpleLink'
import { revalidateFooter } from './hooks/revalidateFooter'

const footerDropRichTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      ParagraphFeature(),
      AlignFeature(),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

const dropLinkFields = (): Field[] => [
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
]

const logoMediaFields = (opts?: { altDefault?: string }): Field[] => [
  {
    name: 'useMedia',
    type: 'checkbox',
    label: 'Usar imagen subida',
    defaultValue: true,
    admin: {
      description: 'Si está desactivado, puedes pegar código SVG en el campo "Código SVG".',
    },
  },
  {
    name: 'mediaImage',
    type: 'upload',
    relationTo: 'media',
    label: 'Imagen del logo',
    admin: {
      condition: (_, siblingData) => siblingData?.useMedia === true,
    },
  },
  svgCodeField({
    name: 'iconSVG',
    label: 'Código SVG del logo',
    admin: {
      condition: (_, siblingData) => siblingData?.useMedia !== true,
      description: 'Pega aquí el código SVG como alternativa a subir media.',
    },
  }),
  {
    name: 'alt',
    type: 'text',
    label: 'Texto alternativo',
    defaultValue: opts?.altDefault ?? 'Logo',
  },
]

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
          label: 'Footer 1',
          value: 'footer1',
        },
        {
          label: 'Footer 4',
          value: 'footer4',
        },
        {
          label: 'Footer 5',
          value: 'footer5',
        },
        {
          label: 'Footer Template',
          value: 'footerTemplate',
        },
        {
          label: 'Footer DROP',
          value: 'footer_drop',
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
      name: 'footer1Config',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Sube la imagen del logo',
              },
            },
            simpleLink(),
          ],
        },
        {
          name: 'newsletterDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Join our newsletter to stay up to date on features and releases.',
        },
        {
          name: 'inputPlaceholder',
          type: 'text',
          defaultValue: 'Enter your email',
        },
        {
          name: 'button',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'Subscribe',
            },
            {
              name: 'size',
              type: 'select',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
              ],
              defaultValue: 'sm',
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Destructive', value: 'destructive' },
                { label: 'Outline', value: 'outline' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Link', value: 'link' },
              ],
              defaultValue: 'secondary',
            },
          ],
        },
        {
          name: 'termsAndConditions',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'By subscribing you agree to with our',
            },
            simpleLink({
              overrides: {
                admin: {
                  description: 'Enlace a la página de Términos y Condiciones',
                },
              },
            }),
            {
              name: 'suffix',
              type: 'text',
              defaultValue: 'and provide consent to receive updates from our company.',
            },
          ],
        },
        {
          name: 'columnLinks',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                simpleLink(),
                {
                  name: 'icon',
                  type: 'select',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'X (Twitter)', value: 'x' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Youtube', value: 'youtube' },
                  ],
                },
              ],
            },
          ],
          defaultValue: [
            {
              title: 'Column One',
              links: [
                { title: 'Link One', link: { type: 'custom', url: '#' } },
                { title: 'Link Two', link: { type: 'custom', url: '#' } },
                { title: 'Link Three', link: { type: 'custom', url: '#' } },
                { title: 'Link Four', link: { type: 'custom', url: '#' } },
                { title: 'Link Five', link: { type: 'custom', url: '#' } },
              ],
            },
            {
              title: 'Column Two',
              links: [
                { title: 'Link Six', link: { type: 'custom', url: '#' } },
                { title: 'Link Seven', link: { type: 'custom', url: '#' } },
                { title: 'Link Eight', link: { type: 'custom', url: '#' } },
                { title: 'Link Nine', link: { type: 'custom', url: '#' } },
                { title: 'Link Ten', link: { type: 'custom', url: '#' } },
              ],
            },
            {
              title: 'Follow us',
              links: [
                { title: 'Facebook', link: { type: 'custom', url: '#' }, icon: 'facebook' },
                { title: 'Instagram', link: { type: 'custom', url: '#' }, icon: 'instagram' },
                { title: 'X', link: { type: 'custom', url: '#' }, icon: 'x' },
                { title: 'LinkedIn', link: { type: 'custom', url: '#' }, icon: 'linkedin' },
                { title: 'Youtube', link: { type: 'custom', url: '#' }, icon: 'youtube' },
              ],
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
            simpleLink(),
          ],
          defaultValue: [
            { title: 'Privacy Policy', link: { type: 'custom', url: '#' } },
            { title: 'Terms of Service', link: { type: 'custom', url: '#' } },
            { title: 'Cookies Settings', link: { type: 'custom', url: '#' } },
          ],
        },
      ],
      admin: {
        condition: (_, { footerType }) => footerType === 'footer1',
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
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Sube la imagen del logo',
              },
            },
            simpleLink(),
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
                simpleLink(),
              ],
            },
          ],
        },
        {
          name: 'socialMediaLinks',
          type: 'array',
          fields: [
            simpleLink(),
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
            simpleLink(),
          ],
        },
      ],
      admin: {
        condition: (_, { footerType }) => footerType === 'footer4',
      },
    },
    {
      name: 'footer5Config',
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'group',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              required: true,
              admin: {
                description: 'Sube la imagen del logo',
              },
            },
            simpleLink(),
          ],
        },
        {
          name: 'newsletterHeading',
          type: 'text',
          required: true,
          defaultValue: 'Join our newsletter',
        },
        {
          name: 'newsletterDescription',
          type: 'textarea',
          required: true,
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'inputPlaceholder',
          type: 'text',
          defaultValue: 'Enter your email',
        },
        {
          name: 'button',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
              defaultValue: 'Subscribe',
            },
            {
              name: 'size',
              type: 'select',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
              ],
              defaultValue: 'sm',
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Destructive', value: 'destructive' },
                { label: 'Outline', value: 'outline' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Ghost', value: 'ghost' },
                { label: 'Link', value: 'link' },
              ],
              defaultValue: 'secondary',
            },
          ],
        },
        {
          name: 'termsAndConditions',
          type: 'group',
          fields: [
            {
              name: 'text',
              type: 'text',
              defaultValue: 'By subscribing you agree to with our',
            },
            simpleLink({
              overrides: {
                admin: {
                  description: 'Enlace a la página de Términos y Condiciones',
                },
              },
            }),
            {
              name: 'suffix',
              type: 'text',
              defaultValue: 'and provide consent to receive updates from our company.',
            },
          ],
        },
        {
          name: 'columnLinks',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'links',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                simpleLink(),
              ],
            },
          ],
          defaultValue: [
            {
              title: 'Column One',
              links: [
                { title: 'Link One', link: { type: 'custom', url: '#' } },
                { title: 'Link Two', link: { type: 'custom', url: '#' } },
                { title: 'Link Three', link: { type: 'custom', url: '#' } },
                { title: 'Link Four', link: { type: 'custom', url: '#' } },
                { title: 'Link Five', link: { type: 'custom', url: '#' } },
              ],
            },
            {
              title: 'Column Two',
              links: [
                { title: 'Link Six', link: { type: 'custom', url: '#' } },
                { title: 'Link Seven', link: { type: 'custom', url: '#' } },
                { title: 'Link Eight', link: { type: 'custom', url: '#' } },
                { title: 'Link Nine', link: { type: 'custom', url: '#' } },
                { title: 'Link Ten', link: { type: 'custom', url: '#' } },
              ],
            },
            {
              title: 'Column Three',
              links: [
                { title: 'Link Eleven', link: { type: 'custom', url: '#' } },
                { title: 'Link Twelve', link: { type: 'custom', url: '#' } },
                { title: 'Link Thirteen', link: { type: 'custom', url: '#' } },
                { title: 'Link Fourteen', link: { type: 'custom', url: '#' } },
                { title: 'Link Fifteen', link: { type: 'custom', url: '#' } },
              ],
            },
            {
              title: 'Column Four',
              links: [
                { title: 'Link Sixteen', link: { type: 'custom', url: '#' } },
                { title: 'Link Seventeen', link: { type: 'custom', url: '#' } },
                { title: 'Link Eighteen', link: { type: 'custom', url: '#' } },
                { title: 'Link Nineteen', link: { type: 'custom', url: '#' } },
                { title: 'Link Twenty', link: { type: 'custom', url: '#' } },
              ],
            },
            {
              title: 'Column Five',
              links: [
                { title: 'Link Twenty One', link: { type: 'custom', url: '#' } },
                { title: 'Link Twenty Two', link: { type: 'custom', url: '#' } },
                { title: 'Link Twenty Three', link: { type: 'custom', url: '#' } },
                { title: 'Link Twenty Four', link: { type: 'custom', url: '#' } },
                { title: 'Link Twenty Five', link: { type: 'custom', url: '#' } },
              ],
            },
          ],
        },
        {
          name: 'socialMediaLinks',
          type: 'array',
          fields: [
            simpleLink(),
            {
              name: 'icon',
              type: 'select',
              required: true,
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'X (Twitter)', value: 'x' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Youtube', value: 'youtube' },
              ],
            },
          ],
          defaultValue: [
            { link: { type: 'custom', url: '#' }, icon: 'facebook' },
            { link: { type: 'custom', url: '#' }, icon: 'instagram' },
            { link: { type: 'custom', url: '#' }, icon: 'x' },
            { link: { type: 'custom', url: '#' }, icon: 'linkedin' },
            { link: { type: 'custom', url: '#' }, icon: 'youtube' },
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
            simpleLink(),
          ],
          defaultValue: [
            { title: 'Privacy Policy', link: { type: 'custom', url: '#' } },
            { title: 'Terms of Service', link: { type: 'custom', url: '#' } },
            { title: 'Cookies Settings', link: { type: 'custom', url: '#' } },
          ],
        },
      ],
      admin: {
        condition: (_, { footerType }) => footerType === 'footer5',
      },
    },
    {
      name: 'footerTemplateConfig',
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
          name: 'subheading',
          type: 'textarea',
          label: 'Subheading',
          defaultValue: 'Safe, observable, outcome-driven AI',
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'Botón CTA',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Texto del botón',
              defaultValue: 'Start a 30-day trial',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'productLinks',
          type: 'array',
          label: 'Enlaces de Producto',
          defaultValue: [
            { title: 'Agent Simulator', link: { type: 'custom', url: '#' } },
            { title: 'AI Workflows', link: { type: 'custom', url: '#' } },
            { title: 'Agent Builder', link: { type: 'custom', url: '#' } },
            { title: 'Analytics Dashboard', link: { type: 'custom', url: '#' } },
            { title: 'API Integration', link: { type: 'custom', url: '#' } },
            { title: 'Enterprise Solutions', link: { type: 'custom', url: '#' } },
          ],
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Título',
              required: true,
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'companyLinks',
          type: 'array',
          label: 'Enlaces de Compañía',
          defaultValue: [
            { title: 'About Us', link: { type: 'custom', url: '#' } },
            { title: 'Careers', link: { type: 'custom', url: '#' } },
            { title: 'Press', link: { type: 'custom', url: '#' } },
            { title: 'Contact', link: { type: 'custom', url: '#' } },
            { title: 'Blog', link: { type: 'custom', url: '#' } },
          ],
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Título',
              required: true,
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'newsletterDescription',
          type: 'textarea',
          label: 'Descripción del Newsletter',
          defaultValue: 'Get the latest product news and behind the scenes updates.',
        },
        {
          name: 'newsletterPlaceholder',
          type: 'text',
          label: 'Placeholder del input',
          defaultValue: 'Your email',
        },
        {
          name: 'footerText',
          type: 'text',
          label: 'Texto del footer',
          defaultValue: `© ${new Date().getFullYear()} Agenforce AI. All rights reserved.`,
        },
        {
          name: 'footerLinks',
          type: 'array',
          label: 'Enlaces del footer',
          defaultValue: [
            { title: 'Privacy Policy', link: { type: 'custom', url: '/privacy' } },
            { title: 'Terms of Service', link: { type: 'custom', url: '/terms' } },
          ],
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Título',
              required: true,
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Enlaces de redes sociales',
          defaultValue: [
            { platform: 'twitter', link: { type: 'custom', url: '#' } },
            { platform: 'instagram', link: { type: 'custom', url: '#' } },
            { platform: 'linkedin', link: { type: 'custom', url: '#' } },
          ],
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Plataforma',
              options: [
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'LinkedIn', value: 'linkedin' },
              ],
              defaultValue: 'twitter',
            },
            link({
              appearances: false,
              disableLabel: true,
            }),
          ],
        },
      ],
      admin: {
        condition: (_, { footerType }) => footerType === 'footerTemplate',
      },
    },
    {
      name: 'footer_drop_config',
      type: 'group',
      label: 'Config Footer DROP',
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
                  label: 'Logo principal',
                  fields: [
                    ...logoMediaFields({ altDefault: 'Logo' }),
                    {
                      name: 'link',
                      type: 'group',
                      label: 'Enlace del logo',
                      admin: { hideGutter: true },
                      fields: dropLinkFields(),
                    },
                  ],
                },
                {
                  name: 'secondaryLogo',
                  type: 'group',
                  label: 'Logo secundario (opcional)',
                  fields: [
                    {
                      name: 'enabled',
                      type: 'checkbox',
                      label: 'Mostrar logo secundario',
                      defaultValue: false,
                    },
                    {
                      name: 'useMedia',
                      type: 'checkbox',
                      label: 'Usar imagen subida',
                      defaultValue: true,
                      admin: {
                        condition: (_, siblingData) => siblingData?.enabled === true,
                        description: 'Si está desactivado, puedes pegar código SVG.',
                      },
                    },
                    {
                      name: 'mediaImage',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Imagen del logo',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.enabled === true && siblingData?.useMedia === true,
                      },
                    },
                    svgCodeField({
                      name: 'iconSVG',
                      label: 'Código SVG del logo',
                      admin: {
                        condition: (_, siblingData) =>
                          siblingData?.enabled === true && siblingData?.useMedia !== true,
                        description: 'Pega aquí el código SVG como alternativa a subir media.',
                      },
                    }),
                    {
                      name: 'alt',
                      type: 'text',
                      label: 'Texto alternativo',
                      defaultValue: 'Logo secundario',
                      admin: {
                        condition: (_, siblingData) => siblingData?.enabled === true,
                      },
                    },
                    {
                      name: 'link',
                      type: 'group',
                      label: 'Enlace del logo',
                      admin: {
                        hideGutter: true,
                        condition: (_, siblingData) => siblingData?.enabled === true,
                      },
                      fields: dropLinkFields(),
                    },
                  ],
                },
                {
                  name: 'navLinks',
                  type: 'array',
                  dbName: 'ftd_nav',
                  label: 'Enlaces de navegación',
                  admin: {
                    description:
                      'En escritorio se muestran en fila. En móvil, cada uno puede llevar icono.',
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
                      defaultValue: 'INICIO',
                    },
                    {
                      name: 'link',
                      type: 'group',
                      admin: { hideGutter: true },
                      fields: dropLinkFields(),
                    },
                    {
                      name: 'icon',
                      type: 'group',
                      label: 'Icono (solo móvil, opcional)',
                      fields: iconGroupFields({
                        defaultUseMedia: false,
                        description:
                          'Si está desactivado, puedes pegar código SVG. El icono solo se muestra en móvil.',
                        svgDescription: 'Pega aquí el código SVG. Solo se muestra en móvil.',
                      }),
                    },
                    colorField({
                      name: 'iconBackgroundColor',
                      label: 'Color de fondo del icono (móvil, opcional)',
                      defaultValue: '#fce4ec',
                      placeholder: '#fce4ec',
                      admin: {
                        description: 'Círculo detrás del icono en móvil. Ej: #fce4ec.',
                      },
                    }),
                  ],
                },
                {
                  name: 'socialButtons',
                  type: 'array',
                  dbName: 'ftd_soc',
                  label: 'Botones sociales',
                  maxRows: 3,
                  admin: {
                    description: 'Máximo 3. Cada uno funciona como botón con icono opcional.',
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/fields/dropArrayRowLabels#SocialRowLabel',
                    },
                  },
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: 'Icono',
                      defaultValue: 'none',
                      options: [
                        { label: 'Sin icono', value: 'none' },
                        { label: 'Icono Instagram', value: 'instagram' },
                        { label: 'Icono Facebook', value: 'facebook' },
                        { label: 'Icono YouTube', value: 'youtube' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Título',
                      admin: {
                        description:
                          'Texto accesible (aria-label). Si no hay icono, se muestra en el botón.',
                      },
                    },
                    {
                      name: 'link',
                      type: 'group',
                      admin: { hideGutter: true },
                      fields: dropLinkFields(),
                    },
                  ],
                },
                {
                  name: 'policyLinks',
                  type: 'array',
                  dbName: 'ftd_pol',
                  label: 'Enlaces de políticas',
                  maxRows: 4,
                  admin: {
                    description: 'Máximo 4 (privacidad, cookies, aviso legal, etc.).',
                    initCollapsed: true,
                    components: {
                      RowLabel: '@/fields/dropArrayRowLabels#PolicyRowLabel',
                    },
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'richText',
                      label: 'Título',
                      required: true,
                      editor: footerDropRichTextEditor(),
                    },
                    {
                      name: 'link',
                      type: 'group',
                      admin: { hideGutter: true },
                      fields: dropLinkFields(),
                    },
                  ],
                },
                {
                  name: 'footerText',
                  type: 'richText',
                  label: 'Texto final',
                  editor: footerDropRichTextEditor(),
                  admin: {
                    description: 'Copyright u otro texto al final del footer.',
                  },
                },
              ],
            },
            {
              label: 'Estilos',
              fields: [
                colorField({
                  name: 'backgroundColor',
                  label: 'Color de fondo del footer',
                  defaultValue: '#ffffff',
                  placeholder: '#ffffff',
                  admin: {
                    description: 'Hex, rgb, rgba o nombre CSS.',
                  },
                }),
                {
                  type: 'row',
                  fields: [
                    colorField({
                      name: 'textColor',
                      label: 'Color de texto principal',
                      defaultValue: '#101835',
                      width: '50%',
                      placeholder: '#101835',
                      admin: {
                        description: 'Enlaces de navegación y texto general.',
                      },
                    }),
                    colorField({
                      name: 'textColorSecondary',
                      label: 'Color de texto secundario',
                      defaultValue: '#a1004a',
                      width: '50%',
                      placeholder: '#a1004a',
                      admin: {
                        description: 'Enlaces de políticas y enlace de navegación activo.',
                      },
                    }),
                  ],
                },
                {
                  name: 'hideMobileIcons',
                  type: 'checkbox',
                  label: 'Ocultar iconos en dispositivo móvil',
                  defaultValue: false,
                  admin: {
                    description: 'Si está marcado, los iconos de los navlinks no se muestran en móvil.',
                  },
                },
              ],
            },
          ],
        },
      ],
      admin: {
        condition: (_, { footerType }) => footerType === 'footer_drop',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
