'use client'

import React from 'react'
import { Button } from '@relume_io/relume-ui'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from 'react-icons/bi'
import { RxChevronLeft } from 'react-icons/rx'
import Image from 'next/image'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { Media, Page, Post } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { validateAndSanitizeURL } from '@/utilities/validateURL'
import { useGoogleFont } from '@/utilities/useGoogleFont'

type ImageProps = {
  url: string
  alt?: string
}

type FontFile = {
  id: string | number
  url: string
  filename?: string
  name?: string
}

type SimpleLink = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: { relationTo?: string; value?: Page | Post | number } | number | Page | Post | null
  url?: string | null
}

type SocialMediaLinkProps = {
  platform: 'link' | 'linkedin' | 'twitter' | 'facebook'
  link?: SimpleLink | null
}

type Props = {
  button?: {
    title?: string
    variant?: string
    size?: string
    link?: SimpleLink | null
  }
  category?: string | null
  readTime?: string | null
  content?: DefaultTypedEditorState
  image?: string | Media | ImageProps | null
  authorName?: string | null
  publishedDate?: string | null
  socialMediaLinks?: SocialMediaLinkProps[] | null
  backgroundColor?: string
  textColor?: string
  boldTextColor?: string
  fontFamily?: string
  useCustomFont?: boolean
  customFontFile?: FontFile
  customFontName?: string
  disableInnerContainer?: boolean
}

export type BlogPostHeader2Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

function getHrefFromSimpleLink(link: SimpleLink | null | undefined): string {
  if (!link) return '#'
  if (link.type === 'reference' && link.reference != null) {
    const ref = link.reference as { relationTo?: string; value?: Page | Post | number } | undefined
    const value = ref && typeof ref === 'object' && 'value' in ref ? ref.value : ref
    if (value && typeof value === 'object' && 'slug' in value) {
      const slug = (value as { slug: string }).slug
      const relationTo = ref && typeof ref === 'object' && 'relationTo' in ref ? ref.relationTo : undefined
      return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
    }
  }
  if (link.type === 'custom' && link.url) {
    const sanitized = validateAndSanitizeURL(link.url, { allowRelative: true, allowAbsolute: true, logBlocked: false })
    return sanitized || '#'
  }
  return '#'
}

const getImageUrl = (image: string | Media | ImageProps | null | undefined): string => {
  if (!image) return ''
  if (typeof image === 'string') return image
  if (typeof image === 'object' && image !== null && 'url' in image) {
    return image.url || ''
  }
  return ''
}

const getImageAlt = (image: string | Media | ImageProps | null | undefined): string => {
  if (!image || typeof image !== 'object' || !('alt' in image)) return ''
  return image.alt || ''
}

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'link':
      return <BiLinkAlt className="size-6" />
    case 'linkedin':
      return <BiLogoLinkedinSquare className="size-6" />
    case 'twitter':
      return <FaXTwitter className="size-6 p-0.5" />
    case 'facebook':
      return <BiLogoFacebookCircle className="size-6" />
    default:
      return <BiLinkAlt className="size-6" />
  }
}

