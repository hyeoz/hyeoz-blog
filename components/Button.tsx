export default function Button({
  type,
  children,
}: {
  type?: "button" | "submit" | "reset";
  children: JSX.Element | string;
}) {
  return (
    <button
      type={type}
      className="px-4 py-2 text-gray-700 bg-green-200 rounded hover:bg-green-500"
    >
      {children}
    </button>
  );
}
