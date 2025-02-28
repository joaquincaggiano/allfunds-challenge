import { ReactNode } from 'react';

interface ButtonIconProps {
  onClick: () => void;
  icon: ReactNode;
  title: string;
}

export const ButtonIcon = ({ onClick, icon, title }: ButtonIconProps) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-indigo-600 transition-colors p-2 rounded-full hover:bg-indigo-50"
      aria-label={title}
      title={title}
    >
      {icon}
    </button>
  );
};
