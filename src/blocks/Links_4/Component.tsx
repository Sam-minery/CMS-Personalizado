"use client";

import { useState } from "react";
import { Button, Dialog, DialogContent, DialogTrigger, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { MdLocationOn } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiEnvelope,
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { getMediaUrl } from "@/utilities/getMediaUrl";
import type { Media } from "@/payload-types";
import { CMSLink } from "@/components/Link";
import RichText from "@/components/RichText";

type ImageProps = {
  src: string;
  alt?: string;
};

type AuthorDetailsProps = {
  fullName: string;
  position: string;
  location: string;
};

type CategoryLinkProps = {
  title: string;
  variant?: "primary" | "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  link: {
    type: 'reference' | 'custom';
    url?: string;
    reference?: any;
    newTab?: boolean;
  };
};

type CategoryProps = {
  heading?: string;
  links: CategoryLinkProps[];
};

type SocialLinkProps = {
  platform: string;
  link: {
    type: 'reference' | 'custom';
    url?: string;
    reference?: any;
    newTab?: boolean;
  };
};

type NewsletterProps = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  submitButtonTitle: string;
  termsAndConditions?: any; // RichText content
};

type Props = {
  image: Media | number;
  author: AuthorDetailsProps;
  categories: CategoryProps[];
  button: {
    variant: string;
    title: string;
    subtitle: string;
  };
  newsLetter: NewsletterProps;
  socialLinks: SocialLinkProps[];
};

export type Links4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Links4 = (props: Links4Props) => {
  const { author, image, categories, button, newsLetter, socialLinks } = {
    ...Links4Defaults,
    ...props,
  };
  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      emailInput,
    });
  };
  return (
    <section id="relume" className="px-[5%] md:pt-8">
      <div className="container relative z-10 max-w-md">
        <div className="mb-6 pt-6 text-center text-text-alternative md:mb-8 md:pt-0">
          <div className="relative">
            <div className="absolute bottom-0 left-0 z-10 w-full px-6 py-8">
              <h2 className="mb-2 text-xl font-bold md:text-2xl">{author.fullName}</h2>
              <p>{author.position}</p>
              <div className="my-3 flex items-center justify-center gap-2 md:my-4">
                <MdLocationOn className="size-5" />
                <p>{author.location}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((link, index) => {
                  const getIcon = (platform: string) => {
                    switch (platform) {
                      case 'facebook':
                        return <BiLogoFacebookCircle className="size-8" />;
                      case 'instagram':
                        return <BiLogoInstagram className="size-8" />;
                      case 'twitter':
                        return <FaXTwitter className="size-8" />;
                      case 'linkedin':
                        return <BiLogoLinkedinSquare className="size-8" />;
                      case 'youtube':
                        return <BiLogoYoutube className="size-8" />;
                      default:
                        return <BiLogoFacebookCircle className="size-8" />;
                    }
                  };
                  
                  return (
                    <CMSLink
                      key={index}
                      {...link.link}
                      appearance="inline"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {getIcon(link.platform)}
                    </CMSLink>
                  );
                })}
              </div>
            </div>
            <div className="relative z-0 flex aspect-square items-center justify-center object-cover">
              <div className="absolute -top-6 size-full h-[calc(100%+1.5rem)] w-screen md:top-0 md:size-full">
                {typeof image === 'object' && image !== null && image.url && (
                  <img 
                    src={getMediaUrl(image.url, image.updatedAt)} 
                    className="size-full object-cover" 
                    alt={image.alt || 'Background image'} 
                  />
                )}
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-8 pb-16 md:pb-24 lg:pb-28">
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="w-full gap-4 whitespace-normal border border-border-primary p-4 text-left"
                variant={button.variant as any}
              >
                <BiEnvelope className="size-8 shrink-0" />
                <span className="flex grow flex-col items-start">
                  <span className="font-semibold md:text-md">{button.title}</span>
                  <span className="text-sm">{button.subtitle}</span>
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent
              closeIconPosition="inside"
              overlayClassName="bg-black/25"
              className="flex size-full flex-col justify-center bg-white px-[5%] pb-28 pt-12 md:size-auto md:w-[90%] md:px-12 md:py-12 lg:max-w-sm"
            >
              <div className="mb-8 text-center md:mb-12">
                <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                  {newsLetter.heading}
                </h2>
                <p>{newsLetter.description}</p>
              </div>
              <form className="mb-4 flex flex-col gap-y-4" onSubmit={handleSubmit}>
                <Input
                  id="email"
                  type="email"
                  placeholder={newsLetter.inputPlaceholder}
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <Button 
                  variant="primary"
                  className="bg-black text-white border border-white hover:bg-gray-800"
                >
                  {newsLetter.submitButtonTitle}
                </Button>
              </form>
              {newsLetter.termsAndConditions && (
                <RichText 
                  data={newsLetter.termsAndConditions} 
                  className="text-xs"
                  enableGutter={false}
                />
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

const Category = (category: CategoryProps) => {
  return (
    <div className="flex flex-col gap-4 text-center">
      {category.heading && (
        <h3 className="text-md font-bold leading-[1.4] md:text-xl">{category.heading}</h3>
      )}
      {category.links.map((link, index) => (
        <CMSLink
          key={index}
          {...link.link}
          appearance={link.variant === 'primary' ? 'default' : (link.variant || 'secondary')}
          className={link.variant === 'primary' ? 'bg-white text-black border border-black hover:bg-gray-50' : undefined}
          label={link.title}
        />
      ))}
    </div>
  );
};

export const Links4Defaults: Props = {
  image: {
    id: 0,
    url: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  } as Media,
  author: {
    fullName: "Name Surname",
    position: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Location",
  },
  categories: [
    {
      links: [
        {
          title: "Link one",
          variant: "secondary",
          link: {
            type: 'custom',
            url: "#",
          },
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          title: "Link two",
          variant: "secondary",
          link: {
            type: 'custom',
            url: "#",
          },
        },
        {
          title: "Link three",
          variant: "secondary",
          link: {
            type: 'custom',
            url: "#",
          },
        },
        {
          title: "Link four",
          variant: "secondary",
          link: {
            type: 'custom',
            url: "#",
          },
        },
      ],
    },
    {
      heading: "Category name",
      links: [
        {
          title: "Link five",
          variant: "secondary",
          link: {
            type: 'custom',
            url: "#",
          },
        },
        {
          title: "Link six",
          variant: "secondary",
          link: {
            type: 'custom',
            url: "#",
          },
        },
      ],
    },
  ],
  button: {
    variant: "secondary",
    title: "Join our newsletter",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  newsLetter: {
    heading: "Join our newsletter",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    inputPlaceholder: "Enter your email",
    submitButtonTitle: "Subscribe",
    termsAndConditions: null,
  },
  socialLinks: [
    { 
      platform: "facebook",
      link: {
        type: 'custom',
        url: "#",
      },
    },
    { 
      platform: "instagram",
      link: {
        type: 'custom',
        url: "#",
      },
    },
    { 
      platform: "twitter",
      link: {
        type: 'custom',
        url: "#",
      },
    },
    { 
      platform: "linkedin",
      link: {
        type: 'custom',
        url: "#",
      },
    },
    { 
      platform: "youtube",
      link: {
        type: 'custom',
        url: "#",
      },
    },
  ],
};
