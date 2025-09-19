import { PayloadRequest } from 'payload'

const collectionPrefixMap: Record<string, string> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: string
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  // Asegurar que el previewSecret esté definido
  const previewSecret = process.env.PREVIEW_SECRET
  if (!previewSecret) {
    console.warn('PREVIEW_SECRET no está definido en las variables de entorno')
  }

  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path: `${collectionPrefixMap[collection] || ''}/${slug}`,
    previewSecret: previewSecret || 'YOUR_SECRET_HERE',
  })

  const url = `/next/preview?${encodedParams.toString()}`

  return url
}
