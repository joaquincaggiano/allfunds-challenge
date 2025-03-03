import { z } from 'zod';
import { isValidObjectId } from 'mongoose';

// Schema para validar el ObjectId de MongoDB
const objectIdSchema = z
  .string()
  .nonempty()
  .refine((value) => isValidObjectId(value), {
    message: 'Invalid MongoDB ObjectId',
  });

// Schema para crear/actualizar noticias
export const newsSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Title must be at least 3 characters')
    .max(50, 'Title cannot exceed 50 characters'),
  description: z
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters'),
  date: z.coerce.date(),
  content: z
    .string()
    .trim()
    .min(10, 'Content must be at least 10 characters'),
  author: z.string().trim().min(3, 'Author must be at least 3 characters'),
});

export const archiveSchema = z.object({
  isArchived: z.boolean(),
});

// Schema para parámetros de ID
export const paramsSchema = z.object({
  id: objectIdSchema,
});

// Tipos inferidos de los schemas
export type NewsInput = z.infer<typeof newsSchema>;
export type ParamsInput = z.infer<typeof paramsSchema>;
