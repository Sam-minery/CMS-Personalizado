import { cn } from '@/utilities/ui'

/**
 * Estilo de caja compartido para botones SENDA entre Navbar, Hero, CTAs, formularios, IMC y App.
 * Altura mínima: móvil más compacta que desktop; padding horizontal ligeramente asimétrico (menos a la derecha) para compensar huecos en SVG; ancho según el contenido.
 * Tipografía (tamaño, line-height) la aportan los font groups del CMS — no fijar text-* aquí salvo fallback legacy.
 */
const sendaBlockButtonBoxCore =
  'inline-flex items-center justify-center gap-2 rounded-xl md:rounded-2xl whitespace-nowrap w-auto max-w-full shrink-0'

/** Con ui/Button o CMSLink con apariencia de botón: anula h-9/px-3 y `rounded` del variant. Móvil `xl`, desde md `2xl`. */
export const sendaBlockButtonPrimitiveClassName = cn(
  sendaBlockButtonBoxCore,
  '!rounded-xl md:!rounded-2xl !h-auto !min-h-[40px] md:!min-h-[48px] !pl-4 !pr-2.5 md:!pl-5 md:!pr-3 !py-0',
)

/** Botón nativo <button> o CMSLink appearance="inline" (solo enlace). */
export const sendaBlockButtonNativeClassName = cn(
  sendaBlockButtonBoxCore,
  '!rounded-xl md:!rounded-2xl min-h-[40px] md:min-h-[48px] pl-4 pr-2.5 md:pl-5 md:pr-3 py-0',
)

/** Misma caja que el nativo pero padding horizontal simétrico (p. ej. botón solo texto, sin SVG). */
export const sendaBlockButtonNativeSymmetricClassName = cn(
  sendaBlockButtonBoxCore,
  '!rounded-xl md:!rounded-2xl min-h-[40px] md:min-h-[48px] px-4 md:px-5 py-0',
)
