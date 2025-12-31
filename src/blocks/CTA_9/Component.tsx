import React from 'react'
import Image from 'next/image'
import type { CTA9Block as CTA9BlockProps } from '@/payload-types'

export const CTA9Block: React.FC<CTA9BlockProps> = ({ 
  heading = "Medium length heading goes here", 
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
  buttons = [{ title: "Button", variant: "solid", url: "#" }, { title: "Button", variant: "outline", url: "#" }],
  image
}) => {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h2 className="mb-3 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-4 md:text-5xl lg:text-6xl">
                {heading}
              </h2>
              <p className="text-text-alternative md:text-md">{description}</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-4">
            {buttons?.map((button: any, index: number) => {
              const { url, variant, ...buttonProps } = button
              
              // Clases base para todos los botones (tamaño fijo)
              const baseClasses = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md whitespace-nowrap"
              
              // Clases específicas según la variante
              const variantClasses = variant === 'solid' 
                ? "bg-black text-white hover:bg-gray-800 focus:ring-gray-500" 
                : "bg-transparent text-white border border-white hover:bg-white hover:text-black focus:ring-white"
              
              const buttonClasses = `${baseClasses} ${variantClasses}`
              
              return (
                <a 
                  key={index} 
                  href={url || '#'}
                  className="no-underline"
                >
                  <button 
                    className={buttonClasses}
                    {...buttonProps}
                  >
                    {button.title}
                  </button>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {image && typeof image === 'object' && image !== null && image.url && (
          <Image 
            src={image.url} 
            alt={image.alt || image.filename || 'CTA background image'} 
            fill
            className="object-cover"
            quality={100}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  )
}