"use client";

import React, { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";
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

type ButtonLink = {
  type?: 'reference' | 'custom' | null;
  newTab?: boolean | null;
  reference?: { relationTo: 'pages' | 'posts'; value: Page | Post | number } | null;
  url?: string | null;
  label: string;
  size?: 'sm' | 'md' | 'lg' | null;
  variant?: string | null;
  /** Si true, el botón envía el formulario; si false, actúa como enlace (CMSLink). */
  buttonSubmitsForm?: boolean | null;
};

type Props = {
  content?: DefaultTypedEditorState;
  logo?: MediaImage;
  logoUrl?: string;
  inputPlaceholder: string;
  button: ButtonLink;
  backgroundColor?: string;
  textColor?: string;
  boldTextColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  fontFamily?: string;
  useCustomFont?: boolean;
  customFontFile?: FontFile;
  customFontName?: string;
};

export type Banner1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Banner1 = (props: Banner1Props) => {
  const { content, logo, logoUrl, inputPlaceholder, button, backgroundColor, textColor, boldTextColor, buttonBackgroundColor, buttonTextColor, fontFamily, useCustomFont, customFontFile, customFontName } = {
    ...Banner1Defaults,
    ...props,
  };

  const [isVisible, setIsVisible] = useState(true);
  const [emailInput, setEmailInput] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");
  
  // Los hooks deben ser llamados antes de cualquier return condicional
  const contentId = React.useId();
  const uniqueId = `banner1-bold-${contentId}`;
  
  // Determinar la fuente a usar
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
  
  // Cargar Google Font dinámicamente si es necesario
  useGoogleFont(selectedFontFamily);
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch('/api/form-custom-2-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionData: [
            { field: 'email', value: emailInput },
            { field: 'name', value: emailInput }, // Usar email como nombre por defecto
            { field: 'source', value: 'banner1' }
          ],
          formType: 'banner1'
        }),
      });

      await response.json();

      if (response.ok) {
        setSubmitMessage("¡Gracias! Te hemos enviado un email de confirmación.");
        setEmailInput("");
      } else {
        setSubmitMessage("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("Error al enviar el formulario. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Usar getMediaUrl para asegurar URL absoluta (funciona con GCS y archivos locales)
  // Normalizar la URL para evitar dobles barras que causan errores de hidratación
  const fontFileUrl = customFontFile?.url 
    ? getMediaUrl(customFontFile.url).replace(/([^:]\/)\/+/g, "$1")
    : null;

  // Validar que el archivo sea una fuente válida
  const isValidFontFile = fontFileUrl && customFontFile?.filename && 
    /\.(woff|woff2|ttf|otf)$/i.test(customFontFile.filename);

  if (!isVisible) {
    return null;
  }

  // Construir estilos combinados para evitar conflictos y errores de hidratación
  const buildStyles = () => {
    const styles: string[] = [];
    
    // Agregar @font-face si hay fuente personalizada
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
    
    // Construir reglas CSS para el contenedor (font-family)
    const containerRules: string[] = [];
    
    if (useCustomFont && customFontName && isValidFontFile) {
      containerRules.push(`font-family: "${customFontName.replace(/"/g, '\\"')}" !important;`);
    } else if (selectedFontFamily && !useCustomFont) {
      containerRules.push(`font-family: ${selectedFontFamily} !important;`);
    }
    
    // Aplicar font-family al contenedor
    if (containerRules.length > 0) {
      styles.push(`
        #${uniqueId} {
          ${containerRules.join('\n          ')}
        }
      `);
    }
    
    // Aplicar color del texto a todos los elementos del RichText
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
    
    // Agregar reglas para texto en negrita (debe ir después para sobrescribir el color del texto principal)
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
  const logoImageSrc = logo?.url
    ? getMediaUrl(logo.url).replace(/([^:]\/)\/+/g, '$1')
    : (logoUrl || "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg");

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
          <a href={logoUrl || "#"} className="flex-none">
            <Image 
              src={logoImageSrc} 
              alt={logo?.alt || "Logo"} 
              width={32} 
              height={32} 
              className="mr-4 hidden lg:block" 
            />
          </a>
          <div id={uniqueId}>
            {content && <RichText data={content} />}
          </div>
        </div>
        <form
          className="grid w-full max-w-xs flex-1 gap-3 sm:grid-cols-[1fr_max-content] sm:gap-4 lg:flex-none"
          onSubmit={handleSubmit}
        >
          <Input
            id="email"
            type="email"
            placeholder={inputPlaceholder}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
          />
          {button?.label &&
            (button.buttonSubmitsForm ? (
              <Button
                type="submit"
                disabled={isSubmitting}
                size={button.size === 'sm' ? 'sm' : 'primary'}
                variant={
                  (button.variant === 'secondary' || button.variant === 'outline'
                    ? 'secondary'
                    : button.variant === 'ghost'
                      ? 'ghost'
                      : button.variant === 'link'
                        ? 'link'
                        : 'primary') as 'primary' | 'secondary' | 'ghost' | 'link'
                }
                style={{
                  ...(buttonBackgroundColor && { backgroundColor: buttonBackgroundColor }),
                  ...(buttonTextColor && { color: buttonTextColor }),
                }}
              >
                {isSubmitting ? "Enviando..." : button.label}
              </Button>
            ) : (
              <CMSLink
                type={button.type ?? undefined}
                reference={button.reference ?? undefined}
                url={button.url ?? undefined}
                label={button.label}
                newTab={button.newTab ?? undefined}
                appearance={(button.variant as 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link') ?? 'default'}
                size={button.size === 'md' ? 'default' : (button.size ?? 'sm')}
                style={{
                  ...(buttonBackgroundColor && { backgroundColor: buttonBackgroundColor }),
                  ...(buttonTextColor && { color: buttonTextColor }),
                }}
              />
            ))}
        </form>
        {submitMessage && (
          <div className={`mt-2 text-sm ${submitMessage.includes("Error") ? "text-red-600" : "text-green-600"}`}>
            {submitMessage}
          </div>
        )}
        <button className="absolute right-2 top-2 ml-4 md:static">
          <RxCross2 className="size-8 p-1" onClick={() => setIsVisible(false)} />
        </button>
      </div>
    </section>
  );
};

export const Banner1Defaults: Props = {
  content: undefined,
  logoUrl: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
  inputPlaceholder: "Enter your email",
  button: {
    label: "Sign up",
    size: "sm",
  },
};
