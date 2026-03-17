import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    subtitle: z.string(),
    type: z.enum(['live', 'private', 'academic']),
    year: z.string(),
    description: z.string(),
    stack: z.array(z.string()),
    screenshots: z.array(z.string()).default([]),
    links: z.object({
      live: z.string().optional(),
      repo: z.string().optional(),
      repoBack: z.string().optional(),
    }),
  }),
});

const skillsCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/skills" }),
  schema: z.object({
    name: z.string(),
    color: z.string(),
    svg: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  skills: skillsCollection,
};
