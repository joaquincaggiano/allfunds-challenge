import { Router } from 'express';
import newsController from '../controllers/newsController';
import { z } from 'zod';
import { validateRequest } from '../middlewares/validateRequest';
import { paramsSchema, newsSchema, archiveSchema } from '@allfunds-monorepo-app/shared';

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

newsRouter.get('/seed', newsController.seedNews);

newsRouter.get('/:id', validateRequest(idSchema), newsController.getNewById);


newsRouter.post('/create', validateRequest(createSchema), newsController.createNew);

newsRouter.put(
  '/:id/update',
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
