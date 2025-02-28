import { Router } from 'express';
import newsController from '../controllers/newsController';
import { z } from 'zod';
import { archiveSchema, newsSchema, paramsSchema } from '../zod-schemas/newsSchema';
import { validateRequest } from '../middlewares/validateRequest';

const newsRouter = Router();

const updateSchema = z.object({
  params: paramsSchema,
  body: newsSchema,
});

const idSchema = z.object({
  params: paramsSchema,
});

newsRouter.get('/', newsController.getNews);

newsRouter.get('/:id', validateRequest(idSchema), newsController.getNewById);

newsRouter.post('/', validateRequest(newsSchema), newsController.createNew);

newsRouter.put(
  '/:id',
  validateRequest(idSchema),
  validateRequest(updateSchema),
  newsController.updateNew
);

newsRouter.patch(
  '/:id/archive',
  validateRequest(idSchema),
  validateRequest(archiveSchema),
  newsController.updateNewArchiveDate
);

newsRouter.delete('/:id', validateRequest(idSchema), newsController.deleteNew);

export default newsRouter;
