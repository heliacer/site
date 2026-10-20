import { satteri } from '@astrojs/markdown-satteri'
import { defineConfig, fontProviders } from 'astro/config'
import { hastExternalLinks } from '@/hast/hast-external-links'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import node from '@astrojs/node'
import tailwindcss from '@tailwindcss/vite'

let adapter = vercel({ webAnalytics: { enabled: true } })

if (process.argv[3] === '--node' || process.argv[4] === '--node') {
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
      hastPlugins: [hastExternalLinks]
    })
  },
  vite: {
    plugins: [tailwindcss()]
  }
})
