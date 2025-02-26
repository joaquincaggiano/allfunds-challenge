import { Router } from 'express';
import News from '../models/news';

const newsRouter = Router();

newsRouter.get('/', async (req, res) => {
  const news = await News.find();
  res.json(news);
});

newsRouter.get('/:id', (req, res) => {
  res.send(`news con id ${req.params.id}`);
});

newsRouter.post('/', (req, res) => {
  res.send('crear news');
});

newsRouter.put('/:id', (req, res) => {
  res.send(`actualizar news con id ${req.params.id}`);
});

newsRouter.delete('/:id', (req, res) => {
  res.send(`eliminar news con id ${req.params.id}`);
});

export default newsRouter;