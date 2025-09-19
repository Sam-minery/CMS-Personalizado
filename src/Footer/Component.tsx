import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Footer4 } from './Footer4'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // Si el tipo de footer es footer4, renderizar el componente Footer4
  if (footerData?.footerType === 'footer4' && footerData?.footer4Config) {
    // Mapear los iconos de redes sociales basado en la plataforma
    const getSocialIcon = (platform: string) => {
      switch (platform) {
        case 'facebook':
          return <BiLogoFacebookCircle className="size-6" />
        case 'instagram':
          return <BiLogoInstagram className="size-6" />
        case 'twitter':
          return <FaXTwitter className="size-6 p-0.5" />
        case 'linkedin':
          return <BiLogoLinkedinSquare className="size-6" />
        case 'youtube':
          return <BiLogoYoutube className="size-6" />
        default:
          return <BiLogoFacebookCircle className="size-6" />
      }
    }

    return (
      <Footer4
        logo={{
          url: footerData.footer4Config.logo?.url || '#',
          src: footerData.footer4Config.logo?.src || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
          alt: footerData.footer4Config.logo?.alt || 'Logo'
        }}
        columnLinks={footerData.footer4Config.columnLinks?.map(column => ({
          links: column.links?.map(link => ({
            title: link.title,
            url: link.url
          })) || []
        })) || []}
        socialMediaLinks={footerData.footer4Config.socialMediaLinks?.map(social => ({
          url: social.url,
          icon: getSocialIcon(social.platform || 'facebook')
        })) || []}
        footerText={footerData.footer4Config.footerText || '© 2024 Relume. All rights reserved.'}
        footerLinks={footerData.footer4Config.footerLinks?.map(link => ({
          title: link.title,
          url: link.url
        })) || []}
      />
    )
  }

  // Renderizar el footer por defecto
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
    </footer>
  )
}
