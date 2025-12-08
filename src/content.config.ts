// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const ProjectIndex = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/ProjectIndex" }),
    schema: z.object({
      title: z.string().optional(),
      pubDate: z.date().optional(),
      completionDate: z.date().optional(),
      description: z.string().optional(),
      author: z.string().optional(),
      collaborators: z.array(z.string()).optional(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = { ProjectIndex };