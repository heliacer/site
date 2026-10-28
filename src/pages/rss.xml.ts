import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.noindex)

  return rss({
    title: 'heliacer.ch',
    description: 'Projects and stuff',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.descr,
      pubDate: post.data.pub,
      link: `/blog/${post.id}/`
    }))
  })
}
