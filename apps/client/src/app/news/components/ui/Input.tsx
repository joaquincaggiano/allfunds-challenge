import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "../../pages/WriteNew";
import { AlertCircle } from "lucide-react";

interface Props {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  label: string;
  name: keyof Inputs;
  placeholder: string;
  type?: string;
}

export const Input = ({ register, errors, label, name, placeholder, type = 'text' }: Props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className={`w-full px-4 py-3 rounded-lg border ${
          errors[name]
            ? 'border-red-500 ring-1 ring-red-500'
            : 'border-gray-300'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <AlertCircle size={14} className="mr-1" />
          {errors[name].message}
        </p>
      )}
    </div>
  );
};
