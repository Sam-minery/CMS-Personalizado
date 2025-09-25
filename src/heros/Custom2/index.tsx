'use client'

import React, { useState } from 'react'
import type { Page } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

export const Custom2Hero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const [emailInput, setEmailInput] = useState<string>("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      emailInput,
    })
  }

  return (
    <section className="relative min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Contenido del lado izquierdo */}
        <div className="flex items-center justify-center px-[5%] py-16 md:py-24 lg:py-28 z-10 relative">
          <div className="max-w-lg">
            {richText && <RichText className="mb-8" data={richText} enableGutter={false} />}
            
            {/* Formulario de email */}
            <div className="w-full max-w-sm mb-6">
              <form
                className="grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                >
                  Sign up
                </button>
              </form>
            </div>

            {/* Enlaces del CMS */}
            {Array.isArray(links) && links.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-6">
                {links.map(({ link }, i) => (
                  <CMSLink key={i} {...link} />
                ))}
              </div>
            )}

            <p className="text-xs text-gray-600">
              By clicking Sign Up you&apos;re confirming that you agree with our
              <a href="#" className="underline ml-1">Terms and Conditions</a>.
            </p>
          </div>
        </div>

        {/* Imagen del lado derecho - ocupa todo el espacio */}
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {media && typeof media === 'object' && (
            <Media 
              fill 
              imgClassName="w-full h-full object-cover" 
              priority 
              resource={media} 
            />
          )}
        </div>
      </div>
    </section>
  )
} 