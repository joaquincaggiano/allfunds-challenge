import { z } from 'zod';

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
  date: z.coerce.date(),
  content: z
    .string()
    .trim()
    .min(10, 'El contenido debe tener al menos 10 caracteres'),
  author: z.string().trim().min(3, 'El autor debe tener al menos 3 caracteres'),
});

export type NewsInput = z.infer<typeof newsSchema>;
