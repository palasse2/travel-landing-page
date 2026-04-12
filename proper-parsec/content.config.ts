import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    readTime: z.string(),
    category: z.string(),
    description: z.string(),
    cover: z.string(),
  }),
});

export const collections = { blog };