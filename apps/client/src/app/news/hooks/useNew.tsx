import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getNewById, updateNewArchiveDate } from '../actions/news.actions';
import { toast } from 'react-toastify';

interface Options {
  id: string;
}

export const useNew = ({ id }: Options) => {

  const queryClient = useQueryClient();

  const useNewQuery = useQuery({
    queryKey: ['new', id],
    queryFn: () => getNewById(id),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const useNewUpdateArchiveMutation = useMutation({
    mutationFn: (isArchived: boolean) => updateNewArchiveDate(id, isArchived),
    onSuccess: (dataResponse) => {
      queryClient.setQueryData(['news', id], dataResponse.data);
      queryClient.invalidateQueries({ queryKey: ['news'] });
      // queryClient.refetchQueries({ queryKey: ['news'] });
      toast.success(dataResponse.message);
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return { useNewQuery, useNewUpdateArchiveMutation };
};
