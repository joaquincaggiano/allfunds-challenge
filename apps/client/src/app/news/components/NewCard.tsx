import { Calendar, User, ArrowRight, Archive } from 'lucide-react';
import { New } from '../interfaces/new.interface';

interface CardProps {
  newData: New;
}

const NewCard: React.FC<CardProps> = ({ newData }) => {
  const formattedDate = new Date(newData.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] border border-gray-100">
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Encabezado de la tarjeta */}
          <header className="flex items-center justify-between mb-4">
            {/* Línea decorativa */}
            <div
              className="h-1 w-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
              aria-hidden="true"
            ></div>

            {/* Botón de archivar */}
            <button
              // onClick={(e) => {
              //   e.stopPropagation();
              //   onArchive(post.id);
              // }}
              className="text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-indigo-50"
              aria-label="Archivar artículo"
              title="Archivar artículo"
            >
              <Archive size={18} />
            </button>
          </header>

          {/* Contenido principal */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {newData.title}
          </h2>
          <p className="text-gray-600 mb-5 line-clamp-3">
            {newData.description}
          </p>

          {/* Metadatos (autor y fecha) */}
          <ul className="flex items-center text-gray-500 text-sm mb-5 space-x-4">
            <li className="flex items-center">
              <div
                className="bg-blue-100 p-1.5 rounded-full mr-2"
                aria-hidden="true"
              >
                <User size={14} className="text-blue-600" />
              </div>
              <span className="font-medium">{newData.author}</span>
            </li>
            <li className="flex items-center">
              <div
                className="bg-indigo-100 p-1.5 rounded-full mr-2"
                aria-hidden="true"
              >
                <Calendar size={14} className="text-indigo-600" />
              </div>
              <span className="font-medium">{formattedDate}</span>
            </li>
          </ul>
        </div>

        {/* Botón de acción */}
        <button
          // onClick={() => onViewDetail(post.id)}
          className="w-fit flex items-center text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-sm"
        >
          Ver detalle
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </article>
  );
};

export default NewCard;
