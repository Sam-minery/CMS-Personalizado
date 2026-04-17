import canUseDOM from './canUseDOM'

export const getServerSideURL = () => {
  let url = process.env.NEXT_PUBLIC_SERVER_URL

  if (!url && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  if (!url) {
    url = 'http://localhost:3000'
  }

  // Asegurar que la URL sea válida
  try {
    new URL(url)
    return url
  } catch (_error) {
    console.warn('Invalid URL in getServerSideURL, falling back to localhost:', url)
    return 'http://localhost:3000'
  }
}

/**
 * Título por defecto cuando no hay meta ni título de documento (evita el texto del template de Payload en OG/pestaña).
 * Usa el host de `NEXT_PUBLIC_SERVER_URL` (sin “www.”).
 */
export const getDefaultMetadataTitle = (): string => {
  try {
    const host = new URL(getServerSideURL()).hostname.replace(/^www\./i, '')
    return host || 'Site'
  } catch {
    return 'Site'
  }
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || ''
}
