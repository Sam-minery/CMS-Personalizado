import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { LeadsFormulario } from '@/payload-types'
import {
  consumeLeadsFormularioSubmitRateLimit,
  getClientIpFromRequest,
} from '@/utilities/leadsFormularioSubmitRateLimit'
import { RECAPTCHA_ACTION_LEADS_FORMULARIO } from '@/utilities/recaptchaEnterpriseConstants'
import { verifyRecaptchaEnterpriseAssessment } from '@/utilities/recaptchaEnterpriseVerify'
import { validateFormData } from '@/utilities/sanitizeHTML'

const ATTRIBUTION_KEYS = [
  'campaign_name',
  'campaign_id',
  'utm_content',
  'utm_source',
  'gclid',
  'fbclid',
] as const

const ALLOWED_BODY_KEYS = new Set<string>(['pagePath', 'recaptchaToken', ...ATTRIBUTION_KEYS])

const MAX_PAGE_PATH_LEN = 512
const MAX_ATTR_LEN = 2048

function asOptionalString(value: unknown): string | undefined {
  if (value == null) return undefined
  if (typeof value !== 'string') return undefined
  const t = value.trim()
  return t === '' ? undefined : t
}

function clamp(s: string, max: number): string {
  return s.length <= max ? s : s.slice(0, max)
}

export async function POST(request: NextRequest) {
  const ip = getClientIpFromRequest(request)
  const limited = consumeLeadsFormularioSubmitRateLimit(ip)
  if (!limited.ok) {
    return NextResponse.json(
      { error: 'Too many requests', retryAfterSec: limited.retryAfterSec },
      { status: 429, headers: { 'Retry-After': String(limited.retryAfterSec) } },
    )
  }

  try {
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json({ error: 'Body must be a JSON object' }, { status: 400 })
    }

    const record = body as Record<string, unknown>
    for (const key of Object.keys(record)) {
      if (!ALLOWED_BODY_KEYS.has(key)) {
        return NextResponse.json({ error: `Unexpected field: ${key}` }, { status: 400 })
      }
    }

    const pagePathRaw = asOptionalString(record.pagePath)
    if (!pagePathRaw) {
      return NextResponse.json({ error: 'pagePath is required' }, { status: 400 })
    }

    const pagePath = clamp(pagePathRaw, MAX_PAGE_PATH_LEN)
    if (!pagePath.startsWith('/')) {
      return NextResponse.json({ error: 'pagePath must start with /' }, { status: 400 })
    }

    const attribution: Record<string, string> = {}
    for (const key of ATTRIBUTION_KEYS) {
      const v = asOptionalString(record[key])
      if (v !== undefined) {
        attribution[key] = clamp(v, MAX_ATTR_LEN)
      }
    }

    const stringsToValidate = [pagePath, ...Object.values(attribution)]
    for (const s of stringsToValidate) {
      const validation = validateFormData(s)
      if (validation !== true) {
        return NextResponse.json({ error: validation }, { status: 400 })
      }
    }

    const recaptchaTokenRaw = asOptionalString(record.recaptchaToken)
    if (!recaptchaTokenRaw) {
      return NextResponse.json({ error: 'recaptchaToken is required' }, { status: 400 })
    }

    const recaptcha = await verifyRecaptchaEnterpriseAssessment({
      token: recaptchaTokenRaw,
      expectedAction: RECAPTCHA_ACTION_LEADS_FORMULARIO,
      userIpAddress: ip,
    })
    if (!recaptcha.ok) {
      return NextResponse.json({ error: recaptcha.error }, { status: recaptcha.status })
    }

    const payload = await getPayload({ config })

    const doc = (await payload.create({
      collection: 'leads-formulario',
      overrideAccess: true,
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
