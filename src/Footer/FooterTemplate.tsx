"use client";
import React from "react";
import Image from "next/image";
import { Container } from "@/components/TemplatePro/containerTemplate";
import { Subheading } from "@/components/TemplatePro/subheadingTemplate";
import { Button } from "@/components/ui/buttonTemplate";
import { CMSLink } from "@/components/Link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSend,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ThemeSelector } from "@/providers/Theme/ThemeSelector";

type LogoProps = {
  image?: any;
  text?: string | null;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
};

type LinkItem = {
  title?: string | null;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
};

type SocialLink = {
  platform?: 'twitter' | 'instagram' | 'linkedin' | null;
  link?: {
    type?: 'custom' | 'reference' | null;
    reference?: any;
    url?: string | null;
    newTab?: boolean | null;
  } | null;
};

type Props = {
  logo: LogoProps;
  subheading?: string | null;
  ctaButton?: {
    title?: string | null;
    link?: {
      type?: 'custom' | 'reference' | null;
      reference?: any;
      url?: string | null;
      newTab?: boolean | null;
    } | null;
  };
  productLinks?: LinkItem[];
  companyLinks?: LinkItem[];
  newsletterDescription?: string | null;
  newsletterPlaceholder?: string | null;
  footerText?: string | null;
  footerLinks?: LinkItem[];
  socialLinks?: SocialLink[];
};

const LogoComponent: React.FC<LogoProps> = ({ image, text, link }) => {
  const imageUrl = image && typeof image === 'object' 
    ? (image.url || image.image?.url || '')
    : ''

  const imageWidth = image && typeof image === 'object' 
    ? (image.width || image.image?.width || 40)
    : 40

  const imageHeight = image && typeof image === 'object' 
    ? (image.height || image.image?.height || 40)
    : 40

  const logoContent = (
    <div className="flex items-center gap-2">
      {imageUrl && (
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          <Image
            src={imageUrl}
            alt={image && typeof image === 'object' ? (image.alt || 'Logo') : 'Logo'}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {text && (
        <span className="text-lg md:text-xl font-bold font-display">
          {text}
        </span>
      )}
    </div>
  );

  if (link) {
    return (
      <CMSLink {...link} appearance="inline" className="flex items-center">
        {logoContent}
      </CMSLink>
    );
  }

  return logoContent;
};

const getSocialIcon = (platform: 'twitter' | 'instagram' | 'linkedin' | null | undefined) => {
  switch (platform) {
    case 'twitter':
      return <IconBrandTwitter className="size-4" />;
    case 'instagram':
      return <IconBrandInstagram className="size-4" />;
    case 'linkedin':
      return <IconBrandLinkedin className="size-4" />;
    default:
      return null;
  }
};

export const FooterTemplate: React.FC<Props> = ({
  logo,
  subheading = "Safe, observable, outcome-driven AI",
  ctaButton = {
    title: "Start a 30-day trial",
    link: { type: 'custom', url: '#' },
  },
  productLinks = [],
  companyLinks = [],
  newsletterDescription = "Get the latest product news and behind the scenes updates.",
  newsletterPlaceholder = "Your email",
  footerText = `© ${new Date().getFullYear()} Agenforce AI. All rights reserved.`,
  footerLinks = [],
  socialLinks = [],
}) => {
  return (
    <footer className="border-t perspective-distant overflow-hidden border-neutral-200 dark:border-neutral-800 py-10 md:py-20 lg:py-32 relative">
      <Container className="grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-20">
        <div className="lg:col-span-2 flex flex-col gap-4 items-start">
          <LogoComponent {...logo} />
          {subheading && <Subheading>{subheading}</Subheading>}
          {ctaButton?.link && (
            <Button asChild className="shadow-brand">
              <CMSLink {...ctaButton.link} appearance="default">
                {ctaButton.title || "Start a 30-day trial"}
              </CMSLink>
            </Button>
          )}
        </div>
        {productLinks.length > 0 && (
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium text-neutral-400">Product</h4>
            <ul className="list-none flex flex-col gap-2">
              {productLinks.map((item, index) => (
                <li key={index}>
                  {item.link && (
                    <CMSLink
                      {...item.link}
                      appearance="link"
                      className="text-neutral-600 text-sm hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200"
                    >
                      {item.title}
                    </CMSLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        {companyLinks.length > 0 && (
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-medium text-neutral-400">Company</h4>
            <ul className="list-none flex flex-col gap-2">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  {item.link && (
                    <CMSLink
                      {...item.link}
                      appearance="link"
                      className="text-neutral-600 text-sm hover:text-black dark:text-neutral-400 dark:hover:text-white transition duration-200"
                    >
                      {item.title}
                    </CMSLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <h4 className="text-base font-medium text-neutral-400">Newsletter</h4>
          <div className="border relative border-neutral-200 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-md">
            <input
              className="bg-transparent outline-none py-2 pl-2 pr-12 placeholder-neutral-400 text-neutral-600 dark:text-neutral-300 text-sm w-full"
              type="email"
              placeholder={newsletterPlaceholder || "Your email"}
            />
            <button className="cursor-pointer px-4 py-2 rounded-[7px] bg-black dark:bg-white dark:text-black text-white inset-y-0 right-0 absolute">
              <IconSend className="size-4" />
            </button>
          </div>
          {newsletterDescription && (
            <Subheading className="text-sm md:text-sm lg:text-sm">
              {newsletterDescription}
            </Subheading>
          )}
        </div>
      </Container>

      <Container className="flex flex-col sm:flex-row justify-between mt-10 relative z-20 gap-4 md:gap-0">
        <p className="text-sm text-neutral-500">
          {footerText}
        </p>

        <div className="flex md:items-end items-start flex-col gap-4">
          {footerLinks.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 *:text-sm *:text-neutral-500">
                {footerLinks.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.link && (
                      <CMSLink
                        {...item.link}
                        appearance="link"
                        className="text-sm text-neutral-500"
                      >
                        {item.title}
                      </CMSLink>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-center gap-4">
            <ThemeSelector />
            {socialLinks.map((social, index) => (
              <React.Fragment key={index}>
                {social.link && (
                  <CMSLink
                    {...social.link}
                    appearance="inline"
                    className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                  >
                    {getSocialIcon(social.platform)}
                  </CMSLink>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>

      <div
        className={cn(
          "flex items-center justify-center gap-20 h-[200%]",
          "absolute -inset-x-[150%] -inset-y-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-900)_1px,transparent_1px)]",
          "mask-radial-from-50%"
        )}
        style={{
          transform: " rotateX(60deg) ",
        }}
      />
    </footer>
  );
};

