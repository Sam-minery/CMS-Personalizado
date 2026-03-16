import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { unstable_cache } from 'next/cache'

import { getServerSideURL } from '@/utilities/getURL'

type FontPreloadItem = { url: string; type: 'font/woff2' | 'font/woff' }

function toAbsoluteUrl(url: string | null | undefined): string {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const base = getServerSideURL().replace(/\/+$/, '')
  const path = url.startsWith('/') ? url : `/${url}`
  return `${base}${path}`
}

function inferFontType(filenameOrUrl: string | null | undefined): 'font/woff2' | 'font/woff' {
  if (!filenameOrUrl) return 'font/woff2'
  const lower = filenameOrUrl.toLowerCase()
  if (lower.includes('.woff2')) return 'font/woff2'
  if (lower.includes('.woff')) return 'font/woff'
  return 'font/woff2'
}

async function fetchPreloadFontUrlsUncached(): Promise<FontPreloadItem[]> {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'font-groups',
    where: { preloadFonts: { equals: true } },
    depth: 2,
    limit: 50,
    pagination: false,
  })

  const seen = new Set<string>()
  const items: FontPreloadItem[] = []

  for (const group of result.docs) {
    const fonts = group.fonts
    if (!Array.isArray(fonts)) continue
    for (const entry of fonts) {
      const font = entry?.font
      if (!font || typeof font === 'number') continue
      const url = (font as { url?: string | null }).url
      if (!url) continue
      const absoluteUrl = toAbsoluteUrl(url)
      if (!absoluteUrl || seen.has(absoluteUrl)) continue
      seen.add(absoluteUrl)
      const filename = (font as { filename?: string | null }).filename ?? url
      items.push({
        url: absoluteUrl,
        type: inferFontType(filename),
      })
    }
  }

  return items
}

/**
 * Returns font file URLs for all font groups that have "Precargar siempre" (preloadFonts) enabled.
 * Cached by Next.js so the Payload request is not repeated on every page load.
 */
export const getPreloadFontUrls = () =>
  unstable_cache(
    fetchPreloadFontUrlsUncached,
    ['font-groups-preload'],
    { tags: ['font-groups'], revalidate: 60 },
  )
