import React from 'react'
import Image from 'next/image'
import { Button } from "@relume_io/relume-ui"
import type { ButtonProps } from "@relume_io/relume-ui"
import { CMSLink } from '@/components/Link'

// Mapeo de variantes de relume-ui a las del CMSLink local
const variantMapping: Record<string, 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'> = {
  'default': 'default',
  'primary': 'default',
  'secondary': 'secondary',
  'secondary-alt': 'secondary',
  'outline': 'outline',
  'ghost': 'ghost',
  'tertiary': 'ghost',
  'link': 'link',
  'link-alt': 'link',
}

// Mapeo de tamaños de relume-ui a los del CMSLink local
const sizeMapping: Record<string, 'default' | 'sm' | 'lg' | 'icon' | 'clear'> = {
  'default': 'default',
  'primary': 'default',
  'sm': 'sm',
  'icon': 'icon',
  'lg': 'lg',
  'link': 'clear',
}

export const CTA_custom_2Block: React.FC<{
  heading?: string
  description?: string
  buttons?: Array<ButtonProps & { title: string; href?: string }>
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
}> = ({ 
  heading = "Medium length heading goes here", 
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
  buttons = [{ title: "Button" }, { title: "Button", variant: "secondary" }], 
  image
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons?.map((button, index) => {
                const { href, ...buttonProps } = button
                
                // Si hay un enlace, usar CMSLink, si no, usar Button normal
                if (href) {
                  const mappedVariant = variantMapping[buttonProps.variant || 'default'] || 'default'
                  const mappedSize = sizeMapping[buttonProps.size || 'default'] || 'default'
                  
                  return (
                    <CMSLink 
                      key={index} 
                      url={href}
                      appearance={mappedVariant}
                      size={mappedSize}
                    >
                      {button.title}
                    </CMSLink>
                  )
                }
                
                return (
                  <Button key={index} {...buttonProps}>
                    {button.title}
                  </Button>
                )
              })}
            </div>
          </div>
          <div>
            {image?.url && (
              <Image 
                src={image.url} 
                alt={image.alt || image.filename || 'CTA image'} 
                width={800}
                height={400}
                className="w-full object-cover"
                quality={100}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 