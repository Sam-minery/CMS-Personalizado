'use client'

import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

function extractLexicalText(node: unknown): string {
  if (!node || typeof node !== 'object') return ''
  const current = node as { text?: unknown; children?: unknown[] }
  if (typeof current.text === 'string') return current.text
  if (!Array.isArray(current.children)) return ''
  return current.children
    .map(extractLexicalText)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{
    content?: { root?: unknown }
  }>()

  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const text = extractLexicalText(data?.data?.content?.root)
  const preview = text.length > 42 ? `${text.slice(0, 42)}…` : text
  const label = preview ? `Elemento ${index}: ${preview}` : `Elemento ${index || ''}`.trim()

  return <div>{label}</div>
}
