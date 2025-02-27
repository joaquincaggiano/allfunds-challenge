import { useState } from 'react';
import { useNews } from '../hooks/useNews';
import { Loading } from '../../shared/components/ui/Loading';
import NewCard from '../components/card/NewCard';
import TabNavigation from '../components/ui/TabNavigation';

export const News = () => {
  const [isAchieved, setIsAchieved] = useState(false);
  const { useNewsQuery } = useNews({ filterKey: isAchieved });

  if (useNewsQuery.isLoading || useNewsQuery.isFetching || !useNewsQuery.data)
    return <Loading />;

  return (
    <>
      <TabNavigation
        showArchived={isAchieved}
        setShowArchived={setIsAchieved}
        title1="Activos"
        title2="Archivados"
      />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {useNewsQuery.data.map((newData) => {
          return <NewCard key={newData._id} newData={newData} />;
        })}
      </section>
    </>
  );
};
