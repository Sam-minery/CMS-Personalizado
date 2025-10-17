'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@relume_io/relume-ui"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"
import type { Media } from '@/payload-types'

type ImageProps = {
  url: string
  alt?: string
}

// Helper function to get image URL from upload field
const getImageUrl = (image: string | Media | ImageProps): string => {
  if (typeof image === 'string') return image
  if (image && typeof image === 'object' && 'url' in image) {
    return image.url || ''
  }
  return ''
}

// Helper function to get image alt from upload field
const getImageAlt = (image: string | Media | ImageProps): string => {
  if (typeof image === 'string') return ''
  if (image && typeof image === 'object' && 'alt' in image) {
    return image.alt || ''
  }
  return ''
}

type BlogPost = {
  url: string
  image: string | Media | ImageProps
  category: string
  title: string
  description: string
  avatar: string | Media | ImageProps
  fullName: string
  date: string
  readTime: string
}

type FeaturedBlogPost = BlogPost

type Tab = {
  value: string
  trigger: string
  content: BlogPost[]
}

type Props = {
  tagline: string
  heading: string
  description: string
  defaultValue: string
  tabs: Tab[]
  categoryLink: string
  featuredBlogPost: FeaturedBlogPost
  disableInnerContainer?: boolean
}

export type Blog5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>

export const Blog5Block = (props: Blog5Props) => {
  const { tagline, heading, description, defaultValue, tabs, categoryLink, featuredBlogPost } = {
    ...Blog5Defaults,
    ...props,
  }
  
  // Asegurar que siempre haya una pestaña activa válida
  const getInitialTab = () => {
    if (tabs && tabs.length > 0) {
      // Si defaultValue existe en las pestañas, usarlo
      if (tabs.some(tab => tab.value === defaultValue)) {
        return defaultValue
      }
      // Si no, usar la primera pestaña
      return tabs[0].value
    }
    return defaultValue || 'view-all'
  }
  
  const [activeTab, setActiveTab] = useState<string>(getInitialTab())
  const MotionTabsContent = motion.create(TabsContent)
  
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-center gap-6 md:mb-16 md:grid-cols-2 md:gap-12">
            <a href={featuredBlogPost.url} className="w-full">
              <Image
                src={getImageUrl(featuredBlogPost.image)}
                alt={getImageAlt(featuredBlogPost.image)}
                width={600}
                height={400}
                className="aspect-[3/2] size-full object-cover"
              />
            </a>
            <div className="flex h-full flex-col items-start justify-center">
              <a
                href={featuredBlogPost.url}
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                {featuredBlogPost.category}
              </a>
              <div className="flex w-full flex-col items-start justify-start">
                <a className="mb-2" href={featuredBlogPost.url}>
                  <h3 className="mb-2 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {featuredBlogPost.title}
                  </h3>
                </a>
                <p>{featuredBlogPost.description}</p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <Image
                      src={getImageUrl(featuredBlogPost.avatar)}
                      alt={getImageAlt(featuredBlogPost.avatar)}
                      width={96}
                      height={96}
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      quality={100}
                      priority
                    />
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold">{featuredBlogPost.fullName}</h6>
                    <div className="flex items-center">
                      <p className="text-sm">{featuredBlogPost.date}</p>
                      <span className="mx-2">•</span>
                      <p className="text-sm">{featuredBlogPost.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex flex-col justify-start"
          >
            <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center overflow-auto pl-[5vw] md:mb-16 md:ml-0 md:w-full md:overflow-hidden md:pl-0">
              {tabs.map((tab, index) => (
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
              {tabs.map((tab) => {
                return (
                  <MotionTabsContent
                    key={tab.value}
                    value={tab.value}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeTab === tab.value ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
                      {tab.content.map((post, index) => (
                        <div key={index}>
                          <a href={post.url} className="mb-6 inline-block w-full max-w-full">
                            <div className="w-full overflow-hidden">
                              <Image
                                src={getImageUrl(post.image)}
                                alt={getImageAlt(post.image)}
                                width={400}
                                height={267}
                                className="aspect-[3/2] size-full object-cover"
                              />
                            </div>
                          </a>
                          <a
                            href={post.url}
                            className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
                          >
                            {post.category}
                          </a>

                          <a href={post.url} className="mb-2 block max-w-full">
                            <h5 className="text-xl font-bold md:text-2xl">{post.title}</h5>
                          </a>
                          <p>{post.description}</p>
                          <div className="mt-6 flex items-center">
                            <div className="mr-4 shrink-0">
                              <Image
                                src={getImageUrl(post.avatar)}
                                alt={getImageAlt(post.avatar)}
                                width={96}
                                height={96}
                                className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                                quality={100}
                                priority
                              />
                            </div>
                            <div>
                              <h6 className="text-sm font-semibold">{post.fullName}</h6>
                              <div className="flex items-center">
                                <p className="text-sm">{post.date}</p>
                                <span className="mx-2">•</span>
                                <p className="text-sm">{post.readTime}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </MotionTabsContent>
                )
              })}
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

const blogPost: BlogPost = {
  url: "#",
  image: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    alt: "Relume placeholder image",
  },
  category: "Category",
  readTime: "5 min read",
  title: "Blog title heading will go here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  avatar: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder avatar",
  },
  fullName: "Full name",
  date: "11 Jan 2022",
}

export const Blog5Defaults: Props = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  defaultValue: "view-all",
  tabs: [
    {
      value: "view-all",
      trigger: "View all",
      content: [blogPost, blogPost, blogPost, blogPost, blogPost, blogPost],
    },
    {
      value: "category-one",
      trigger: "Category one",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-two",
      trigger: "Category two",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-three",
      trigger: "Category three",
      content: [blogPost, blogPost, blogPost],
    },
    {
      value: "category-four",
      trigger: "Category four",
      content: [blogPost, blogPost, blogPost],
    },
  ],
  categoryLink: "#",
  featuredBlogPost: {
    url: "#",
    image: {
      url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      alt: "Relume placeholder featured image",
    },
    category: "Category",
    title: "Blog title heading will go here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    avatar: {
      url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder avatar 1",
    },
    fullName: "Full name",
    date: "11 Jan 2022",
    readTime: "5 min read",
  },
}
