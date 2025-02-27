import { Route, Routes } from 'react-router';
import { routes } from './RouterConfig';
import { MainLayout } from '../app/shared/layout/NewsLayout';
import { ErrorPage } from '../app/ErrorPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
        errorElement={<ErrorPage />}
        children={routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      ></Route>
    </Routes>
  );
};
