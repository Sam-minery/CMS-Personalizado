/**
 * Rate limit en memoria por IP (mínimo viable para dev / instancia única).
 * En serverless multi-instancia o varias réplicas, usar Redis u otro store compartido.
 */
const WINDOW_MS = 60_000
const MAX_REQUESTS_PER_WINDOW = 20

type Bucket = { windowStart: number; count: number }

const buckets = new Map<string, Bucket>()

export function getClientIpFromRequest(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) return first
  }
  const realIp = request.headers.get('x-real-ip')?.trim()
  if (realIp) return realIp
  return 'unknown'
}

/** Devuelve true si la petición puede continuar; false si se superó el límite. */
export function consumeLeadsFormularioSubmitRateLimit(ip: string): { ok: true } | { ok: false; retryAfterSec: number } {
  const key = ip || 'unknown'
  const now = Date.now()
  const existing = buckets.get(key)

  if (!existing || now - existing.windowStart >= WINDOW_MS) {
    buckets.set(key, { windowStart: now, count: 1 })
    return { ok: true }
  }

  if (existing.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterMs = WINDOW_MS - (now - existing.windowStart)
    return { ok: false, retryAfterSec: Math.max(1, Math.ceil(retryAfterMs / 1000)) }
  }

  existing.count += 1
  return { ok: true }
}
