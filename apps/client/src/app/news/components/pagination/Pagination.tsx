import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ButtonIcon } from '../ui/ButtonIcon';

interface Props {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
}
export const Pagination = ({ page, totalPages, nextPage, prevPage }: Props) => {
  return (
    <div className="flex items-center justify-center gap-10 mt-12 mb-4">
      <ButtonIcon
        onClick={prevPage}
        icon={<ChevronLeft size={20} />}
        title="Página anterior"
        className={`flex items-center justify-center p-2.5 rounded-lg mr-3 transition-all duration-200 ${
          page === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm border border-gray-200'
        }`}
      />

      <span className="text-sm font-medium text-indigo-600">{page}</span>

      <ButtonIcon
        onClick={nextPage}
        icon={<ChevronRight size={20} />}
        title="Página siguiente"
        className={`flex items-center justify-center p-2.5 rounded-lg ml-3 transition-all duration-200 ${
          page === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm border border-gray-200'
        }`}
      />
    </div>
  );
};
