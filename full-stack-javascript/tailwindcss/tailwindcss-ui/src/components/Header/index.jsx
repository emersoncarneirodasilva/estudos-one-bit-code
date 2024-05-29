import Avatar from "./Avatar";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

export default function Header() {
  return (
    <header
      className={`
        flex items-center justify-between gap-6 md:gap-16 xl:gap32
        px-4 xl:px-6 h-16 lg:h-20
        bg-gray-100 dark:bg-gray-800
      `}
    >
      <Logo />
      <SearchForm />
      <Avatar />
    </header>
  );
}
