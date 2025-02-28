import { Link, useParams } from 'react-router-dom';
import { useNew } from '../hooks/useNew';
import { Loading } from '../../shared/components/ui/Loading';
import { Archive, ArrowLeft, Calendar, User } from 'lucide-react';
import { formattedDate } from '../../../utils/formattedDate';

export const NewById = () => {
  const { id } = useParams();
  const { useNewQuery } = useNew({ id: id as string });

  if (useNewQuery.isLoading || useNewQuery.isFetching || !useNewQuery.data)
    return <Loading />;

  const { title, description, date, content, author, archiveDate } =
    useNewQuery.data;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <div className="p-8">
        {/* Back button */}
        <Link
          to="/"
          className="flex items-center text-gray-700 font-medium hover:text-blue-600 transition-colors mb-8 group"
        >
          <div className="bg-gray-100 p-2 rounded-full mr-2 group-hover:bg-blue-100 transition-colors">
            <ArrowLeft
              size={18}
              className="group-hover:text-blue-600 transition-colors"
            />
          </div>
          Back
        </Link>

        {/* Title */}
        <div className="mb-6">
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"></div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        </div>

        {/* Author, date and archive date */}
        <div className="flex items-center text-gray-600 mb-8 space-x-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full mr-2">
              <User size={18} className="text-blue-600" />
            </div>
            <span className="font-medium">{author}</span>
          </div>

          <div className="flex items-center">
            <div className="bg-indigo-100 p-2 rounded-full mr-2">
              <Calendar size={18} className="text-indigo-600" />
            </div>
            <span className="font-medium">{formattedDate(date)}</span>
          </div>

          {archiveDate && (
            <div className="flex items-center">
              <div className="bg-green-100 p-2 rounded-full mr-2">
                <Archive size={18} className="text-green-600" />
              </div>
              <span className="font-medium">{formattedDate(archiveDate)}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 font-medium mb-8 text-lg">{description}</p>

        {/* Content */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
