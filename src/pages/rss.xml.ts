import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const news = await getCollection('news')

  return rss({
    title: 'heliacer.ch',
    description: 'Small Updates and Changelogs',
    site: context.site!,
    trailingSlash: false,
    items: news.map(post => ({
      title: post.data.title,
      content: post.rendered?.html,
      pubDate: post.data.pub,
      link: `/news/#${post.id}`
    }))
  })
}
