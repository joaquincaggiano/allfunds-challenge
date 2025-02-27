import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
