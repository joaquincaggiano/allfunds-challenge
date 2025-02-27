import { Bookmark } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-white/10 p-2 rounded-full">
            <Bookmark size={20} className="text-blue-400" />
          </div>
        </div>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} All Funds - Blog. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
