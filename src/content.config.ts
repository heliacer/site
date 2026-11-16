import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pub: z.date(),
      upd: z.date().optional(),
      descr: z.string(),
      cover: z
        .object({
          src: image(),
          alt: z.string().min(1)
        })
        .optional(),
      tags: z.array(z.string()).default([]),

      /** @temporary until website service ready (.mdx) */
      noindex: z.boolean().default(false)
    })
})

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    pub: z.date()
  })
})

export const collections = { work, news }
