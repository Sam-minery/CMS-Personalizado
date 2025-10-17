import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { simpleLink } from '@/fields/simpleLink'
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
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
