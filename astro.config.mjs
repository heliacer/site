import { satteri, satteriHeadingIdsPlugin } from '@astrojs/markdown-satteri'
import { defineConfig, fontProviders } from 'astro/config'
import { satteriHeadingLink } from 'satteri-heading-link'
import { Anchor } from '@/plugins/anchor'
import { satteriEmoji } from 'satteri-emoji'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'

import mdx from '@astrojs/mdx'

let adapter = vercel({ webAnalytics: { enabled: true } })

if (process.argv.includes('--node')) {
  adapter = node({ mode: 'standalone' })
}

export default defineConfig({
  site: 'https://heliacer.ch',
  integrations: [sitemap(), mdx()],
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  },
  experimental: {
    clientPrerender: true
  },
  adapter,
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Roboto Serif',
      cssVariable: '--font-roboto'
    }
  ],
  markdown: {
    processor: satteri({
      hastPlugins: [
        Anchor,
        () => satteriHeadingIdsPlugin(),
        satteriHeadingLink({ icon: '#' })
      ],
      mdastPlugins: [satteriEmoji({ shortcodes: ['emojibase'] })]
    })
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
