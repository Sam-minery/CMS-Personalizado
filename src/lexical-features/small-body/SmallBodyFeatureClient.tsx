'use client'

import { $setBlocksType } from '@lexical/selection'
import { $getSelection, $isRangeSelection } from 'lexical'
import {
  createClientFeature,
  slashMenuBasicGroupWithItems,
  toolbarTextDropdownGroupWithItems,
} from '@payloadcms/richtext-lexical/client'

import { $createSmallBodyNode, $isSmallBodyNode, SmallBodyNode } from './SmallBodyNode'

function SmallBodyIcon() {
  return (
    <svg
      aria-hidden
      className="icon"
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5h6M3 8h8M3 11.5h5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <path
        d="M12 10v4.5M10.25 12.25h3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.1"
      />
    </svg>
  )
}

const toolbarGroups = [
  toolbarTextDropdownGroupWithItems([
    {
      ChildComponent: SmallBodyIcon,
      isActive: ({ selection }) => {
        if (!$isRangeSelection(selection)) return false
        for (const node of selection.getNodes()) {
          if (!$isSmallBodyNode(node) && !$isSmallBodyNode(node.getParent())) {
            return false
          }
        }
        return true
      },
      key: 'small-body',
      label: () => 'Cuerpo pequeño',
      onSelect: ({ editor }) => {
        editor.update(() => {
          const selection = $getSelection()
          $setBlocksType(selection, () => $createSmallBodyNode())
        })
      },
      order: 15,
    },
  ]),
]

export const SmallBodyFeatureClient = createClientFeature({
  nodes: [SmallBodyNode],
  slashMenu: {
    groups: [
      slashMenuBasicGroupWithItems([
        {
          Icon: SmallBodyIcon,
          key: 'small-body',
          keywords: ['small', 'body', 'cuerpo', 'pequeño'],
          label: () => 'Cuerpo pequeño',
          onSelect: ({ editor }) => {
            editor.update(() => {
              const selection = $getSelection()
              $setBlocksType(selection, () => $createSmallBodyNode())
            })
          },
        },
      ]),
    ],
  },
  toolbarFixed: {
    groups: toolbarGroups,
  },
  toolbarInline: {
    groups: toolbarGroups,
  },
})
