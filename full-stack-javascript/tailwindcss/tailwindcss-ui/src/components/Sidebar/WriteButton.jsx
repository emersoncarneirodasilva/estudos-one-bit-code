// eslint-disable-next-line react/prop-types
export default function WriteButton({ children }) {
  return (
    <button
      className={`
        w-full py-2 rounded-lg
        bg-primary-300 hover:bg-primary-400
        dark:bg-primary-500 dark:hover:bg-primary-600
        transition-colors
      `}
    >
      {children}
    </button>
  );
}
