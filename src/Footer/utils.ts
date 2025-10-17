import type { Media, Page, Post } from '@/payload-types'

// Función para convertir el tipo de link de Payload al tipo esperado por los componentes
export function mapPayloadLinkToComponentLink(payloadLink: any) {
  if (!payloadLink) return undefined
  
  return {
    type: payloadLink.type || 'custom',
    url: payloadLink.url || '#',
    newTab: payloadLink.newTab || false,
    reference: payloadLink.reference ? {
      relationTo: payloadLink.reference.relationTo,
      value: payloadLink.reference.value
    } : undefined
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
