'use client'
import React from 'react'

type Layout42BlockProps = {
  heading?: string | null
  description?: string | null
}

export const Layout42Block: React.FC<Layout42BlockProps> = ({
  heading,
  description,
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-between gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
          {heading && (
            <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
              {heading}
            </h3>
          )}
          {description && (
            <p className="md:text-md">{description}</p>
          )}
        </div>
      </div>
    </section>
  )
}

