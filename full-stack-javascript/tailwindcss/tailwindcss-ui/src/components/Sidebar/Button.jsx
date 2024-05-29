// eslint-disable-next-line react/prop-types
export default function Button({ active, children }) {
  const backgroundColor = active ? "bg-gray-200 dark:bg-gray-900" : "";
  const bgHover = "hover:bg-gray-200 dark:hover:bg-gray-900";

  return (
    <button
      className={`
        text-left w-full px-4 py-2 rounded-lg 
        ${backgroundColor}
        ${bgHover}
        transition-colors
        `}
    >
      {children}
    </button>
  );
}
