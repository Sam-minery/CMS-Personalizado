"use client";

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import Image from "next/image";
import { CMSLink } from "@/components/Link";

type ImageProps = {
  useMedia?: boolean;
  mediaImage?: any; // Media object from Payload
  src?: string;
  alt?: string;
};

type BreadcrumbItem = {
  title: string;
  link: {
    type?: 'custom' | 'reference' | null;
    url?: string | null;
    reference?: {
      relationTo: 'pages' | 'posts';
      value: any;
    } | null;
    newTab?: boolean | null;
  };
};

type SocialMediaLink = {
  platform: string;
  url: string;
};

type AuthorDetails = {
  fullName: string;
  date: string;
  readTime: string;
};

type Props = {
  breadcrumbs: BreadcrumbItem[];
  heading: string;
  image: ImageProps;
  author: AuthorDetails;
  socialMediaLinks: SocialMediaLink[];
};

export type BlogPostHeader3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogPostHeader3 = (props: BlogPostHeader3Props) => {
  const { breadcrumbs, heading, author, image, socialMediaLinks } = {
    ...BlogPostHeader3Defaults,
    ...props,
  };

  // Función para obtener el icono según la plataforma
  const getSocialIcon = (platform: string) => {
    switch (platform) {
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

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.75fr_1fr]">
          <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
            <Breadcrumb className="mb-6 flex w-full items-center md:mb-8">
              <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <CMSLink {...item.link}>
                          {item.title}
                        </CMSLink>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
              {heading}
            </h1>
            <div className="flex size-full flex-col items-start justify-start">
              <div className="rb-4 mb-6 flex items-center md:mb-8">
                <div>
                  <h6 className="font-semibold">
                    <span className="font-normal">By </span>
                    {author.fullName}
                  </h6>
                  <div className="mt-1 flex">
                    <p className="text-sm">{author.date}</p>
                    <span className="mx-2">•</span>
                    <p className="text-sm">{author.readTime}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-base font-semibold">Share this post</p>
                <div className="rt-4 mt-3 grid grid-flow-col grid-cols-[max-content] items-start gap-2 md:mt-4">
                  {socialMediaLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="rounded-[1.25rem] bg-background-secondary p-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {getSocialIcon(link.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <Image 
              src={image.useMedia ? image.mediaImage?.url : image.src} 
              alt={image.alt || "Blog post image"} 
              width={800}
              height={533}
              className="aspect-[3/2] size-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const BlogPostHeader3Defaults: Props = {
  breadcrumbs: [
    { 
      title: "Blog",
      link: {
        type: "custom",
        url: "#",
      }
    },
    { 
      title: "Category",
      link: {
        type: "custom",
        url: "#",
      }
    },
  ],
  heading: "Blog title heading will go here",
  author: {
    fullName: "Full name",
    date: "11 Jan 2022",
    readTime: "5 min read",
  },
  socialMediaLinks: [
    { platform: "link", url: "#" },
    { platform: "linkedin", url: "#" },
    { platform: "twitter", url: "#" },
    { platform: "facebook", url: "#" },
  ],
  image: {
    useMedia: false,
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
