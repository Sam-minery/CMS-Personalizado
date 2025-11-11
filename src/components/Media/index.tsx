import React, { Fragment } from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  const isVideo = typeof resource === 'object' && resource?.mimeType?.includes('video')
  const content = isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />

  if (htmlElement === null) {
    return <Fragment>{content}</Fragment>
  }

  // Si htmlElement es un string, lo usamos como nombre de elemento HTML
  if (typeof htmlElement === 'string') {
    const Tag = htmlElement
    return (
      // @ts-expect-error - Dynamic element type is valid
      <Tag className={className}>
        {content}
      </Tag>
    )
  }

  // Si es un componente, lo usamos directamente
  const Tag = htmlElement
  return (
    <Tag className={className}>
      {content}
    </Tag>
  )
}
