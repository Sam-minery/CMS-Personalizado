/**
 * Endpoint de reconciliación: reintenta sincronizar a Google Sheets todos los leads
 * de la collection `leads-formulario` con `status` en {`new`, `error`} de las últimas 48h.
 *
 */
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '@payload-config'
import type { LeadsFormulario } from '@/payload-types'
import { syncLeadFormularioToSheets } from '@/lib/syncLeadFormularioToSheets'

const RECONCILE_WINDOW_HOURS = 48
const MAX_BATCH_SIZE = 100

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  const expected = process.env.CRON_SECRET
    ? `Bearer ${process.env.CRON_SECRET}`
    : null

  if (!expected || authHeader !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const payload = await getPayload({ config })

    const since = new Date(Date.now() - RECONCILE_WINDOW_HOURS * 60 * 60 * 1000).toISOString()

    const { docs } = await payload.find({
      collection: 'leads-formulario',
      where: {
        and: [
          { status: { in: ['new', 'error'] } },
          { createdAt: { greater_than_equal: since } },
        ],
      },
      sort: 'createdAt',
      limit: MAX_BATCH_SIZE,
      pagination: false,
      overrideAccess: true,
    })

    let success = 0
    let failed = 0

    // Sincronización secuencial para no saturar la quota de Sheets API
    // (60 req/min por usuario por proyecto). Si el batch crece, considerar batching.
    for (const doc of docs as LeadsFormulario[]) {
      const before = doc.status
      await syncLeadFormularioToSheets(payload, doc)

      // Releer para saber si pasó a synced o quedó en error
      const refreshed = (await payload.findByID({
        collection: 'leads-formulario',
        id: doc.id,
        overrideAccess: true,
      })) as LeadsFormulario

      if (refreshed.status === 'synced') {
        success++
      } else {
        failed++
        payload.logger.warn(
          { leadId: doc.id, leadRef: doc.leadRef, statusBefore: before, statusAfter: refreshed.status },
          'Reconcile: lead aún no sincronizado',
        )
      }
    }

    return NextResponse.json(
      {
        success: true,
        scanned: docs.length,
        synced: success,
        failed,
        windowHours: RECONCILE_WINDOW_HOURS,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error in leads-formulario reconcile:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
