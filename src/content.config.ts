import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cerita = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cerita' }),
  schema: z
    .object({
      title: z.string(),
      tanggal: z.coerce.date(),
      genre: z.string(),
      mood: z.enum(['hangat', 'sunyi', 'gelap', 'tegang', 'lucu', 'melankolis']),
      cuplikan: z.string(),
      draft: z.boolean().default(false),
      cover: z.string().optional(),
      coverAlt: z.string().optional(),
    })
    .refine((data) => !data.cover || Boolean(data.coverAlt), {
      message: 'coverAlt wajib diisi jika cover dipakai',
      path: ['coverAlt'],
    }),
});

export const collections = { cerita };
