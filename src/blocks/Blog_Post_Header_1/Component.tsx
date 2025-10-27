'use client'

import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";

type ImageProps = {
  url: string;
  alt?: string;
};

type BreadcrumbProps = {
  title: string;
  link: {
    type: 'reference' | 'custom';
    newTab?: boolean;
    reference?: any;
    url?: string;
  };
};

type SocialMediaLinksProps = {
  url: string;
  iconType: 'link' | 'linkedin' | 'twitter' | 'facebook';
};

type AuthorDetailsProps = {
  avatar: ImageProps;
  fullName: string;
  date: string;
  readTime: string;
};

type Props = {
  breadcrumbs: BreadcrumbProps[];
  heading: string;
  image: ImageProps;
  author: AuthorDetailsProps;
  socialMediaLinks: SocialMediaLinksProps[];
  disableInnerContainer?: boolean;
};

export type BlogPostHeader1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const getSocialIcon = (iconType: string) => {
  switch (iconType) {
    case 'link':
      return <BiLinkAlt className="size-6" />;
    case 'linkedin':
      return <BiLogoLinkedinSquare className="size-6" />;
    case 'twitter':
      return <FaXTwitter className="size-6 p-0.5" />;
    case 'facebook':
      return <BiLogoFacebookCircle className="size-6" />;
    default:
      return <BiLinkAlt className="size-6" />;
  }
};

export const BlogPostHeader1Block = (props: BlogPostHeader1Props) => {
  const { breadcrumbs, heading, author, image, socialMediaLinks } = {
    ...BlogPostHeader1Defaults,
    ...props,
  };
  
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
          <Breadcrumb className="mb-6 flex w-full items-center">
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => {
                const href = item.link?.type === 'reference' 
                  ? (item.link.reference?.slug ? `/${item.link.reference.slug}` : '#')
                  : (item.link?.url || '#');
                
                return (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink 
                        href={href}
                        target={item.link?.newTab ? '_blank' : undefined}
                        rel={item.link?.newTab ? 'noopener noreferrer' : undefined}
                      >
                        {item.title}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
            {heading}
          </h1>
          <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
            <div className="rb-4 mb-4 flex items-center sm:mb-0">
              <div className="mr-4 shrink-0">
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
              <div>
                <h6 className="font-semibold">{author.fullName}</h6>
                <div className="mt-1 flex">
                  <p className="text-sm">{author.date}</p>
                  <span className="mx-2">•</span>
                  <p className="text-sm">{author.readTime}</p>
                </div>
              </div>
            </div>
            <div className="rt-4 mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="rounded-[1.25rem] bg-background-secondary p-1"
                >
                  {getSocialIcon(link.iconType)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full overflow-hidden">
          {image.url && (
            <Image 
              src={image.url} 
              alt={image.alt || 'Blog post image'} 
              width={1200} 
              height={600} 
              className="aspect-[2] size-full object-cover" 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export const BlogPostHeader1Defaults: Props = {
  breadcrumbs: [
    { 
      title: "Blog",
      link: {
        type: "custom",
        url: "#"
      }
    },
    { 
      title: "Category",
      link: {
        type: "custom",
        url: "#"
      }
    },
  ],
  heading: "Blog title heading will go here",
  author: {
    avatar: {
      url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Relume placeholder avatar",
    },
    fullName: "Full name",
    date: "11 Jan 2022",
    readTime: "5 min read",
  },
  socialMediaLinks: [
    { url: "#", iconType: "link" },
    { url: "#", iconType: "linkedin" },
    { url: "#", iconType: "twitter" },
    { url: "#", iconType: "facebook" },
  ],
  image: {
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
