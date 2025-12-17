// Cargar variables de entorno desde .env (necesario para comandos CLI como migrate)
import 'dotenv/config'

// Configurar TLS para desarrollo: deshabilitar verificación de certificados self-signed
// Solo en desarrollo cuando se requiere un certificado CA que tiene certificados self-signed en la cadena
if (process.env.ENVIRONMENT === 'development' && process.env.DB_SSL_CA_PATH) {
  // Deshabilitar la verificación TLS a nivel de Node.js para permitir certificados self-signed
  // Esto es necesario porque el driver de PostgreSQL valida la cadena completa incluso con rejectUnauthorized: false
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

import { postgresAdapter } from '@payloadcms/db-postgres'
import { gcsStorage } from '@payloadcms/storage-gcs'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'
import fs from 'fs'

import { Categories } from './collections/Categories'
import { ContactSubmissions } from './collections/ContactSubmissions'
import { FormCustom2Submissions } from './collections/FormCustom2Submissions'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
// Obtener la raíz del proyecto (un nivel arriba de src/)
const projectRoot = path.resolve(dirname, '..')

// Determinar si estamos en desarrollo
const isDevelopment = process.env.ENVIRONMENT === 'development'

// Configurar SSL según el entorno
const getSSLConfig = () => {
  if (isDevelopment && process.env.DB_SSL_CA_PATH) {
    // En desarrollo: usar el certificado CA
    // Resolver la ruta de forma absoluta para evitar problemas con rutas relativas
    const certPath = path.isAbsolute(process.env.DB_SSL_CA_PATH)
      ? process.env.DB_SSL_CA_PATH
      : path.resolve(projectRoot, process.env.DB_SSL_CA_PATH)
    
    // Verificar que el certificado existe antes de intentar leerlo
    if (!fs.existsSync(certPath)) {
      console.warn(`[SSL Config] Certificate file not found at: ${certPath}, falling back to rejectUnauthorized: false`)
      return {
        rejectUnauthorized: false,
      }
    }
    
    const caCert = fs.readFileSync(certPath, 'utf8').trim()
    
    
    return {
      rejectUnauthorized: false,
      ca: caCert,
      
      checkServerIdentity: () => {
       
        return undefined
      },
    }
  } else if (isDevelopment) {
    // En desarrollo sin certificado: permitir conexiones no autorizadas (solo para desarrollo local)
    return {
      rejectUnauthorized: false,
    }
  }
  // En producción: usar SSL con rejectUnauthorized: false (el certificado se gestiona en Digital Ocean)
  return {
    rejectUnauthorized: false,
  }
}

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      // beforeDashboard: ['@/components/BeforeDashboard'], // Comentado para ocultar el mensaje del dashboard
      // Componente personalizado para CSS del admin panel
      afterNavLinks: ['@/components/AdminCustomCSS'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      ssl: getSSLConfig(),
    },
    push: false, //cambiar a true para npm run dev en desarrollo
  }),
  collections: [Pages, Posts, Media, Categories, Users, ContactSubmissions, FormCustom2Submissions],
  cors: (() => {
    const serverURL = getServerSideURL()
    return serverURL ? [serverURL] : []
  })(),
  globals: [Header, Footer],
  plugins: [
    ...plugins,
    // Plugin oficial de Google Cloud Storage para la colección de media
    ...(process.env.GCS_BUCKET_NAME
      ? [
          gcsStorage({
            collections: {
              media: true,
            },
            bucket: process.env.GCS_BUCKET_NAME,
            options: process.env.GCS_KEY_FILENAME
              ? {
                  keyFilename: process.env.GCS_KEY_FILENAME,
                }
              : process.env.GCS_PROJECT_ID && process.env.GCS_CLIENT_EMAIL && process.env.GCS_PRIVATE_KEY
                ? {
                    projectId: process.env.GCS_PROJECT_ID,
                    credentials: {
                      client_email: process.env.GCS_CLIENT_EMAIL,
                      private_key: process.env.GCS_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    },
                  }
                : {},
          }),
        ]
      : []),
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
