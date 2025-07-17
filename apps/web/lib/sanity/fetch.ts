import {draftMode} from 'next/headers'
import type {ClientPerspective, QueryParams} from 'next-sanity'

import {client, presentationClient} from './client'

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  perspective: _perspective,
  stega: _stega,
}: {
  query: QueryString
  params?: QueryParams | Promise<QueryParams>
  perspective?: Omit<ClientPerspective, 'raw'>
  stega?: boolean
}) {
  const isDraftMode = (await draftMode()).isEnabled
  const perspective = _perspective || isDraftMode ? 'previewDrafts' : 'published'
  // const stega = _stega ?? isDraftMode

  if (perspective === 'previewDrafts') {
    return presentationClient.fetch(query, await params, {
      stega: true,
      perspective: 'previewDrafts',
      useCdn: false,
      next: {revalidate: 0},
    })
  }

  return client.fetch(query, await params, {
    stega: false,
    perspective: 'published',
    useCdn: true,
    next: {revalidate: 60},
  })
}
