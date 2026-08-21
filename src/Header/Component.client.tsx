'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { Navbar1 } from './Nav/Navbar1'
import { Navbar5 } from './Nav/Navbar5'
import { Navbar11 } from './Nav/Navbar11'
import { NavbarTemplate } from './Nav/NavbarTemplate'
import { Navbar_DROP } from './Nav/Navbar_DROP'

/** Tipado local hasta regenerar payload-types con navbar_drop_config. */
type NavbarDropConfig = {
  logo?: {
    useMedia?: boolean | null
    media?: unknown
    src?: string | null
    alt?: string | null
  } | null
  navLinks?: Array<{
    title?: string | null
    link?: Record<string, unknown> | null
    subMenuLinks?: Array<{
      title?: string | null
      link?: Record<string, unknown> | null
    }> | null
  }> | null
  buttons?: Array<{
    title?: string | null
    link?: Record<string, unknown> | null
    size?: string | null
    variant?: string | null
    iconSVG?: string | null
  }> | null
  backgroundColor?: string | null
  mobileMenuBackgroundColor?: string | null
  textColor?: string | null
  boldTextColor?: string | null
  buttonBackgroundColor?: string | null
  buttonBackgroundColorSecondary?: string | null
  buttonTextColor?: string | null
  fontFamily?: string | null
  useFontGroup?: boolean | null
  fontGroup?: unknown
  useCustomFont?: boolean | null
  customFontFile?: {
    id?: string | number
    url?: string | null
    filename?: string | null
    name?: string | null
  } | number | null
  customFontName?: string | null
}

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

  // Si el tipo de navbar es navbar1, renderizar el componente Navbar1
  if (data?.navbarType === 'navbar1' && data?.navbar1Config) {
    return (
      <div {...(theme ? { 'data-theme': theme } : {})}>
        <Navbar1 
          logo={{
            useMedia: data.navbar1Config.logo?.useMedia || false,
            media: data.navbar1Config.logo?.media,
            url: data.navbar1Config.logo?.url || '#',
            src: data.navbar1Config.logo?.src || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
            alt: data.navbar1Config.logo?.alt || 'Logo'
          }}
          navLinks={data.navbar1Config.navLinks?.map(link => ({
            title: link.title,
            link: link.link || { type: 'custom', url: '#' },
            subMenuLinks: link.subMenuLinks?.map(subLink => ({
              title: subLink.title,
              link: subLink.link || { type: 'custom', url: '#' }
            }))
          })) || []}
          buttons={data.navbar1Config.buttons?.map(button => ({
            title: button.title,
            link: button.link || { type: 'custom', url: '#' },
            size: button.size as 'sm' | 'lg' || 'sm',
            variant: button.variant as 'default' | 'secondary' | 'ghost' | 'link' || 'default'
          })) || []}
        />
      </div>
    )
  }

  // Si el tipo de navbar es navbar5, renderizar el componente Navbar5
  if (data?.navbarType === 'navbar5' && data?.navbar5Config) {
    return (
      <div {...(theme ? { 'data-theme': theme } : {})}>
        <Navbar5 
          logo={{
            useMedia: data.navbar5Config.logo?.useMedia || false,
            media: data.navbar5Config.logo?.media,
            url: data.navbar5Config.logo?.url || '#',
            src: data.navbar5Config.logo?.src || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
            alt: data.navbar5Config.logo?.alt || 'Logo',
            link: data.navbar5Config.logo?.link || { type: 'custom', url: '#' }
          }}
          links={data.navbar5Config.links?.map(link => ({
            title: link.title,
            link: link.link || { type: 'custom', url: '#' },
            megaMenu: link.megaMenu ? {
              categoryLinks: link.megaMenu.categoryLinks?.map(category => ({
                title: category.title,
                links: category.links?.map(item => ({
                  link: item.link || { type: 'custom', url: '#' },
                  image: item.image,
                  title: item.title,
                  description: item.description,
                  button: item.button
                })) || []
              })) || [],
              featuredSections: {
                title: link.megaMenu.featuredSections?.title || '',
                links: link.megaMenu.featuredSections?.links?.map(item => ({
                  link: item.link || { type: 'custom', url: '#' },
                  image: item.image,
                  title: item.title,
                  description: item.description,
                  button: item.button
                })) || []
              },
              button: {
                title: link.megaMenu.button?.title || '',
                size: link.megaMenu.button?.size as 'sm' | 'primary' || 'sm',
                variant: link.megaMenu.button?.variant as 'primary' | 'secondary' | 'ghost' | 'link' || 'primary',
                link: link.megaMenu.button?.link || { type: 'custom', url: '#' }
              }
            } : undefined
          })) || []}
          buttons={data.navbar5Config.buttons?.map(button => ({
            title: button.title,
            link: button.link || { type: 'custom', url: '#' },
            size: button.size as 'sm' | 'primary' || 'sm',
            variant: button.variant as 'primary' | 'secondary' | 'ghost' | 'link' || 'primary'
          })) || []}
        />
      </div>
    )
  }

  // Si el tipo de navbar es navbar11, renderizar el componente Navbar11
  if (data?.navbarType === 'navbar11' && data?.navbar11Config) {
    return (
      <div {...(theme ? { 'data-theme': theme } : {})}>
        <Navbar11 
          logo={{
            url: data.navbar11Config.logo?.url || '#',
            src: (data.navbar11Config.logo as any)?.src || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
            image: data.navbar11Config.logo?.image ? {
              url: typeof data.navbar11Config.logo.image === 'number' 
                ? 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg' // Fallback para ID de media
                : data.navbar11Config.logo.image.url || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
              alt: typeof data.navbar11Config.logo.image === 'number' 
                ? data.navbar11Config.logo.alt || 'Logo'
                : data.navbar11Config.logo.image.alt || data.navbar11Config.logo.alt || 'Logo',
              width: typeof data.navbar11Config.logo.image === 'object' 
                ? data.navbar11Config.logo.image.width || 240 
                : 240,
              height: typeof data.navbar11Config.logo.image === 'object' 
                ? data.navbar11Config.logo.image.height || 80 
                : 80
            } : {
              url: 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
              alt: data.navbar11Config.logo?.alt || 'Logo',
              width: 240,
              height: 80
            },
            alt: data.navbar11Config.logo?.alt || 'Logo'
          }}
          navLinks={data.navbar11Config.navLinks?.map(link => ({
            title: link.title,
            url: link.url,
            subMenuLinks: link.subMenuLinks?.map(subLink => ({
              icon: {
                src: subLink.icon?.src || 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
                image: {
                  url: (subLink.icon as any)?.image?.url || subLink.icon?.src || 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
                  alt: (subLink.icon as any)?.image?.alt || subLink.icon?.alt || 'Icon',
                  width: (subLink.icon as any)?.image?.width || 24,
                  height: (subLink.icon as any)?.image?.height || 24
                },
                alt: subLink.icon?.alt || 'Icon'
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

  // Si el tipo de navbar es navbarTemplate, renderizar el componente NavbarTemplate
  if (data?.navbarType === 'navbarTemplate' && data?.navbarTemplateConfig) {
    return (
      <div {...(theme ? { 'data-theme': theme } : {})}>
        <NavbarTemplate
          logo={{
            image: data.navbarTemplateConfig.logo?.image,
            text: data.navbarTemplateConfig.logo?.text || 'Logo',
            link: data.navbarTemplateConfig.logo?.link || { type: 'custom', url: '/' },
          }}
          navLinks={data.navbarTemplateConfig.navLinks?.map(link => ({
            title: link.title,
            link: link.link || { type: 'custom', url: '#' },
          })) || []}
          loginButton={{
            title: data.navbarTemplateConfig.loginButton?.title || 'Login',
            link: data.navbarTemplateConfig.loginButton?.link || { type: 'custom', url: '/login' },
          }}
          signupButton={{
            title: data.navbarTemplateConfig.signupButton?.title || 'Signup',
            link: data.navbarTemplateConfig.signupButton?.link || { type: 'custom', url: '/signup' },
          }}
        />
      </div>
    )
  }

  // Si el tipo de navbar es navbar_drop, renderizar Navbar DROP (full-bleed en desktop)
  // Cast: navbar_drop / navbar_drop_config aún no estan en payload-types hasta generate:types
  const headerData = data as Omit<Header, 'navbarType'> & {
    navbarType?: string | null
    navbar_drop_config?: NavbarDropConfig | null
  }
  if (headerData.navbarType === 'navbar_drop' && headerData.navbar_drop_config) {
    const c = headerData.navbar_drop_config
    return (
      <div {...(theme ? { 'data-theme': theme } : {})}>
        <Navbar_DROP
          logo={{
            useMedia: c.logo?.useMedia ?? true,
            media: c.logo?.media,
            src: c.logo?.src ?? 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
            alt: c.logo?.alt ?? 'Logo',
          }}
          navLinks={
            (c.navLinks?.map((link) => ({
              title: link.title ?? '',
              link: link.link ?? { type: 'custom', url: '#' },
              subMenuLinks: link.subMenuLinks?.map((sub) => ({
                title: sub.title ?? '',
                link: sub.link ?? { type: 'custom', url: '#' },
              })),
            })) ?? []) as NonNullable<React.ComponentProps<typeof Navbar_DROP>['navLinks']>
          }
          buttons={
            (c.buttons?.map((btn) => ({
              title: btn.title ?? '',
              link: btn.link ?? { type: 'custom', url: '#' },
              size: (btn.size as 'sm' | 'lg') ?? 'lg',
              variant: (btn.variant as 'default' | 'secondary' | 'ghost' | 'link') ?? 'default',
              iconSVG: btn.iconSVG ?? null,
            })) ?? []) as NonNullable<React.ComponentProps<typeof Navbar_DROP>['buttons']>
          }
          backgroundColor={c.backgroundColor ?? undefined}
          mobileMenuBackgroundColor={c.mobileMenuBackgroundColor ?? undefined}
          textColor={c.textColor ?? undefined}
          boldTextColor={c.boldTextColor ?? undefined}
          buttonBackgroundColor={c.buttonBackgroundColor ?? undefined}
          buttonBackgroundColorSecondary={c.buttonBackgroundColorSecondary ?? undefined}
          buttonTextColor={c.buttonTextColor ?? undefined}
          fontFamily={c.fontFamily ?? undefined}
          useFontGroup={c.useFontGroup ?? false}
          fontGroup={c.fontGroup as React.ComponentProps<typeof Navbar_DROP>['fontGroup']}
          useCustomFont={c.useCustomFont ?? false}
          customFontFile={
            c.customFontFile && typeof c.customFontFile === 'object'
              ? {
                  id: c.customFontFile.id,
                  url: c.customFontFile.url ?? undefined,
                  filename: c.customFontFile.filename ?? undefined,
                  name: c.customFontFile.name ?? undefined,
                }
              : null
          }
          customFontName={c.customFontName ?? undefined}
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
