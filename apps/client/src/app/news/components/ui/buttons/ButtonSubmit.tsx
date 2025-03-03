import { Loader, Save } from 'lucide-react';

interface Props {
  isSubmitting: boolean;
}
export const ButtonSubmit = ({ isSubmitting }: Props) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-sm disabled:opacity-70"
    >
      {isSubmitting ? (
        <>
          <Loader size={18} className="mr-2" />
          Saving...
        </>
      ) : (
        <>
          <Save size={18} className="mr-2" />
          Save article
        </>
      )}
    </button>
  );
};
