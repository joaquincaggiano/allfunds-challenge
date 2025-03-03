import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getNewById, updateNew, updateNewArchiveDate } from '../actions/news.actions';
import { NewsInput } from '@allfunds-monorepo-app/shared';
import { toast } from 'react-toastify';

export const useNewUpdate = (id: string) => {
  const queryClient = useQueryClient();

  const editNewQuery = useQuery({
    queryKey: ['new', id],
    queryFn: () => getNewById(id),
    initialData: () => {
      const cachedData = queryClient.getQueryData(['new', id]);
      if (cachedData) {
        return cachedData;
      }
    },
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const updateNewMutation = useMutation({
    mutationFn: (data: NewsInput) => updateNew(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['new', id] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const patchNewArchiveMutation = useMutation({
    mutationFn: (isArchived: boolean) => updateNewArchiveDate(id, isArchived),
    onSuccess: (dataResponse) => {
      queryClient.setQueryData(['news', id], dataResponse.data);
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return { editNewQuery, updateNewMutation, patchNewArchiveMutation };
};
