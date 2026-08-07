import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

/** Base OG sin título ni siteName: si no se pasan en `mergeOpenGraph({...})`, no se inyecta el nombre del template de Payload en redes. */
const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  images: [
    {
      url: `${getServerSideURL()}/website-template-OG.webp`,
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
