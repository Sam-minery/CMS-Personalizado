'use client'

import React from "react";
import Image from "next/image";

type ImageProps = {
  url: string;
  alt?: string;
};

type AuthorDetailsProps = {
  avatar: ImageProps;
  fullName: string;
  date: string;
  readTime: string;
};

type Props = {
  category: string;
  heading: string;
  image: ImageProps;
  author: AuthorDetailsProps;
  disableInnerContainer?: boolean;
};

export type BlogPostHeader5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogPostHeader5Block = (props: BlogPostHeader5Props) => {
  const { category, author, heading, image } = {
    ...BlogPostHeader5Defaults,
    ...props,
  };
  
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <p className="mb-3 text-sm font-semibold text-text-alternative md:mb-4">{category}</p>
        <h1 className="mb-5 text-5xl font-bold text-text-alternative md:text-7xl lg:text-8xl">
          {heading}
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-12 ">
          <div className="rb-4 flex items-center">
            <div className="rb-4 flex flex-col items-center sm:mb-0">
              <div className=" mb-3 shrink-0 md:mb-4">
                {author.avatar.url && (
                  <Image
                    src={author.avatar.url}
                    alt={author.avatar.alt || 'Author avatar'}
                    width={112}
                    height={112}
                    className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                    quality={100}
                    priority
                  />
                )}
              </div>
              <div className="text-text-alternative">
                <h6 className="font-semibold">{author.fullName}</h6>
                <div className="mt-1 flex">
                  <p className="text-sm">{author.date}</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">{author.readTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        {image && image.url && (
          <Image 
            src={image.url} 
            alt={image.alt || 'Blog post image'} 
            width={1200} 
            height={600} 
            className="size-full object-cover" 
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const BlogPostHeader5Defaults: Props = {
  category: "Category",
  heading: "Blog title heading will go here",
  image: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  author: {
    avatar: {
      url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder avatar",
    },
    fullName: "Full name",
    date: "11 Jan 2022",
    readTime: "5 min read",
  },
};
