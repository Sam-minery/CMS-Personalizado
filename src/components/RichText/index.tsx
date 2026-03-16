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

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
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
})

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
