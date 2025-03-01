import { Router } from 'express';
import newsController from '../controllers/newsController';
import { z } from 'zod';
import { archiveSchema, newsSchema, paramsSchema } from '../zod-schemas/newsSchema';
import { validateRequest } from '../middlewares/validateRequest';

const newsRouter = Router();

const createSchema = z.object({
  body: newsSchema,
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

const updateSchema = z.object({
  params: paramsSchema,
  body: newsSchema,
});

const idSchema = z.object({
  params: paramsSchema,
});

const archiveValidationSchema = z.object({
  params: paramsSchema,
  body: archiveSchema,
});

newsRouter.get('/', newsController.getNews);

newsRouter.get('/:id', validateRequest(idSchema), newsController.getNewById);

newsRouter.post('/create', validateRequest(createSchema), newsController.createNew);

newsRouter.put(
  '/:id',
  validateRequest(idSchema),
  validateRequest(updateSchema),
  newsController.updateNew
);

newsRouter.patch(
  '/:id/archive',
  validateRequest(archiveValidationSchema),
  newsController.updateNewArchiveDate
);

newsRouter.delete('/:id', validateRequest(idSchema), newsController.deleteNew);

export default newsRouter;
