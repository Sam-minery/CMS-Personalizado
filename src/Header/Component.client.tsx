'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Navbar11 } from './Nav/Navbar11'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  // Si el tipo de navbar es navbar11, renderizar el componente Navbar11
  if (data?.navbarType === 'navbar11' && data?.navbar11Config) {
    return (
      <div {...(theme ? { 'data-theme': theme } : {})}>
        <Navbar11 
          logo={{
            url: data.navbar11Config.logo?.url || '#',
            src: data.navbar11Config.logo?.src || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
            alt: data.navbar11Config.logo?.alt || 'Logo'
          }}
          navLinks={data.navbar11Config.navLinks?.map(link => ({
            title: link.title,
            url: link.url,
            subMenuLinks: link.subMenuLinks?.map(subLink => ({
              icon: {
                src: subLink.icon.src,
                alt: subLink.icon.alt || 'Icon'
              },
              title: subLink.title,
              description: subLink.description,
              url: subLink.url
            }))
          })) || []}
          buttons={data.navbar11Config.buttons?.map(button => {
            const variantMapping: Record<string, "link" | "secondary" | "ghost" | "primary" | "secondary-alt" | "tertiary" | "link-alt"> = {
              'default': 'primary',
              'secondary': 'secondary',
              'outline': 'secondary-alt',
              'ghost': 'ghost'
            };
            const sizeMapping: Record<string, "link" | "primary" | "sm" | "icon"> = {
              'default': 'sm',
              'sm': 'sm',
              'lg': 'primary'
            };
            return {
              title: button.title,
              variant: variantMapping[button.variant || 'default'] || 'primary',
              size: sizeMapping[button.size || 'sm'] || 'sm'
            };
          }) || []}
        />
      </div>
    )
  }

  // Renderizar el header por defecto
  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-8 flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  )
}
