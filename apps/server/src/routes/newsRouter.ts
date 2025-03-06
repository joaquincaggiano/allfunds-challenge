import { Router } from 'express';
import newsController from '../controllers/newsController';
import { validateRequest } from '../middlewares/validateRequest';
import { archiveValidationSchema, createSchema, idSchema, updateSchema } from '../zod-schemas/validation-routes-schemas';

const newsRouter = Router();

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
