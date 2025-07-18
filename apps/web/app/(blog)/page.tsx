import Link from 'next/link'
import {type PortableTextBlock} from 'next-sanity'
import {Suspense} from 'react'

import {sanityFetch} from '@/lib/sanity/fetch'
import {liveSanityFetch} from '@/lib/sanity/live'
import {heroQuery, settingsQuery} from '@/lib/sanity/queries'

import Avatar from './avatar'
import CoverImage from './cover-image'
import DateComponent from './date'
import MoreStories from './more-stories'
import PortableText from './portable-text'

function Intro(props: {title: string | null | undefined; description: PortableTextBlock[]}) {
  const title = props.title || ''
  const description = props.description || []
  return (
    <section className="mt-16 mb-16 flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
      <h1 className="text-balance text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">
        {title || ''}
      </h1>
      <h2 className="text-pretty mt-5 text-center text-lg lg:pl-8 lg:text-left">
        <PortableText className="prose-lg" value={description} />
      </h2>
    </section>
  )
}

function HeroPost({
  title,
  slug,
  excerpt,
  coverImage,
  date,
  author,
}: Pick<
  // Exclude<HeroQueryResult, null>,
  {
    title: string
    coverImage: {asset?: {_ref?: string}; alt?: string}
    date: string
    excerpt: string
    author: {name: string; picture: {asset?: {_ref?: string}; alt?: string}}
    slug: string
  },
  'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
>) {
  return (
    <article>
      <Link className="group mb-8 block md:mb-16" href={`/posts/${slug}`}>
        <CoverImage image={coverImage} priority />
      </Link>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="text-pretty mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <DateComponent dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && <p className="text-pretty mb-4 text-lg leading-relaxed">{excerpt}</p>}
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </article>
  )
}

export default async function Page() {
  let settings, heroPost

  try {
    const [{data: settingsData}, {data: heroPostData}] = await Promise.all([
      liveSanityFetch({
        query: settingsQuery,
      }),
      liveSanityFetch({query: heroQuery}),
    ])
    settings = settingsData
    heroPost = heroPostData
  } catch (error) {
    console.error('Live fetch failed, falling back to regular fetch:', error)
    // Fallback to regular fetch
    const [settingsData, heroPostData] = await Promise.all([
      sanityFetch({query: settingsQuery}),
      sanityFetch({query: heroQuery}),
    ])
    settings = settingsData
    heroPost = heroPostData
  }

  return (
    <div className="container mx-auto px-5">
      <Intro title={settings?.title} description={settings?.description} />
      {heroPost ? (
        <>
          <HeroPost
            title={heroPost.title}
            slug={heroPost.slug}
            coverImage={heroPost.coverImage}
            excerpt={heroPost.excerpt}
            date={heroPost.date}
            author={heroPost.author}
          />
        </>
      ) : null}
      {heroPost?._id && (
        <aside>
          <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            More Stories
          </h2>
          <Suspense>
            <MoreStories skip={heroPost._id} limit={100} />
          </Suspense>
        </aside>
      )}
    </div>
  )
}
