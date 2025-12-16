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

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
  custom2: Custom2Hero,
  header1: Header1Hero,
  header5: Header5Hero,
  header138: Header138Hero,
  heroTemplate: HeroTemplate,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
