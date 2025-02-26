import { Router } from 'express';
import newsController from '../controllers/newsController';
import { z } from 'zod';
import { newsSchema, paramsSchema } from '../zod-schemas/newsSchema';
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

newsRouter.post('/', validateRequest(newsSchema), newsController.createNews);

newsRouter.put(
  '/:id',
  validateRequest(idSchema),
  validateRequest(updateSchema),
  newsController.updateNews
);

newsRouter.delete('/:id', validateRequest(idSchema), newsController.deleteNews);

export default newsRouter;
