"use client";

import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import RichText from '@/components/RichText';
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import type { Page, Post } from '@/payload-types';
import { CMSLink } from '@/components/Link';
import { getMediaUrl } from '@/utilities/getMediaUrl';
import { useGoogleFont } from '@/utilities/useGoogleFont';

type MediaImage = {
  id: string;
  url: string;
  alt?: string;
  filename?: string;
};

type FontFile = {
  id: string | number;
  url: string;
  filename?: string;
  name?: string;
};

type SocialMediaLink = {
  platform: 'facebook' | 'instagram' | 'twitter' | 'linkedin';
  type?: 'reference' | 'custom' | null;
  newTab?: boolean | null;
  reference?: { relationTo: 'pages' | 'posts'; value: Page | Post | number } | null;
  url?: string | null;
};

type Props = {
  content?: DefaultTypedEditorState;
  logo?: MediaImage;
  logoUrl?: string;
  socialMediaLinks?: SocialMediaLink[];
  disableInnerContainer?: boolean;
  backgroundColor?: string;
  textColor?: string;
  boldTextColor?: string;
  fontFamily?: string;
  useCustomFont?: boolean;
  customFontFile?: FontFile;
  customFontName?: string;
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
  const { content, logo, logoUrl, socialMediaLinks, backgroundColor, textColor, boldTextColor, fontFamily, useCustomFont, customFontFile, customFontName } = {
    ...Banner4Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);

  const contentId = React.useId();
  const uniqueId = `banner4-bold-${contentId}`;

  const getFontFamily = () => {
    if (useCustomFont && customFontName) {
      return `"${customFontName}"`;
    }
    if (fontFamily && fontFamily !== 'default') {
      return fontFamily;
    }
    return undefined;
  };

  const selectedFontFamily = getFontFamily();
  useGoogleFont(selectedFontFamily);

  const fontFileUrl = customFontFile?.url
    ? getMediaUrl(customFontFile.url).replace(/([^:]\/)\/+/g, "$1")
    : null;

  const isValidFontFile = fontFileUrl && customFontFile?.filename &&
    /\.(woff|woff2|ttf|otf)$/i.test(customFontFile.filename);

  if (!isVisible) {
    return null;
  }

  const buildStyles = () => {
    const styles: string[] = [];

    if (useCustomFont && fontFileUrl && customFontName && isValidFontFile) {
      styles.push(`
        @font-face {
          font-family: "${customFontName.replace(/"/g, '\\"')}";
          src: url("${fontFileUrl}") format("woff2"),
               url("${fontFileUrl}") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `);
    }

    const containerRules: string[] = [];
    if (useCustomFont && customFontName && isValidFontFile) {
      containerRules.push(`font-family: "${customFontName.replace(/"/g, '\\"')}" !important;`);
    } else if (selectedFontFamily && !useCustomFont) {
      containerRules.push(`font-family: ${selectedFontFamily} !important;`);
    }
    if (containerRules.length > 0) {
      styles.push(`
        #${uniqueId} {
          ${containerRules.join('\n          ')}
        }
      `);
    }

    if (textColor) {
      styles.push(`
        #${uniqueId},
        #${uniqueId} p,
        #${uniqueId} h1,
        #${uniqueId} h2,
        #${uniqueId} h3,
        #${uniqueId} h4,
        #${uniqueId} h5,
        #${uniqueId} h6,
        #${uniqueId} span:not(strong):not(b),
        #${uniqueId} div:not([class*="RichText"]),
        #${uniqueId} li,
        #${uniqueId} a {
          color: ${textColor} !important;
        }
      `);
    }

    if (boldTextColor) {
      styles.push(`
        #${uniqueId} strong,
        #${uniqueId} b {
          color: ${boldTextColor} !important;
        }
      `);
    }

    return styles.length > 0 ? styles.join('\n') : '';
  };

  const combinedStyles = buildStyles();
  const linksList = socialMediaLinks?.length ? socialMediaLinks : Banner4Defaults.socialMediaLinks ?? [];
  const logoImageSrc = logo?.url ? getMediaUrl(logo.url).replace(/([^:]\/)\/+/g, '$1') : '';

  return (
    <section id="relume" className="px-[5%]">
      {combinedStyles && (
        <style>{combinedStyles}</style>
      )}
      <div
        className="container relative flex flex-col justify-start border border-border-primary p-4 md:flex-row md:items-center md:px-4 md:py-3"
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        <div className="mb-4 mr-7 flex flex-1 items-start md:mb-0 md:mr-8 md:items-center">
          {logo && logoImageSrc ? (
            <a href={logoUrl || '#'}>
              <Image
                src={logoImageSrc}
                alt={logo.alt || logo.filename || 'Logo'}
                width={32}
                height={32}
                className="mr-4 hidden size-8 lg:block"
              />
            </a>
          ) : null}
          <div id={uniqueId}>
            {content && <RichText data={content} />}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {linksList.map((link, index) => {
            const hasValidLink = (link.type === 'reference' && link.reference) || (link.type === 'custom' && link.url);
            const icon = getSocialIcon(link.platform);
            return hasValidLink ? (
              <CMSLink
                key={index}
                type={link.type ?? undefined}
                reference={link.reference ?? undefined}
                url={link.url ?? undefined}
                newTab={link.newTab ?? undefined}
                appearance="inline"
              >
                {icon}
              </CMSLink>
            ) : (
              <span key={index} className="inline-flex items-center text-muted-foreground" aria-hidden>
                {icon}
              </span>
            );
          })}
        </div>
        <button className="absolute right-2 top-2 ml-4 md:static" type="button">
          <RxCross2 className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner4Defaults: Props = {
  content: undefined,
  logo: undefined,
  logoUrl: '#',
  socialMediaLinks: [
    { platform: 'facebook' },
    { platform: 'instagram' },
    { platform: 'twitter' },
    { platform: 'linkedin' },
  ],
};
