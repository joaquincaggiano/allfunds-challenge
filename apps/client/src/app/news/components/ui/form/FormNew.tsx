import { Input } from './Input';
import { ButtonSubmit } from '../buttons/ButtonSubmit';
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { NewsInput } from '@allfunds-monorepo-app/shared';
interface Props {
  handleSubmit: UseFormHandleSubmit<NewsInput>;
  register: UseFormRegister<NewsInput>;
  errors: FieldErrors<NewsInput>;
  isSubmitting: boolean;
  onSubmit: (data: NewsInput) => void;
}

export const FormNew = ({
  handleSubmit,
  register,
  errors,
  isSubmitting,
  onSubmit,
}: Props) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title */}
      <Input
        register={register}
        errors={errors}
        label="Title"
        name="title"
        placeholder="Write the title of the article"
      />
      {/* Description */}
      <Input
        register={register}
        errors={errors}
        label="Description"
        name="description"
        placeholder="Write the description of the article"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Author */}
        <Input
          register={register}
          errors={errors}
          label="Author"
          name="author"
          placeholder="Write the author of the article"
        />
        {/* Date */}
        <Input
          register={register}
          errors={errors}
          label="Date"
          name="date"
          placeholder="Write the date of the article"
          type="date"
        />
      </div>

      {/* Content */}
      <Input
        register={register}
        errors={errors}
        label="Content"
        name="content"
        placeholder="Write the content of the article"
      />

      <div className="flex justify-end space-x-4 pt-4">
        <ButtonSubmit isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};
