import { NewById } from '../app/news/pages/NewById';
import { News } from '../app/news/pages/News';

export const routes: { path: string; element: React.ReactNode }[] = [
  // Aquí se añaden las rutas de la aplicación
  {
    path: '/',
    element: <News />,
  },
  {
    path: '/news/:id',
    element: <NewById />,
  },
];
