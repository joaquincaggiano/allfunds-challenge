import { useParams } from 'react-router-dom';
import { Save } from 'lucide-react';
import { useForm } from 'react-hook-form';
import ButtonBack from '../components/ui/ButtonBack';
import { Input } from '../components/ui/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewsInput, newsSchema } from '@allfunds-monorepo-app/shared';


export const UpdateNew = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewsInput>({
    resolver: zodResolver(newsSchema),
    // defaultValues,
  });

  const onSubmit = (data: NewsInput) => {};

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <ButtonBack to="/" />
          <h2 className="text-2xl font-bold text-gray-800">
            {id ? 'Editar artículo' : 'Crear nuevo artículo'}
          </h2>
          <div className="w-[88px]" /> {/* Spacer for alignment */}
        </div>

        <div className="mb-6">
          <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <Input
            register={register}
            errors={errors}
            label="Título"
            name="title"
            placeholder="Escribe el título del artículo"
          />
          {/* Description */}
          <Input
            register={register}
            errors={errors}
            label="Descripción"
            name="description"
            placeholder="Escribe la descripción del artículo"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Author */}
            <Input
              register={register}
              errors={errors}
              label="Autor"
              name="author"
              placeholder="Nombre del autor"
            />
            {/* Date */}
            <Input
              register={register}
              errors={errors}
              label="Fecha"
              name="date"
              placeholder="Escribe la fecha del artículo"
              type="date"
            />
          </div>

          {/* Content */}
          <Input
            register={register}
            errors={errors}
            label="Contenido"
            name="content"
            placeholder="Escribe el contenido del artículo"
          />

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm disabled:opacity-70"
            >
              <Save size={18} className="mr-2" />
              Guardar artículo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
