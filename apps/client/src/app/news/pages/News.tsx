import { useState } from 'react';
import { useNews } from '../hooks/useNews';
import { Loading } from '../../shared/components/ui/Loading';
import NewCard from '../components/card/NewCard';
import TabNavigation from '../components/ui/navigation/TabNavigation';
import { ToastContainer } from 'react-toastify';
import { Pagination } from '../components/pagination/Pagination';
import { Archive, PlusCircle } from 'lucide-react';
import { ButtonLink } from '../components/ui/buttons/ButtonLink';

export const News = () => {
  const [isAchieved, setIsAchieved] = useState(false);

  const { useNewsQuery, page, nextPage, prevPage } = useNews({
    filterKey: isAchieved,
  });

  if (useNewsQuery.isLoading || useNewsQuery.isFetching || !useNewsQuery.data)
    return <Loading />;

  const news = useNewsQuery.data.news || [];

  return (
    <div className="flex flex-col">
      <ButtonLink
        to="/news/write"
        icon={<PlusCircle size={18} />}
        label="New article"
        className="self-end mb-5"
      />

      <TabNavigation
        showArchived={isAchieved}
        setShowArchived={setIsAchieved}
        title1="Actives"
        title2="Archived"
      />

      {news.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-12">
          <div className="bg-indigo-100 p-3 rounded-full inline-flex mb-4">
            <Archive size={24} className="text-indigo-600" />
          </div>
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No hay artículos
          </h3>
        </div>
      ) : (
        <>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((newData) => {
              return <NewCard key={newData._id} newData={newData} />;
            })}
          </section>

          <Pagination
            page={page}
            totalPages={useNewsQuery.data?.totalPages ?? 0}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </>
      )}

      <ToastContainer />
    </div>
  );
};
