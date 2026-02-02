'use client'

import React from 'react'
import Image from 'next/image'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from 'react-icons/bi'
import RichText from '@/components/RichText'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import type { Media, Page, Post } from '@/payload-types'
import { getMediaUrl } from '@/utilities/getMediaUrl'
import { validateAndSanitizeURL } from '@/utilities/validateURL'

type ImageProps = {
  url: string
  alt?: string
}

type SimpleLink = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: { relationTo?: string; value?: Page | Post | number } | number | Page | Post | null
  url?: string | null
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
  category?: string | null
  content?: DefaultTypedEditorState
  image?: string | Media | ImageProps | null
  author?: AuthorDetailsProps | null
  socialMediaLinks?: SocialMediaLinkProps[] | null
  backgroundColor?: string
  textColor?: string
  boldTextColor?: string
  disableInnerContainer?: boolean
}

export type BlogPostHeader5Props = React.ComponentPropsWithoutRef<'section'> & Partial<Props>

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
    const url = image.url || ''
    return url ? getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1') : ''
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

export const BlogPostHeader5Block = (props: BlogPostHeader5Props) => {
  const {
    category,
    content,
    image,
    author,
    socialMediaLinks,
    backgroundColor,
    textColor,
    boldTextColor,
  } = {
    ...BlogPostHeader5Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `blog-post-header5-${contentId}`

  const buildStyles = () => {
    const styles: string[] = []
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
  const imageSrc = getImageUrl(image)

  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      {combinedStyles && <style>{combinedStyles}</style>}
      <div className="container relative z-10 max-w-lg text-center">
        {category ? (
          <p className="mb-3 text-sm font-semibold text-text-alternative md:mb-4">{category}</p>
        ) : null}
        {content ? (
          <div
            id={uniqueId}
            className="mb-5 text-text-alternative md:mb-7 lg:mb-8 [&_.RichText]:text-5xl [&_.RichText]:font-bold md:[&_.RichText]:text-7xl lg:[&_.RichText]:text-8xl"
          >
            <RichText data={content} />
          </div>
        ) : null}
        {(author?.fullName || author?.date || author?.readTime || getImageUrl(author?.avatar)) || (socialMediaLinks?.length ?? 0) > 0 ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-12">
            {(author?.fullName || author?.date || author?.readTime || getImageUrl(author?.avatar)) ? (
              <div className="rb-4 flex items-center">
                <div className="rb-4 flex flex-col items-center sm:mb-0">
                  {getImageUrl(author?.avatar) ? (
                    <div className="mb-3 shrink-0 md:mb-4">
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
                  <div className="text-text-alternative">
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
              </div>
            ) : null}
            {socialMediaLinks?.length ? (
              <div className="flex flex-wrap items-center justify-center gap-2">
                {socialMediaLinks.map((item, index) => {
                  const href = getHrefFromSimpleLink(item.link)
                  const hasValidLink = href !== '#'
                  const newTab = item.link?.newTab
                  const icon = getSocialIcon(item.iconType)
                  return hasValidLink ? (
                    <a
                      key={index}
                      href={href}
                      className="rounded-full bg-white/20 p-2 text-text-alternative transition hover:bg-white/30"
                      target={newTab ? '_blank' : undefined}
                      rel={newTab ? 'noopener noreferrer' : undefined}
                    >
                      {icon}
                    </a>
                  ) : (
                    <span
                      key={index}
                      className="inline-flex rounded-full bg-white/20 p-2 text-text-alternative opacity-70"
                      aria-hidden
                    >
                      {icon}
                    </span>
                  )
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="absolute inset-0 z-0">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={getImageAlt(image) || 'Blog post image'}
            width={1200}
            height={600}
            className="size-full object-cover"
          />
        ) : null}
        <div
          className="absolute inset-0"
          style={
            backgroundColor
              ? { backgroundColor }
              : { backgroundColor: 'rgba(0,0,0,0.5)' }
          }
        />
      </div>
    </section>
  )
}

export const BlogPostHeader5Defaults: Props = {
  category: 'Category',
  content: undefined,
  image: {
    url: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
    alt: 'Relume placeholder image',
  },
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
