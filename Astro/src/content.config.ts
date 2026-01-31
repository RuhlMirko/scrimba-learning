import { defineCollection, z } from 'astro:content';
import { file, glob } from "astro/loaders";

const project = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    slug: z.string(),
    liveSiteURL: z.string(),
    githubURL: z.string()
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/blog" }),
  schema: z.object({
    //title, description, date (hint: z.string().date()), tags (hint: z.array(z.string())), image
  }),
});

//export your blog definition
export const collections = { project };