import { NewById } from "../app/pages/NewById";
import { News } from "../app/pages/News";

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
