// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      completionDate: z.date(),
      collaborators: z.string().optional(),
      abstract: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { projects };