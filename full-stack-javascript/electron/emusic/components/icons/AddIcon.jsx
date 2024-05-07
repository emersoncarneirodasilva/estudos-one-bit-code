export default function AddIcon({ onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="#FFF"
      onClick={onClick}
    >
      <path
        d="M12 4V20M20 12L4 12"
        stroke="#1fd186"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
