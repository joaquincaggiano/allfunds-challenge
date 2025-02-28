import { useQuery } from '@tanstack/react-query';
import { getNewById } from '../actions/news.actions';

interface Options {
  id: string;
}

export const useNew = ({ id }: Options) => {
  const useNewQuery = useQuery({
    queryKey: ['new', id],
    queryFn: () => getNewById(id),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return { useNewQuery };
};
