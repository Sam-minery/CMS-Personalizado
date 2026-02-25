import { getClientSideURL } from '@/utilities/getURL'

/**
 * Processes media resource URL to ensure proper formatting.
 * Normaliza base + path para evitar doble barra (//) y que servidor y cliente generen la misma URL (evita hydration mismatch).
 * @param url The original URL from the resource
 * @param cacheTag Optional cache tag to append to the URL
 * @returns Properly formatted URL with cache tag if provided
 */
export const getMediaUrl = (url: string | null | undefined, cacheTag?: string | null): string => {
  if (!url) return ''

  // Check if URL already has http/https protocol
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return cacheTag ? `${url}?${cacheTag}` : url
  }

  // Otherwise prepend base URL: quitar barra final del base y asegurar una sola barra entre base y path
  const base = getClientSideURL().replace(/\/+$/, '')
  const path = url.startsWith('/') ? url : `/${url}`
  const full = `${base}${path}`
  return cacheTag ? `${full}?${cacheTag}` : full
}
