import React from 'react'
import Image from 'next/image'
import { Button } from "@relume_io/relume-ui"
import type { ButtonProps } from "@relume_io/relume-ui"
import { BiCheck } from "react-icons/bi"
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

type ImageProps = {
  src?: string | { url?: string; alt?: string }
  alt?: string
  url?: string
  filename?: string
}

type FeatureSection = {
  icon: ImageProps
  heading: string
  description: string
}

type PricingPlan = {
  planName: string
  description: string
  monthlyPrice: string
  features: Array<{ id?: string; feature: string }>
  button: ButtonProps & { title: string; href?: string }
}

export const Pricing5Block: React.FC<{
  tagline?: string
  heading?: string
  description?: string
  featureSections?: FeatureSection[]
  pricingPlan?: PricingPlan
}> = ({ 
  tagline = "Tagline",
  heading = "Pricing plan",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  featureSections = [],
  pricingPlan
}) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            {featureSections.map((featureSection, index) => (
              <div key={index} className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  {(() => {
                    // Manejar el objeto Media de Payload
                    const iconSrc = typeof featureSection.icon.src === 'object' && featureSection.icon.src?.url 
                      ? featureSection.icon.src.url 
                      : featureSection.icon.src || featureSection.icon.url;
                    
                    return iconSrc && typeof iconSrc === 'string' && iconSrc.trim() !== '' && (
                      <Image
                        src={iconSrc}
                        alt={featureSection.icon.alt || (typeof featureSection.icon.src === 'object' ? featureSection.icon.src?.alt : undefined) || 'Feature icon'}
                        width={64}
                        height={64}
                        className="size-16"
                        quality={100}
                      />
                    );
                  })()}
                </div>
                <div>
                  <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                    {featureSection.heading}
                  </h3>
                  <p>{featureSection.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {pricingPlan && <PricingPlan plan={pricingPlan} />}
          </div>
        </div>
      </div>
    </section>
  )
}

const PricingPlan = ({ plan }: { plan: PricingPlan }) => {
  const { href, ...buttonProps } = plan.button
  
  return (
    <div className="h-full border border-border-primary px-6 py-8 md:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="mb-2 text-xl font-bold md:text-2xl">{plan.planName}</h4>
          <p>{plan.description}</p>
        </div>
        <h5 className="justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl">
          {plan.monthlyPrice}
          <span className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">/mo</span>
        </h5>
      </div>
      <div className="my-8 h-px w-full shrink-0 bg-border" />
      <p>Includes:</p>
      <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
        {plan.features.map((featureItem, index) => (
          <div key={featureItem.id || index} className="flex self-start">
            <div className="mr-4 flex-none self-start">
              <BiCheck className="size-6" />
            </div>
            <p>{featureItem.feature}</p>
          </div>
        ))}
      </div>
      <div className="my-8 h-px w-full shrink-0 bg-border" />
      <div>
        {href ? (
          <CMSLink 
            url={href}
            appearance={variantMapping[buttonProps.variant || 'default'] || 'default'}
            size={sizeMapping[buttonProps.size || 'default'] || 'default'}
            className="w-full"
          >
            {plan.button.title}
          </CMSLink>
        ) : (
          <Button {...buttonProps} className="w-full">
            {plan.button.title}
          </Button>
        )}
      </div>
    </div>
  )
}
