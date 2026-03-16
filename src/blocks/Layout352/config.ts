import type { Block } from 'payload'

import { simpleLink } from '@/fields/simpleLink'
import { appearanceOptions } from '@/fields/link'

export const Layout352Block: Block = {
  slug: 'layout352',
  dbName: 'l352',
  interfaceName: 'Layout352Block',
  fields: [
    {
      name: 'featureContent',
      type: 'group',
      fields: [
        {
          name: 'tagline',
          type: 'text',
          required: false,
          defaultValue: 'Tagline',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Medium length section heading goes here',
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
        },
        {
          name: 'buttons',
          type: 'array',
          required: false,
          maxRows: 2,
          dbName: 'fc_btns',
          fields: [
            simpleLink({
              overrides: {
                name: 'link',
                admin: {
                  hideGutter: true,
                  description: 'Configure el enlace para este botón',
                },
                fields: [
                  {
                    type: 'row',
                    fields: [
                      {
                        name: 'type',
                        type: 'radio',
                        admin: {
                          layout: 'horizontal',
                          width: '50%',
                        },
                        defaultValue: 'reference',
                        options: [
                          {
                            label: 'Internal link',
                            value: 'reference',
                          },
                          {
                            label: 'Custom URL',
                            value: 'custom',
                          },
                        ],
                      },
                      {
                        name: 'newTab',
                        type: 'checkbox',
                        admin: {
                          style: {
                            alignSelf: 'flex-end',
                          },
                          width: '50%',
                        },
                        label: 'Open in new tab',
                      },
                    ],
                  },
                  {
                    name: 'reference',
                    type: 'relationship',
                    admin: {
                      condition: (_, siblingData) => siblingData?.type === 'reference',
                    },
                    label: 'Document to link to',
                    relationTo: ['pages', 'posts'],
                    required: true,
                  },
                  {
                    name: 'url',
                    type: 'text',
                    admin: {
                      condition: (_, siblingData) => siblingData?.type === 'custom',
                    },
                    label: 'Custom URL',
                    required: true,
                  },
                  {
                    name: 'label',
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                    label: 'Label',
                    required: false,
                  },
                  {
                    name: 'appearance',
                    type: 'select',
                    dbName: 'app',
                    admin: {
                      description: 'Choose how the link should be rendered.',
                      width: '50%',
                    },
                    defaultValue: 'default',
                    options: [appearanceOptions.default, appearanceOptions.outline],
                  },
                ],
              },
            }),
          ],
        },
      ],
    },
    {
      name: 'timelineItems',
      type: 'array',
      required: false,
      maxRows: 5,
      fields: [
        {
          name: 'date',
          type: 'text',
          required: true,
          defaultValue: 'Date',
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          name: 'image',
          type: 'group',
          fields: [
            {
              name: 'useMedia',
              type: 'checkbox',
              label: 'Usar imagen subida',
              defaultValue: false,
            },
            {
              name: 'mediaImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === true,
                description: 'Seleccione una imagen existente o suba una nueva',
              },
            },
            {
              name: 'src',
              type: 'text',
              defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
              admin: {
                condition: (_, siblingData) => siblingData?.useMedia === false,
                description: 'Ingrese la URL de la imagen',
              },
            },
            {
              name: 'alt',
              type: 'text',
              defaultValue: 'Relume placeholder image',
              admin: {
                description: 'Texto alternativo para accesibilidad',
              },
            },
          ],
        },
        {
          name: 'timelineButtons',
          type: 'array',
          required: false,
          maxRows: 2,
          dbName: 't_btns',
          fields: [
            simpleLink({
              overrides: {
                name: 'link',
                admin: {
                  hideGutter: true,
                  description: 'Configure el enlace para este botón',
                },
                fields: [
                  {
                    type: 'row',
                    fields: [
                      {
                        name: 'type',
                        type: 'radio',
                        admin: {
                          layout: 'horizontal',
                          width: '50%',
                        },
                        defaultValue: 'reference',
                        options: [
                          {
                            label: 'Internal link',
                            value: 'reference',
                          },
                          {
                            label: 'Custom URL',
                            value: 'custom',
                          },
                        ],
                      },
                      {
                        name: 'newTab',
                        type: 'checkbox',
                        admin: {
                          style: {
                            alignSelf: 'flex-end',
                          },
                          width: '50%',
                        },
                        label: 'Open in new tab',
                      },
                    ],
                  },
                  {
                    name: 'reference',
                    type: 'relationship',
                    admin: {
                      condition: (_, siblingData) => siblingData?.type === 'reference',
                    },
                    label: 'Document to link to',
                    relationTo: ['pages', 'posts'],
                    required: true,
                  },
                  {
                    name: 'url',
                    type: 'text',
                    admin: {
                      condition: (_, siblingData) => siblingData?.type === 'custom',
                    },
                    label: 'Custom URL',
                    required: true,
                  },
                  {
                    name: 'label',
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                    label: 'Label',
                    required: false,
                  },
                  {
                    name: 'appearance',
                    type: 'select',
                    dbName: 'app',
                    admin: {
                      description: 'Choose how the link should be rendered.',
                      width: '50%',
                    },
                    defaultValue: 'default',
                    options: [appearanceOptions.default, appearanceOptions.outline],
                  },
                ],
              },
            }),
          ],
        },
      ],
      defaultValue: [
        {
          date: 'Date',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
            alt: 'Relume placeholder image 1',
          },
          timelineButtons: [
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
          ],
        },
        {
          date: 'Date',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
            alt: 'Relume placeholder image 2',
          },
          timelineButtons: [
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
          ],
        },
        {
          date: 'Date',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
            alt: 'Relume placeholder image 3',
          },
          timelineButtons: [
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
          ],
        },
        {
          date: 'Date',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
            alt: 'Relume placeholder image 4',
          },
          timelineButtons: [
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
          ],
        },
        {
          date: 'Date',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: {
            useMedia: false,
            src: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
            alt: 'Relume placeholder image 5',
          },
          timelineButtons: [
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
            {
              link: {
                type: 'custom',
                url: '#',
                label: 'Button',
                appearance: 'default',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'bottomContent',
      type: 'group',
      fields: [
        {
          name: 'tagline',
          type: 'text',
          required: false,
          defaultValue: 'Tagline',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Medium length section heading goes here',
        },
        {
          name: 'description',
          type: 'text',
          required: false,
          defaultValue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
        },
        {
          name: 'buttons',
          type: 'array',
          required: false,
          maxRows: 2,
          dbName: 'bc_btns',
          fields: [
            simpleLink({
              overrides: {
                name: 'link',
                admin: {
                  hideGutter: true,
                  description: 'Configure el enlace para este botón',
                },
                fields: [
                  {
                    type: 'row',
                    fields: [
                      {
                        name: 'type',
                        type: 'radio',
                        admin: {
                          layout: 'horizontal',
                          width: '50%',
                        },
                        defaultValue: 'reference',
                        options: [
                          {
                            label: 'Internal link',
                            value: 'reference',
                          },
                          {
                            label: 'Custom URL',
                            value: 'custom',
                          },
                        ],
                      },
                      {
                        name: 'newTab',
                        type: 'checkbox',
                        admin: {
                          style: {
                            alignSelf: 'flex-end',
                          },
                          width: '50%',
                        },
                        label: 'Open in new tab',
                      },
                    ],
                  },
                  {
                    name: 'reference',
                    type: 'relationship',
                    admin: {
                      condition: (_, siblingData) => siblingData?.type === 'reference',
                    },
                    label: 'Document to link to',
                    relationTo: ['pages', 'posts'],
                    required: true,
                  },
                  {
                    name: 'url',
                    type: 'text',
                    admin: {
                      condition: (_, siblingData) => siblingData?.type === 'custom',
                    },
                    label: 'Custom URL',
                    required: true,
                  },
                  {
                    name: 'label',
                    type: 'text',
                    admin: {
                      width: '50%',
                    },
                    label: 'Label',
                    required: false,
                  },
                  {
                    name: 'appearance',
                    type: 'select',
                    dbName: 'app',
                    admin: {
                      description: 'Choose how the link should be rendered.',
                      width: '50%',
                    },
                    defaultValue: 'default',
                    options: [appearanceOptions.default, appearanceOptions.outline],
                  },
                ],
              },
            }),
          ],
        },
      ],
    },
  ],
}

