import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { LeadsFormulario } from '@/payload-types'
import { validateFormData } from '@/utilities/sanitizeHTML'

const ATTRIBUTION_KEYS = [
  'campaign_name',
  'campaign_id',
  'utm_content',
  'utm_source',
  'gclid',
  'fbclid',
] as const

function asOptionalString(value: unknown): string | undefined {
  if (value == null) return undefined
  if (typeof value !== 'string') return undefined
  const t = value.trim()
  return t === '' ? undefined : t
}

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()

    const pagePath = asOptionalString(body.pagePath)
    if (!pagePath) {
      return NextResponse.json({ error: 'pagePath is required' }, { status: 400 })
    }

    const attribution: Record<string, string> = {}
    for (const key of ATTRIBUTION_KEYS) {
      const v = asOptionalString(body[key])
      if (v !== undefined) attribution[key] = v
    }

    const stringsToValidate = [pagePath, ...Object.values(attribution)]
    for (const s of stringsToValidate) {
      const validation = validateFormData(s)
      if (validation !== true) {
        return NextResponse.json({ error: validation }, { status: 400 })
      }
    }

    const doc = (await payload.create({
      collection: 'leads-formulario',
      data: {
        pagePath,
        status: 'new',
        campaign_name: attribution.campaign_name ?? '',
        campaign_id: attribution.campaign_id ?? '',
        utm_content: attribution.utm_content ?? '',
        utm_source: attribution.utm_source ?? '',
        gclid: attribution.gclid ?? '',
        fbclid: attribution.fbclid ?? '',
      },
    })) as LeadsFormulario

    return NextResponse.json(
      {
        success: true,
        id: doc.id,
        leadRef: doc.leadRef,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error creating leads-formulario:', error)

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
