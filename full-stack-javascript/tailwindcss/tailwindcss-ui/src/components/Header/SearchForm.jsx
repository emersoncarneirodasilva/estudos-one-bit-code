import { FiSearch } from "react-icons/fi";

export default function SearchForm() {
  return (
    <form
      className={`
        flex flex-grow 
        min-w-0 
      `}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className={`
          min-w-0 w-full p-2 
          rounded-l-lg border-2 border-transparent
          text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-gray-700
          focus:outline-none focus:border-primary-400 transition-colors
        `}
        type="text"
        placeholder="Pesquisar..."
      />
      <button
        className={`
          min-w-0 px-4 py-2
          rounded-r-lg border-2 border-transparent
          text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-gray-700
          focus:text-primary-400 focus:outline-none focus:border-primary-400 
          hover:border-primary-400 hover:text-primary-400 transition-colors
        `}
      >
        <FiSearch />
      </button>
    </form>
  );
}