export const BlogPostHeader2 = (props: BlogPostHeader2Props) => {
  const {
    button,
    category,
    readTime,
    content,
    image,
    authorName,
    publishedDate,
    socialMediaLinks,
    backgroundColor,
    textColor,
    boldTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = {
    ...BlogPostHeader2Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `blog-post-header2-${contentId}`

  const getFontFamily = () => {
    if (useCustomFont && customFontName) return `"${customFontName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }
  const selectedFontFamily = getFontFamily()
  useGoogleFont(selectedFontFamily)

  const fontFileUrl = customFontFile?.url ? getMediaUrl(customFontFile.url).replace(/([^:]\/)\/+/g, '$1') : null
  const isValidFontFile =
    fontFileUrl && customFontFile?.filename && /\.(woff|woff2|ttf|otf)$/i.test(customFontFile.filename)

  const buildStyles = () => {
    const styles: string[] = []
    if (useCustomFont && fontFileUrl && customFontName && isValidFontFile) {
      styles.push(`
        @font-face {
          font-family: "${customFontName.replace(/"/g, '\\"')}";
          src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `)
    }
    const containerRules: string[] = []
    if (useCustomFont && customFontName && isValidFontFile) {
      containerRules.push(`font-family: "${customFontName.replace(/"/g, '\\"')}" !important;`)
    } else if (selectedFontFamily && !useCustomFont) {
      containerRules.push(`font-family: ${selectedFontFamily} !important;`)
    }
    if (containerRules.length > 0) {
      styles.push(`#${uniqueId}, #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6, #${uniqueId} a { ${containerRules.join(' ')} }`)
    }
    if (textColor) {
      styles.push(`
        #${uniqueId}, #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6, #${uniqueId} span:not(strong):not(b), #${uniqueId} a { color: ${textColor} !important; }
      `)
    }
    if (boldTextColor) {
      styles.push(`#${uniqueId} strong, #${uniqueId} b { color: ${boldTextColor} !important; }`)
    }
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const imageSrc = getImageUrl(image)

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {combinedStyles && <style>{combinedStyles}</style>}
      <div className="container">
        <div className="rb-12 mb-12 flex flex-col items-start justify-start md:mb-18 lg:mb-20">
          {button?.link && (button.link.type === 'reference' || (button.link.type === 'custom' && button.link.url)) ? (
            <Button
              className="mb-8 md:mb-10 lg:mb-12"
              asChild
              variant={
                button.variant === 'link' ? 'link' : button.variant === 'default' ? 'primary' : button.variant === 'outline' || button.variant === 'destructive' ? 'secondary' : (button.variant as 'primary' | 'secondary' | 'ghost')
              }
              size={button.size === 'link' ? 'link' : button.size === 'lg' ? 'primary' : 'sm'}
            >
              <CMSLink
                type={button.link.type ?? undefined}
                newTab={button.link.newTab ?? undefined}
                url={button.link.url ?? undefined}
                reference={
                  button.link.reference != null &&
                  typeof button.link.reference === 'object' &&
                  'relationTo' in button.link.reference &&
                  'value' in button.link.reference &&
                  button.link.reference.value != null
                    ? { relationTo: button.link.reference.relationTo as 'pages' | 'posts', value: button.link.reference.value }
                    : undefined
                }
              >
                <RxChevronLeft className="mr-2" />
                {button.title}
              </CMSLink>
            </Button>
          ) : null}
          {(category != null && category !== '') || (readTime != null && readTime !== '') ? (
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              {category ? <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">{category}</p> : null}
              {readTime ? <p className="inline text-sm font-semibold">{readTime}</p> : null}
            </div>
          ) : null}
          {content ? (
            <div id={uniqueId} className="[&_.RichText]:text-5xl [&_.RichText]:font-bold md:[&_.RichText]:text-7xl lg:[&_.RichText]:text-8xl">
              <RichText data={content} />
            </div>
          ) : null}
        </div>
        {imageSrc ? (
          <div className="mx-auto mb-8 w-full overflow-hidden md:mb-12 lg:mb-8">
            <Image
              src={imageSrc}
              alt={getImageAlt(image) || 'Blog post image'}
              width={1200}
              height={480}
              className="aspect-[5/2] size-full object-cover"
            />
          </div>
        ) : null}
        {(authorName || publishedDate || (socialMediaLinks?.length ?? 0) > 0) ? (
          <div className="flex w-full flex-col items-start justify-between md:flex-row">
            {(authorName || publishedDate) ? (
              <div className="rb-4 mb-4 flex items-center sm:mb-8 md:mb-0">
                {publishedDate ? (
                  <div className="mr-8 md:mr-10 lg:mr-12">
                    <p className="mb-2">Published on</p>
                    <p className="font-medium">{publishedDate}</p>
                  </div>
                ) : null}
                {authorName ? (
                  <div className="mr-8 md:mr-10 lg:mr-12">
                    <p className="mb-2">Written by</p>
                    <p className="font-medium">{authorName}</p>
                  </div>
                ) : null}
              </div>
            ) : null}
            {socialMediaLinks?.length ? (
              <div className="grid grid-flow-col grid-cols-[max-content] items-start gap-2">
                {socialMediaLinks.map((item, index) => {
                  const href = getHrefFromSimpleLink(item.link)
                  const hasValidLink = href !== '#'
                  const newTab = item.link?.newTab
                  const icon = getSocialIcon(item.platform)
                  return hasValidLink ? (
                    <a
                      key={index}
                      href={href}
                      className="rounded-[1.25rem] bg-background-secondary p-1"
                      target={newTab ? '_blank' : undefined}
                      rel={newTab ? 'noopener noreferrer' : undefined}
                    >
                      {icon}
                    </a>
                  ) : (
                    <span key={index} className="inline-flex rounded-[1.25rem] bg-background-secondary p-1 opacity-70" aria-hidden>
                      {icon}
                    </span>
                  )
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export const BlogPostHeader2Defaults: Props = {
  button: {
    title: 'All Posts',
    variant: 'link',
    size: 'link',
    link: { type: 'custom', url: '#' },
  },
  category: 'Category',
  readTime: '5 min read',
  content: undefined,
  authorName: 'Full Name',
  publishedDate: '22 January 2021',
  socialMediaLinks: [
    { platform: 'link', link: { type: 'custom', url: '#' } },
    { platform: 'linkedin', link: { type: 'custom', url: '#' } },
    { platform: 'twitter', link: { type: 'custom', url: '#' } },
    { platform: 'facebook', link: { type: 'custom', url: '#' } },
  ],
  image: {
    url: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
    alt: 'Relume placeholder image',
  },
}
