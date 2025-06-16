import {client} from '@packages/sanity-shared/client'
import {token} from '@packages/sanity-shared/token'
import {defineEnableDraftMode} from 'next-sanity/draft-mode'

export const {GET} = defineEnableDraftMode({
  client: client.withConfig({token}),
})
