/**
 * Esquemas peligrosos que deben ser bloqueados
 */
const DANGEROUS_SCHEMES = [
  'javascript:',
  'data:',
  'vbscript:',
  'file:',
  'about:',
  'chrome:',
  'chrome-extension:',
  'moz-extension:',
]

/**
 * Valida y sanitiza una URL para prevenir ataques XSS y otros esquemas peligrosos
 * 
 * @param url - La URL a validar
 * @param options - Opciones de validación
 * @returns URL validada o null si es peligrosa
 */
export const validateAndSanitizeURL = (
  url: string | null | undefined,
  options: {
    allowRelative?: boolean
    allowAbsolute?: boolean
    logBlocked?: boolean
  } = {}
): string | null => {
  const { allowRelative = true, allowAbsolute = true, logBlocked = false } = options

  if (!url || typeof url !== 'string') {
    return null
  }

  // Trim espacios
  const trimmedUrl = url.trim()

  if (!trimmedUrl) {
    return null
  }

  // Verificar esquemas peligrosos (case-insensitive)
  const lowerUrl = trimmedUrl.toLowerCase()
  for (const scheme of DANGEROUS_SCHEMES) {
    if (lowerUrl.startsWith(scheme)) {
      if (logBlocked) {
        console.warn(`[URL Validation] Blocked dangerous URL scheme: ${trimmedUrl}`)
      }
      return null
    }
  }

  // URLs relativas (empiezan con /)
  if (trimmedUrl.startsWith('/')) {
    if (allowRelative) {
      // Validar que no tenga caracteres peligrosos después del /
      // Permitir solo caracteres seguros para rutas
      if (/^\/[a-zA-Z0-9\-_\/?#=&%.]*$/.test(trimmedUrl)) {
        return trimmedUrl
      }
      if (logBlocked) {
        console.warn(`[URL Validation] Blocked invalid relative URL: ${trimmedUrl}`)
      }
      return null
    }
    if (logBlocked) {
      console.warn(`[URL Validation] Blocked relative URL (not allowed): ${trimmedUrl}`)
    }
    return null
  }

  // URLs absolutas (http:// o https://)
  if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
    if (allowAbsolute) {
      try {
        // Validar que sea una URL válida
        const urlObj = new URL(trimmedUrl)
        
        // Solo permitir http y https
        if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
          if (logBlocked) {
            console.warn(`[URL Validation] Blocked non-HTTP(S) protocol: ${trimmedUrl}`)
          }
          return null
        }

        return trimmedUrl
      } catch (error) {
        if (logBlocked) {
          console.warn(`[URL Validation] Blocked invalid URL format: ${trimmedUrl}`, error)
        }
        return null
      }
    }
    if (logBlocked) {
      console.warn(`[URL Validation] Blocked absolute URL (not allowed): ${trimmedUrl}`)
    }
    return null
  }

  // Hash links (#section)
  if (trimmedUrl.startsWith('#')) {
    // Permitir hash links simples
    if (/^#[a-zA-Z0-9\-_]*$/.test(trimmedUrl)) {
      return trimmedUrl
    }
    if (logBlocked) {
      console.warn(`[URL Validation] Blocked invalid hash link: ${trimmedUrl}`)
    }
    return null
  }

  // Si no coincide con ningún patrón válido, bloquear
  if (logBlocked) {
    console.warn(`[URL Validation] Blocked unrecognized URL format: ${trimmedUrl}`)
  }
  return null
}

/**
 * Valida una URL y devuelve un mensaje de error si es inválida
 * Útil para validación en formularios del CMS
 * 
 * @param url - La URL a validar
 * @returns true si es válida, string con mensaje de error si no
 */
export const validateURLForCMS = (url: string | null | undefined): true | string => {
  if (!url || typeof url !== 'string') {
    return 'URL is required'
  }

  const validated = validateAndSanitizeURL(url, {
    allowRelative: true,
    allowAbsolute: true,
    logBlocked: false,
  })

  if (!validated) {
    return 'Invalid URL format. Only http://, https://, relative URLs (/path), and hash links (#section) are allowed. Dangerous schemes like javascript: are not permitted.'
  }

  return true
}

/**
 * Valida una URL de video (especialmente YouTube) para prevenir inyección
 * Solo permite URLs de YouTube válidas o URLs absolutas http/https
 * 
 * @param url - La URL del video a validar
 * @returns URL validada o null si es peligrosa
 */
export const validateVideoURL = (url: string | null | undefined): string | null => {
  if (!url || typeof url !== 'string') return null
  
  const trimmed = url.trim()
  
  // Primero validar contra esquemas peligrosos
  const validated = validateAndSanitizeURL(trimmed, {
    allowRelative: false, // No permitir URLs relativas para videos
    allowAbsolute: true,
    logBlocked: false,
  })
  
  if (!validated) return null
  
  // Si es una URL de YouTube, validar formato
  if (trimmed.includes('youtube.com') || trimmed.includes('youtu.be')) {
    // Permitir URLs de YouTube válidas
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    if (youtubeRegex.test(trimmed)) {
      return trimmed
    }
    return null
  }
  
  // Para otras URLs, solo permitir http/https
  return validated
}

