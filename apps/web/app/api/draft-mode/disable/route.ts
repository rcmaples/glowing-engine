import {draftMode} from 'next/headers'
import {redirect} from 'next/navigation'

export async function GET(): Promise<Response> {
  // Disable Draft Mode by setting the cookie
  const draft = await draftMode()
  draft.disable()

  // Redirect to home page
  redirect('/')
}
