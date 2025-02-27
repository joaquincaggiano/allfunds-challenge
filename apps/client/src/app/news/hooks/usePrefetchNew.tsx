import { useQueryClient } from '@tanstack/react-query';
import { getNewById } from '../actions/news.actions';

export const usePrefetchNew = () => {
  const queryClient = useQueryClient();

  const prefetchNew = (id: string) => {
    queryClient.prefetchQuery({
      queryKey: ['new', id],
      queryFn: () => getNewById(id),
      staleTime: 1000 * 60 * 60, // 1 hour
    });
  };

  return { prefetchNew };
};
