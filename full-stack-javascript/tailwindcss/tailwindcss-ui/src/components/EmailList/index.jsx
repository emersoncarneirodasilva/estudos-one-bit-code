import emails from "../../email.json";
import EmailListItem from "./EmailListItem";

// eslint-disable-next-line react/prop-types
export default function EmailList({ setOpenEmail }) {
  return (
    <div className="relative overflow-y-scroll grow">
      {emails.map((email) => (
        <EmailListItem
          key={email.id}
          email={email}
          onClick={() => setOpenEmail(email)}
        />
      ))}
    </div>
  );
}
