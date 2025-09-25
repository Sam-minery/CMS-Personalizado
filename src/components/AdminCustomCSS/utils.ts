import { BlockConfig } from './config'

export const createCustomPreview = (config: BlockConfig): HTMLDivElement => {
  const customPreview = document.createElement('div')
  customPreview.className = `${config.className} custom-preview`
  customPreview.style.cssText = `
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px;
    box-sizing: border-box;
  `
  return customPreview
}

export const createCustomImage = (imageUrl: string): HTMLDivElement => {
  const customImage = document.createElement('div')
  customImage.style.cssText = `
    width: 100%;
    height: 140px;
    background-image: url('${imageUrl}');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin-bottom: 16px;
    position: relative;
    z-index: 2;
  `
  return customImage
}

export const createContentDiv = (): HTMLDivElement => {
  const contentDiv = document.createElement('div')
  contentDiv.style.cssText = `
    position: relative;
    z-index: 3;
    text-align: center;
    width: 150%;
  `
  return contentDiv
}

export const createTitle = (): HTMLDivElement => {
  const title = document.createElement('div')
  title.style.cssText = `
    margin: 0 0 6px 0;
    font-size: 15px;
    font-weight: 600;
    color: #111827;
    line-height: 1.2;
  `
  return title
}

export const hideDefaultSVGs = (button: HTMLElement): void => {
  const svgElements = button.querySelectorAll('svg')
  svgElements.forEach(svg => {
    svg.style.display = 'none'
  })
}

export const applyButtonStyles = (button: HTMLElement): void => {
  button.style.cssText += `
    padding: 0 !important;
    margin: 0 !important;
    height: auto !important;
    min-height: 180px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  `
}

export const customizeBlock = (config: BlockConfig): void => {
  const blockButtons = document.querySelectorAll('button, [role="button"], [data-testid*="block"]')
  
  blockButtons.forEach(button => {
    if (button.textContent?.includes(config.selector) && button instanceof HTMLElement) {
      // Verificar que sea exactamente el bloque correcto (evitar conflictos entre Comparison 1 y 13)
      const isExactMatch = button.textContent?.trim() === config.selector || 
                          button.textContent?.includes(` ${config.selector} `) ||
                          button.textContent?.endsWith(` ${config.selector}`) ||
                          button.textContent?.startsWith(`${config.selector} `)
      
      if (isExactMatch && !button.querySelector(`.${config.className}`)) {
        // Limpiar cualquier personalización previa de este bloque específico
        const existingCustom = button.querySelector(`.${config.className}`)
        if (existingCustom) {
          existingCustom.remove()
        }
        
        // Limpiar cualquier otra personalización de bloques
        const existingBlockCustom = button.querySelector('.custom-preview')
        if (existingBlockCustom) {
          existingBlockCustom.remove()
        }
        
        hideDefaultSVGs(button)
        
        const customPreview = createCustomPreview(config)
        const customImage = createCustomImage(config.imageUrl)
        const contentDiv = createContentDiv()
        const title = createTitle()
        
        contentDiv.appendChild(title)
        customPreview.appendChild(customImage)
        customPreview.appendChild(contentDiv)
        
        button.insertBefore(customPreview, button.firstChild)
        applyButtonStyles(button)
      }
    }
  })
}

