import { randomUUID } from 'crypto'

import type { CollectionBeforeValidateHook, CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

const beforeValidateLeadsFormulario: CollectionBeforeValidateHook = ({ data, operation }) => {
  const next = { ...data }

  if (operation === 'create') {
    next.status = 'new'
    if (!next.leadRef || String(next.leadRef).trim() === '') {
      next.leadRef = randomUUID()
    }
  }

  return next
}

export const LeadsFormulario: CollectionConfig = {
  slug: 'leads-formulario',
  access: {
    /** Sin usuario: no crear vía API Payload. La web usa `POST /api/leads-formulario-submit` con `overrideAccess`. */
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'leadRef',
    defaultColumns: [
      'leadRef',
      'pagePath',
      'campaign_name',
      'campaign_id',
      'utm_content',
      'utm_source',
      'gclid',
      'fbclid',
      'status',
      'createdAt',
    ],
    description:
      'Leads capturados desde el formulario SENDA (atribución). Alta pública: POST /api/leads-formulario-submit. En admin se pueden revisar y borrar.',
  },
  hooks: {
    beforeValidate: [beforeValidateLeadsFormulario],
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
        description: 'UUID generado al crear el lead (útil para Sheets y deduplicación).',
      },
    },
    {
      name: 'pagePath',
      type: 'text',
      label: 'Ruta de la página',
      required: true,
      admin: {
        readOnly: true,
        description: 'Ruta donde el usuario completó el formulario (ej. /multi-form).',
      },
    },
    {
      name: 'campaign_name',
      type: 'text',
      label: 'Campaign name',
      admin: { readOnly: true },
    },
    {
      name: 'campaign_id',
      type: 'text',
      label: 'Campaign id',
      admin: { readOnly: true },
    },
    {
      name: 'utm_content',
      type: 'text',
      label: 'utm_content',
      admin: { readOnly: true },
    },
    {
      name: 'utm_source',
      type: 'text',
      label: 'utm_source',
      admin: { readOnly: true },
    },
    {
      name: 'gclid',
      type: 'text',
      label: 'gclid',
      admin: { readOnly: true },
    },
    {
      name: 'fbclid',
      type: 'text',
      label: 'fbclid',
      admin: { readOnly: true },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Estado de sincronización',
      defaultValue: 'new',
      required: true,
      options: [
        { label: 'Nuevo (pendiente de exportar)', value: 'new' },
        { label: 'Sincronizado', value: 'synced' },
        { label: 'Error', value: 'error' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Para Apps Script: marcar como synced tras volcar a Sheets, o error si falla.',
      },
    },
  ],
  timestamps: true,
}
