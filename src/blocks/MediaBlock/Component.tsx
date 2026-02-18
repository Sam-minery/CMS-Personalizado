import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { StaticImageData } from 'next/image'

import type { Media as MediaType } from '@/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'

import { Media } from '../../components/Media'

type Props = {
  media?: MediaType | number | null
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
  } = props

  let caption: string | DefaultTypedEditorState | undefined
  if (media && typeof media === 'object') caption = media.caption as string | DefaultTypedEditorState | undefined

  return (
    <div
      className={cn(
        '',
        {
          container: enableGutter,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('border border-border rounded-[0.8rem]', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption != null && (
        <div
          className={cn(
            'mt-6',
            {
              container: !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          {typeof caption === 'string' ? (
            <p className="text-sm text-muted-foreground">{caption}</p>
          ) : (
            <RichText data={caption} enableGutter={false} />
          )}
        </div>
      )}
    </div>
  )
}
