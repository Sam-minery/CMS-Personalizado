import { cn } from '@/utilities/ui'

/**
 * Estilo de caja compartido para botones SENDA entre Navbar, Hero, CTAs, formularios, IMC y App.
 * Altura mínima: móvil más compacta que desktop; padding horizontal uniforme; ancho según el contenido.
 * Tipografía (tamaño, line-height) la aportan los font groups del CMS — no fijar text-* aquí salvo fallback legacy.
 */
const sendaBlockButtonBoxCore =
  'inline-flex items-center justify-center gap-2 rounded-xl whitespace-nowrap w-auto max-w-full shrink-0'

/** Con ui/Button o CMSLink con apariencia de botón: anula h-9/px-3 del variant size. */
export const sendaBlockButtonPrimitiveClassName = cn(
  sendaBlockButtonBoxCore,
  '!h-auto !min-h-[40px] md:!min-h-[48px] !px-5 md:!px-6 !py-0',
)

/** Botón nativo <button> o CMSLink appearance="inline" (solo enlace): mismas proporciones sin ! salvo mínimos útiles. */
export const sendaBlockButtonNativeClassName = cn(
  sendaBlockButtonBoxCore,
  'min-h-[40px] md:min-h-[48px] px-5 md:px-6 py-0',
)
