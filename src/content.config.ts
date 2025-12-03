// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    completionDate: z.date(),
    abstract: z.string(),
    author: z.string(),
    image: z.object({ url: z.string(), alt: z.string() }),
    tags: z.array(z.string()),
    slug: z.string(), // <- add this so post.data.slug exists
    collaborators: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};