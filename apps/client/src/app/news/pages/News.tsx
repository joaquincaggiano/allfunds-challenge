import { useState } from 'react';
import { useNews } from '../hooks/useNews';
import { Loading } from '../../shared/components/ui/Loading';
import NewCard from '../components/card/NewCard';
import TabNavigation from '../components/ui/TabNavigation';
import { ToastContainer } from 'react-toastify';
import { Pagination } from '../components/pagination/Pagination';

export const News = () => {
  const [isAchieved, setIsAchieved] = useState(false);
  const { useNewsQuery, page, nextPage, prevPage } = useNews({
    filterKey: isAchieved,
  });

  if (useNewsQuery.isLoading || useNewsQuery.isFetching || !useNewsQuery.data)
    return <Loading />;

  return (
    <>
      <TabNavigation
        showArchived={isAchieved}
        setShowArchived={setIsAchieved}
        title1="Actives"
        title2="Archived"
      />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {useNewsQuery.data.news.map((newData) => {
          return <NewCard key={newData._id} newData={newData} />;
        })}
      </section>

      <Pagination
        page={page}
        totalPages={useNewsQuery.data.totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <ToastContainer />
    </>
  );
};
