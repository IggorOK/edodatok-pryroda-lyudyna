import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    // Базові обов'язкові поля
    id: z.string(),
    module: z.enum(['m0', 'm1', 'm2', 'm3', 'm4']),
    number: z.number().int().positive(),
    title: z.string(),
    keyQuestion: z.string(),
    time: z.number().int().positive(),
    lessonType: z.enum(['intro', 'main', 'practical', 'review', 'case']),
    status: z.enum(['wip', 'draft', 'ready']),

    // Розширені поля (всі необов'язкові — для майбутнього імпорту)
    bigIdea: z.string().optional(),
    hook: z.string().optional(),
    mainContent: z.string().optional(),
    newTerms: z.string().optional(),
    returningTerms: z.string().optional(),
    visualization: z.string().optional(),
    task: z.string().optional(),
    cerFrame: z.string().optional(),
    humanitiesBridges: z.object({
      law: z.string().optional(),
      relationships: z.string().optional(),
      psychology: z.string().optional(),
      society: z.string().optional(),
    }).optional(),
    quote: z.string().optional(),
    funFact: z.string().optional(),
    profession: z.string().optional(),
    digitalResources: z.object({
      video: z.string().optional(),
      interactive: z.string().optional(),
      tool: z.string().optional(),
    }).optional(),
    assessment: z.string().optional(),
    homework: z.string().optional(),
  }),
});

export const collections = { lessons };
