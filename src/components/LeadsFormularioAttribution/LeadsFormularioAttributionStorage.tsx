'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

/** Misma lista que en la colección / API; se persiste para el envío final del Multi_Form_SENDA. */
export const LEADS_FORMULARIO_ATTRIBUTION_KEYS = [
  'campaign_name',
  'campaign_id',
  'utm_content',
  'utm_source',
  'gclid',
  'fbclid',
] as const

export type LeadsFormularioAttributionKey = (typeof LEADS_FORMULARIO_ATTRIBUTION_KEYS)[number]

export const LEADS_FORMULARIO_ATTRIBUTION_STORAGE_KEY = 'senda:leads-formulario-attribution'

const STORAGE_VERSION = 1 as const
const MAX_VALUE_LEN = 2048
/** Tiempo máximo (ms) que se conservan datos en localStorage desde la última actualización (ventana deslizante). */
const ATTRIBUTION_TTL_MS = 30 * 24 * 60 * 60 * 1000

type StoredEnvelope = {
  _v: typeof STORAGE_VERSION
  updatedAt: number
} & Partial<Record<LeadsFormularioAttributionKey, string>>

function sanitizeAttributionValue(raw: string): string {
  const t = raw.trim().slice(0, MAX_VALUE_LEN)
  // Quitar caracteres de control que suelen colarse en URLs raras o copiar/pegar
  return t.replace(/[\u0000-\u001F\u007F]/g, '')
}

function isEnvelope(o: Record<string, unknown>): o is StoredEnvelope {
  return o._v === STORAGE_VERSION && typeof o.updatedAt === 'number'
}

function parseFieldsOnly(parsed: Record<string, unknown>): Partial<Record<LeadsFormularioAttributionKey, string>> {
  const out: Partial<Record<LeadsFormularioAttributionKey, string>> = {}
  for (const key of LEADS_FORMULARIO_ATTRIBUTION_KEYS) {
    const v = parsed[key]
    if (typeof v === 'string' && v.trim() !== '') {
      out[key] = sanitizeAttributionValue(v)
    }
  }
  return out
}

function readStoredEnvelope(): StoredEnvelope | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(LEADS_FORMULARIO_ATTRIBUTION_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null
    const rec = parsed as Record<string, unknown>

    if (isEnvelope(rec)) {
      if (Number.isFinite(rec.updatedAt) && Date.now() - rec.updatedAt > ATTRIBUTION_TTL_MS) {
        try {
          window.localStorage.removeItem(LEADS_FORMULARIO_ATTRIBUTION_STORAGE_KEY)
        } catch {
          /* ignore */
        }
        return null
      }
      return rec
    }

    // Formato antiguo (solo campos planos): migrar a sobre en el próximo write
    const fields = parseFieldsOnly(rec)
    if (Object.keys(fields).length === 0) return null
    return {
      _v: STORAGE_VERSION,
      updatedAt: Date.now(),
      ...fields,
    }
  } catch {
    return null
  }
}

function readStoredFields(): Partial<Record<LeadsFormularioAttributionKey, string>> {
  const env = readStoredEnvelope()
  if (!env) return {}
  const out: Partial<Record<LeadsFormularioAttributionKey, string>> = {}
  for (const key of LEADS_FORMULARIO_ATTRIBUTION_KEYS) {
    const v = env[key]
    if (typeof v === 'string' && v.trim() !== '') {
      out[key] = v
    }
  }
  return out
}

function writeStored(fields: Partial<Record<LeadsFormularioAttributionKey, string>>) {
  if (typeof window === 'undefined') return
  try {
    const envelope: StoredEnvelope = {
      _v: STORAGE_VERSION,
      updatedAt: Date.now(),
      ...fields,
    }
    window.localStorage.setItem(LEADS_FORMULARIO_ATTRIBUTION_STORAGE_KEY, JSON.stringify(envelope))
  } catch {
    // quota exceeded, private mode, etc.
  }
}

/** Para leer desde el formulario u otros client components antes del POST a `/api/leads-formulario-submit`. */
export function readLeadsFormularioAttributionFromStorage(): Partial<
  Record<LeadsFormularioAttributionKey, string>
> {
  try {
    return readStoredFields()
  } catch {
    return {}
  }
}

/**
 * En cada navegación (incl. client-side): fusiona params de la URL sobre lo ya guardado.
 * Si un param no viene en la URL, se conserva el valor previo en storage.
 * No hay "duplicados" de clave: un solo objeto JSON por clave de storage; la fusión pisa solo claves presentes en la URL.
 */
export function LeadsFormularioAttributionStorage() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    try {
      const fromUrl: Partial<Record<LeadsFormularioAttributionKey, string>> = {}
      for (const key of LEADS_FORMULARIO_ATTRIBUTION_KEYS) {
        const v = searchParams.get(key)
        if (v != null && v.trim() !== '') {
          fromUrl[key] = sanitizeAttributionValue(v)
        }
      }

      if (Object.keys(fromUrl).length === 0) return

      const prev = readStoredFields()
      writeStored({ ...prev, ...fromUrl })
    } catch {
      // no bloquear render por fallos de storage / URL
    }
  }, [pathname, searchParams])

  return null
}
