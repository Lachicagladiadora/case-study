import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  _isLight: boolean;
};

export const Button = ({
  children,
  _isLight = true,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        w-auto text-cs-navbar px-9 py-4 rounded-full uppercase font-cs-title font-bold 
        ${
          _isLight
            ? "bg-cs-sky-blue text-cs-dark-blue hover:bg-cs-light-blue hover:text-cs-light shadow-cs-light shadow-sm"
            : "bg-cs-light-blue text-cs-light hover:bg-cs-sky-blue hover:text-cs-dark-blue shadow-cs-dark shadow-sm"
        }`}
    >
      {children}
    </button>
  );
};
