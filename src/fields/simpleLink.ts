import type { Field, GroupField, TextFieldSingleValidation } from 'payload'

import deepMerge from '@/utilities/deepMerge'
import { validateURLForCMS } from '@/utilities/validateURL'

type SimpleLinkType = (options?: {
  overrides?: Partial<GroupField>
}) => Field

export const simpleLink: SimpleLinkType = ({ overrides = {} } = {}) => {
  const linkResult: GroupField = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
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
          description: 'Enter a valid URL (http://, https://, or relative path like /about). Dangerous schemes like javascript: are not allowed.',
        },
        label: 'Custom URL',
        required: true,
        validate: ((value) => {
          // Validación opcional: solo muestra advertencia, no bloquea el guardado
          const validation = validateURLForCMS(value)
          if (validation === true) {
            return true
          }
          return validation
        }) as TextFieldSingleValidation,
      },
    ],
  }

  return deepMerge(linkResult, overrides)
}
