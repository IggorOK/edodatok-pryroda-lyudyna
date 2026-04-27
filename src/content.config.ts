import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    id: z.string(),
    module: z.enum(['m0', 'm1', 'm2', 'm3', 'm4']),
    number: z.number().int().positive(),
    title: z.string(),
    keyQuestion: z.string(),
    time: z.number().int().positive(),
    lessonType: z.enum(['intro', 'main', 'practical', 'review', 'case']),
    status: z.enum(['wip', 'draft', 'ready']),
  }),
});

export const collections = { lessons };
