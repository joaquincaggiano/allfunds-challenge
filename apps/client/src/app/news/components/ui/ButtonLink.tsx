import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  icon: ReactNode;
  label: string;
  isIconLeft?: boolean;
  className?: string;
}
export const ButtonLink = ({
  to,
  icon,
  label,
  isIconLeft = true,
  className,
}: Props) => {
  return (
    <Link
      to={to}
      className={`w-fit flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-sm ${className}`}
    >
      {isIconLeft && icon}
      {label}
      {!isIconLeft && icon}
    </Link>
  );
};
