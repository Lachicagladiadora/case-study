import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  _isLight: boolean;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`
        text-cs-navbar px-9 py-4 rounded-full uppercase font-cs-title font-bold
        ${
          props._isLight
            ? "bg-cs-sky-blue text-cs-dark-blue hover:bg-cs-light-blue hover:text-cs-light"
            : "bg-cs-dark-blue text-cs-light hover:bg-cs-sky-blue hover:text-cs-light-blue"
        }`}
    >
      {children}
    </button>
  );
};
