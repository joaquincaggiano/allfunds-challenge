import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNew } from '../actions/news.actions';
import mongoose from 'mongoose';
import { New, NewsInput } from '@allfunds-monorepo-app/shared';

export const useNewMutation = () => {
  const queryClient = useQueryClient();

  const useNewCreateMutation = useMutation({
    mutationFn: (data: NewsInput) => createNew(data),

    onMutate: async (data) => {
      // Cancelar cualquier consulta existente para evitar sobrescribir datos
      await queryClient.cancelQueries({
        queryKey: ['news', { filterKey: false, page: 1 }],
      });

      // Crear un artículo optimista
      const optimisticNew: New = {
        _id: new mongoose.Types.ObjectId().toString(),
        archiveDate: null,
        ...data,
      };

      // Obtener la lista actual de artículos desde la caché
      const previousNews = queryClient.getQueryData<New[]>([
        'news',
        { filterKey: false, page: 1 },
      ]);

      // Agregar el artículo optimista a la lista
      queryClient.setQueryData<New[]>(
        ['news', { filterKey: false, page: 1 }],
        (old) => {
          // Si old no es un array, inicialízalo como un array vacío
          if (!Array.isArray(old)) return [optimisticNew];
          return [...old, optimisticNew];
        }
      );

      // Devolver el contexto con los datos anteriores y el artículo optimista
      return { previousNews, optimisticNew };
    },
    onSuccess: (data, _variables, context) => {
      // Reemplazar el artículo optimista con los datos reales devueltos por la API
      queryClient.setQueryData<New[]>(
        ['news', { filterKey: false, page: 1 }],
        (old) => {
          if (!Array.isArray(old)) return [data.data];
          return old.map((newData) =>
            newData._id === context?.optimisticNew._id ? data.data : newData
          );
        }
      );
    },
    onError: (error, _variables, context) => {
      // Revertir la caché al estado anterior en caso de error
      queryClient.setQueryData(
        ['news', { filterKey: false, page: 1 }],
        context?.previousNews || [] // Si previousNews es undefined, usa un array vacío
      );
    },
    onSettled: () => {
      // Invalidar la consulta para asegurarse de que los datos estén actualizados
      queryClient.invalidateQueries({
        queryKey: ['news', { filterKey: false, page: 1 }],
      });
    },
  });

  return { useNewCreateMutation };
};
