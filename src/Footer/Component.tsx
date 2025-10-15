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
import { Footer1 } from '@/blocks/Footer1/Component'
import { Footer5 } from '@/blocks/Footer5/Component'
import { mapPayloadLinkToComponentLink, mapPayloadMediaToComponentMedia, mapPayloadButtonToComponentButton, createDefaultMedia } from './utils'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // Si el tipo de footer es footer1, renderizar el componente Footer1
  if (footerData?.footerType === 'footer1' && footerData?.footer1Config) {
    return (
      <Footer1
        logo={{
          media: mapPayloadMediaToComponentMedia(footerData.footer1Config.logo?.media) || createDefaultMedia(),
          link: mapPayloadLinkToComponentLink(footerData.footer1Config.logo?.link)
        }}
        newsletterDescription={footerData.footer1Config.newsletterDescription || 'Join our newsletter to stay up to date on features and releases.'}
        inputPlaceholder={footerData.footer1Config.inputPlaceholder || 'Enter your email'}
        button={mapPayloadButtonToComponentButton(footerData.footer1Config.button)}
        termsAndConditions={footerData.footer1Config.termsAndConditions ? {
          text: footerData.footer1Config.termsAndConditions.text || 'By subscribing you agree to with our',
          link: mapPayloadLinkToComponentLink(footerData.footer1Config.termsAndConditions.link),
          suffix: footerData.footer1Config.termsAndConditions.suffix || 'and provide consent to receive updates from our company.'
        } : undefined}
        columnLinks={footerData.footer1Config.columnLinks?.map(column => ({
          title: column.title,
          links: column.links?.map(link => ({
            title: link.title,
            link: mapPayloadLinkToComponentLink(link.link),
            icon: link.icon || undefined
          })) || []
        })) || []}
        footerText={footerData.footer1Config.footerText || '© 2024 Relume. All rights reserved.'}
        footerLinks={footerData.footer1Config.footerLinks?.map(link => ({
          title: link.title,
          link: mapPayloadLinkToComponentLink(link.link)
        })) || []}
      />
    )
  }

  // Si el tipo de footer es footer5, renderizar el componente Footer5
  if (footerData?.footerType === 'footer5' && footerData?.footer5Config) {
    return (
      <Footer5
        logo={{
          media: mapPayloadMediaToComponentMedia(footerData.footer5Config.logo?.media) || createDefaultMedia(),
          link: mapPayloadLinkToComponentLink(footerData.footer5Config.logo?.link)
        }}
        newsletterHeading={footerData.footer5Config.newsletterHeading || 'Join our newsletter'}
        newsletterDescription={footerData.footer5Config.newsletterDescription || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        inputPlaceholder={footerData.footer5Config.inputPlaceholder || 'Enter your email'}
        button={mapPayloadButtonToComponentButton(footerData.footer5Config.button)}
        termsAndConditions={footerData.footer5Config.termsAndConditions ? {
          text: footerData.footer5Config.termsAndConditions.text || 'By subscribing you agree to with our',
          link: mapPayloadLinkToComponentLink(footerData.footer5Config.termsAndConditions.link),
          suffix: footerData.footer5Config.termsAndConditions.suffix || 'and provide consent to receive updates from our company.'
        } : undefined}
        columnLinks={footerData.footer5Config.columnLinks?.map(column => ({
          title: column.title,
          links: column.links?.map(link => ({
            title: link.title,
            link: mapPayloadLinkToComponentLink(link.link)
          })) || []
        })) || []}
        socialMediaLinks={footerData.footer5Config.socialMediaLinks?.map(social => ({
          url: social.link?.url || '#',
          icon: social.icon || 'facebook'
        })) || []}
        footerText={footerData.footer5Config.footerText || '© 2024 Relume. All rights reserved.'}
        footerLinks={footerData.footer5Config.footerLinks?.map(link => ({
          title: link.title,
          link: mapPayloadLinkToComponentLink(link.link)
        })) || []}
      />
    )
  }

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

    const logoMedia = mapPayloadMediaToComponentMedia(footerData.footer4Config.logo?.media)
    const logoLink = mapPayloadLinkToComponentLink(footerData.footer4Config.logo?.link)
    
    return (
      <Footer4
        logo={{
          url: logoLink?.url || '#',
          src: logoMedia?.url || 'https://d22po4pjz3o32e.cloudfront.net/logo-image.svg',
          alt: logoMedia?.alt || 'Logo'
        }}
        columnLinks={footerData.footer4Config.columnLinks?.map(column => ({
          links: column.links?.map(link => ({
            title: link.title,
            url: link.link?.url || '#'
          })) || []
        })) || []}
        socialMediaLinks={footerData.footer4Config.socialMediaLinks?.map(social => ({
          url: social.link?.url || '#',
          icon: getSocialIcon(social.platform || 'facebook')
        })) || []}
        footerText={footerData.footer4Config.footerText || '© 2024 Relume. All rights reserved.'}
        footerLinks={footerData.footer4Config.footerLinks?.map(link => ({
          title: link.title,
          url: link.link?.url || '#'
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
