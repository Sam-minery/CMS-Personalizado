import type { Media, Page, Post } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

/** Convierte una URL de media (relativa o absoluta) en URL absoluta usando la base del servidor. Usar solo en Server Components para evitar hydration mismatch. */
export function resolveMediaUrlForServer(url: string | null | undefined): string | undefined {
  if (!url) return undefined
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const base = getServerSideURL().replace(/\/+$/, '')
  const path = url.startsWith('/') ? url : `/${url}`
  return `${base}${path}`
}

// Función para convertir el tipo de link de Payload al tipo esperado por los componentes
export function mapPayloadLinkToComponentLink(payloadLink: any) {
  if (!payloadLink) return undefined

  return {
    type: payloadLink.type || 'custom',
    url: payloadLink.url || '#',
    newTab: payloadLink.newTab || false,
    reference: payloadLink.reference
      ? {
          relationTo: payloadLink.reference.relationTo,
          value: payloadLink.reference.value,
        }
      : undefined,
  }
}

/** Resuelve un link del footer SENDA a { type, url, newTab, anchorId } con url resuelta para reference */
export function mapFooterSendaLink(payloadLink: any): {
  type?: 'reference' | 'custom' | 'anchor'
  url?: string
  newTab?: boolean
  anchorId?: string
} | undefined {
  if (!payloadLink) return undefined
  let url = payloadLink.url || '#'
  if (payloadLink.type === 'reference' && payloadLink.reference?.value) {
    const val = payloadLink.reference.value
    const slug = typeof val === 'object' && val && 'slug' in val ? (val as { slug?: string }).slug : undefined
    if (slug) {
      url = payloadLink.reference.relationTo === 'pages' ? `/${slug}` : `/${payloadLink.reference.relationTo}/${slug}`
    }
  }
  if (payloadLink.type === 'anchor') url = '#'
  return {
    type: payloadLink.type || 'custom',
    url,
    newTab: payloadLink.newTab ?? undefined,
    anchorId: payloadLink.anchorId ?? undefined,
  }
}

// Función para convertir el tipo de media de Payload al tipo esperado por los componentes
export function mapPayloadMediaToComponentMedia(payloadMedia: number | Media | null | undefined): Media | undefined {
  if (!payloadMedia) return undefined
  
  // Si es un número (ID), necesitamos el objeto completo
  if (typeof payloadMedia === 'number') {
    // En este caso, necesitaríamos hacer una consulta para obtener el objeto completo
    // Por ahora, retornamos undefined y manejaremos esto en el componente
    return undefined
  }
  
  return payloadMedia as Media
}

// Función para crear un objeto Media por defecto cuando no hay media
export function createDefaultMedia(): Media {
  return {
    id: 1,
    alt: 'Logo image',
    url: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  } as Media
}

// Función para mapear los botones
export function mapPayloadButtonToComponentButton(payloadButton: any) {
  if (!payloadButton) return {
    title: 'Subscribe',
    size: 'sm' as const,
    variant: 'secondary' as const
  }
  
  return {
    title: payloadButton.title || 'Subscribe',
    size: (payloadButton.size === 'lg' ? 'sm' : payloadButton.size) || 'sm' as const,
    variant: (payloadButton.variant === 'default' ? 'secondary' : payloadButton.variant) || 'secondary' as const
  }
}
