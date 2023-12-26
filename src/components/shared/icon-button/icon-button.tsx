import { FC, PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
}
const IconButton: FC<IProps> = ({ onClick, children, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center 
        p-2 w-10 h-10 text-sm rounded-md 
        text-golden dark:text-golden-text
        md:hover:bg-gray-100 md:dark:hover:bg-golden/20
        
        focus:outline-none focus:ring-1 ring-1 ring-grey-light dark:ring-grey-dark
        focus:ring-gray-200 dark:focus:ring-golden
        hover:focus:bg-none
        transition-all duration-100 ease-in
      ${className}
      `}>
      {children}
    </button>
  );
};
export default IconButton;