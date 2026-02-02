'use client'

import React from 'react'
import Image from 'next/image'
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

type PostLink = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: { relationTo: 'pages' | 'posts'; value: Page | Post | number } | null
  url?: string | null
}

type BlogPost = {
  type?: 'reference' | 'custom' | null
  newTab?: boolean | null
  reference?: { relationTo: 'pages' | 'posts'; value: Page | Post | number } | null
  url?: string | null
  image: string | Media | ImageProps
  category?: string | null
  postContent?: DefaultTypedEditorState
  readTime?: string | null
  avatar: string | Media | ImageProps
  fullName?: string | null
  date?: string | null
}

type FeaturedBlogPost = BlogPost

type SmallFeaturedBlogPost = BlogPost

type Props = {
  tagline: string
  content?: DefaultTypedEditorState
  featuredBlogIitle?: string
  featuredBlogPost?: FeaturedBlogPost | null
  smallFeaturedBlogPosts?: SmallFeaturedBlogPost[]
  latestBlogTitle?: string
  blogPosts?: BlogPost[]
  backgroundColor?: string
  textColor?: string
  boldTextColor?: string
  fontFamily?: string
  useCustomFont?: boolean
  customFontFile?: FontFile
  customFontName?: string
  disableInnerContainer?: boolean
}

export type Blog9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

function getHrefFromPostLink(link: PostLink | null | undefined): string {
  if (!link) return '#'
  const rawHref =
    link.type === 'reference' && typeof link.reference?.value === 'object' && link.reference.value && 'slug' in link.reference.value
      ? `${link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''}/${(link.reference.value as { slug: string }).slug}`
      : link.url
  if (!rawHref) return '#'
  const href =
    link.type === 'reference'
      ? rawHref
      : validateAndSanitizeURL(rawHref, { allowRelative: true, allowAbsolute: true, logBlocked: false })
  return href || '#'
}

const getImageUrl = (image: string | Media | ImageProps): string => {
  if (typeof image === 'string') return image
  if (image && typeof image === 'object' && image !== null && 'url' in image) {
    const url = image.url || ''
    return url ? getMediaUrl(url).replace(/([^:]\/)\/+/g, '$1') : ''
  }
  return ''
}

const getImageAlt = (image: string | Media | ImageProps): string => {
  if (typeof image === 'string') return ''
  if (image && typeof image === 'object' && 'alt' in image) {
    return image.alt || ''
  }
  return ''
}

