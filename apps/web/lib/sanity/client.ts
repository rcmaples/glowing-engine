import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, readToken, studioUrl} from './api'

// Published content client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published',
  stega: {
    studioUrl,
    enabled: false,
  },
})

// Draft content client with token and stega enabled
export const clientWithToken = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: readToken,
  perspective: 'previewDrafts',
  stega: {
    studioUrl,
    enabled: true,
  },
})
