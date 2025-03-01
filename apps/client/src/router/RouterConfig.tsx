import { NewById } from '../app/news/pages/NewById';
import { News } from '../app/news/pages/News';
import { WriteNew } from '../app/news/pages/WriteNew';

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
  {
    path: '/news/write',
    element: <WriteNew />,
  },
];
