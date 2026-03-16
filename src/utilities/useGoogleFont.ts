import { useEffect } from 'react'
import { loadGoogleFont, isGoogleFont } from './loadGoogleFont'

/**
 * Hook para cargar Google Fonts dinámicamente
 * @param fontFamily - La familia de fuente a cargar
 */
export const useGoogleFont = (fontFamily: string | undefined): void => {
  useEffect(() => {
    if (fontFamily && isGoogleFont(fontFamily)) {
      loadGoogleFont(fontFamily)
    }
  }, [fontFamily])
}
