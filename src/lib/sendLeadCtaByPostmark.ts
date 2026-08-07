import { ServerClient } from 'postmark'
import type { Payload } from 'payload'

import type { LeadsCta, NotificacionLeadsCta } from '@/payload-types'

function getRecipients(config: NotificacionLeadsCta | null | undefined): string[] {
  return (config?.recipients ?? [])
    .map((row) => row?.email?.trim() ?? '')
    .filter((email): email is string => email.length > 0)
}

export async function sendLeadCtaByPostmark(payload: Payload, doc: LeadsCta): Promise<'sent' | 'skipped'> {
  const notifications = (await payload.findGlobal({
    slug: 'notificacion-leads-cta',
    overrideAccess: true,
  })) as NotificacionLeadsCta

  if (notifications?.enabled === false) {
    return 'skipped'
  }

  const recipients = getRecipients(notifications)
  const serverToken = process.env.POSTMARK_SERVER_TOKEN?.trim()
  const fromEmail = notifications?.fromEmail?.trim() || process.env.POSTMARK_FROM_EMAIL?.trim()

  if (!serverToken || !fromEmail || recipients.length === 0) {
    payload.logger.warn(
      {
        leadId: doc.id,
        hasToken: Boolean(serverToken),
        hasFromEmail: Boolean(fromEmail),
        recipientsCount: recipients.length,
      },
      'Skipping leads-cta email notification due to missing Postmark configuration',
    )
    return 'skipped'
  }

  const client = new ServerClient(serverToken)
  const subjectPrefix = notifications?.subjectPrefix?.trim()
  const subjectBase = `Nuevo lead CTA ${doc.leadRef ?? `#${doc.id}`}`
  const subject = subjectPrefix ? `${subjectPrefix} ${subjectBase}` : subjectBase

  const createdAt = new Date(doc.createdAt).toISOString()
  const textBody = [
    'Nuevo lead CTA recibido.',
    '',
    `LeadRef: ${doc.leadRef ?? '-'}`,
    `Fecha: ${createdAt}`,
    `Nombre: ${doc.fullName}`,
    `Telefono: ${doc.phone}`,
  ].join('\n')

  await client.sendEmail({
    From: fromEmail,
    To: recipients.join(','),
    Subject: subject,
    TextBody: textBody,
    MessageStream: 'outbound',
  })

  return 'sent'
}
