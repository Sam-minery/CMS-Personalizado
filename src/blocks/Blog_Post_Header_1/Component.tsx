'use client'

import React from 'react'
import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from 'react-icons/bi'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@relume_io/relume-ui'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { Media, Page, Post } from '@/payload-types'
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

type BreadcrumbProps = {
  title: string
  link: SimpleLink
}

type SocialMediaLinkProps = {
  iconType: 'link' | 'linkedin' | 'twitter' | 'facebook'
  link?: SimpleLink | null
}

type AuthorDetailsProps = {
  avatar?: string | Media | ImageProps | null
  fullName?: string | null
  date?: string | null
  readTime?: string | null
}

type Props = {
  breadcrumbs: BreadcrumbProps[]
  content?: DefaultTypedEditorState
  image?: string | Media | ImageProps | null
  author?: AuthorDetailsProps | null
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

export type BlogPostHeader1Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

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

const getSocialIcon = (iconType: string) => {
  switch (iconType) {
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

export const BlogPostHeader1Block = (props: BlogPostHeader1Props) => {
  const {
    breadcrumbs,
    content,
    image,
    author,
    socialMediaLinks,
    backgroundColor,
    textColor,
    boldTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = {
    ...BlogPostHeader1Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `blog-post-header1-${contentId}`

  const getFontFamily = () => {
    if (useCustomFont && customFontName) return `"${customFontName}"`
    if (fontFamily && fontFamily !== 'default') return fontFamily
    return undefined
  }
  const selectedFontFamily = getFontFamily()
  useGoogleFont(selectedFontFamily)

  const fontFileUrl = customFontFile?.url
    ? getMediaUrl(customFontFile.url).replace(/([^:]\/)\/+/g, '$1')
    : null
  const isValidFontFile =
    fontFileUrl &&
    customFontFile?.filename &&
    /\.(woff|woff2|ttf|otf)$/i.test(customFontFile.filename)

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
      styles.push(`
        #${uniqueId},
        #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b), #${uniqueId} a {
          ${containerRules.join('\n          ')}
        }
      `)
    }
    if (textColor) {
      styles.push(`
        #${uniqueId},
        #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b), #${uniqueId} a {
          color: ${textColor} !important;
        }
      `)
    }
    if (boldTextColor) {
      styles.push(`
        #${uniqueId} strong, #${uniqueId} b {
          color: ${boldTextColor} !important;
        }
      `)
    }
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {combinedStyles && <style>{combinedStyles}</style>}
      <div className="container">
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
          {breadcrumbs?.length ? (
            <Breadcrumb className="mb-6 flex w-full items-center">
              <BreadcrumbList>
                {breadcrumbs.map((item, index) => {
                  const href = getHrefFromSimpleLink(item.link)
                  const linkData = item.link
                  const newTab = linkData?.newTab
                  return (
                    <React.Fragment key={index}>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href={href}
                          target={newTab ? '_blank' : undefined}
                          rel={newTab ? 'noopener noreferrer' : undefined}
                        >
                          {item.title}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          ) : null}
          {content ? (
            <div id={uniqueId} className="mb-8 [&_.RichText]:text-5xl [&_.RichText]:font-bold md:mb-10 md:[&_.RichText]:text-7xl lg:mb-12 lg:[&_.RichText]:text-8xl">
              <RichText data={content} />
            </div>
          ) : null}
          {(author?.fullName || author?.date || author?.readTime || getImageUrl(author?.avatar)) || (socialMediaLinks?.length ?? 0) > 0 ? (
            <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
              {(author?.fullName || author?.date || author?.readTime || getImageUrl(author?.avatar)) ? (
                <div className="rb-4 mb-4 flex items-center sm:mb-0">
                  {getImageUrl(author?.avatar) ? (
                    <div className="mr-4 shrink-0">
                      <Image
                        src={getImageUrl(author?.avatar)}
                        alt={getImageAlt(author?.avatar) || 'Author avatar'}
                        width={112}
                        height={112}
                        className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                        quality={100}
                        priority
                      />
                    </div>
                  ) : null}
                  <div>
                    {author?.fullName ? <h6 className="font-semibold">{author.fullName}</h6> : null}
                    {(author?.date || author?.readTime) ? (
                      <div className="mt-1 flex">
                        {author?.date ? <p className="text-sm">{author.date}</p> : null}
                        {author?.date && author?.readTime ? <span className="mx-2">•</span> : null}
                        {author?.readTime ? <p className="text-sm">{author.readTime}</p> : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
              {socialMediaLinks?.length ? (
                <div className="rt-4 mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
                  {socialMediaLinks.map((item, index) => {
                    const href = getHrefFromSimpleLink(item.link)
                    const hasValidLink = href !== '#'
                    const newTab = item.link?.newTab
                    const icon = getSocialIcon(item.iconType)
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
        {getImageUrl(image) ? (
          <div className="mx-auto w-full overflow-hidden">
            <Image
              src={getImageUrl(image)}
              alt={getImageAlt(image) || 'Blog post image'}
              width={1200}
              height={600}
              className="aspect-[2] size-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  )
}

export const BlogPostHeader1Defaults: Props = {
  breadcrumbs: [
    { title: 'Blog', link: { type: 'custom', url: '#' } },
    { title: 'Category', link: { type: 'custom', url: '#' } },
  ],
  content: undefined,
  image: undefined,
  author: {
    avatar: {
      url: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
      alt: 'Relume placeholder avatar',
    },
    fullName: 'Full name',
    date: '11 Jan 2022',
    readTime: '5 min read',
  },
  socialMediaLinks: [
    { iconType: 'link', link: { type: 'custom', url: '#' } },
    { iconType: 'linkedin', link: { type: 'custom', url: '#' } },
    { iconType: 'twitter', link: { type: 'custom', url: '#' } },
    { iconType: 'facebook', link: { type: 'custom', url: '#' } },
  ],
}
