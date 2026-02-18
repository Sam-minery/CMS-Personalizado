import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import React from 'react'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'

/** Tipo local: solo los bloques en enabledBlockSlugs tienen tipo en payload-types. */
type CTABlockProps = {
  richText?: DefaultTypedEditorState
  links?: Array<{ link: { type?: 'custom' | 'reference' | null; url?: string; label?: string; newTab?: boolean; doc?: unknown } }>
}

export const CallToActionBlock: React.FC<CTABlockProps> = ({ links, richText }) => {
  return (
    <div className="container">
      <div className="bg-card rounded border-border border p-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="max-w-[48rem] flex items-center">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-8">
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} size="lg" {...link} />
          })}
        </div>
      </div>
    </div>
  )
}
