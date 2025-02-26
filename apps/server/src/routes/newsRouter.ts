import { Router } from 'express';
import newsController from '../controllers/newsController';

const newsRouter = Router();

newsRouter.get('/', newsController.getNews);

newsRouter.get('/:id', newsController.getNewById);

newsRouter.post('/', newsController.createNews);

newsRouter.put('/:id', newsController.updateNews);

newsRouter.delete('/:id', newsController.deleteNews);

export default newsRouter;