import { CreateNew } from '../app/news/pages/CreateNew';
import { NewById } from '../app/news/pages/NewById';
import { News } from '../app/news/pages/News';
import { UpdateNew } from '../app/news/pages/UpdateNew';

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
    element: <CreateNew />,
  },
  {
    path: '/news/write/:id',
    element: <UpdateNew />,
  },
];
