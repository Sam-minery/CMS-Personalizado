'use client'

import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const CategoryRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ categoryLabel?: string | null }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const name = data?.data?.categoryLabel?.trim()
  const label = name ? `Categoría ${index}: ${name}` : `Categoría ${index || ''}`.trim()

  return <div>{label}</div>
}

export const ButtonRowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<{ link?: { label?: string | null } }>()
  const index = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const name = data?.data?.link?.label?.trim()
  const label = name ? `Botón ${index}: ${name}` : `Botón ${index || ''}`.trim()

  return <div>{label}</div>
}
