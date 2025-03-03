import { useQueryClient } from '@tanstack/react-query';
import { getNewById } from '../actions/news.actions';

export const useNewPrefetch = () => {
  const queryClient = useQueryClient();

  const newPrefetchQuery = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ['new', id],
      queryFn: () => getNewById(id),
      staleTime: 1000 * 60 * 60, // 1 hour
    });
  };

  return { newPrefetchQuery };
};
