import { ChangeEventHandler, InputHTMLAttributes } from "react";

type CustomInputType = {
  type: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  type,
  value,
  onChange,
  ...props
}: CustomInputType) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="px-3 py-1 border rounded w-80"
      {...props}
    />
  );
}
