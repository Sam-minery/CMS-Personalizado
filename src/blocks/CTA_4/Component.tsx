"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Button, Input } from "@relume_io/relume-ui"
import RichText from '@/components/RichText'
import type { CTA4Block as CTA4BlockProps } from '@/payload-types'

export const CTA4Block: React.FC<CTA4BlockProps> = ({ 
  heading = "Medium length heading goes here", 
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
  inputPlaceholder = "Enter your email",
  button = { title: "Sign up" },
  termsAndConditions,
  image
}) => {
  const [emailInput, setEmailInput] = useState<string>("")
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      emailInput,
    })
  }

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-text-alternative md:text-md">{description}</p>
          <div className="mt-6 w-full max-w-sm md:mt-8">
            <form
              className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
              onSubmit={handleSubmit}
            >
              <Input
                id="email"
                type="email"
                placeholder={inputPlaceholder || "Enter your email"}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <Button 
                variant={button.variant === 'default' ? 'primary' : button.variant as any}
                size={button.size as any}
                className={`
                  ${button.variant === 'default' 
                    ? 'bg-white text-black hover:bg-gray-100 border border-gray-300' 
                    : button.variant === 'secondary'
                    ? 'bg-black text-white hover:bg-gray-800 border border-gray-700'
                    : button.variant === 'outline'
                    ? 'bg-transparent text-white border border-white hover:bg-white hover:text-black'
                    : button.variant === 'ghost'
                    ? 'bg-transparent text-white hover:bg-white/10'
                    : 'bg-white text-black hover:bg-gray-100'
                  }
                  ${button.size === 'sm' 
                    ? 'px-3 py-2 text-sm' 
                    : button.size === 'lg' 
                    ? 'px-8 py-4 text-lg' 
                    : 'px-6 py-3 text-base'
                  }
                  font-medium rounded-md transition-colors duration-200
                `}
              >
                {button.title}
              </Button>
            </form>
            {termsAndConditions && (
              <div className="text-xs text-text-alternative">
                <RichText data={termsAndConditions} enableGutter={false} />
              </div>
            )}
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