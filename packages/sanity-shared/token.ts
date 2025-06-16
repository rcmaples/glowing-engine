import 'server-only'

// export const token = process.env.SANITY_API_READ_TOKEN
export const token = process.env.NEXT_PUBLIC_SANITY_READ_TOKEN

if (!token) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_READ_TOKEN')
}
