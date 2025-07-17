import {defineLive} from 'next-sanity'

import {readToken} from './api'
import {client} from './client'

const token = readToken

export const {sanityFetch: liveSanityFetch, SanityLive} = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
