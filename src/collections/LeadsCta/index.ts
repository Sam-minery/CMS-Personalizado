import { randomUUID } from 'crypto'

import type {
  CollectionAfterChangeHook,
  CollectionBeforeValidateHook,
  CollectionConfig,
} from 'payload'

import type { LeadsCta as LeadsCtaDoc } from '@/payload-types'
import { sendLeadCtaByPostmark } from '@/lib/sendLeadCtaByPostmark'
import { authenticated } from '../../access/authenticated'

const beforeValidateLeadsCta: CollectionBeforeValidateHook = ({ data, operation }) => {
  const next = { ...data }

  if (operation === 'create') {
    next.status = 'new'
    if (!next.leadRef || String(next.leadRef).trim() === '') {
      next.leadRef = randomUUID()
    }
  }

  return next
}

const afterChangeLeadsCta: CollectionAfterChangeHook = ({ doc, operation, req }) => {
  if (operation !== 'create') return doc

  void sendLeadCtaByPostmark(req.payload, doc as LeadsCtaDoc)
    .then(async (result) => {
      if (result !== 'sent') return

      await req.payload.update({
        collection: 'leads-cta',
        id: (doc as LeadsCtaDoc).id,
        data: {
          status: 'emailed',
        },
        overrideAccess: true,
      })
    })
    .catch(async (err) => {
      req.payload.logger.error(
        { err, leadId: (doc as LeadsCtaDoc).id },
        'Postmark notification failed for leads-cta',
      )

      try {
        await req.payload.update({
          collection: 'leads-cta',
          id: (doc as LeadsCtaDoc).id,
          data: {
            status: 'error',
          },
          overrideAccess: true,
        })
      } catch (updateErr) {
        req.payload.logger.error(
          { err: updateErr, leadId: (doc as LeadsCtaDoc).id },
          'Failed to mark leads-cta as error after Postmark failure',
        )
      }
    })

  return doc
}

export const LeadsCta: CollectionConfig = {
  slug: 'leads-cta',
  access: {
    /** Sin usuario anónimo vía API Payload. Alta desde web: endpoint dedicado con `overrideAccess` (siguiente paso). */
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    hidden: true,
    group: 'Content',
    useAsTitle: 'leadRef',
    defaultColumns: ['leadRef', 'fullName', 'phone', 'status', 'createdAt'],
    description:
      'Leads del popup teléfono (CTA1 SENDA Alter). Alta pública: POST /api/leads-cta-submit. Estado para notificación por email.',
  },
  hooks: {
    beforeValidate: [beforeValidateLeadsCta],
    afterChange: [afterChangeLeadsCta],
  },
  fields: [
    {
      name: 'leadRef',
      type: 'text',
      label: 'Identificador',
      required: false,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        readOnly: true,
        description: 'UUID al crear el lead (deduplicación y trazabilidad).',
      },
    },
    {
      name: 'fullName',
      type: 'text',
      label: 'Nombre completo',
      required: true,
      admin: {
        description: 'Nombre y apellidos (popup CTA1 SENDA Alter o alta manual en admin).',
      },
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Teléfono',
      required: true,
      admin: {
        description: 'Teléfono (popup CTA1 SENDA Alter o alta manual en admin).',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Estado',
      defaultValue: 'new',
      required: true,
      options: [
        { label: 'Nuevo (pendiente de notificar)', value: 'new' },
        { label: 'Notificado por email', value: 'emailed' },
        { label: 'Error', value: 'error' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Flujo de notificación: nuevo → enviado por email, o error si falló el envío.',
      },
    },
  ],
  timestamps: true,
}
