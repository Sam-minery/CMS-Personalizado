'use client'

import React, { useCallback, useMemo } from 'react'
import type { TextareaFieldClientProps } from 'payload'
import { useField, FieldLabel } from '@payloadcms/ui'

import { sanitizeSVG } from '@/utilities/sanitizeHTML'

import './index.scss'

export const SvgCodeField: React.FC<TextareaFieldClientProps> = ({ field, path, readOnly }) => {
  const { label, required, admin } = field
  const fieldPath = path || field.name
  const { value, setValue, showError } = useField<string>({ path: fieldPath })
  const stringValue = typeof value === 'string' ? value : ''
  const sanitized = useMemo(() => sanitizeSVG(stringValue), [stringValue])
  const description = typeof admin?.description === 'string' ? admin.description : undefined
  const placeholder =
    typeof admin?.placeholder === 'string' ? admin.placeholder : '<svg viewBox="0 0 24 24">…</svg>'

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value)
    },
    [setValue],
  )

  return (
    <div className={`field-type svg-code-field${showError ? ' error' : ''}`}>
      <FieldLabel htmlFor={`field-${fieldPath}`} label={label} required={required} />
      <div className="svg-code-field__body">
        <div
          className={`svg-code-field__preview${sanitized ? '' : ' svg-code-field__preview--empty'}`}
          aria-hidden={!sanitized}
        >
          {sanitized ? (
            <span
              className="svg-code-field__preview-inner"
              dangerouslySetInnerHTML={{ __html: sanitized }}
            />
          ) : (
            <span className="svg-code-field__preview-placeholder">SVG</span>
          )}
        </div>
        <textarea
          id={`field-${fieldPath}`}
          className="textarea svg-code-field__textarea"
          value={stringValue}
          onChange={handleChange}
          readOnly={Boolean(readOnly)}
          placeholder={placeholder}
          rows={4}
        />
      </div>
      {description ? <div className="field-description">{description}</div> : null}
    </div>
  )
}
