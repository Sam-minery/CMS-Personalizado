declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URI: string
      NEXT_PUBLIC_SERVER_URL: string
      /** Site key pública reCAPTCHA Enterprise (cliente + `event.siteKey` en assessment). */
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY?: string
      NEXT_PUBLIC_RECAPTCHA_ENTERPRISE_SITE_KEY?: string
      RECAPTCHA_PROJECT_ID?: string
      RECAPTCHA_ENTERPRISE_API_KEY?: string
      RECAPTCHA_MIN_SCORE?: string
      VERCEL_PROJECT_PRODUCTION_URL: string
    }
  }

  interface Window {
    grecaptcha?: {
      enterprise: {
        ready: (fn: () => void) => void
        execute: (siteKey: string, options: { action: string }) => Promise<string>
      }
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
