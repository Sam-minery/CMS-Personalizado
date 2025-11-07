"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { FaXTwitter } from "react-icons/fa6";
import { BiLinkAlt, BiLogoLinkedinSquare, BiLogoFacebookCircle } from "react-icons/bi";
import { RxChevronLeft } from "react-icons/rx";
import Image from "next/image";
import { CMSLink } from "@/components/Link";

type ImageProps = {
  useMedia?: boolean;
  mediaImage?: any; // Media object from Payload
  src?: string;
  alt?: string;
};

type SocialMediaLink = {
  platform: string;
  url: string;
};

type Props = {
  button: ButtonProps & {
    link?: {
      type?: 'custom' | 'reference' | null;
      url?: string | null;
      reference?: {
        relationTo: 'pages' | 'posts';
        value: any;
      } | null;
      newTab?: boolean | null;
    };
  };
  category: string;
  readTime: string;
  heading: string;
  image: ImageProps;
  authorName: string;
  publishedDate: string;
  socialMediaLinks: SocialMediaLink[];
};

export type BlogPostHeader2Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogPostHeader2 = (props: BlogPostHeader2Props) => {
  const { 
    button, 
    category, 
    readTime, 
    heading, 
    image, 
    authorName, 
    publishedDate, 
    socialMediaLinks 
  } = {
    ...BlogPostHeader2Defaults,
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
        <div className="rb-12 mb-12 flex flex-col items-start justify-start md:mb-18 lg:mb-20">
          <Button {...button} className="mb-8 md:mb-10 lg:mb-12" asChild>
            <CMSLink {...button.link}>
              <RxChevronLeft className="mr-2" />
              {button.title}
            </CMSLink>
          </Button>
          <div className="rb-4 mb-4 flex w-full items-center justify-start">
            <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
              {category}
            </p>
            <p className="inline text-sm font-semibold">{readTime}</p>
          </div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h1>
        </div>
        <div className="mx-auto mb-8 w-full overflow-hidden md:mb-12 lg:mb-8">
          <Image 
            src={image.useMedia ? image.mediaImage?.url : image.src} 
            alt={image.alt || "Blog post image"} 
            width={1200}
            height={480}
            className="aspect-[5/2] size-full object-cover" 
          />
        </div>
        <div className="flex w-full flex-col items-start justify-between md:flex-row">
          <div className="rb-4 mb-4 flex items-center sm:mb-8 md:mb-0">
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Written by</p>
              <p className="font-medium">{authorName}</p>
            </div>
            <div className="mr-8 md:mr-10 lg:mr-12">
              <p className="mb-2">Published on</p>
              <p className="font-medium">{publishedDate}</p>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-[max-content] items-start gap-2">
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
    </section>
  );
};

export const BlogPostHeader2Defaults: Props = {
  button: {
    title: "All Posts",
    variant: "link",
    size: "link",
    link: {
      type: "reference",
    },
  },
  category: "Category",
  readTime: "5 min read",
  heading: "Blog title heading will go here",
  authorName: "Full Name",
  publishedDate: "22 January 2021",
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
