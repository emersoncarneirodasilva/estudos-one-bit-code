/* eslint-disable react/prop-types */

import Avatar from "./Avatar";

// eslint-disable-next-line react/prop-types
export default function EmailListItem({ email, onClick }) {
  return (
    <article
      className={`
        flex items-center gap-4 [&+article]:mt-2 p-2 rounded-lg
        hover:cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-900
        transition-colors
      `}
      onClick={onClick}
    >
      <Avatar letter={email.from[0].toUpperCase()} />

      <div className="grow shrink basis-40">
        <strong>{email.subject}</strong>
        <p>
          {email.body.length > 64
            ? email.body.slice(0, 64) + "..."
            : email.body}
        </p>
      </div>
    </article>
  );
}
