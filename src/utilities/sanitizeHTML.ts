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

/**
 * Sanitiza un string de texto plano para prevenir inyección de código
 * Escapa caracteres especiales y elimina contenido peligroso
 * 
 * @param text - El texto a sanitizar
 * @returns Texto sanitizado seguro para renderizar
 */
export const sanitizeText = (text: string | null | undefined): string => {
  if (!text || typeof text !== 'string') return ''
  
  // Escapar caracteres HTML especiales
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Valida datos de formularios para prevenir inyección
 * Valida longitud y caracteres peligrosos pero NO sanitiza (no escapa HTML)
 * Los datos se guardan originales y se sanitizan al mostrar
 * 
 * @param data - Los datos a validar (puede ser objeto, array o valor primitivo)
 * @returns true si es válido, string con mensaje de error si no
 */
export const validateFormData = (data: unknown): true | string => {
  if (typeof data === 'string') {
    // Validar longitud máxima razonable
    if (data.length > 10000) {
      return 'Field value is too long (maximum 10000 characters)'
    }
    // Validar que no contenga scripts obvios (aunque Payload escapará al mostrar)
    // Esto es una validación adicional de seguridad
    const dangerousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i, // Event handlers como onclick=
      /<iframe/i,
      /<object/i,
      /<embed/i,
    ]
    
    for (const pattern of dangerousPatterns) {
      if (pattern.test(data)) {
        return 'Field contains potentially dangerous content'
      }
    }
    
    return true
  }
  
  if (Array.isArray(data)) {
    for (const item of data) {
      const result = validateFormData(item)
      if (result !== true) {
        return result
      }
    }
    return true
  }
  
  if (data && typeof data === 'object') {
    for (const value of Object.values(data)) {
      const result = validateFormData(value)
      if (result !== true) {
        return result
      }
    }
    return true
  }
  
  return true
}

/**
 * @deprecated Usar validateFormData en su lugar. Esta función sanitiza al guardar,
 * lo cual causa doble escape cuando Payload muestra los datos.
 * Los datos deben guardarse originales y sanitizarse solo al mostrar.
 */
export const sanitizeFormData = (data: unknown): unknown => {
  if (typeof data === 'string') {
    // Para strings, escapar HTML pero mantener el texto legible
    return sanitizeText(data)
  }
  
  if (Array.isArray(data)) {
    return data.map(item => sanitizeFormData(item))
  }
  
  if (data && typeof data === 'object') {
    const sanitized: Record<string, unknown> = {}
    for (const [key, value] of Object.entries(data)) {
      sanitized[key] = sanitizeFormData(value)
    }
    return sanitized
  }
  
  return data
}

/**
 * Valida y sanitiza un slug para prevenir inyección de código
 * Solo permite caracteres alfanuméricos, guiones y guiones bajos
 * 
 * @param slug - El slug a validar
 * @returns Slug validado o null si es inválido
 */
export const validateSlug = (slug: string | null | undefined): string | null => {
  if (!slug || typeof slug !== 'string') return null
  
  const trimmed = slug.trim()
  
  // Solo permitir caracteres alfanuméricos, guiones y guiones bajos
  // Longitud máxima razonable
  if (trimmed.length > 200) return null
  
  if (/^[a-zA-Z0-9\-_]+$/.test(trimmed)) {
    return trimmed
  }
  
  return null
}

