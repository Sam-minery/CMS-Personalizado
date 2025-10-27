import { useEffect } from 'react'
import { blockConfigs } from './config'
import { customizeBlock } from './utils'

export const useBlockCustomization = () => {
  useEffect(() => {
    // Verificar que estamos en el cliente
    if (typeof window === 'undefined') return
    
    // Aplicar personalización inmediatamente
    blockConfigs.forEach(customizeBlock)
    
    // Aplicar con delays para asegurar que funcione
    const timeouts = [100, 500, 1000].map(delay => 
      setTimeout(() => {
        blockConfigs.forEach(customizeBlock)
      }, delay)
    )
    
    // Observer para detectar cambios en el DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            setTimeout(() => {
              blockConfigs.forEach(customizeBlock)
            }, 100)
          }
        })
      })
    })
    
    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      })
    }
    
    // Cleanup
    return () => {
      timeouts.forEach(clearTimeout)
      observer.disconnect()
    }
  }, [])
}

