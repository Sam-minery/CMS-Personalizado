import type { GlobalConfig } from 'payload'

import { authenticated } from '@/access/authenticated'

export const NotificacionLeadsCta: GlobalConfig = {
  slug: 'notificacion-leads-cta',
  label: 'Notificaciones Leads CTA',
  access: {
    read: authenticated,
    update: authenticated,
  },
  admin: {
    hidden: true,
    group: 'Content',
    description:
      'Configura destinatarios para notificar por Postmark cada nuevo lead del popup CTA1 SENDA Alter.',
  },
  fields: [
    {
      name: 'enabled',
      type: 'checkbox',
      label: 'Activar notificaciones por email',
      defaultValue: false,
    },
    {
      name: 'recipients',
      type: 'array',
      label: 'Destinatarios',
      labels: {
        singular: 'Destinatario',
        plural: 'Destinatarios',
      },
      admin: {
        description: 'Lista de emails que recibirán cada nuevo lead CTA.',
      },
      fields: [
        {
          name: 'email',
          type: 'email',
          required: true,
          label: 'Email destinatario',
        },
      ],
    },
    {
      name: 'fromEmail',
      type: 'email',
      label: 'Remitente (opcional)',
      admin: {
        description:
          'Si se deja vacío se usa POSTMARK_FROM_EMAIL desde variables de entorno.',
      },
    },
    {
      name: 'subjectPrefix',
      type: 'text',
      label: 'Prefijo del asunto (opcional)',
      admin: {
        description: 'Ejemplo: [SENDA]. Se añade al asunto del correo.',
      },
    },
  ],
}
