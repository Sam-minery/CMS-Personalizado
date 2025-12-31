'use client'

import Image from 'next/image'
import RichText from '@/components/RichText';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import type { Media } from '@/payload-types';

type Props = {
  quote: SerializedEditorState;
  logo: {
    media: any;
    alt?: string;
  };
  avatar: {
    media: any;
    alt?: string;
  };
  name: string;
  position: string;
  companyName: string;
};

export type Testimonial1BlockType = {
  blockName?: string
  blockType?: 'testimonial1'
  quote: SerializedEditorState;
  logo: {
    media: any;
    alt?: string;
  };
  avatar: {
    media: any;
    alt?: string;
  };
  name: string;
  position: string;
  companyName: string;
}

export const Testimonial1 = (props: Testimonial1BlockType) => {
  const { quote, logo, avatar, name, position, companyName } = {
    ...Testimonial1Defaults,
    ...props,
  };

  // Función para obtener la URL de la imagen desde el objeto Media
  const getImageSrc = (mediaItem: any): string => {
    if (!mediaItem) return ''
    if (typeof mediaItem === 'string') return mediaItem
    if (typeof mediaItem === 'object' && mediaItem !== null && mediaItem.url) {
      return mediaItem.url
    }
    return ''
  }

  // Función para obtener el alt de la imagen
  const getImageAlt = (mediaItem: any, fallbackAlt: string): string => {
    if (typeof mediaItem === 'object' && mediaItem?.alt) {
      return mediaItem.alt
    }
    return fallbackAlt
  }

  const logoSrc = getImageSrc(logo.media)
  const logoAlt = getImageAlt(logo.media, logo.alt || 'Company logo')
  const avatarSrc = getImageSrc(avatar.media)
  const avatarAlt = getImageAlt(avatar.media, avatar.alt || 'Avatar')

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          {/* Logo pequeño */}
          <div className="mb-8 md:mb-12">
            {logoSrc && (
              <div style={{ 
                height: '20px', 
                maxWidth: '80px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto'
              }}>
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={80}
                  height={20}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
          </div>
          <blockquote className="text-xl font-bold md:text-2xl">
            <RichText data={quote} />
          </blockquote>
          <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
            <div className="mb-3 md:mb-4 flex items-center justify-center">
              {avatarSrc && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={avatarSrc}
                    alt={avatarAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-semibold">{name}</p>
              <p>
                <span>{position}</span>, <span>{companyName}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonial1Defaults: Props = {
  quote: {} as SerializedEditorState,
  logo: { 
    media: undefined, 
    alt: "Logo de la empresa" 
  },
  avatar: {
    media: undefined,
    alt: "Avatar del testimonio",
  },
  name: "Name Surname",
  position: "Position",
  companyName: "Company name",
};
