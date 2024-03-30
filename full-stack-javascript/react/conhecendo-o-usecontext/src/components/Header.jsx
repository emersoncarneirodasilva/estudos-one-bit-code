import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function Header() {
  const { name, email } = useContext(UserContext);

  return (
    <header>
      <h3>
        Bem vindo {name}, seu email é: {email}
      </h3>
    </header>
  );
}

export default Header;
