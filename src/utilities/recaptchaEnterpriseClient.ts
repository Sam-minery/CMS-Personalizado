'use client'

function getSiteKey(): string | undefined {
  const k = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  return typeof k === 'string' && k.trim() !== '' ? k.trim() : undefined
}

/**
 * Token fresco para enviar al servidor (CreateAssessment).
 * Devuelve null si falta site key, script no cargado o error en execute.
 */
export async function getRecaptchaEnterpriseToken(action: string): Promise<string | null> {
  const siteKey = getSiteKey()
  if (!siteKey || typeof window === 'undefined') return null

  const enterprise = window.grecaptcha?.enterprise
  if (!enterprise?.ready || !enterprise.execute) return null

  return new Promise((resolve) => {
    enterprise.ready(async () => {
      try {
        const token = await enterprise.execute(siteKey, { action })
        resolve(typeof token === 'string' && token.length > 0 ? token : null)
      } catch {
        resolve(null)
      }
    })
  })
}
