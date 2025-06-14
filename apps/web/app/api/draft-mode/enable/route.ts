import { defineEnableDraftMode } from 'next-sanity/draft-mode';

import { client } from '@packages/sanity-shared/client';
import { token } from '@packages/sanity-shared/token';

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
});
