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

function preview(text: string, max = 42): string {
  return text.length > max ? `${text.slice(0, max)}…` : text
}

export const StepRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{
    tag?: { label?: string | null }
    content?: { root?: unknown }
  }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const tag = data?.data?.tag?.label?.trim()
  const text = preview(extractLexicalText(data?.data?.content?.root))
  const name = tag || text
  const label = name ? `Paso ${index}: ${name}` : `Paso ${index || ''}`.trim()
  return <div>{label}</div>
}

export const ButtonRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ link?: { label?: string | null } }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const name = data?.data?.link?.label?.trim()
  const label = name ? `Botón ${index}: ${name}` : `Botón ${index || ''}`.trim()
  return <div>{label}</div>
}

export const PrestacionRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ content?: { root?: unknown } }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const text = preview(extractLexicalText(data?.data?.content?.root))
  const label = text ? `Prestación ${index}: ${text}` : `Prestación ${index || ''}`.trim()
  return <div>{label}</div>
}

export const MemberRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ content?: { root?: unknown } }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const text = preview(extractLexicalText(data?.data?.content?.root))
  const label = text ? `Miembro ${index}: ${text}` : `Miembro ${index || ''}`.trim()
  return <div>{label}</div>
}

export const FeatureRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ label?: string | null }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const name = data?.data?.label?.trim()
  const label = name ? `Ventaja ${index}: ${name}` : `Ventaja ${index || ''}`.trim()
  return <div>{label}</div>
}

export const QrRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ alt?: string | null }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const name = data?.data?.alt?.trim()
  const label = name ? `QR ${index}: ${name}` : `QR ${index || ''}`.trim()
  return <div>{label}</div>
}

export const StoreButtonRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ store?: 'appStore' | 'googlePlay' | null }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const store =
    data?.data?.store === 'appStore'
      ? 'App Store'
      : data?.data?.store === 'googlePlay'
        ? 'Google Play'
        : ''
  const label = store ? `Botón ${index}: ${store}` : `Botón ${index || ''}`.trim()
  return <div>{label}</div>
}

export const QuestionRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ questionRichText?: { root?: unknown } }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const text = preview(extractLexicalText(data?.data?.questionRichText?.root))
  const label = text ? `Pregunta ${index}: ${text}` : `Pregunta ${index || ''}`.trim()
  return <div>{label}</div>
}
