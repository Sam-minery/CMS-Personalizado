/**
 * Mapeo de fuentes de Google Fonts a sus nombres correctos para la API
 */
const GOOGLE_FONTS_MAP: Record<string, string> = {
  '"Roboto", sans-serif': 'Roboto',
  '"Open Sans", sans-serif': 'Open+Sans',
  '"Lato", sans-serif': 'Lato',
  '"Montserrat", sans-serif': 'Montserrat',
  '"Playfair Display", serif': 'Playfair+Display',
  '"Inter", sans-serif': 'Inter',
  '"Poppins", sans-serif': 'Poppins',
  '"Raleway", sans-serif': 'Raleway',
}

/**
 * Verifica si una fuente es una Google Font
 */
export const isGoogleFont = (fontFamily: string | undefined): boolean => {
  if (!fontFamily || fontFamily === 'default') return false
  return fontFamily in GOOGLE_FONTS_MAP
}

/**
 * Obtiene el nombre de la fuente para Google Fonts API
 */
export const getGoogleFontName = (fontFamily: string): string | null => {
  return GOOGLE_FONTS_MAP[fontFamily] || null
}

/**
 * Set global para rastrear qué fuentes ya se han cargado
 */
const loadedFonts = new Set<string>()

/**
 * Carga una Google Font dinámicamente
 */
export const loadGoogleFont = (fontFamily: string): void => {
  // Solo funciona en el cliente
  if (typeof window === 'undefined') return

  // Verificar si es una Google Font
  if (!isGoogleFont(fontFamily)) return

  // Verificar si ya se cargó
  const fontName = getGoogleFontName(fontFamily)
  if (!fontName || loadedFonts.has(fontName)) return

  // Marcar como cargada
  loadedFonts.add(fontName)

  // Crear los links de preconnect para mejor rendimiento
  const preconnectGoogle = document.querySelector('link[href="https://fonts.googleapis.com"]')
  const preconnectGstatic = document.querySelector('link[href="https://fonts.gstatic.com"]')

  if (!preconnectGoogle) {
    const link1 = document.createElement('link')
    link1.rel = 'preconnect'
    link1.href = 'https://fonts.googleapis.com'
    document.head.appendChild(link1)
  }

  if (!preconnectGstatic) {
    const link2 = document.createElement('link')
    link2.rel = 'preconnect'
    link2.href = 'https://fonts.gstatic.com'
    link2.crossOrigin = 'anonymous'
    document.head.appendChild(link2)
  }

  // Crear y agregar el link de la fuente
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@400;500;600;700&display=swap`
  document.head.appendChild(link)
}
