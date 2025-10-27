"use client";

import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

type Media = {
  id: string;
  url: string;
  alt?: string;
  filename?: string;
};

type SocialMediaLink = {
  url: string;
  platform: string;
};

type Props = {
  heading: string;
  description: string;
  logo: Media;
  logoUrl?: string;
  socialMediaLinks: SocialMediaLink[];
  disableInnerContainer?: boolean;
};

export type Banner4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case 'facebook':
      return <BiLogoFacebook className="size-6" />;
    case 'instagram':
      return <BiLogoInstagram className="size-6" />;
    case 'twitter':
      return <FaXTwitter className="size-6 p-0.5" />;
    case 'linkedin':
      return <BiLogoLinkedinSquare className="size-6" />;
    default:
      return <BiLogoFacebook className="size-6" />;
  }
};

export const Banner4 = (props: Banner4Props) => {
  const { heading, description, logo, logoUrl, socialMediaLinks, disableInnerContainer } = {
    ...Banner4Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <section id="relume" className="px-[5%]">
      <div className="container relative flex flex-col justify-start border border-border-primary bg-neutral-white p-4 md:flex-row md:items-center md:px-4 md:py-3">
        <div className="mb-4 mr-7 flex flex-1 items-start md:mb-0 md:mr-8 md:items-center">
          {logo && (
            <a href={logoUrl || '#'}>
              <img 
                src={logo.url} 
                alt={logo.alt || logo.filename || 'Logo'} 
                className="mr-4 hidden size-8 lg:block" 
              />
            </a>
          )}
          <div>
            <h2 className="font-semibold">{heading}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {getSocialIcon(link.platform)}
            </a>
          ))}
        </div>
        <button className="absolute right-2 top-2 ml-4 md:static">
          <RxCross2 className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner4Defaults: Props = {
  heading: "Medium length banner heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  logo: {
    id: "",
    url: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
    alt: "Relume logo",
    filename: "relume-icon.svg",
  },
  logoUrl: "#",
  socialMediaLinks: [
    { url: "#", platform: "facebook" },
    { url: "#", platform: "instagram" },
    { url: "#", platform: "twitter" },
    { url: "#", platform: "linkedin" },
  ],
};
