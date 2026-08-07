import {
  RECAPTCHA_ACTION_LEADS_CTA,
  RECAPTCHA_ACTION_LEADS_FORMULARIO,
} from '@/utilities/recaptchaEnterpriseConstants'

const MAX_TOKEN_LEN = 4096

type AssessmentResponse = {
  tokenProperties?: { valid?: boolean; action?: string; invalidReason?: string }
  riskAnalysis?: { score?: number }
  name?: string
}

function parseMinScore(): number {
  const raw = process.env.RECAPTCHA_MIN_SCORE
  if (raw == null || raw === '') return 0.3
  const n = Number.parseFloat(String(raw).trim())
  if (!Number.isFinite(n) || n < 0 || n > 1) return 0.3
  return n
}

function getRecaptchaConfig():
  | { ok: true; projectId: string; apiKey: string; siteKey: string; minScore: number }
  | { ok: false } {
  const projectId = process.env.RECAPTCHA_PROJECT_ID?.trim()
  const apiKey = process.env.RECAPTCHA_ENTERPRISE_API_KEY?.trim()
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim()
  if (!projectId || !apiKey || !siteKey) return { ok: false }
  return { ok: true, projectId, apiKey, siteKey, minScore: parseMinScore() }
}

/**
 * Verifica el token con reCAPTCHA Enterprise (CreateAssessment).
 */
export async function verifyRecaptchaEnterpriseAssessment(input: {
  token: string
  expectedAction: typeof RECAPTCHA_ACTION_LEADS_FORMULARIO | typeof RECAPTCHA_ACTION_LEADS_CTA
  userIpAddress?: string
}): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  const cfg = getRecaptchaConfig()
  if (!cfg.ok) {
    return { ok: false, status: 503, error: 'Verificación anti-bot no configurada en el servidor.' }
  }

  const token = input.token.trim()
  if (!token || token.length > MAX_TOKEN_LEN) {
    return { ok: false, status: 400, error: 'Token de verificación inválido.' }
  }

  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${encodeURIComponent(cfg.projectId)}/assessments?key=${encodeURIComponent(cfg.apiKey)}`

  const event: Record<string, unknown> = {
    token,
    siteKey: cfg.siteKey,
    expectedAction: input.expectedAction,
  }
  if (input.userIpAddress && input.userIpAddress !== 'unknown') {
    event.userIpAddress = input.userIpAddress
  }

  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event }),
    })
  } catch (e) {
    console.error('reCAPTCHA Enterprise request failed:', e)
    return { ok: false, status: 503, error: 'No se pudo verificar el envío. Inténtalo más tarde.' }
  }

  let data: AssessmentResponse
  try {
    data = (await res.json()) as AssessmentResponse
  } catch {
    return { ok: false, status: 503, error: 'Respuesta de verificación inválida.' }
  }

  if (!res.ok) {
    console.error('reCAPTCHA Enterprise HTTP error:', res.status, data)
    return { ok: false, status: 403, error: 'Verificación anti-bot rechazada.' }
  }

  const valid = data.tokenProperties?.valid === true
  const action = data.tokenProperties?.action
  const score = data.riskAnalysis?.score

  if (!valid) {
    console.warn('reCAPTCHA Enterprise invalid token:', data.tokenProperties?.invalidReason)
    return { ok: false, status: 403, error: 'Verificación anti-bot no válida.' }
  }

  if (typeof action === 'string' && action !== input.expectedAction) {
    console.warn('reCAPTCHA Enterprise action mismatch:', action, input.expectedAction)
    return { ok: false, status: 403, error: 'Verificación anti-bot no válida.' }
  }

  if (typeof score !== 'number' || !Number.isFinite(score)) {
    return { ok: false, status: 403, error: 'Verificación anti-bot incompleta.' }
  }

  if (score < cfg.minScore) {
    return { ok: false, status: 403, error: 'Verificación anti-bot no superada.' }
  }

  return { ok: true }
}
