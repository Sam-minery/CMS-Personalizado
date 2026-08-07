/**
 * Orquestador específico para sincronizar un lead de la collection `leads-formulario`
 * con la pestaña correspondiente en Google Sheets.
 *
 */
import type { Payload } from 'payload'

import type { LeadsFormulario } from '@/payload-types'
import { appendRow, leadRefExistsInSheet } from './google-sheets'

const DEFAULT_TAB = 'leads-formulario'

/** Columnas en este orden — debe coincidir con la fila 1 del Sheet. */
function buildRow(doc: LeadsFormulario): (string | number)[] {
  return [
    doc.leadRef ?? '',
    new Date(doc.createdAt).toISOString(),
    doc.pagePath ?? '',
    doc.campaign_name ?? '',
    doc.campaign_id ?? '',
    doc.utm_content ?? '',
    doc.utm_source ?? '',
    doc.gclid ?? '',
    doc.fbclid ?? '',
    String(doc.id),
  ]
}

/**
 * Sincroniza un único lead. Idempotente: si ya existe una fila con el mismo `leadRef`
 * en la columna A, no la duplica y solo marca el doc como `synced`.
 *
 * No lanza: si falla, deja el doc con `status: 'error'` y `lastSyncError` con el mensaje.
 */
function isSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim() &&
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL?.trim() &&
      process.env.GOOGLE_SHEETS_PRIVATE_KEY?.trim(),
  )
}

export async function syncLeadFormularioToSheets(
  payload: Payload,
  doc: LeadsFormulario,
): Promise<void> {
  if (!isSheetsConfigured()) {
    payload.logger.warn(
      { leadId: doc.id, leadRef: doc.leadRef },
      'Skipping leads-formulario Sheets sync due to missing Google Sheets configuration',
    )
    return
  }

  const tab = process.env.GOOGLE_SHEETS_TAB_LEADS || DEFAULT_TAB

  try {
    const exists = doc.leadRef ? await leadRefExistsInSheet(tab, doc.leadRef) : false
    if (!exists) {
      await appendRow(tab, buildRow(doc))
    }

    await payload.update({
      collection: 'leads-formulario',
      id: doc.id,
      data: {
        status: 'synced',
        lastSyncAt: new Date().toISOString(),
        lastSyncError: null,
      },
      overrideAccess: true,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    payload.logger.error(
      { err, leadRef: doc.leadRef, leadId: doc.id },
      'Sheets sync failed for leads-formulario',
    )

    try {
      await payload.update({
        collection: 'leads-formulario',
        id: doc.id,
        data: {
          status: 'error',
          lastSyncError: message.slice(0, 500),
        },
        overrideAccess: true,
      })
    } catch (updateErr) {
      payload.logger.error(
        { err: updateErr, leadId: doc.id },
        'Failed to mark leads-formulario as error',
      )
    }
  }
}
