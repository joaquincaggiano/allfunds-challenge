import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNew } from '../actions/news.actions';
import { toast } from 'react-toastify';

export const useNewDelete = (id: string) => {
  const queryClient = useQueryClient();

  const deleteNewMutation = useMutation({
    mutationFn: () => deleteNew(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['news'] });
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  return { deleteNewMutation };
};
