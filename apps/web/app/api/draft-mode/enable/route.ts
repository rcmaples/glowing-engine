import {defineEnableDraftMode} from 'next-sanity/draft-mode'

import {clientWithToken} from '../../../../lib/sanity/client'

export const {GET} = defineEnableDraftMode({
  client: clientWithToken,
})
