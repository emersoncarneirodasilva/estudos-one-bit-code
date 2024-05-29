export default function Avatar() {
  return (
    <img
      className={`
        rounded-full border-2 border-gray-400 
      `}
      width={48}
      height={48}
      src="/user.svg"
      alt="User"
    />
  );
}
