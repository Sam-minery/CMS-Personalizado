import type { Block } from 'payload'

export const Layout42Block: Block = {
  slug: 'layout42',
  interfaceName: 'Layout42Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Long heading is what you see here in this feature section',
    },
    {
      name: 'description',
      type: 'text',
      required: false,
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    },
  ],
}