export const Blog9Block = (props: Blog9Props) => {
  const {
    tagline,
    content,
    featuredBlogIitle,
    featuredBlogPost,
    smallFeaturedBlogPosts,
    latestBlogTitle,
    blogPosts,
    backgroundColor,
    textColor,
    boldTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = {
    ...Blog9Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `blog9-content-${contentId}`

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
        .blog9-post-content {
          ${containerRules.join('\n          ')}
        }
      `)
    }
    if (textColor) {
      styles.push(`
        #${uniqueId},
        #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b), #${uniqueId} div:not([class*="RichText"]), #${uniqueId} li, #${uniqueId} a,
        .blog9-post-content,
        .blog9-post-content p, .blog9-post-content h1, .blog9-post-content h2, .blog9-post-content h3,
        .blog9-post-content h4, .blog9-post-content h5, .blog9-post-content h6,
        .blog9-post-content span:not(strong):not(b), .blog9-post-content li, .blog9-post-content a {
          color: ${textColor} !important;
        }
      `)
    }
    if (boldTextColor) {
      styles.push(`
        #${uniqueId} strong, #${uniqueId} b,
        .blog9-post-content strong, .blog9-post-content b {
          color: ${boldTextColor} !important;
        }
      `)
    }
    return styles.length > 0 ? styles.join('\n') : ''
  }

  const combinedStyles = buildStyles()
  const featuredHref = featuredBlogPost ? getHrefFromPostLink(featuredBlogPost) : '#'
  const featuredNewTabProps = featuredBlogPost?.newTab ? { rel: 'noopener noreferrer' as const, target: '_blank' as const } : {}

  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {combinedStyles && <style>{combinedStyles}</style>}
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg" id={uniqueId}>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            {content && <RichText data={content} />}
          </div>
        </div>
        <div className="flex flex-col justify-start">
          {featuredBlogIitle && (
            <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">{featuredBlogIitle}</h2>
          )}
          <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 sm:gap-y-14 md:mb-16 lg:mb-20 lg:grid-cols-2">
            {featuredBlogPost && (
              <div className="mb-12">
                {getImageUrl(featuredBlogPost.image) && (
                  <a href={featuredHref} className="w-full" {...featuredNewTabProps}>
                    <Image
                      src={getImageUrl(featuredBlogPost.image)}
                      alt={getImageAlt(featuredBlogPost.image) || 'Featured blog post'}
                      width={600}
                      height={400}
                      className="mb-6 aspect-[3/2] size-full object-cover"
                    />
                  </a>
                )}
                <div className="flex h-full flex-col items-start justify-center">
                  {featuredBlogPost.category && (
                    <p className="mb-2 text-sm font-semibold">{featuredBlogPost.category}</p>
                  )}
                  <div className="flex w-full flex-col items-start justify-start">
                    {featuredBlogPost.postContent && (
                      <a className="mb-4" href={featuredHref} {...featuredNewTabProps}>
                        <div className="blog9-post-content [&_.RichText]:text-2xl [&_.RichText]:font-bold md:[&_.RichText]:text-3xl md:[&_.RichText]:leading-[1.3] lg:[&_.RichText]:text-4xl">
                          <RichText data={featuredBlogPost.postContent} />
                        </div>
                      </a>
                    )}
                    {(featuredBlogPost.fullName || featuredBlogPost.date || featuredBlogPost.readTime) && (
                      <div className="mt-6 flex items-center">
                        {getImageUrl(featuredBlogPost.avatar) && (
                          <div className="mr-4 shrink-0">
                            <Image
                              src={getImageUrl(featuredBlogPost.avatar)}
                              alt={getImageAlt(featuredBlogPost.avatar) || 'Author avatar'}
                              width={48}
                              height={48}
                              className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          {featuredBlogPost.fullName && <h6 className="text-sm font-semibold">{featuredBlogPost.fullName}</h6>}
                          <div className="flex items-center">
                            {featuredBlogPost.date && <p className="text-sm">{featuredBlogPost.date}</p>}
                            {featuredBlogPost.date && featuredBlogPost.readTime && <span className="mx-2">•</span>}
                            {featuredBlogPost.readTime && <p className="text-sm">{featuredBlogPost.readTime}</p>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-y-8 md:gap-y-12 lg:gap-y-8">
              {smallFeaturedBlogPosts?.map((post, index) => {
                const postHref = getHrefFromPostLink(post)
                const newTabProps = post.newTab ? { rel: 'noopener noreferrer' as const, target: '_blank' as const } : {}
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-[0.5fr_1fr] md:gap-y-4"
                  >
                    {getImageUrl(post.image) && (
                      <a href={postHref} className="w-full" {...newTabProps}>
                        <Image
                          src={getImageUrl(post.image)}
                          alt={getImageAlt(post.image) || 'Blog post image'}
                          width={200}
                          height={200}
                          className="aspect-square w-full object-cover"
                        />
                      </a>
                    )}
                    <div className="flex h-full flex-col items-start justify-center">
                      {post.category && <p className="mb-2 text-sm font-semibold">{post.category}</p>}
                      <div className="flex w-full flex-col items-start justify-start">
                        {post.postContent && (
                          <a className="mb-2" href={postHref} {...newTabProps}>
                            <div className="blog9-post-content [&_.RichText]:text-xl [&_.RichText]:font-bold md:[&_.RichText]:text-2xl">
                              <RichText data={post.postContent} />
                            </div>
                          </a>
                        )}
                        {(post.fullName || post.date || post.readTime) && (
                          <div className="mt-4 flex items-center">
                            {getImageUrl(post.avatar) && (
                              <div className="mr-4 shrink-0">
                                <Image
                                  src={getImageUrl(post.avatar)}
                                  alt={getImageAlt(post.avatar) || 'Author avatar'}
                                  width={48}
                                  height={48}
                                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                />
                              </div>
                            )}
                            <div>
                              {post.fullName && <h6 className="text-sm font-semibold">{post.fullName}</h6>}
                              <div className="flex items-center">
                                {post.date && <p className="text-sm">{post.date}</p>}
                                {post.date && post.readTime && <span className="mx-2">•</span>}
                                {post.readTime && <p className="text-sm">{post.readTime}</p>}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {latestBlogTitle && (
            <h2 className="mb-6 text-xl font-bold md:mb-10 md:text-2xl">{latestBlogTitle}</h2>
          )}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {blogPosts?.map((post, index) => {
              const postHref = getHrefFromPostLink(post)
              const imageSrc = getImageUrl(post.image)
              const avatarSrc = getImageUrl(post.avatar)
              const newTabProps = post.newTab ? { rel: 'noopener noreferrer' as const, target: '_blank' as const } : {}
              return (
                <div key={index} className="flex size-full flex-col items-center justify-start">
                  {imageSrc && (
                    <a href={postHref} className="mb-6 w-full" {...newTabProps}>
                      <Image
                        src={imageSrc}
                        alt={getImageAlt(post.image) || 'Blog post image'}
                        width={400}
                        height={267}
                        className="aspect-[3/2] size-full object-cover"
                      />
                    </a>
                  )}
                  <div className="rb-4 flex w-full items-center justify-start">
                    {post.category && <p className="mb-2 text-sm font-semibold">{post.category}</p>}
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
                    {post.postContent && (
                      <a className="mb-2" href={postHref} {...newTabProps}>
                        <div className="blog9-post-content [&_.RichText]:text-xl [&_.RichText]:font-bold md:[&_.RichText]:text-2xl">
                          <RichText data={post.postContent} />
                        </div>
                      </a>
                    )}
                    {(post.fullName || post.date || post.readTime) && (
                      <div className="mt-6 flex items-center">
                        {avatarSrc && (
                          <div className="mr-4 shrink-0">
                            <Image
                              src={avatarSrc}
                              alt={getImageAlt(post.avatar) || 'Author avatar'}
                              width={48}
                              height={48}
                              className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          {post.fullName && <h6 className="text-sm font-semibold">{post.fullName}</h6>}
                          <div className="flex items-center">
                            {post.date && <p className="text-sm">{post.date}</p>}
                            {post.date && post.readTime && <span className="mx-2">•</span>}
                            {post.readTime && <p className="text-sm">{post.readTime}</p>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const blogPost: BlogPost = {
  image: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
  category: "Category",
  readTime: "5 min read",
  postContent: undefined,
  avatar: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
}

const smallBlogPost: SmallFeaturedBlogPost = {
  ...blogPost,
  image: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
  avatar: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder avatar",
  },
}

const featuredBlogPostDefault: FeaturedBlogPost = {
  ...blogPost,
  image: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder featured image",
  },
  avatar: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder avatar 1",
  },
}

export const Blog9Defaults: Props = {
  tagline: "Blog",
  content: undefined,
  featuredBlogIitle: "Featured blog posts",
  featuredBlogPost: featuredBlogPostDefault,
  smallFeaturedBlogPosts: [smallBlogPost, smallBlogPost, smallBlogPost],
  latestBlogTitle: "Latest blog posts",
  blogPosts: [blogPost, blogPost, blogPost, blogPost, blogPost, blogPost],
}
