import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { LeadsCta } from '@/payload-types'
import {
  consumeLeadsCtaSubmitRateLimit,
  getClientIpFromRequest,
} from '@/utilities/leadsFormularioSubmitRateLimit'
import { validateFormData } from '@/utilities/sanitizeHTML'

const ALLOWED_BODY_KEYS = new Set<string>(['fullName', 'phone'])

const MAX_FULL_NAME_LEN = 256
const MAX_PHONE_LEN = 64

function asString(value: unknown): string | undefined {
  if (value == null) return undefined
  if (typeof value !== 'string') return undefined
  return value
}

function clamp(s: string, max: number): string {
  return s.length <= max ? s : s.slice(0, max)
}

/** Al menos 6 dígitos, permitiendo separadores habituales. */
function looksLikePhone(value: string): boolean {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 6 && digits.length <= 20
}

export async function POST(request: NextRequest) {
  const ip = getClientIpFromRequest(request)
  const limited = consumeLeadsCtaSubmitRateLimit(ip)
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

    const fullNameRaw = asString(record.fullName)?.trim() ?? ''
    const phoneRaw = asString(record.phone)?.trim() ?? ''

    if (!fullNameRaw) {
      return NextResponse.json({ error: 'fullName is required' }, { status: 400 })
    }
    if (!phoneRaw) {
      return NextResponse.json({ error: 'phone is required' }, { status: 400 })
    }

    const fullName = clamp(fullNameRaw, MAX_FULL_NAME_LEN)
    const phone = clamp(phoneRaw, MAX_PHONE_LEN)

    if (!looksLikePhone(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    for (const s of [fullName, phone]) {
      const validation = validateFormData(s)
      if (validation !== true) {
        return NextResponse.json({ error: validation }, { status: 400 })
      }
    }

    const payload = await getPayload({ config })

    const doc = (await payload.create({
      collection: 'leads-cta',
      overrideAccess: true,
      data: {
        fullName,
        phone,
        status: 'new',
      },
    })) as LeadsCta

    return NextResponse.json(
      {
        success: true,
        id: doc.id,
        leadRef: doc.leadRef,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error creating leads-cta:', error)

    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
