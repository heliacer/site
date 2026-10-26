import { satteri } from '@astrojs/markdown-satteri'
import { defineConfig, fontProviders } from 'astro/config'
import { Anchor } from '@/plugins/anchor'
import { satteriEmoji } from 'satteri-emoji'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'

let adapter = vercel({ webAnalytics: { enabled: true } })

if (process.argv.includes('--node')) {
  adapter = node({ mode: 'standalone' })
}

export default defineConfig({
  site: 'https://heliacer.ch',
  integrations: [sitemap()],
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
      hastPlugins: [Anchor],
      mdastPlugins: [satteriEmoji({ shortcodes: ['emojibase'] })]
    })
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
