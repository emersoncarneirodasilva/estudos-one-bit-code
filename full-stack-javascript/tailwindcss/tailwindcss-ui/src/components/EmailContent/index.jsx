import EmailCloseButton from "./EmailCloseButton";
import EmailData from "./EmailData";
import EmailTitle from "./EmailTitle";

/* eslint-disable react/prop-types */
export default function EmailContent({ email, setOpenEmail }) {
  const sendDate = new Date(email.createdAt);
  const openEmailDate = `${sendDate.toLocaleDateString()}, ${sendDate.toLocaleTimeString()}`;

  return (
    <div
      className={`
        absolute lg:relative grow-[2] basis-96 w-full h-full p-2 md:p-4
        text-gray-900 dark:text-gray-50
        bg-gray-50 dark:bg-gray-700
      `}
    >
      <EmailCloseButton onClick={() => setOpenEmail(null)} />
      <EmailTitle>{email.subject}</EmailTitle>
      <EmailData>De: {`<${email.from}>`}</EmailData>
      <EmailData>Para: {`<john.doe@email.com>`}</EmailData>
      <EmailData>Em: {openEmailDate}</EmailData>
      <hr className="my-4" />
      {email.body}
    </div>
  );
}
