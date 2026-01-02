declare module 'sanitize-html' {
  interface IOptions {
    allowedTags?: string[]
    allowedAttributes?: Record<string, string[]>
    allowedSchemes?: string[]
    disallowedTagsMode?: 'discard' | 'escape'
    enforceHtmlBoundary?: boolean
  }

  function sanitizeHtml(dirty: string, options?: IOptions): string
  export default sanitizeHtml
}

