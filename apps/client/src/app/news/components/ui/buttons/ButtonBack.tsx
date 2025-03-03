import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
}

const ButtonBack = ({ to }: Props) => {
  return (
    <Link
      to={to}
      className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-colors group"
      aria-label="Volver al inicio"
    >
      <div className="bg-gray-100 p-2 rounded-full mr-2 group-hover:bg-blue-100 transition-colors">
        <ArrowLeft
          size={18}
          className="group-hover:text-blue-600 transition-colors"
        />
      </div>
      Back
    </Link>
  );
};

export default ButtonBack;
