// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return (
    <div
      className={`
        h-[calc(100vh_-_4rem)] lg:h-[calc(100vh_-_5rem)] px-2 xl:px-6 pb-2 xl:pb-4 
        text-gray-900 dark:text-gray-50
        bg-gray-100 dark:bg-gray-800
      `}
    >
      {children}
    </div>
  );
}
