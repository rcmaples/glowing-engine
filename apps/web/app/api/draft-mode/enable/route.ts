import {defineEnableDraftMode} from 'next-sanity/draft-mode'

import {presentationClient} from '@/lib/sanity/client'

export const {GET} = defineEnableDraftMode({
  client: presentationClient,
})
