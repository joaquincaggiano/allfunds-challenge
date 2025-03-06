import { archiveSchema, newsSchema, paramsSchema } from "@allfunds-monorepo-app/shared";
import { z } from "zod";

export const createSchema = z.object({
  body: newsSchema,
  // query: z.object({}).optional(),
  // params: z.object({}).optional(),
});

export const updateSchema = z.object({
  params: paramsSchema,
  body: newsSchema,
});

export const idSchema = z.object({
  params: paramsSchema,
});

export const archiveValidationSchema = z.object({
  params: paramsSchema,
  body: archiveSchema,
});
