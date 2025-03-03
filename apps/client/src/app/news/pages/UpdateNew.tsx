import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonBack from '../components/ui/buttons/ButtonBack';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewsInput, newsSchema } from '@allfunds-monorepo-app/shared';
import { useNewUpdate } from '../hooks/useNewUpdate';
import { Loading } from '../../shared/components/ui/Loading';
import { FormNew } from '../components/ui/form/FormNew';
import { toast, ToastContainer } from 'react-toastify';

export const UpdateNew = () => {
  const { id } = useParams();
  const { editNewQuery, updateNewMutation } = useNewUpdate(id as string);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsInput>({
    resolver: zodResolver(newsSchema),
  });

  useEffect(() => {
    if (editNewQuery.data) {
      reset(editNewQuery.data);
    }
  }, [editNewQuery.data, reset]);

  const onSubmit = async (data: NewsInput) => {
    try {
      await updateNewMutation.mutateAsync(data);
      navigate(`/news/${id}`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Unexpected error');
      }
    }
  };

  if (editNewQuery.isLoading || !editNewQuery.data) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <ButtonBack to={`/news/${id}`} />
          <h2 className="text-2xl font-bold text-gray-800">Edit article</h2>
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

        <ToastContainer />
      </div>
    </div>
  );
};
