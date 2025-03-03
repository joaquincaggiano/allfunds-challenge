import { useForm } from 'react-hook-form';
import ButtonBack from '../components/ui/buttons/ButtonBack';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { NewsInput, newsSchema } from '@allfunds-monorepo-app/shared';
import { FormNew } from '../components/ui/form/FormNew';
import { useNewCreate } from '../hooks/useNewCreate';
export const CreateNew = () => {
  const { createNewMutation } = useNewCreate();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsInput>({
    resolver: zodResolver(newsSchema),
    defaultValues: {
      title: 'Artículo de prueba',
      description: 'Esta es una descripción de prueba para el artículo',
      author: 'Autor de prueba',
      content:
        'Este es un contenido de prueba para el artículo que cumple con los requisitos mínimos',
    },
  });

  const onSubmit = async (data: NewsInput) => {
    try {
      await createNewMutation.mutateAsync(data);
      navigate('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Unexpected error');
      }
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <ButtonBack to="/" />
          <h2 className="text-2xl font-bold text-gray-800">Create article</h2>
          <div className="w-[88px]" /> {/* Spacer for alignment */}
        </div>

        <div className="mb-6">
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"></div>
        </div>

        <FormNew
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
