'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@relume_io/relume-ui'
import type { ButtonProps } from '@relume_io/relume-ui'
import { BiLogoDribbble, BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

// import type { Team1 as Team1Type } from '@/payload-types'

type ImageProps = {
  url: string
  alt?: string
}

type SocialLink = {
  href: string
  platform: 'linkedin' | 'twitter' | 'dribbble'
}

type TeamMember = {
  image: ImageProps
  name: string
  jobTitle: string
  description: string
  socialLinks: SocialLink[]
}

type Footer = {
  heading: string
  description: string
  button: {
    title: string
    variant: 'primary' | 'secondary' | 'outline'
    href: string
  }
}

type Props = {
  tagline?: string
  heading?: string
  description?: string
  teamMembers?: TeamMember[]
  footer?: Footer
  disableInnerContainer?: boolean
}

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'linkedin':
      return <BiLogoLinkedinSquare className="size-6" />
    case 'twitter':
      return <FaXTwitter className="size-6 p-0.5" />
    case 'dribbble':
      return <BiLogoDribbble className="size-6" />
    default:
      return <BiLogoLinkedinSquare className="size-6" />
  }
}

export const Team1: React.FC<Props> = (props) => {
  const { tagline, heading, description, teamMembers, footer, disableInnerContainer } = props

  if (!teamMembers || teamMembers.length === 0) {
    return null
  }

  const content = (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          {tagline && <p className="mb-3 font-semibold md:mb-4">{tagline}</p>}
          {heading && (
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
          )}
          {description && <p className="md:text-md">{description}</p>}
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
        {footer && (
          <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
            <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              {footer.heading}
            </h4>
            <p className="md:text-md">{footer.description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
              <Button
                variant={footer.button.variant as ButtonProps['variant']}
                asChild
              >
                <a href={footer.button.href}>
                  {footer.button.title}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )

  if (disableInnerContainer) {
    return content
  }

  return <div className="block">{content}</div>
}

const TeamMember: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="flex flex-col text-center">
      <div className="rb-5 mb-5 flex w-full items-center justify-center md:mb-6">
        {member.image?.url && (
          <Image
            src={member.image.url}
            alt={member.image.alt || 'Team member image'}
            width={160}
            height={160}
            className="size-20 min-h-20 min-w-20 rounded-full object-cover"
            quality={100}
            priority
          />
        )}
      </div>
      <div className="mb-3 md:mb-4">
        <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
        <h6 className="md:text-md">{member.jobTitle}</h6>
      </div>
      <p>{member.description}</p>
      <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-3.5 self-center">
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
            {getSocialIcon(link.platform)}
          </a>
        ))}
      </div>
    </div>
  )
}
