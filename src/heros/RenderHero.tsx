import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import { Custom2Hero } from '@/heros/Custom2'
import { Header1Hero } from '@/heros/Header1'
import { Header5Hero } from '@/heros/Header5'
import { Header138Hero } from '@/heros/Header138'
import { HeroTemplate } from '@/heros/heroTemplate'
import { Hero_SENDA } from '@/heros/Hero_SENDA'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  custom2: Custom2Hero,
  header1: Header1Hero,
  header5: Header5Hero,
  header138: Header138Hero,
  heroTemplate: HeroTemplate,
  heroSenda: Hero_SENDA,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  const { richText, links, ...rest } = props
  const heroProps = {
    ...rest,
    richText: richText ?? undefined,
    links: links ?? undefined,
  }
  // Payload permite null en hero; los componentes esperan undefined. Normalizamos en runtime; aseveración para compatibilidad de tipos.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <HeroToRender {...(heroProps as any)} />
}
