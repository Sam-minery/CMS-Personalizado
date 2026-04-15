import React from 'react'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import type { SerializedParagraphNode } from 'lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

import type { Media as MediaType } from '@/payload-types'

import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { PAYLOAD_RICHTEXT_SMALL_BODY_CLASS } from '@/constants/payloadRichTextSmallBody'
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

/** Extrae el valor "weight" del nodo desde cualquier ubicación (Lexical puede serializar el estado en distintas claves). */
function getWeightFromNode(node: Record<string, unknown>): string | undefined {
  if (typeof node?.weight === 'string' && TEXT_STATE_WEIGHT_MAP[node.weight] != null) return node.weight
  const state = node?.__state as Record<string, unknown> | undefined
  if (state && typeof state?.weight === 'string' && TEXT_STATE_WEIGHT_MAP[state.weight] != null) return state.weight
  for (const key of Object.keys(node)) {
    const val = node[key]
    if (val && typeof val === 'object' && !Array.isArray(val) && 'weight' in val) {
      const w = (val as Record<string, unknown>).weight
      if (typeof w === 'string' && TEXT_STATE_WEIGHT_MAP[w] != null) return w
    }
  }
  // Último recurso: buscar cualquier valor string que sea un peso válido (p. ej. en arrays o claves numéricas)
  const seen = new Set<object>()
  function findWeight(obj: unknown): string | undefined {
    if (obj == null || typeof obj !== 'object') return undefined
    if (seen.has(obj)) return undefined
    seen.add(obj as object)
    if (typeof (obj as Record<string, unknown>).weight === 'string') {
      const w = (obj as Record<string, unknown>).weight as string
      if (TEXT_STATE_WEIGHT_MAP[w] != null) return w
    }
    for (const v of Object.values(obj as Record<string, unknown>)) {
      const found = findWeight(v)
      if (found) return found
    }
    return undefined
  }
  return findWeight(node)
}

/** Extrae el valor "size" del nodo (p. ej. "caption" para texto pequeño). */
function getSizeFromNode(node: Record<string, unknown>): string | undefined {
  if (typeof node?.size === 'string') return node.size
  const state = node?.__state as Record<string, unknown> | undefined
  if (state && typeof state?.size === 'string') return state.size
  for (const key of Object.keys(node)) {
    const val = node[key]
    if (val && typeof val === 'object' && !Array.isArray(val) && 'size' in val) {
      const s = (val as Record<string, unknown>).size
      if (typeof s === 'string') return s
    }
  }
  const seen = new Set<object>()
  function findSize(obj: unknown): string | undefined {
    if (obj == null || typeof obj !== 'object') return undefined
    if (seen.has(obj as object)) return undefined
    seen.add(obj as object)
    if (typeof (obj as Record<string, unknown>).size === 'string') return (obj as Record<string, string>).size
    for (const v of Object.values(obj as Record<string, unknown>)) {
      const found = findSize(v)
      if (found) return found
    }
    return undefined
  }
  return findSize(node)
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

type SerializedSmallBodyNode = Omit<SerializedParagraphNode, 'type'> & { type: 'small-body' }

type NodeTypes =
  | DefaultNodeTypes
  | SerializedSmallBodyNode
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
    'small-body': ({ node, nodesToJSX }) => {
      const children = nodesToJSX({ nodes: node.children })
      if (!children?.length) {
        return <p className={PAYLOAD_RICHTEXT_SMALL_BODY_CLASS}><br /></p>
      }
      return <p className={PAYLOAD_RICHTEXT_SMALL_BODY_CLASS}>{children}</p>
    },
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
      let weightValue = getWeightFromNode(node)
      if (weightValue && TEXT_STATE_WEIGHT_MAP[weightValue] != null) {
        style.fontWeight = TEXT_STATE_WEIGHT_MAP[weightValue]
      }
      // Si el peso vino solo por CSS (ej. style: "font-weight: 600"), mapear a key para data-text-weight
      if (!weightValue && typeof style.fontWeight === 'number') {
        const numToKey = Object.entries(TEXT_STATE_WEIGHT_MAP).find(([, n]) => n === style.fontWeight)
        if (numToKey) weightValue = numToKey[0]
      }
      const sizeValue = getSizeFromNode(node)
      const isCaption = sizeValue === 'caption'
      if (Object.keys(style).length === 0 && !weightValue && !isCaption) return inner
      const dataAttrs: Record<string, string> = {
        // En producción: inspecciona el DOM; si ves "no-weight" en texto formateado como semibold, el estado no viene en el JSON
        'data-ps-weight-debug': weightValue && TEXT_STATE_WEIGHT_MAP[weightValue] != null ? weightValue : 'no-weight',
      }
      if (weightValue && TEXT_STATE_WEIGHT_MAP[weightValue] != null) {
        dataAttrs['data-text-weight'] = weightValue
      }
      const className = isCaption ? 'caption' : undefined
      if (isCaption) dataAttrs['data-text-size'] = 'caption'
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
