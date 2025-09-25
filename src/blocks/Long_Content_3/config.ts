import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const LongContent3: Block = {
  slug: 'longContent3',
  interfaceName: 'LongContent3Block',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Short heading goes here',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Content',
      required: true,
    },
    {
      name: 'video',
      type: 'text',
      required: true,
      label: 'Video URL',
      admin: {
        description: 'URL del video (ej: https://www.youtube.com/embed/VIDEO_ID)',
        placeholder: 'https://www.youtube.com/embed/VIDEO_ID',
      },
      defaultValue: 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
    },
    {
      name: 'image',
      type: 'group',
      fields: [
        {
          name: 'src',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          defaultValue: 'Video thumbnail',
        },
      ],
    },
  ],
  labels: {
    plural: 'Long Content 3',
    singular: 'Long Content 3',
  },
}
