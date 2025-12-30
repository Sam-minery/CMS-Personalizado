"use client"

import React from "react"
import Link from 'next/link'
import type { Block as BlockType } from 'payload'
import type { StickyBannerBlock as StickyBannerBlockType } from '@/payload-types'
import { StickyBanner } from "@/components/ui/sticky-banner"
import { cn } from "@/utilities/ui"

type Props = BlockType & StickyBannerBlockType & {
  content?: string | null
  linkText?: string | null
  link?: {
    type?: 'reference' | 'custom' | null
    newTab?: boolean | null
    url?: string | null
    reference?: {
      relationTo?: 'pages' | 'posts' | null
      value?: {
        slug?: string | null
      } | string | null
    } | null
  } | null
  bannerColor?: 'blue' | 'red' | 'green' | 'yellow' | null
  hideOnScroll?: boolean | null
}

const colorClasses: Record<string, string> = {
  blue: 'bg-gradient-to-b from-blue-500 to-blue-600',
  red: 'bg-gradient-to-b from-red-500 to-red-600',
  green: 'bg-gradient-to-b from-green-500 to-green-600',
  yellow: 'bg-gradient-to-b from-yellow-500 to-yellow-600',
}

export const StickyBannerDemo: React.FC<Props> = ({
  content = 'Announcing $10M seed funding from project mayhem ventures.',
  linkText,
  link,
  bannerColor = 'blue',
  hideOnScroll = false,
}) => {
  const gradientClass = bannerColor ? colorClasses[bannerColor] || colorClasses.blue : colorClasses.blue

  // Construir la URL del enlace
  let linkHref: string | null = null
  let linkTarget: string | undefined = undefined
  let linkRel: string | undefined = undefined

  if (link) {
    if (link.type === 'custom' && link.url) {
      linkHref = link.url
    } else if (link.type === 'reference' && link.reference) {
      const reference = link.reference
      if (typeof reference.value === 'object' && reference.value !== null && 'slug' in reference.value && reference.value.slug) {
        linkHref = `${reference.relationTo !== 'pages' ? `/${reference.relationTo}` : ''}/${reference.value.slug}`
      } else if (typeof reference.value === 'string') {
        linkHref = reference.value
      }
    }

    if (link.newTab) {
      linkTarget = '_blank'
      linkRel = 'noopener noreferrer'
    }
  }

  return (
    <StickyBanner 
      className={cn(gradientClass)} 
      hideOnScroll={hideOnScroll || false}
    >
      <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
        {content}
        {linkText && linkHref && (
          <>
            {' '}
            <Link 
              href={linkHref}
              target={linkTarget}
              rel={linkRel}
              className="transition duration-200 hover:underline"
            >
              {linkText}
            </Link>
          </>
        )}
      </p>
    </StickyBanner>
  )
}

