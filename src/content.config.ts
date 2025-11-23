import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const unit = z.enum([
  "g",
  "kg",
  "ml",
  "l",
  "tsp",
  "tbsp",
  "cup",
  "oz",
  "lb",
  "",
]);

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/recipes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    ingredients: z.array(z.tuple([z.number(), unit, z.string()])),
  }),
});

export const collections = { recipes };
