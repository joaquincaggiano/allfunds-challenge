import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  page: number;
  totalPages: number;
  nextPage: () => void
  prevPage: () => void
}
export const Pagination = ({ page, totalPages, nextPage, prevPage }: Props) => {
  return (
    <div className="flex items-center justify-center gap-10 mt-12 mb-4">
      <button
        onClick={prevPage}
        className={`flex items-center justify-center p-2.5 rounded-lg mr-3 transition-all duration-200 ${
          page === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm border border-gray-200'
        }`}
        aria-label="Página anterior"
      >
        <ChevronLeft size={20} />
      </button>

      <span className="text-sm font-medium text-indigo-600">{page}</span>

      <button
        onClick={nextPage}
        className={`flex items-center justify-center p-2.5 rounded-lg ml-3 transition-all duration-200 ${
          page === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm border border-gray-200'
        }`}
        aria-label="Página siguiente"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
