'use client'

import React, { useCallback, useMemo } from 'react'
import type { TextFieldClientProps } from 'payload'
import { useField, TextInput, FieldLabel } from '@payloadcms/ui'

import './index.scss'

const HEX_FULL = /^#([0-9a-fA-F]{6})$/
const HEX_SHORT = /^#([0-9a-fA-F]{3})$/

function expandHex(value: string): string | null {
  const trimmed = value.trim()
  const full = trimmed.match(HEX_FULL)
  if (full) return `#${full[1].toLowerCase()}`
  const short = trimmed.match(HEX_SHORT)
  if (!short) return null
  const [r, g, b] = short[1].split('')
  return `#${r}${r}${g}${g}${b}${b}`.toLowerCase()
}

/** Evita inyectar CSS peligroso en el swatch; el texto sigue siendo la fuente de verdad. */
function isLikelyCssColor(value: string): boolean {
  const v = value.trim()
  if (!v || v.length > 80) return false
  if (/[;{}]|url\s*\(|javascript|expression|behavior/i.test(v)) return false
  return true
}

export const ColorField: React.FC<TextFieldClientProps> = ({ field, path, readOnly }) => {
  const { label, required, admin } = field
  const fieldPath = path || field.name
  const { value, setValue, showError } = useField<string>({ path: fieldPath })
  const stringValue = typeof value === 'string' ? value : ''
  const hexValue = useMemo(() => expandHex(stringValue), [stringValue])
  const pickerEnabled = !readOnly && (hexValue !== null || stringValue.trim() === '')
  const swatchCss = hexValue ?? (isLikelyCssColor(stringValue) ? stringValue.trim() : undefined)
  const description = typeof admin?.description === 'string' ? admin.description : undefined
  const placeholder =
    typeof admin?.placeholder === 'string' ? admin.placeholder : '#000000'

  const handlePickerChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
    [setValue],
  )

  return (
    <div className={`field-type color-field${showError ? ' error' : ''}`}>
      <FieldLabel htmlFor={`field-${fieldPath}`} label={label} required={required} />
      <div className="color-field__row">
        <label
          className={`color-field__swatch${pickerEnabled ? '' : ' color-field__swatch--disabled'}`}
          style={swatchCss ? { background: swatchCss } : undefined}
          title={pickerEnabled ? 'Elegir color' : 'Introduce un hex (#rrggbb) para usar el selector'}
        >
          {pickerEnabled ? (
            <input
              type="color"
              value={hexValue ?? '#000000'}
              onChange={handlePickerChange}
              aria-label={typeof label === 'string' ? label : 'Color'}
            />
          ) : null}
        </label>
        <div className="color-field__text">
          <TextInput
            value={stringValue}
            onChange={setValue}
            path={fieldPath}
            readOnly={Boolean(readOnly)}
            placeholder={placeholder}
          />
        </div>
      </div>
      {description ? <div className="field-description">{description}</div> : null}
    </div>
  )
}
