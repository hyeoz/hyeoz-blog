import { ButtonHTMLAttributes } from "react";

type CustomButtonType = {
  type?: "button" | "submit" | "reset";
  children: JSX.Element | string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ type, children, ...props }: CustomButtonType) {
  return (
    <button
      type={type}
      className="px-4 py-2 text-gray-700 bg-green-200 rounded hover:bg-green-500 disabled:bg-gray-300"
      {...props}
    >
      {children}
    </button>
  );
}
