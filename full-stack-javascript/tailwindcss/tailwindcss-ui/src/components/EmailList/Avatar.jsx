// eslint-disable-next-line react/prop-types
export default function Avatar({ letter }) {
  return (
    <div
      className={`
        grid place-content-center w-10 h-10
        rounded-full bg-rose-300 dark:bg-rose-600
      `}
    >
      <span className="mb-0.5">{letter}</span>
    </div>
  );
}
