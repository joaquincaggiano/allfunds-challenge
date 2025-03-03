import { FC } from 'react';
import { Calendar, User, ArrowRight, Archive, Trash } from 'lucide-react';
import { formattedDate } from '../../../../utils/formattedDate';
import { usePrefetchNew } from '../../hooks/usePrefetchNew';
import { useNew } from '../../hooks/useNew';
import { ButtonIcon } from '../ui/buttons/ButtonIcon';
import { Li } from '../ui/Li';
import { ButtonLink } from '../ui/buttons/ButtonLink';
import { New } from '@allfunds-monorepo-app/shared';

interface CardProps {
  newData: New;
}

const NewCard: FC<CardProps> = ({ newData }) => {
  const { prefetchNew } = usePrefetchNew();
  const { useNewUpdateArchiveMutation, useNewDeleteMutation } = useNew({
    id: newData._id,
  });

  return (
    <article
      onMouseEnter={() => prefetchNew(newData._id)}
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] border border-gray-100"
    >
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Encabezado de la tarjeta */}
          <div className="flex items-center justify-between mb-4">
            {/* Línea decorativa */}
            <div
              className="h-1 w-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
              aria-hidden="true"
            ></div>

            {/* Botón de archivar o borrar articulo */}
            {newData.archiveDate ? (
              <ButtonIcon
                onClick={() => useNewDeleteMutation.mutate()}
                icon={<Trash size={18} />}
                title="Delete blog"
                className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50"
              />
            ) : (
              <ButtonIcon
                onClick={() => useNewUpdateArchiveMutation.mutate(true)}
                icon={<Archive size={18} />}
                title="Archive blog"
              />
            )}
          </div>

          {/* Contenido principal */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {newData.title}
          </h2>
          <p className="text-gray-600 mb-5 line-clamp-3">
            {newData.description}
          </p>

          {/* Metadatos (autor y fecha) */}
          <ul className="flex items-center text-gray-500 text-sm mb-5 space-x-4">
            <Li
              icon={<User size={14} className="text-blue-600" />}
              backgroundColor="bg-blue-100"
              children={newData.author}
            />

            {newData.archiveDate ? (
              <Li
                icon={<Archive size={14} className="text-green-600" />}
                backgroundColor="bg-green-100"
                children={formattedDate(newData.archiveDate)}
              />
            ) : (
              <Li
                icon={<Calendar size={14} className="text-indigo-600" />}
                backgroundColor="bg-indigo-100"
                children={formattedDate(newData.date)}
              />
            )}
          </ul>
        </div>

        {/* Navegación a la página del artículo */}
        <ButtonLink
          to={`/news/${newData._id}`}
          icon={<ArrowRight size={16} />}
          label="Read more"
          isIconLeft={false}
        />
      </div>
    </article>
  );
};

export default NewCard;
