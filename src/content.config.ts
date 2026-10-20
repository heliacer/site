import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pub: z.date(),
      upd: z.date().optional(),
      descr: z.string(),
      author: z.string().default('Heliacer'),
      cover: z
        .object({
          src: image(),
          alt: z.string().min(1)
        })
        .optional(),
      tags: z.array(z.string()).default([])
    })
})

export const collections = { blog }
