import type { Block } from 'payload'

// Imports removed as they are not used in the config

export const Team2: Block = {
  slug: 'team2',
  labels: {
    singular: 'Team 2',
    plural: 'Team 2',
  },
  fields: [
    {
      name: 'tagline',
      type: 'text',
      label: 'Tagline',
      defaultValue: 'Tagline',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Our team',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'teamMembers',
      type: 'array',
      label: 'Team Members',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Team Member Image',
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          defaultValue: 'Full name',
        },
        {
          name: 'jobTitle',
          type: 'text',
          label: 'Job Title',
          defaultValue: 'Job title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Links',
          minRows: 0,
          maxRows: 3,
          fields: [
            {
              name: 'href',
              type: 'text',
              label: 'Link URL',
              defaultValue: '#',
            },
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'Dribbble', value: 'dribbble' },
              ],
              defaultValue: 'linkedin',
            },
          ],
        },
      ],
      defaultValue: [
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
        {
          name: 'Full name',
          jobTitle: 'Job title',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
          socialLinks: [
            { href: '#', platform: 'linkedin' },
            { href: '#', platform: 'twitter' },
            { href: '#', platform: 'dribbble' },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer Section',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Footer Heading',
          defaultValue: "We're hiring!",
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Footer Description',
          defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'button',
          type: 'group',
          label: 'Button',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Open positions',
            },
            {
              name: 'variant',
              type: 'select',
              label: 'Button Variant',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
              ],
              defaultValue: 'secondary',
            },
            {
              name: 'href',
              type: 'text',
              label: 'Button URL',
              defaultValue: '#',
            },
          ],
        },
      ],
    },
  ],
}
