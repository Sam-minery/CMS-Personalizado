"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown } from "react-icons/rx";
import { CMSLink } from "@/components/Link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useGoogleFont } from "@/utilities/useGoogleFont";
import { getMediaUrl } from "@/utilities/getMediaUrl";
import { sanitizeSVG } from "@/utilities/sanitizeHTML";

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

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonWithLink[];
  backgroundColor?: string;
  textColor?: string;
  boldTextColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  fontFamily?: string;
  useCustomFont?: boolean;
  customFontFile?: FontFile | null;
  customFontName?: string | null;
};

export type Navbar_SENDAProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const STICKY_SCROLL_THRESHOLD = 24;

function scrollToAnchor(id: string) {
  if (!id || typeof document === "undefined") return;
  const el = document.getElementById(id.trim());
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

export const Navbar_SENDA: React.FC<Navbar_SENDAProps> = (props) => {
  const {
    logo,
    navLinks,
    buttons,
    backgroundColor,
    textColor,
    boldTextColor,
    buttonBackgroundColor,
    buttonTextColor,
    fontFamily,
    useCustomFont,
    customFontFile,
    customFontName,
  } = {
    ...Navbar_SENDADefaults,
    ...props,
  };

  const uniqueId = React.useId().replace(/:/g, "-");
  const styleId = `navbar-senda-${uniqueId}`;

  const getFontFamily = () => {
    if (useCustomFont && customFontName) return `"${customFontName}"`;
    if (fontFamily && fontFamily !== "default") return fontFamily;
    return undefined;
  };
  const selectedFontFamily = getFontFamily();
  useGoogleFont(selectedFontFamily);

  const fontFileUrl = customFontFile?.url ? getMediaUrl(customFontFile.url).replace(/([^:]\/)\/+/g, "$1") : null;
  const isValidFontFile =
    fontFileUrl &&
    customFontFile?.filename &&
    /\.(woff|woff2|ttf|otf)$/i.test(customFontFile.filename);

  const buildStyles = () => {
    const styles: string[] = [];
    if (useCustomFont && fontFileUrl && customFontName && isValidFontFile) {
      styles.push(`
        @font-face {
          font-family: "${customFontName.replace(/"/g, '\\"')}";
          src: url("${fontFileUrl}") format("woff2"), url("${fontFileUrl}") format("woff");
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
      const fontValue = useCustomFont && customFontName && isValidFontFile
        ? `"${customFontName.replace(/"/g, '\\"')}"`
        : selectedFontFamily && !useCustomFont
          ? selectedFontFamily
          : "";
      if (fontValue) {
        styles.push(
          `#${styleId}, #${styleId} *, #${styleId} a, #${styleId} button, #${styleId} span { font-family: ${fontValue} !important; }`
        );
        styles.push(
          `.navbar-senda-font-root, .navbar-senda-font-root *, .navbar-senda-font-root a, .navbar-senda-font-root button { font-family: ${fontValue} !important; }`
        );
      }
    }
    if (textColor) {
      styles.push(
        `[data-navbar-senda-font="${styleId}"], [data-navbar-senda-font="${styleId}"] a, [data-navbar-senda-font="${styleId}"] button, [data-navbar-senda-font="${styleId}"] span { color: ${textColor} !important; }`
      );
    }
    if (boldTextColor) {
      styles.push(`[data-navbar-senda-font="${styleId}"] .font-bold, [data-navbar-senda-font="${styleId}"] strong, [data-navbar-senda-font="${styleId}"] b { color: ${boldTextColor} !important; }`);
    }
    if (buttonBackgroundColor || buttonTextColor) {
      const btnBaseRules: string[] = ["border-radius: 0.75rem !important;"];
      if (buttonBackgroundColor) btnBaseRules.push(`background-color: ${buttonBackgroundColor} !important;`);
      if (buttonTextColor) {
        styles.push(
          `[data-navbar-senda-font="${styleId}"] .navbar-senda-btn-default, [data-navbar-senda-font="${styleId}"] .navbar-senda-btn-default * { color: ${buttonTextColor} !important; }`
        );
      }
      styles.push(`[data-navbar-senda-font="${styleId}"] .navbar-senda-btn-default { ${btnBaseRules.join(" ")} }`);
    } else {
      styles.push(`[data-navbar-senda-font="${styleId}"] .navbar-senda-btn-default { border-radius: 0.75rem !important; }`);
    }
    return styles.length > 0 ? styles.join("\n") : "";
  };

  const combinedStyles = buildStyles();

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 991px)");

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

  const firstNavLink = navLinks[0];
  const firstButton = buttons[0];

  const navBorder = "border-[1px] border-white";
  const showMobileTopBarItems = isMobile && !isMobileMenuOpen;
  const isMenuExpanded = isMobile && isMobileMenuOpen;

  const fontStyle = selectedFontFamily ? { fontFamily: selectedFontFamily } : undefined;

  // Sin spacer. Móvil: navbar top-0. Desktop: margen superior (lg:top-8).
  return (
    <>
      {combinedStyles && <style>{combinedStyles}</style>}
      <section
        id="navbar-senda"
        ref={containerRef}
        data-navbar-senda-font={styleId}
        className="navbar-senda-font-root z-[999] flex justify-center fixed left-0 right-0 min-h-0 w-full max-w-full overflow-x-hidden min-w-0"
        style={{
          ...fontStyle,
          top: isMobile ? 0 : 32,
        }}
      >
        <nav
          id={styleId}
          className={`
            flex items-center ${navBorder} min-w-0 max-w-full
            ${isMenuExpanded ? "bg-white border-b-0 rounded-b-none" : backgroundColor ? "" : "bg-white"}
            ${isMobile ? `w-full px-3 py-3 lg:px-4 lg:py-4 rounded-t-none ${isMenuExpanded ? "rounded-b-none" : "rounded-b-xl"}` : "w-max px-4 py-2 lg:px-5 lg:py-2.5 rounded-3xl"}
          `}
          style={
            isMenuExpanded
              ? { backgroundColor: "white" }
              : backgroundColor
                ? { backgroundColor, ["--navbar-senda-bg" as string]: backgroundColor }
                : undefined
          }
        >
        <div className="navbar-senda-font-inherit size-full flex items-center justify-between gap-4 lg:gap-6 min-w-0 overflow-x-hidden" style={fontStyle}>
          {/* Logo: al pulsar refresca la página actual */}
          <div className="flex-shrink-0 min-w-0">
            <a
              href={pathname || "#"}
              onClick={(e) => {
                e.preventDefault();
                if (typeof window !== "undefined") window.location.reload();
              }}
              aria-label="Recargar página"
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

          {/* Desktop: todos los nav links + botones */}
          {!isMobile && (
            <div className="flex items-center">
              {navLinks.map((navLink, index) =>
                navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                  <SubMenu key={index} navLink={navLink} isMobile={false} dropdownBgColor={backgroundColor} linkFontStyle={fontStyle} />
                ) : navLink.link?.type === "anchor" && navLink.link?.anchorId ? (
                  <button
                    key={index}
                    type="button"
                    className="block py-3 px-4 py-2 text-base cursor-pointer bg-transparent border-0"
                    style={fontStyle}
                    onClick={() => scrollToAnchor(navLink.link!.anchorId!)}
                  >
                    {fontStyle ? <span style={fontStyle}>{navLink.title}</span> : navLink.title}
                  </button>
                ) : (
                  <CMSLink
                    key={index}
                    {...(navLink.link as React.ComponentProps<typeof CMSLink>)}
                    className="block py-3 px-4 py-2 text-base"
                    style={fontStyle}
                  >
                    {fontStyle ? <span style={fontStyle}>{navLink.title}</span> : navLink.title}
                  </CMSLink>
                )
              )}
              <div className="ml-4 flex items-center gap-2">
                {buttons.map((button, index) =>
                  button.link?.type === "anchor" && button.link?.anchorId ? (
                    <Button
                      key={index}
                      size={button.size}
                      variant={button.variant}
                      className={button.variant === "default" ? "navbar-senda-btn-default" : undefined}
                      style={fontStyle}
                      onClick={() => scrollToAnchor(button.link!.anchorId!)}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {fontStyle ? <span style={fontStyle}>{button.title}</span> : button.title}
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
                      size={button.size}
                      appearance={button.variant}
                      className={button.variant === "default" ? "navbar-senda-btn-default" : undefined}
                      style={fontStyle}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {fontStyle ? <span style={fontStyle}>{button.title}</span> : button.title}
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
            </div>
          )}

          {/* Mobile: solo primer botón cuando menú cerrado; hamburger siempre */}
          {isMobile && (
            <>
              <div className="flex items-center gap-3 flex-1 justify-end min-w-0 shrink">
                {showMobileTopBarItems && firstButton &&
                  (firstButton.link?.type === "anchor" && firstButton.link?.anchorId ? (
                    <Button
                      size={firstButton.size}
                      variant={firstButton.variant}
                      className={firstButton.variant === "default" ? "navbar-senda-btn-default" : undefined}
                      style={fontStyle}
                      onClick={() => scrollToAnchor(firstButton!.link!.anchorId!)}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {fontStyle ? <span style={fontStyle}>{firstButton.title}</span> : firstButton.title}
                        {firstButton.iconSVG ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{ __html: sanitizeSVG(firstButton.iconSVG) }}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </Button>
                  ) : (
                    <CMSLink
                      {...(firstButton.link as React.ComponentProps<typeof CMSLink>)}
                      size={firstButton.size}
                      appearance={firstButton.variant}
                      className={firstButton.variant === "default" ? "navbar-senda-btn-default" : undefined}
                      style={fontStyle}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {fontStyle ? <span style={fontStyle}>{firstButton.title}</span> : firstButton.title}
                        {firstButton.iconSVG ? (
                          <span
                            className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                            dangerouslySetInnerHTML={{ __html: sanitizeSVG(firstButton.iconSVG) }}
                            aria-hidden
                          />
                        ) : null}
                      </span>
                    </CMSLink>
                  )
                )}
                <button
                  className="-mr-2 flex size-12 flex-col items-center justify-center"
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                  <motion.span
                    className="my-[3px] h-0.5 w-6 bg-black"
                    animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                    variants={topLineVariants}
                  />
                  <motion.span
                    className="my-[3px] h-0.5 w-6 bg-black"
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    variants={middleLineVariants}
                  />
                  <motion.span
                    className="my-[3px] h-0.5 w-6 bg-black"
                    animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                    variants={bottomLineVariants}
                  />
                </button>
              </div>

              <div
                className="absolute left-0 right-0 top-full lg:hidden rounded-b-xl border-x border-b border-[1px] border-white border-t-0 transition-[max-height] duration-300 ease-in-out overflow-hidden max-w-full min-w-0"
                style={{
                  backgroundColor: "white",
                  boxShadow: "none",
                  maxHeight: isMobileMenuOpen ? "80vh" : "0",
                }}
              >
                <div className="navbar-senda-font-inherit px-3 py-4 lg:px-4 lg:py-4" style={fontStyle}>
                  {navLinks.map((navLink, index) => (
                    <div key={index}>
                      {index > 0 && <hr className="border-t border-gray-200 my-3" aria-hidden />}
                      {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                            <SubMenu navLink={navLink} isMobile={true} dropdownBgColor={isMobileMenuOpen ? undefined : backgroundColor} linkFontStyle={fontStyle} onCloseMenu={() => setIsMobileMenuOpen(false)} />
                          ) : navLink.link?.type === "anchor" && navLink.link?.anchorId ? (
                            <div>
                              <button
                                type="button"
                                className="block w-full py-2 text-left text-base cursor-pointer bg-transparent border-0"
                                style={fontStyle}
                                onClick={() => {
                                  scrollToAnchor(navLink.link!.anchorId!);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                {fontStyle ? <span style={fontStyle}>{navLink.title}</span> : navLink.title}
                              </button>
                            </div>
                          ) : (
                            <div onClick={() => setIsMobileMenuOpen(false)}>
                              <CMSLink {...(navLink.link as React.ComponentProps<typeof CMSLink>)} className="block py-2 text-base" style={fontStyle}>
                                {fontStyle ? <span style={fontStyle}>{navLink.title}</span> : navLink.title}
                              </CMSLink>
                            </div>
                          )}
                    </div>
                  ))}
                      {firstButton && (
                        <div className="mt-6 pt-6 border-t border-gray-200">
                          {firstButton.link?.type === "anchor" && firstButton.link?.anchorId ? (
                            <Button
                              size={firstButton.size}
                              variant={firstButton.variant}
                              className={firstButton.variant === "default" ? "navbar-senda-btn-default w-full" : "w-full"}
                              style={fontStyle}
                              onClick={() => {
                                scrollToAnchor(firstButton!.link!.anchorId!);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <span className="inline-flex items-center gap-1.5">
                                {fontStyle ? <span style={fontStyle}>{firstButton.title}</span> : firstButton.title}
                                {firstButton.iconSVG ? (
                                  <span
                                    className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                                    dangerouslySetInnerHTML={{ __html: sanitizeSVG(firstButton.iconSVG) }}
                                    aria-hidden
                                  />
                                ) : null}
                              </span>
                            </Button>
                          ) : (
                            <div onClick={() => setIsMobileMenuOpen(false)}>
                              <CMSLink
                                {...(firstButton.link as React.ComponentProps<typeof CMSLink>)}
                                size={firstButton.size}
                                appearance={firstButton.variant}
                                className={firstButton.variant === "default" ? "navbar-senda-btn-default w-full" : "w-full"}
                                style={fontStyle}
                              >
                                <span className="inline-flex items-center gap-1.5">
                                  {fontStyle ? <span style={fontStyle}>{firstButton.title}</span> : firstButton.title}
                                  {firstButton.iconSVG ? (
                                    <span
                                      className="inline-flex shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full"
                                      dangerouslySetInnerHTML={{ __html: sanitizeSVG(firstButton.iconSVG) }}
                                      aria-hidden
                                    />
                                  ) : null}
                                </span>
                              </CMSLink>
                            </div>
                          )}
                        </div>
                      )}
                      {buttons.length > 1 && (
                        <div className="mt-2 flex flex-col gap-2">
                          {buttons.slice(1).map((button, index) =>
                            button.link?.type === "anchor" && button.link?.anchorId ? (
                              <Button
                                key={index}
                                size={button.size}
                                variant={button.variant}
                                className={button.variant === "default" ? "navbar-senda-btn-default w-full" : "w-full"}
                                style={fontStyle}
                                onClick={() => {
                                  scrollToAnchor(button.link!.anchorId!);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                <span className="inline-flex items-center gap-1.5">
                                  {fontStyle ? <span style={fontStyle}>{button.title}</span> : button.title}
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
                                  size={button.size}
                                  appearance={button.variant}
                                  className={button.variant === "default" ? "navbar-senda-btn-default w-full" : "w-full"}
                                  style={fontStyle}
                                >
                                  <span className="inline-flex items-center gap-1.5">
                                    {fontStyle ? <span style={fontStyle}>{button.title}</span> : button.title}
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
                        </div>
                      )}
                </div>
              </div>
            </>
          )}
        </div>
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
  onCloseMenu,
}: {
  navLink: NavLink;
  isMobile: boolean;
  dropdownBgColor?: string;
  linkFontStyle?: React.CSSProperties;
  onCloseMenu?: () => void;
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
      className="relative"
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-between gap-2 py-3 text-left text-md lg:flex-none lg:justify-start lg:px-4 lg:py-2 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        style={linkFontStyle}
      >
        <span style={linkFontStyle}>{navLink.title}</span>
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
            className="lg:absolute lg:left-0 lg:z-50 lg:min-w-[180px] lg:rounded-lg lg:border lg:border-gray-200 lg:p-2 lg:shadow-md"
            style={dropdownBgColor ? { backgroundColor: dropdownBgColor } : { backgroundColor: "white" }}
          >
            {navLink.subMenuLinks?.map((subLink, index) =>
              subLink.link?.type === "anchor" && subLink.link?.anchorId ? (
                <button
                  key={index}
                  type="button"
                  className="block w-full py-3 pl-[5%] text-left text-md cursor-pointer bg-transparent border-0 lg:px-4 lg:py-2 lg:text-base"
                  style={linkFontStyle}
                  onClick={() => handleSubLinkClick(subLink)}
                >
                  {linkFontStyle ? <span style={linkFontStyle}>{subLink.title}</span> : subLink.title}
                </button>
              ) : (
                <div key={index} onClick={() => isMobile && onCloseMenu?.()}>
                  <CMSLink
                    {...(subLink.link as React.ComponentProps<typeof CMSLink>)}
                    className="block py-3 pl-[5%] text-md lg:px-4 lg:py-2 lg:text-base"
                    style={linkFontStyle}
                  >
                    {linkFontStyle ? <span style={linkFontStyle}>{subLink.title}</span> : subLink.title}
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

const topLineVariants = {
  open: { translateY: 8, transition: { delay: 0.1 } },
  rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};

const middleLineVariants = {
  open: { width: 0, transition: { duration: 0.1 } },
  closed: { width: "1.5rem", transition: { delay: 0.3, duration: 0.2 } },
};

const bottomLineVariants = {
  open: { translateY: -8, transition: { delay: 0.1 } },
  rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
  closed: { translateY: 0, rotate: 0, transition: { duration: 0.2 } },
};

export const Navbar_SENDADefaults: Props = {
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
  textColor: undefined,
  boldTextColor: undefined,
  buttonBackgroundColor: undefined,
  buttonTextColor: undefined,
  fontFamily: undefined,
  useCustomFont: false,
  customFontFile: undefined,
  customFontName: undefined,
};
