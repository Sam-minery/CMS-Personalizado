"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { CMSLink } from "@/components/Link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useGoogleFont } from "@/utilities/useGoogleFont";
import { getMediaUrl } from "@/utilities/getMediaUrl";
import { sanitizeSVG } from "@/utilities/sanitizeHTML";
import { cn } from "@/utilities/ui";
import {
  appendDropInjectedButtonBorderRadius,
  dropBlockButtonPrimitiveClassName,
  dropButtonBackgroundCss,
} from "@/utilities/dropBlockButtonClasses";
import {
  expandFontGroupRichTextFields,
  type FontGroupWithExpandedRichText,
} from "@/utilities/expandFontGroupRichTextFields";
import {
  FONT_GROUP_RICHTEXT_DESKTOP_MIN,
  FONT_GROUP_RICHTEXT_MOBILE_MAX,
  FONT_GROUP_VARIANT_CSS,
  mergeFontGroupLineHeightsWithFallback,
  trimFontGroupValue,
} from "@/utilities/fontGroupRichTextCss";
import type { Font, FontGroup } from "@/payload-types";

/** Fondo del menú hamburguesa desplegado en móvil (barra + panel + submenús inline). */
const MOBILE_MENU_EXPANDED_BG = "#F5F3EF";

type ImageProps = {
  useMedia?: boolean;
  media?: any;
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  title: string;
  link: {
    type?: 'custom' | 'reference' | 'anchor' | null;
    url?: string | null;
    reference?: {
      relationTo: 'pages' | 'posts';
      value: any;
    } | null;
    newTab?: boolean | null;
    anchorId?: string | null;
  };
  subMenuLinks?: NavLink[];
};

type ButtonWithLink = {
  title: string;
  link: {
    type?: 'custom' | 'reference' | 'anchor' | null;
    url?: string | null;
    reference?: {
      relationTo: 'pages' | 'posts';
      value: any;
    } | null;
    newTab?: boolean | null;
    anchorId?: string | null;
  };
  size?: 'sm' | 'lg';
  variant?: 'default' | 'secondary' | 'ghost' | 'link';
  /** Código SVG opcional para mostrar a la derecha del texto del botón */
  iconSVG?: string | null;
};

type FontFile = {
  id?: string | number;
  url?: string;
  filename?: string;
  name?: string;
};

/** Grupo de fuente tras `expandFontGroupRichTextFields` (tipografía / interlineado enriquecido). */
type NavbarFontGroup = FontGroup & FontGroupWithExpandedRichText;

function normalizeNavbarFontGroup(raw: unknown): NavbarFontGroup | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  let o = raw as Record<string, unknown>;
  const rel = o.relationTo;
  const inner = o.value;
  if (
    inner &&
    typeof inner === "object" &&
    !Array.isArray(inner) &&
    (rel === "font-groups" || rel === "fontGroups")
  ) {
    o = inner as Record<string, unknown>;
  }
  return expandFontGroupRichTextFields(o as Record<string, unknown>) as NavbarFontGroup;
}

/**
 * Texto de enlaces/botones: clase body del font group + fontFamily inline si aplica.
 * `layoutStableBold`: capa invisible en medium (500) para reservar ancho al pasar light (300) → medium.
 * `navLinkMediumHover`: el padre lleva `group`; inactivo light (300), hover medium (500).
 */
function NavbarTextLabel({
  text,
  fontStyle,
  fg,
  layoutStableBold,
  anchorActive,
  navLinkMediumHover,
}: {
  text: string;
  fontStyle?: React.CSSProperties;
  fg: boolean;
  layoutStableBold?: boolean;
  anchorActive?: boolean;
  navLinkMediumHover?: boolean;
}) {
  if (layoutStableBold) {
    return (
      <span
        className={cn(
          "relative inline-grid justify-items-center [align-items:center]",
          fg && "navbar-drop-fg-body-text",
        )}
        style={fontStyle}
      >
        <span
          aria-hidden
          className="pointer-events-none invisible col-start-1 row-start-1 font-medium whitespace-nowrap select-none"
        >
          {text}
        </span>
        <span
          className={cn(
            "col-start-1 row-start-1 whitespace-nowrap transition-[font-weight] duration-150",
            anchorActive ? "font-medium" : "font-light",
            navLinkMediumHover && "group-hover:font-medium",
          )}
        >
          {text}
        </span>
      </span>
    );
  }
  if (navLinkMediumHover) {
    return (
      <span
        className={cn(
          fg && "navbar-drop-fg-body-text",
          "font-light transition-[font-weight] duration-150 group-hover:font-medium",
        )}
        style={fontStyle}
      >
        {text}
      </span>
    );
  }
  if (!fg && !fontStyle) return <>{text}</>;
  return (
    <span className={cn(fg && "navbar-drop-fg-body-text")} style={fontStyle}>
      {text}
    </span>
  );
}

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonWithLink[];
  backgroundColor?: string;
  /** Fondo del menú hamburguesa desplegado (móvil). */
  mobileMenuBackgroundColor?: string;
  textColor?: string;
  boldTextColor?: string;
  buttonBackgroundColor?: string;
  buttonBackgroundColorSecondary?: string;
  buttonTextColor?: string;
  fontFamily?: string;
  useFontGroup?: boolean | null;
  fontGroup?: FontGroup | number | null;
  useCustomFont?: boolean;
  customFontFile?: FontFile | null;
  customFontName?: string | null;
};

