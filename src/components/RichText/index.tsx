import React from 'react'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

import type { Media as MediaType } from '@/payload-types'

import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { cn } from '@/utilities/ui'

/** Convierte "font-weight: 600" -> { fontWeight: 600 }; soporta varias propiedades. */
function cssStringToReactStyle(cssString: string): React.CSSProperties {
  const style: Record<string, string | number> = {}
  if (!cssString || typeof cssString !== 'string') return style
  const decls = cssString.split(';').map((s) => s.trim()).filter(Boolean)
  for (const decl of decls) {
    const colon = decl.indexOf(':')
    if (colon === -1) continue
    const prop = decl.slice(0, colon).trim().replace(/-([a-z])/g, (_, l) => l.toUpperCase())
    const value = decl.slice(colon + 1).trim()
    if (prop && value) style[prop] = /^\d+$/.test(value) ? parseInt(value, 10) : value
  }
  return style as React.CSSProperties
}

/** Pesos de TextStateFeature (weight) -> font-weight para el frontend. */
const TEXT_STATE_WEIGHT_MAP: Record<string, number> = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  heavy: 800,
}

/** Tipos locales: los bloques embebidos en rich text pueden no estar en enabledBlockSlugs, así que no importamos *Block desde payload-types. */
type BannerBlockProps = {
  style?: 'info' | 'warning' | 'error' | 'success'
  content?: DefaultTypedEditorState
}
type CTALink = { type?: 'custom' | 'reference' | null; url?: string; label?: string; newTab?: boolean; doc?: unknown }
type CTABlockProps = {
  richText?: DefaultTypedEditorState
  links?: Array<{ link: CTALink }>
}
type MediaBlockProps = {
  media?: MediaType | number | null
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  disableInnerContainer?: boolean
}

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => {
  const defaultTextConverter = defaultConverters.text
  return {
    ...defaultConverters,
    text: (args) => {
      const inner =
        typeof defaultTextConverter === 'function'
          ? defaultTextConverter(args)
          : (args.node?.text as string) ?? ''
      const node = args.node as Record<string, unknown> & { text?: string; style?: string; weight?: string }
      const style: React.CSSProperties = {}
      const rawStyle = node?.style ?? node?.__style
      const cssString = typeof rawStyle === 'string' ? rawStyle : ''
      if (cssString) Object.assign(style, cssStringToReactStyle(cssString))
      // Lexical NodeState puede serializarse como node.weight o node.__state?.weight
      let weightValue: string | undefined =
        typeof node?.weight === 'string'
          ? node.weight
          : typeof (node?.__state as Record<string, unknown>)?.weight === 'string'
            ? (node.__state as Record<string, string>).weight
            : undefined
      if (weightValue && TEXT_STATE_WEIGHT_MAP[weightValue] != null) {
        style.fontWeight = TEXT_STATE_WEIGHT_MAP[weightValue]
      }
      // Si el peso vino solo por CSS (ej. style: "font-weight: 600"), mapear a key para data-text-weight
      if (!weightValue && typeof style.fontWeight === 'number') {
        const numToKey = Object.entries(TEXT_STATE_WEIGHT_MAP).find(([, n]) => n === style.fontWeight)
        if (numToKey) weightValue = numToKey[0]
      }
      const sizeValue =
        typeof node?.size === 'string'
          ? node.size
          : typeof (node?.__state as Record<string, unknown>)?.size === 'string'
            ? (node.__state as Record<string, string>).size
            : undefined
      const isCaption = sizeValue === 'caption'
      if (Object.keys(style).length === 0 && !weightValue && !isCaption) return inner
      const dataAttrs: Record<string, string> = {}
      if (weightValue && TEXT_STATE_WEIGHT_MAP[weightValue] != null) {
        dataAttrs['data-text-weight'] = weightValue
      }
      const className = isCaption ? 'caption' : undefined
      return React.createElement('span', { style, className, ...dataAttrs }, inner)
    },
    ...LinkJSXConverter({ internalDocToHref }),
    blocks: {
    banner: ({ node }: { node: { fields: BannerBlockProps } }) => (
      <BannerBlock className="col-start-2 mb-4" {...node.fields} />
    ),
    mediaBlock: ({ node }: { node: { fields: MediaBlockProps } }) => (
      <MediaBlock
        className="col-start-1 col-span-3"
        imgClassName="m-0"
        {...node.fields}
        captionClassName="mx-auto max-w-[48rem]"
        enableGutter={false}
        disableInnerContainer={true}
      />
    ),
    code: ({ node }: { node: { fields: CodeBlockProps } }) => (
      <CodeBlock className="col-start-2" {...node.fields} />
    ),
    cta: ({ node }: { node: { fields: CTABlockProps } }) => (
      <CallToActionBlock {...node.fields} />
    ),
  },
  }
}

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        'payload-richtext',
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'mx-auto prose md:prose-md dark:prose-invert': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
