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
    .min(3, 'El título debe tener al menos 3 caracteres')
    .max(50, 'El título no puede exceder 50 caracteres'),
  description: z
    .string()
    .trim()
    .min(10, 'La descripción debe tener al menos 10 caracteres'),
  date: z.string().datetime().nonempty(),
  content: z
    .string()
    .trim()
    .min(10, 'El contenido debe tener al menos 10 caracteres'),
  author: z.string().trim().min(3, 'El autor debe tener al menos 3 caracteres'),
  archiveDate: z.string().datetime().optional(),
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
