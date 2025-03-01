import { useQuery } from '@tanstack/react-query';
import { getNews } from '../actions/news.actions';
import { useEffect, useState } from 'react';

interface UseNewsOptions {
  filterKey?: boolean;
}

export const useNews = ({ filterKey = false }: UseNewsOptions) => {
  const [page, setPage] = useState(1);

  const useNewsQuery = useQuery({
    queryKey: ['news', { filterKey, page }],
    queryFn: () => getNews({ filterKey, page }),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  useEffect(() => {
    setPage(1);
  }, [filterKey]);

  const nextPage = () => {
    if (useNewsQuery.data?.news.length === 0) return;

    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) return;

    setPage(page - 1);
  };

  return { useNewsQuery, page, nextPage, prevPage };
};
