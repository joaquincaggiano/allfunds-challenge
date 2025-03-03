import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getNewById, updateNew, updateNewArchiveDate } from '../actions/news.actions';
import { NewsInput, New } from '@allfunds-monorepo-app/shared';
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
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: ['new', id] });

      const previousNew = queryClient.getQueryData(['new', id]) as New;

      queryClient.setQueryData(['new', id], {
        ...previousNew,
        ...newData,
      } as New);

      return { previousNew };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['new', id], data);
      queryClient.invalidateQueries({ queryKey: ['new', id] });
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
    onError: (error, newData, context) => {
      if (context?.previousNew) {
        queryClient.setQueryData(['new', id], context.previousNew);
      }
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
