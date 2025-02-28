import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  backgroundColor: string;
  children: string;
}

export const Li = ({ icon, backgroundColor, children }: Props) => {
  return (
    <li className="flex items-center">
      <div
        className={`p-1.5 rounded-full mr-2 ${backgroundColor}`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="font-medium">{children}</span>
    </li>
  );
};
