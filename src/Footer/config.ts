import type { Field, GlobalConfig, GroupField } from 'payload'

import {
  AlignFeature,
  BlockquoteFeature,
  ChecklistFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  IndentFeature,
  InlineToolbarFeature,
  lexicalEditor,
  OrderedListFeature,
  ParagraphFeature,
  SubscriptFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'
import { simpleLink } from '@/fields/simpleLink'
import { revalidateFooter } from './hooks/revalidateFooter'

const footerSendaRichTextEditor = () =>
  lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      ParagraphFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      AlignFeature(),
      IndentFeature(),
      UnorderedListFeature(),
      OrderedListFeature(),
      ChecklistFeature(),
      BlockquoteFeature(),
      HorizontalRuleFeature(),
      SubscriptFeature(),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ],
  })

/** Grupo link con opción ancla (reference | custom | anchor) para Footer SENDA */
function footerSendaLinkGroup(): GroupField {
  type Sibling = { type?: string }
  return {
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
              condition: (_: unknown, siblingData: Sibling) => siblingData?.type !== 'anchor',
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
        admin: { condition: (_: unknown, siblingData: Sibling) => siblingData?.type === 'reference' },
        label: 'Document to link to',
        required: true,
      },
      {
        name: 'url',
        type: 'text',
        admin: {
          condition: (_: unknown, siblingData: Sibling) => siblingData?.type === 'custom',
          description: 'URL (http://, https:// o ruta relativa).',
        },
        label: 'Custom URL',
        required: true,
      },
      {
        name: 'anchorId',
        type: 'text',
        admin: {
          condition: (_: unknown, siblingData: Sibling) => siblingData?.type === 'anchor',
          description: 'ID del bloque de destino. Debe coincidir con el "ID ancla" del bloque.',
        },
        label: 'ID ancla',
        required: true,
      },
    ],
  }
}

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
          label: 'Footer SENDA',
          value: 'footerSenda',
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
      name: 'footerSendaConfig',
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
              admin: { description: 'Sube la imagen del logo' },
            },
            footerSendaLinkGroup(),
          ],
        },
        {
          name: 'columnLinks',
          type: 'array',
          label: 'Columnas de enlaces',
          fields: [
            {
              name: 'links',
              type: 'array',
              label: 'Enlaces',
              fields: [
                {
                  name: 'titleRichText',
                  type: 'richText',
                  editor: footerSendaRichTextEditor(),
                  label: 'Título (RichText)',
                  required: true,
                },
                footerSendaLinkGroup(),
              ],
            },
          ],
        },
        {
          name: 'socialMediaLinks',
          type: 'array',
          label: 'Redes sociales',
          fields: [
            {
              name: 'titleRichText',
              type: 'richText',
              editor: footerSendaRichTextEditor(),
              label: 'Título (RichText)',
            },
            footerSendaLinkGroup(),
            {
              name: 'platform',
              type: 'select',
              label: 'Icono por defecto',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'YouTube', value: 'youtube' },
              ],
            },
            {
              name: 'iconSVG',
              type: 'textarea',
              label: 'Icono SVG personalizado',
              admin: { description: 'Código SVG. Si se rellena, se usa en lugar del icono por defecto.' },
            },
          ],
        },
        {
          name: 'footerText',
          type: 'richText',
          editor: footerSendaRichTextEditor(),
          label: 'Texto del footer (RichText)',
        },
        {
          name: 'footerLinks',
          type: 'array',
          label: 'Enlaces del footer',
          fields: [
            {
              name: 'titleRichText',
              type: 'richText',
              editor: footerSendaRichTextEditor(),
              label: 'Título (RichText)',
              required: true,
            },
            footerSendaLinkGroup(),
          ],
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Color de fondo del footer',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Color del texto principal',
        },
        {
          name: 'boldTextColor',
          type: 'text',
          label: 'Color del texto en negrita',
        },
        {
          name: 'fontFamily',
          type: 'select',
          label: 'Tipografía',
          admin: { condition: (_, siblingData) => !siblingData?.useCustomFont },
          options: [
            { label: 'Por defecto', value: 'default' },
            { label: 'Arial', value: 'Arial, sans-serif' },
            { label: 'Times New Roman', value: '"Times New Roman", serif' },
            { label: 'Georgia', value: 'Georgia, serif' },
            { label: 'Verdana', value: 'Verdana, sans-serif' },
            { label: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
            { label: 'Courier New', value: '"Courier New", monospace' },
            { label: 'Roboto', value: '"Roboto", sans-serif' },
            { label: 'Open Sans', value: '"Open Sans", sans-serif' },
            { label: 'Lato', value: '"Lato", sans-serif' },
            { label: 'Montserrat', value: '"Montserrat", sans-serif' },
            { label: 'Playfair Display', value: '"Playfair Display", serif' },
            { label: 'Inter', value: '"Inter", sans-serif' },
            { label: 'Poppins', value: '"Poppins", sans-serif' },
            { label: 'Raleway', value: '"Raleway", sans-serif' },
          ],
          defaultValue: 'default',
        },
        {
          name: 'useCustomFont',
          type: 'checkbox',
          label: 'Usar fuente personalizada',
          defaultValue: false,
        },
        {
          name: 'customFontFile',
          type: 'upload',
          relationTo: 'fonts',
          label: 'Archivo de fuente',
          admin: { condition: (_, siblingData) => siblingData?.useCustomFont === true },
        },
        {
          name: 'customFontName',
          type: 'text',
          label: 'Nombre de la fuente personalizada',
          admin: { condition: (_, siblingData) => siblingData?.useCustomFont === true },
        },
      ],
      admin: {
        condition: (_, { footerType }) => footerType === 'footerSenda',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
