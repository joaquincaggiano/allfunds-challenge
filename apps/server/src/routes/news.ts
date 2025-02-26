import { Router } from 'express';

const newsRouter = Router();

newsRouter.get('/', (req, res) => {
  res.send('todas las news');
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