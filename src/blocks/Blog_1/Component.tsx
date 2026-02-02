'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui"
import { AnimatePresence, motion } from "framer-motion"
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

type Tab = {
  value: string
  trigger: string
  content: BlogPost[]
}

type Props = {
  tagline: string
  content?: DefaultTypedEditorState
  defaultValue: string
  tabs: Tab[]
  backgroundColor?: string
  textColor?: string
  boldTextColor?: string
  fontFamily?: string
  useCustomFont?: boolean
  customFontFile?: FontFile
  customFontName?: string
  disableInnerContainer?: boolean
}

export type Blog1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

// Helper to build href from post link (same logic as CMSLink)
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

export const Blog1Block = (props: Blog1Props) => {
  const {
    tagline,
    content,
    defaultValue,
    tabs,
    backgroundColor,
    textColor,
    boldTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = {
    ...Blog1Defaults,
    ...props,
  }

  const contentId = React.useId()
  const uniqueId = `blog1-content-${contentId}`

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

  const getInitialTab = () => {
    if (tabs && tabs.length > 0) {
      if (tabs.some((tab) => tab.value === defaultValue)) return defaultValue
      return tabs[0].value
    }
    return defaultValue || 'view-all'
  }

  const [activeTab, setActiveTab] = useState<string>(getInitialTab())
  const MotionTabsContent = motion.create(TabsContent)

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
        .blog1-post-content {
          ${containerRules.join('\n          ')}
        }
      `)
    }
    if (textColor) {
      styles.push(`
        #${uniqueId},
        #${uniqueId} p, #${uniqueId} h1, #${uniqueId} h2, #${uniqueId} h3, #${uniqueId} h4, #${uniqueId} h5, #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b), #${uniqueId} div:not([class*="RichText"]), #${uniqueId} li, #${uniqueId} a,
        .blog1-post-content,
        .blog1-post-content p, .blog1-post-content h1, .blog1-post-content h2, .blog1-post-content h3,
        .blog1-post-content h4, .blog1-post-content h5, .blog1-post-content h6,
        .blog1-post-content span:not(strong):not(b), .blog1-post-content li, .blog1-post-content a {
          color: ${textColor} !important;
        }
      `)
    }
    if (boldTextColor) {
      styles.push(`
        #${uniqueId} strong, #${uniqueId} b,
        .blog1-post-content strong, .blog1-post-content b {
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
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center" id={uniqueId}>
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            {content && <RichText data={content} />}
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-col justify-start"
          >
            <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              {tabs?.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
                >
                  {tab.trigger}
                </TabsTrigger>
              ))}
            </TabsList>
            <AnimatePresence initial={false}>
              {tabs?.map((tab) => (
                <MotionTabsContent
                  key={tab.value}
                  value={tab.value}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === tab.value ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                    {tab.content?.map((post, index) => {
                      const postHref = getHrefFromPostLink(post)
                      const imageSrc = getImageUrl(post.image)
                      const avatarSrc = getImageUrl(post.avatar)
                      const newTabProps = post.newTab ? { rel: 'noopener noreferrer' as const, target: '_blank' as const } : {}
                      return (
                        <div key={index}>
                          {imageSrc && (
                            <a href={postHref} className="mb-6 inline-block w-full max-w-full" {...newTabProps}>
                              <div className="w-full overflow-hidden">
                                <Image
                                  src={imageSrc}
                                  alt={getImageAlt(post.image)}
                                  width={400}
                                  height={267}
                                  className="aspect-[3/2] size-full object-cover"
                                  quality={100}
                                />
                              </div>
                            </a>
                          )}
                          {post.category && (
                            <a
                              href={postHref}
                              className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
                              {...newTabProps}
                            >
                              {post.category}
                            </a>
                          )}
                          {post.postContent && (
                            <a href={postHref} className="mb-2 block max-w-full" {...newTabProps}>
                              <div className="blog1-post-content [&_.RichText]:text-xl [&_.RichText]:font-bold md:[&_.RichText]:text-2xl">
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
                                    alt={getImageAlt(post.avatar)}
                                    width={96}
                                    height={96}
                                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                    quality={100}
                                    priority
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
                      )
                    })}
                  </div>
                </MotionTabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

const blogPost: BlogPost = {
  image: {
    url: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
    alt: 'Relume placeholder image',
  },
  category: 'Category',
  readTime: '5 min read',
  postContent: undefined,
  avatar: {
    url: 'https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg',
    alt: 'Relume placeholder avatar',
  },
  fullName: 'Full name',
  date: '11 Jan 2022',
}

export const Blog1Defaults: Props = {
  tagline: 'Blog',
  content: undefined,
  defaultValue: 'view-all',
  tabs: [
    { value: 'view-all', trigger: 'View all', content: [blogPost, blogPost, blogPost, blogPost, blogPost, blogPost] },
    { value: 'category-one', trigger: 'Category one', content: [blogPost, blogPost, blogPost] },
    { value: 'category-two', trigger: 'Category two', content: [blogPost, blogPost, blogPost] },
    { value: 'category-three', trigger: 'Category three', content: [blogPost, blogPost, blogPost] },
    { value: 'category-four', trigger: 'Category four', content: [blogPost, blogPost, blogPost] },
  ],
}
