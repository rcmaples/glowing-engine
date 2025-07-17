import {defineDocuments, defineLocations} from 'sanity/presentation'

export const locate = {
  post: defineLocations({
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Untitled',
          href: `/posts/${doc?.slug}`,
        },
        {
          title: 'Home',
          href: '/',
        },
      ],
    }),
  }),

  author: defineLocations({
    select: {
      name: 'name',
    },
    resolve: (_doc) => ({
      locations: [
        {
          title: 'Home',
          href: '/',
        },
      ],
    }),
  }),

  settings: defineLocations({
    select: {
      title: 'title',
    },
    resolve: (_doc) => ({
      locations: [
        {
          title: 'Home',
          href: '/',
        },
      ],
    }),
  }),
}

// Define main documents for routes - this makes navigation automatically load the correct document
export const mainDocuments = defineDocuments([
  {
    route: '/posts/:slug',
    filter: `_type == "post" && slug.current == $slug`,
  },
])
