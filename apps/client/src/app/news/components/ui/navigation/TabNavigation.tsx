import { FC } from 'react';
import { FileText, Archive } from 'lucide-react';

interface TabNavigationProps {
  showArchived: boolean;
  setShowArchived: (value: boolean) => void;
  title1: string;
  title2: string;
}

const TabNavigation: FC<TabNavigationProps> = ({
  showArchived,
  setShowArchived,
  title1,
  title2,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10 w-full max-w-3xl mx-auto">
      <div className="flex">
        <button
          onClick={() => setShowArchived(false)}
          className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium text-base transition-all duration-200 ${
            !showArchived
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FileText size={18} />
          <span>{title1}</span>
        </button>
        <button
          onClick={() => setShowArchived(true)}
          className={`flex-1 py-4 px-6 flex items-center justify-center gap-2 font-medium text-base transition-all duration-200 ${
            showArchived
              ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Archive size={18} />
          <span>{title2}</span>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
