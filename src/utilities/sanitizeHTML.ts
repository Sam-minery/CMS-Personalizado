import sanitizeHtml from 'sanitize-html'

/**
 * Sanitiza HTML para prevenir ataques XSS
 * Solo permite tags seguros como <br />, <strong>, <em>, etc.
 * 
 * @param html - El HTML a sanitizar
 * @returns HTML sanitizado y seguro para usar con dangerouslySetInnerHTML
 */
export const sanitizeHTML = (html: string | null | undefined): string => {
  if (!html) return ''

  return sanitizeHtml(html, {
    // Solo permitir tags seguros para formateo básico
    allowedTags: ['br', 'strong', 'em', 'b', 'i', 'u', 'span', 'p'],
    // Permitir solo atributos seguros (sin event handlers)
    allowedAttributes: {
      span: ['class'],
      p: ['class'],
    },
    // No permitir ningún esquema (evita javascript:, data:, etc.)
    allowedSchemes: [],
    // Remover cualquier script o contenido peligroso
    disallowedTagsMode: 'discard',
    // Deshabilitar todos los atributos por defecto
    enforceHtmlBoundary: true,
  })
}