export type Navbar_DROPProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const STICKY_SCROLL_THRESHOLD = 24;

/**
 * Media query estable para SSR/hidratación:
 * - SSR y primer render cliente devuelven false (desktop)
 * - tras montar, sincroniza con matchMedia real
 */
function useStableMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;

    const mediaQuery = window.matchMedia(query);
    const update = () => setMatches(mediaQuery.matches);
    update();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update);
      return () => mediaQuery.removeEventListener("change", update);
    }

    mediaQuery.addListener(update);
    return () => mediaQuery.removeListener(update);
  }, [query]);

  return matches;
}

function scrollToAnchor(id: string) {
  if (!id || typeof document === "undefined") return;
  const el = document.getElementById(id.trim());
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function scrollToTop() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Recoge todos los anchorIds de navLinks (y subMenuLinks) para observar visibilidad */
function getAnchorIdsFromNavLinks(navLinks: NavLink[]): string[] {
  const ids: string[] = [];
  for (const link of navLinks) {
    if (link.link?.type === "anchor" && link.link?.anchorId) {
      ids.push(link.link.anchorId.trim());
    }
    for (const sub of link.subMenuLinks ?? []) {
      if (sub.link?.type === "anchor" && sub.link?.anchorId) {
        ids.push(sub.link.anchorId.trim());
      }
    }
  }
  return [...new Set(ids)];
}

export const Navbar_DROP: React.FC<Navbar_DROPProps> = (props) => {
  const {
    logo,
    navLinks,
    buttons,
    backgroundColor,
    mobileMenuBackgroundColor,
    textColor,
    boldTextColor,
    buttonBackgroundColor,
    buttonBackgroundColorSecondary,
    buttonTextColor,
    fontFamily,
    useFontGroup,
    fontGroup,
    useCustomFont,
    customFontFile,
    customFontName,
  } = {
    ...Navbar_DROPDefaults,
    ...props,
  };

  const uniqueId = React.useId().replace(/:/g, "-");
  const styleId = `navbar-drop-${uniqueId}`;

  const fontGroupObj =
    useFontGroup && fontGroup && typeof fontGroup === "object"
      ? normalizeNavbarFontGroup(fontGroup)
      : null;
  const fontGroupTypographyActive = Boolean(
    fontGroupObj?.fontFamilyName?.trim() &&
      Array.isArray(fontGroupObj.fonts) &&
      fontGroupObj.fonts.some((e) => e?.font && typeof e.font === "object"),
  );

  /** Nombre CSS de la fuente subida: campo del CMS o nombre del archivo de media (como Hero/Pricing). */
  const customFontFamilyName =
    customFontName?.trim() ||
    customFontFile?.name?.trim() ||
    (customFontFile?.filename ? customFontFile.filename.replace(/\.[^.]+$/, "") : undefined);

  const getFontFamily = () => {
    if (fontGroupTypographyActive && fontGroupObj?.fontFamilyName) {
      return `"${fontGroupObj.fontFamilyName.replace(/"/g, '\\"')}"`;
    }
    if (useCustomFont && customFontFamilyName) return `"${customFontFamilyName.replace(/"/g, '\\"')}"`;
    if (fontFamily && fontFamily !== "default") return fontFamily;
    return undefined;
  };
  const selectedFontFamily = getFontFamily();
  useGoogleFont(
    fontGroupTypographyActive || useCustomFont ? undefined : selectedFontFamily,
  );

  const fontFileUrl = customFontFile?.url ? getMediaUrl(customFontFile.url).replace(/([^:]\/)\/+/g, "$1") : null;
  const fontFileNameOrUrl = customFontFile?.filename || customFontFile?.url || fontFileUrl || "";
  const isValidFontFile =
    Boolean(fontFileUrl) && /\.(woff|woff2|ttf|otf)(\?.*)?$/i.test(fontFileNameOrUrl);

  const buildStyles = () => {
    const styles: string[] = [];
    const scope = `[data-navbar-drop-font="${styleId}"]`;
    const pushFontScopes = (fontValue: string) => {
      styles.push(
        `${scope}, ${scope} *, ${scope} a, ${scope} button, ${scope} span, #${styleId}, #${styleId} *, #${styleId} a, #${styleId} button, #${styleId} span { font-family: ${fontValue} !important; }`,
      );
      styles.push(
        `.navbar-drop-font-root, .navbar-drop-font-root *, .navbar-drop-font-root a, .navbar-drop-font-root button, .navbar-drop-font-root span { font-family: ${fontValue} !important; }`,
      );
    };

    if (fontGroupTypographyActive && fontGroupObj?.fontFamilyName) {
      const familyCss = fontGroupObj.fontFamilyName.replace(/"/g, '\\"');
      for (const entry of fontGroupObj.fonts || []) {
        const font = entry?.font;
        if (!font || typeof font === "number") continue;
        const url = (font as Font).url;
        if (url == null || url === "") continue;
        const fontUrl = getMediaUrl(url).replace(/([^:]\/)\/+/g, "$1");
        const variant = entry.variant || "regular";
        const { weight, style: fontStyleCss } = FONT_GROUP_VARIANT_CSS[variant] ?? {
          weight: "400",
          style: "normal",
        };
        const formatMatch = fontUrl.match(/\.(woff2?|ttf|otf)(\?.*)?$/i);
        if (!formatMatch) continue;
        const ext = formatMatch[1].toLowerCase();
        const format =
          ext === "woff2"
            ? "woff2"
            : ext === "woff"
              ? "woff"
              : ext === "ttf"
                ? "truetype"
                : "opentype";
        styles.push(`
        @font-face {
          font-family: "${familyCss}";
          src: url("${fontUrl}") format("${format}");
          font-weight: ${weight};
          font-style: ${fontStyleCss};
          font-display: swap;
        }
      `);
      }
      pushFontScopes(`"${familyCss}"`);

      const fgBody = `${scope} .navbar-drop-fg-body-text`;
      const bodyDesk = trimFontGroupValue(fontGroupObj.typography?.body);
      if (bodyDesk) {
        styles.push(`${fgBody} { font-size: ${bodyDesk} !important; }`);
      }
      const mobBody = trimFontGroupValue(fontGroupObj.typographyMobile?.body);
      if (mobBody) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${fgBody} { font-size: ${mobBody} !important; } }`,
        );
      }
      const bodyLhDesk = trimFontGroupValue(fontGroupObj.lineHeights?.body);
      const mergedLh = mergeFontGroupLineHeightsWithFallback(
        fontGroupObj.lineHeights,
        fontGroupObj.lineHeightsMobile,
      );
      const bodyLhMob = trimFontGroupValue(mergedLh?.body);
      if (bodyLhDesk) {
        styles.push(
          `@media (min-width: ${FONT_GROUP_RICHTEXT_DESKTOP_MIN}) { ${fgBody} { line-height: ${bodyLhDesk} !important; } }`,
        );
      }
      if (bodyLhMob) {
        styles.push(
          `@media (max-width: ${FONT_GROUP_RICHTEXT_MOBILE_MAX}) { ${fgBody} { line-height: ${bodyLhMob} !important; } }`,
        );
      }
      // Nav links (dentro de `nav`): light 300 inactivo, medium 500 hover/activo.
      styles.push(
        `${scope} nav .font-light, ${scope} nav .font-light.navbar-drop-fg-body-text { font-weight: 300 !important; }`,
      );
      styles.push(
        `${scope} nav .font-medium, ${scope} nav .font-medium.navbar-drop-fg-body-text { font-weight: 500 !important; }`,
      );
      // `group-hover:font-medium` compite con `.font-light` + !important arriba: forzar 500 al hover del `.group`.
      styles.push(
        `${scope} nav .group:hover .group-hover\\:font-medium, ${scope} nav .group:hover .group-hover\\:font-medium.navbar-drop-fg-body-text { font-weight: 500 !important; }`,
      );
    } else if (useCustomFont && customFontFamilyName) {
      const familyCss = customFontFamilyName.replace(/"/g, '\\"');
      if (fontFileUrl && isValidFontFile) {
        const formatMatch = fontFileUrl.match(/\.(woff2?|ttf|otf)(\?.*)?$/i);
        const ext = formatMatch ? formatMatch[1].toLowerCase() : "";
        const format =
          ext === "woff2"
            ? "woff2"
            : ext === "woff"
              ? "woff"
              : ext === "ttf"
                ? "truetype"
                : ext === "otf"
                  ? "opentype"
                  : "woff2";
        if (formatMatch) {
          styles.push(`
        @font-face {
          font-family: "${familyCss}";
          src: url("${fontFileUrl}") format("${format}");
          font-weight: 100 900;
          font-style: normal;
          font-display: swap;
        }
      `);
        }
      }
      pushFontScopes(`"${familyCss}"`);
    } else if (selectedFontFamily && !useCustomFont && !fontGroupTypographyActive) {
      pushFontScopes(selectedFontFamily);
    }
    if (textColor) {
      styles.push(
        `[data-navbar-drop-font="${styleId}"], [data-navbar-drop-font="${styleId}"] a, [data-navbar-drop-font="${styleId}"] button, [data-navbar-drop-font="${styleId}"] span { color: ${textColor} !important; }`
      );
    }
    if (boldTextColor) {
      styles.push(
        `[data-navbar-drop-font="${styleId}"] nav .font-medium, [data-navbar-drop-font="${styleId}"] nav .group:hover .group-hover\\:font-medium, [data-navbar-drop-font="${styleId}"] .font-semibold, [data-navbar-drop-font="${styleId}"] .font-bold, [data-navbar-drop-font="${styleId}"] strong, [data-navbar-drop-font="${styleId}"] b { color: ${boldTextColor} !important; }`,
      );
    }
    const navDefaultBtn = `[data-navbar-drop-font="${styleId}"] .navbar-drop-btn-default`;
    appendDropInjectedButtonBorderRadius(styles, navDefaultBtn);
    if (buttonBackgroundColor || buttonBackgroundColorSecondary || buttonTextColor) {
      const btnBaseRules: string[] = [];
      if (buttonBackgroundColor || buttonBackgroundColorSecondary) {
        const bg = dropButtonBackgroundCss(
          buttonBackgroundColor,
          buttonBackgroundColorSecondary,
        );
        btnBaseRules.push(`background: ${bg} !important;`);
      }
      if (buttonTextColor) {
        styles.push(
          `${navDefaultBtn}, ${navDefaultBtn} * { color: ${buttonTextColor} !important; }`,
        );
      }
      if (btnBaseRules.length > 0) {
        styles.push(`${navDefaultBtn} { ${btnBaseRules.join(" ")} }`);
      }
    }
    return styles.length > 0 ? styles.join("\n") : "";
  };

  const combinedStyles = buildStyles();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activeAnchorId, setActiveAnchorId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const ratiosRef = useRef<Record<string, number>>({});
  const isMobile = useStableMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      if (isMobile) {
        setIsFixed(true);
      } else {
        const rect = el.getBoundingClientRect();
        setIsFixed(window.scrollY > 0 && rect.top <= 0);
      }
    };
    const measure = () => {
      const section = containerRef.current;
      if (section) setNavbarHeight(section.offsetHeight);
    };
    measure();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", measure);
    };
  }, [isMobile, isMobileMenuOpen]);

  /** Oculta el badge reCAPTCHA en móvil mientras el menú hamburguesa está abierto (ver globals.css). */
  useEffect(() => {
    const root = document.documentElement
    const cls = 'navbar-drop-mobile-menu-open'
    if (isMobile && isMobileMenuOpen) {
      root.classList.add(cls)
    } else {
      root.classList.remove(cls)
    }
    return () => root.classList.remove(cls)
  }, [isMobile, isMobileMenuOpen])

  // Resaltar nav link en medium (500) cuando su sección (anchor) está visible en pantalla
  useEffect(() => {
    const anchorIds = getAnchorIdsFromNavLinks(navLinks);
    if (anchorIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (id) ratiosRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        }
        const best = Object.entries(ratiosRef.current).reduce<[string, number] | null>(
          (acc, [id, ratio]) => {
            if (ratio <= 0) return acc;
            if (!acc || ratio > acc[1]) return [id, ratio];
            return acc;
          },
          null
        );
        setActiveAnchorId(best ? best[0] : null);
      },
      { root: null, rootMargin: "0px 0px -50% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    const elements: Element[] = [];
    for (const id of anchorIds) {
      const el = document.getElementById(id);
      if (el) {
        elements.push(el);
        observer.observe(el);
      }
    }
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [navLinks]);

  const isMenuExpanded = isMobile && isMobileMenuOpen;
  const mobileExpandedBg = mobileMenuBackgroundColor?.trim() || MOBILE_MENU_EXPANDED_BG;

  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined;

  /** Barras: w-8 + h-0.5 + my-1 (4px) → distancia entre centros = 10px. */
  const renderMobileHamburger = () => (
    <button
      type="button"
      className="flex size-14 shrink-0 flex-col items-center justify-center"
      onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
    >
      <motion.span
        className="my-1 h-0.5 w-8 origin-center bg-black"
        animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
        variants={topLineVariants}
      />
      <motion.span
        className="my-1 h-0.5 w-8 origin-center bg-black"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={middleLineVariants}
      />
      <motion.span
        className="my-1 h-0.5 w-8 origin-center bg-black"
        animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
        variants={bottomLineVariants}
      />
    </button>
  );

  // Full-bleed horizontal y pegado arriba. Desktop: más padding lateral; navlinks centrados.
  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id="navbar-drop"
        ref={containerRef}
        data-navbar-drop-font={styleId}
        className="navbar-drop-font-root z-[999] flex min-h-0 w-full min-w-0 max-w-[100vw] justify-stretch box-border fixed left-0 right-0 top-0"
        style={{
          ...fontStyle,
          width: "100%",
          maxWidth: "100vw",
        }}
      >
        <nav
          id={styleId}
          className={cn(
            "relative min-w-0 box-border w-full max-w-[100vw] overflow-visible",
            // Cristal: difumina el contenido detrás cuando el fondo es semitransparente (barra; no menú móvil expandido).
            !isMenuExpanded && "backdrop-blur-sm",
            isMenuExpanded ? "rounded-none" : backgroundColor ? "" : "bg-white",
            isMobile
              ? cn(
                  "px-3 py-3 rounded-none",
                  isMenuExpanded
                    ? "flex flex-col min-h-[100dvh] max-h-[100dvh] items-stretch"
                    : "flex items-center",
                )
              : cn("pl-10 pr-16 py-2 lg:pl-14 lg:pr-24 lg:py-2.5 rounded-none", "flex items-center"),
          )}
          style={
            isMenuExpanded
              ? { backgroundColor: mobileExpandedBg }
              : backgroundColor
                ? { backgroundColor, ["--navbar-drop-bg" as string]: backgroundColor }
                : undefined
          }
        >
        <div
          className={cn(
            "navbar-drop-font-inherit relative flex min-w-0 items-center justify-between gap-4 lg:gap-6",
            isMenuExpanded && isMobile ? "w-full shrink-0" : "size-full",
            !isMobile && "overflow-visible",
            isMobile && "overflow-x-hidden",
          )}
          style={fontStyle}
        >
          {/* Logo: al pulsar sube al inicio de la página */}
          <div className="relative z-10 flex-shrink-0 min-w-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }}
              aria-label="Ir al inicio de la página"
            >
              {logo.useMedia && logo.media && typeof logo.media === "object" && logo.media !== null ? (
                <Image
                  src={logo.media.url || logo.media.image?.url || logo.src || ""}
                  alt={logo.media.alt || logo.media.image?.alt || logo.alt || "Logo"}
                  width={logo.media.width || logo.media.image?.width || 150}
                  height={logo.media.height || logo.media.image?.height || 50}
                  className="max-w-[120px] sm:max-w-[150px] max-h-[50px] object-contain w-auto h-auto"
                />
              ) : (
                <Image src={logo.src} alt={logo.alt || "Logo"} width={150} height={50} className="max-w-[120px] sm:max-w-[150px] max-h-[50px] object-contain w-auto h-auto" />
              )}
            </a>
          </div>

          {/* Desktop: nav links centrados en pantalla */}
          {!isMobile && (
            <div className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center">
              <div className="pointer-events-auto flex items-center">
                {navLinks.map((navLink, index) =>
                  navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                    <SubMenu key={index} navLink={navLink} isMobile={false} dropdownBgColor={backgroundColor} linkFontStyle={fontStyle} fontGroupTypographyActive={fontGroupTypographyActive} activeAnchorId={activeAnchorId} />
                  ) : navLink.link?.type === "anchor" && navLink.link?.anchorId ? (
                    <button
                      key={index}
                      type="button"
                      className={cn(
                        "group block py-3 px-4 py-2 cursor-pointer bg-transparent border-0 transition-transform duration-150 active:scale-[0.98] active:opacity-90",
                        !fontGroupTypographyActive && "text-base",
                      )}
                      style={fontStyle}
                      onClick={() => scrollToAnchor(navLink.link!.anchorId!)}
                    >
                      <NavbarTextLabel
                        text={navLink.title}
                        fontStyle={fontStyle}
                        fg={fontGroupTypographyActive}
                        layoutStableBold
                        navLinkMediumHover
                        anchorActive={activeAnchorId === navLink.link!.anchorId!.trim()}
                      />
                    </button>
                  ) : (
                    <CMSLink
                      key={index}
                      {...(navLink.link as React.ComponentProps<typeof CMSLink>)}
                      className={cn(
                        "group block py-3 px-4 py-2 transition-transform duration-150 active:scale-[0.98] active:opacity-90",
                        !fontGroupTypographyActive && "text-base",
                      )}
                      style={fontStyle}
                    >
                      <NavbarTextLabel
                        text={navLink.title}
                        fontStyle={fontStyle}
                        fg={fontGroupTypographyActive}
                        navLinkMediumHover
                      />
                    </CMSLink>
                  )
                )}
              </div>
            </div>
          )}

          {/* Desktop: botones a la derecha */}
          {!isMobile && (
            <div className="relative z-10 ml-auto flex items-center gap-2">
              {buttons.map((button, index) =>
                button.link?.type === "anchor" && button.link?.anchorId ? (
                  <Button
                    key={index}
                    size={button.variant === "link" ? button.size : "clear"}
                    variant={button.variant}
                    className={cn(
                      button.variant !== "link" && dropBlockButtonPrimitiveClassName,
                      button.variant !== "link" && "transition-all hover:opacity-90",
                      button.variant === "default" && "navbar-drop-btn-default",
                    )}
                    style={fontStyle}
                    onClick={() => scrollToAnchor(button.link!.anchorId!)}
                  >
                    <span className="inline-flex items-center gap-2">
                      <NavbarTextLabel text={button.title} fontStyle={fontStyle} fg={fontGroupTypographyActive} />
                      {button.iconSVG ? (
                        <span
                          className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          dangerouslySetInnerHTML={{ __html: sanitizeSVG(button.iconSVG) }}
                          aria-hidden
                        />
                      ) : null}
                    </span>
                  </Button>
                ) : (
                  <CMSLink
                    key={index}
                    {...(button.link as React.ComponentProps<typeof CMSLink>)}
                    size={button.variant === "link" ? button.size : "clear"}
                    appearance={button.variant}
                    className={cn(
                      button.variant !== "link" && dropBlockButtonPrimitiveClassName,
                      button.variant !== "link" && "transition-all hover:opacity-90",
                      button.variant === "default" && "navbar-drop-btn-default",
                    )}
                    style={fontStyle}
                  >
                    <span className="inline-flex items-center gap-2">
                      <NavbarTextLabel text={button.title} fontStyle={fontStyle} fg={fontGroupTypographyActive} />
                      {button.iconSVG ? (
                        <span
                          className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                          dangerouslySetInnerHTML={{ __html: sanitizeSVG(button.iconSVG) }}
                          aria-hidden
                        />
                      ) : null}
                    </span>
                  </CMSLink>
                )
              )}
            </div>
          )}

          {/* Mobile: todos los botones arriba (también con menú abierto) + hamburguesa */}
          {isMobile && (
              <div className="flex min-w-0 shrink flex-1 items-center justify-end gap-2 sm:gap-3">
                {buttons.map((button, index) =>
                  button.link?.type === "anchor" && button.link?.anchorId ? (
                    <Button
                      key={index}
                      size={button.variant === "link" ? button.size : "clear"}
                      variant={button.variant}
                      className={cn(
                        button.variant !== "link" && dropBlockButtonPrimitiveClassName,
                        button.variant !== "link" && "transition-all hover:opacity-90",
                        button.variant === "default" && "navbar-drop-btn-default",
                      )}
                      style={fontStyle}
                      onClick={() => {
                        scrollToAnchor(button.link!.anchorId!);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        <NavbarTextLabel text={button.title} fontStyle={fontStyle} fg={fontGroupTypographyActive} />
                        {button.iconSVG ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{ __html: sanitizeSVG(button.iconSVG) }}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </Button>
                  ) : (
                    <div key={index} onClick={() => setIsMobileMenuOpen(false)}>
                      <CMSLink
                        {...(button.link as React.ComponentProps<typeof CMSLink>)}
                        size={button.variant === "link" ? button.size : "clear"}
                        appearance={button.variant}
                        className={cn(
                          button.variant !== "link" && dropBlockButtonPrimitiveClassName,
                          button.variant !== "link" && "transition-all hover:opacity-90",
                          button.variant === "default" && "navbar-drop-btn-default",
                        )}
                        style={fontStyle}
                      >
                        <span className="inline-flex items-center gap-2">
                          <NavbarTextLabel text={button.title} fontStyle={fontStyle} fg={fontGroupTypographyActive} />
                          {button.iconSVG ? (
                            <span
                              className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                              dangerouslySetInnerHTML={{ __html: sanitizeSVG(button.iconSVG) }}
                              aria-hidden
                            />
                          ) : null}
                        </span>
                      </CMSLink>
                    </div>
                  )
                )}
                {renderMobileHamburger()}
              </div>
          )}
        </div>

          {isMobile && isMobileMenuOpen && (
              <div
                className="navbar-drop-font-inherit flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden lg:hidden"
                style={{ backgroundColor: mobileExpandedBg }}
              >
                <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
                  <div className="min-w-0 px-0 py-4 text-center" style={fontStyle}>
                    {navLinks.map((navLink, index) => (
                      <div key={index} className="border-b border-gray-200 py-3">
                        {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                          <SubMenu
                            navLink={navLink}
                            isMobile={true}
                            dropdownBgColor={mobileExpandedBg}
                            linkFontStyle={fontStyle}
                            fontGroupTypographyActive={fontGroupTypographyActive}
                            onCloseMenu={() => setIsMobileMenuOpen(false)}
                            activeAnchorId={activeAnchorId}
                          />
                        ) : navLink.link?.type === "anchor" && navLink.link?.anchorId ? (
                          <div className="flex justify-center">
                            <button
                              type="button"
                              className={cn(
                                "group block cursor-pointer border-0 bg-transparent py-2 text-center transition-transform duration-150 active:scale-[0.98] active:opacity-90",
                                !fontGroupTypographyActive && "text-base",
                              )}
                              style={fontStyle}
                              onClick={() => {
                                scrollToAnchor(navLink.link!.anchorId!);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <NavbarTextLabel
                                text={navLink.title}
                                fontStyle={fontStyle}
                                fg={fontGroupTypographyActive}
                                layoutStableBold
                                navLinkMediumHover
                                anchorActive={activeAnchorId === navLink.link!.anchorId!.trim()}
                              />
                            </button>
                          </div>
                        ) : (
                          <div className="flex justify-center" onClick={() => setIsMobileMenuOpen(false)}>
                            <CMSLink
                              {...(navLink.link as React.ComponentProps<typeof CMSLink>)}
                              className={cn(
                                "group block py-2 text-center transition-transform duration-150 active:scale-[0.98] active:opacity-90",
                                !fontGroupTypographyActive && "text-base",
                              )}
                              style={fontStyle}
                            >
                              <NavbarTextLabel
                                text={navLink.title}
                                fontStyle={fontStyle}
                                fg={fontGroupTypographyActive}
                                navLinkMediumHover
                              />
                            </CMSLink>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          )}
      </nav>
    </section>
    </>
  );
};

const SubMenu = ({
  navLink,
  isMobile,
  dropdownBgColor,
  linkFontStyle,
  fontGroupTypographyActive = false,
  onCloseMenu,
  activeAnchorId,
}: {
  navLink: NavLink;
  isMobile: boolean;
  dropdownBgColor?: string;
  linkFontStyle?: React.CSSProperties;
  fontGroupTypographyActive?: boolean;
  onCloseMenu?: () => void;
  activeAnchorId?: string | null;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubLinkClick = (subLink: NavLink) => {
    if (subLink.link?.type === "anchor" && subLink.link?.anchorId) {
      scrollToAnchor(subLink.link.anchorId);
      onCloseMenu?.();
    }
    if (isMobile) setIsDropdownOpen(false);
  };

  return (
    <div
      className={cn("relative", isMobile && "flex w-full flex-col items-center")}
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className={cn(
          "group flex items-center gap-2 transition-transform duration-150 active:scale-[0.98] active:opacity-90",
          isMobile
            ? "w-full justify-center py-3 text-center"
            : "flex-none justify-start px-4 py-2",
          !fontGroupTypographyActive && "text-md lg:text-base",
        )}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        style={linkFontStyle}
      >
        <NavbarTextLabel
          text={navLink.title}
          fontStyle={linkFontStyle}
          fg={fontGroupTypographyActive}
          navLinkMediumHover
        />
        <motion.span
          variants={{ rotated: { rotate: 180 }, initial: { rotate: 0 } }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        >
          <RxChevronDown />
        </motion.span>
      </button>
      {isDropdownOpen && (
        <AnimatePresence>
          <motion.nav
            variants={{
              open: { visibility: "visible", opacity: 1, y: 0 },
              close: { visibility: "hidden", opacity: 0, y: "25%" },
            }}
            animate={isDropdownOpen ? "open" : "close"}
            initial="close"
            exit="close"
            transition={{ duration: 0.2 }}
            className={cn(
              isMobile
                ? "w-full"
                : "absolute left-1/2 top-full z-[100] min-w-[180px] -translate-x-1/2 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 pt-3 shadow-md",
            )}
            style={dropdownBgColor ? { backgroundColor: dropdownBgColor } : { backgroundColor: "white" }}
          >
            {navLink.subMenuLinks?.map((subLink, index) =>
              subLink.link?.type === "anchor" && subLink.link?.anchorId ? (
                <button
                  key={index}
                  type="button"
                  className={cn(
                    "group block w-full cursor-pointer border-0 bg-transparent transition-transform duration-150 active:scale-[0.98] active:opacity-90",
                    isMobile ? "py-3 text-center" : "px-4 py-2 text-left",
                    !fontGroupTypographyActive && "text-md lg:text-base",
                  )}
                  style={linkFontStyle}
                  onClick={() => handleSubLinkClick(subLink)}
                >
                  <NavbarTextLabel
                    text={subLink.title}
                    fontStyle={linkFontStyle}
                    fg={fontGroupTypographyActive}
                    layoutStableBold
                    navLinkMediumHover
                    anchorActive={activeAnchorId === subLink.link.anchorId.trim()}
                  />
                </button>
              ) : (
                <div
                  key={index}
                  className={cn(isMobile && "flex justify-center")}
                  onClick={() => isMobile && onCloseMenu?.()}
                >
                  <CMSLink
                    {...(subLink.link as React.ComponentProps<typeof CMSLink>)}
                    className={cn(
                      "group block transition-transform duration-150 active:scale-[0.98] active:opacity-90",
                      isMobile ? "py-3 text-center" : "px-4 py-2",
                      !fontGroupTypographyActive && "text-md lg:text-base",
                    )}
                    style={linkFontStyle}
                  >
                    <NavbarTextLabel
                      text={subLink.title}
                      fontStyle={linkFontStyle}
                      fg={fontGroupTypographyActive}
                      navLinkMediumHover
                    />
                  </CMSLink>
                </div>
              )
            )}
          </motion.nav>
        </AnimatePresence>
      )}
    </div>
  );
};

/** Barras w-8 + h-0.5 + my-1 → distancia entre centros = 10px → translateY ±10 para la X. */
const topLineVariants = {
  open: { translateY: 10, rotate: 0, transition: { delay: 0.1 } },
  rotatePhase: { translateY: 10, rotate: -45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};

const middleLineVariants = {
  open: { width: 0, transition: { duration: 0.1 } },
  closed: { width: "2rem", transition: { delay: 0.3, duration: 0.2 } },
};

const bottomLineVariants = {
  open: { translateY: -10, rotate: 0, transition: { delay: 0.1 } },
  rotatePhase: { translateY: -10, rotate: 45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};

export const Navbar_DROPDefaults: Props = {
  logo: {
    useMedia: false,
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Link One", link: { type: "custom", url: "#" } },
    { title: "Link Two", link: { type: "custom", url: "#" } },
    { title: "Link Three", link: { type: "custom", url: "#" } },
    {
      title: "Link Four",
      link: { type: "custom", url: "#" },
      subMenuLinks: [
        { title: "Link Five", link: { type: "custom", url: "#" } },
        { title: "Link Six", link: { type: "custom", url: "#" } },
        { title: "Link Seven", link: { type: "custom", url: "#" } },
      ],
    },
  ],
  buttons: [
    { title: "Button", link: { type: "custom", url: "#" }, variant: "secondary", size: "sm" },
    { title: "Button", link: { type: "custom", url: "#" }, variant: "default", size: "sm" },
  ],
  backgroundColor: undefined,
  mobileMenuBackgroundColor: undefined,
  textColor: undefined,
  boldTextColor: undefined,
  buttonBackgroundColor: undefined,
  buttonBackgroundColorSecondary: undefined,
  buttonTextColor: undefined,
  fontFamily: undefined,
  useFontGroup: false,
  fontGroup: undefined,
  useCustomFont: false,
  customFontFile: undefined,
  customFontName: undefined,
};
