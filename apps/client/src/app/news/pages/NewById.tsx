import { useNavigate, useParams } from 'react-router-dom';
import { useNew } from '../hooks/useNew';
import { Loading } from '../../shared/components/ui/Loading';
import { Archive, Calendar, PencilLine, User } from 'lucide-react';
import { formattedDate } from '../../../utils/formattedDate';
import { Li } from '../components/ui/Li';
import ButtonBack from '../components/ui/buttons/ButtonBack';
import { ButtonIcon } from '../components/ui/buttons/ButtonIcon';
import { toast } from 'react-toastify';

export const NewById = () => {
  const { id } = useParams();
  const { useNewQuery } = useNew({ id: id as string });
  const navigate = useNavigate();

  if (useNewQuery.isLoading || useNewQuery.isFetching) return <Loading />;

  if (useNewQuery.error) {
    toast.error(useNewQuery.error.message);
  }

  if (!useNewQuery.data) {
    return (
      <div className="flex flex-col justify-center items-center py-12">
        <div className="bg-indigo-100 p-3 rounded-full inline-flex mb-4">
          <Archive size={24} className="text-indigo-600" />
        </div>
        <h3 className="text-xl font-medium text-gray-700 mb-2">
          No se encontró el archivo
        </h3>
      </div>
    );
  }

  const { title, description, date, content, author, archiveDate } =
    useNewQuery.data;

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <div className="p-8">
        {/* Botón de regreso */}
        <nav className="flex justify-between items-center">
          <ButtonBack to="/" />

          <ButtonIcon
            icon={<PencilLine size={18} className="text-indigo-600" />}
            title="Edit"
            onClick={() => navigate(`/news/write/${id}`)}
          />
        </nav>

        {/* Título */}
        <section className="mt-8">
          <div
            className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"
            aria-hidden="true"
          ></div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        </section>

        {/* Metadatos (autor, fecha y fecha de archivo) */}
        <ul className="flex items-center text-gray-600 mb-8 space-x-6">
          <Li
            icon={<User size={18} className="text-blue-600" />}
            backgroundColor="bg-blue-100"
            children={author}
          />

          <Li
            icon={<Calendar size={18} className="text-indigo-600" />}
            backgroundColor="bg-indigo-100"
            children={formattedDate(date)}
          />

          {archiveDate && (
            <Li
              icon={<Archive size={18} className="text-green-600" />}
              backgroundColor="bg-green-100"
              children={formattedDate(archiveDate)}
            />
          )}
        </ul>

        {/* Descripción */}
        <section>
          <p className="text-gray-700 font-medium mb-8 text-lg">
            {description}
          </p>
        </section>

        {/* Contenido principal */}
        <section className="border-t border-gray-200 pt-8">
          <p className="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
            {content}
          </p>
        </section>
      </div>
    </article>
  );
};
