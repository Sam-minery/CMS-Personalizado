/**
 * CSS inyectado para radios de botones SENDA: coherente con `sendaBlockButtonClasses`
 * (móvil `rounded-xl`, desktop `rounded-2xl`) y el corte de viewport del Navbar (991px).
 */
export function appendSendaInjectedButtonBorderRadius(
  styles: string[],
  selector: string,
): void {
  styles.push(
    `@media (max-width: 991px) { ${selector} { border-radius: 0.75rem !important; } }`,
  )
  styles.push(
    `@media (min-width: 992px) { ${selector} { border-radius: 1rem !important; } }`,
  )
}
