import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserInfo() {
  const { name, email } = useContext(UserContext);

  return (
    <div>
      <h2>Informações do Usuário</h2>
      <p>Nome: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserInfo;
