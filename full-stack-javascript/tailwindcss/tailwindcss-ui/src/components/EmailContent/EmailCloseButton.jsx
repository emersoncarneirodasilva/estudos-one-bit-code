import { FiX } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export default function EmailCloseButton({ onClick }) {
  return (
    <button
      className={`
        absolute top-2 right-4 px-2 py-1 rounded
        bg-red-300 hover:bg-red-400
        dark:bg-red-500 hover:dark:bg-red-600
        transition-colors
      `}
      onClick={onClick}
    >
      <FiX className="inline mb-[3px] sm:mr-1" />
      <span className="hidden sm:inline">Fechar</span>
    </button>
  );
}
