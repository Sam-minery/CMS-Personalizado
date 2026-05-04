/**
 * Cliente de Google Sheets para la sincronización de leads.
 *
 */
import { google, type sheets_v4 } from 'googleapis'

let cachedClient: sheets_v4.Sheets | null = null

/**
 * Devuelve el cliente de Sheets autenticado con la Service Account.
 * Lanza si faltan credenciales.
 */
function getSheetsClient(): sheets_v4.Sheets {
  if (cachedClient) return cachedClient

  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const rawKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY

  if (!email || !rawKey) {
    throw new Error(
      'Missing GOOGLE_SHEETS_CLIENT_EMAIL or GOOGLE_SHEETS_PRIVATE_KEY in environment.',
    )
  }

  const key = rawKey.replace(/\\n/g, '\n')

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  cachedClient = google.sheets({ version: 'v4', auth })
  return cachedClient
}

function getSpreadsheetId(): string {
  const id = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  if (!id) throw new Error('Missing GOOGLE_SHEETS_SPREADSHEET_ID in environment.')
  return id
}

/**
 * Añade una fila al final de la pestaña indicada.
 */
export async function appendRow(tab: string, values: (string | number)[]): Promise<void> {
  const sheets = getSheetsClient()
  await sheets.spreadsheets.values.append({
    spreadsheetId: getSpreadsheetId(),
    range: `${tab}!A:Z`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [values] },
  })
}

/**
 * Verifica si una fila con `leadRef` ya existe en la columna A de la pestaña.
 * Usado para idempotencia: evita duplicar filas en reintentos del job de reconciliación.
 */
export async function leadRefExistsInSheet(tab: string, leadRef: string): Promise<boolean> {
  if (!leadRef) return false
  const sheets = getSheetsClient()
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: getSpreadsheetId(),
    range: `${tab}!A:A`,
  })
  const rows = res.data.values ?? []
  return rows.some((r) => r[0] === leadRef)
}
