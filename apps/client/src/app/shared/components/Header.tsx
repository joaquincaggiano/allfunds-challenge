import { BookOpen } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
              <BookOpen size={28} className="text-white" />
            </div>
            <h1 className="text-3xl font-bold ml-3 tracking-tight">AllFunds - Blog</h1>
          </div>
        </div>
      </header>
  )
}
