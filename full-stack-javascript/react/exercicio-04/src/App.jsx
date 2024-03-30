import { useState } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const [password, setPassword] = useState("");
  const [buttonTextCopy, setButtonTextCopy] = useState("Copiar");
  const [customSize, setCustomSize] = useState(5);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 5;

  const generatePassword = () => {
    const length = passwordSize;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!*$#?";

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    setButtonTextCopy("Copiar");
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        if (password !== "") {
          alert("Senha copiada para a área de transferência!");
        } else {
          alert("Ainda não possui senha a ser copiada!");
        }
      })
      .catch((err) => {
        console.error("Falha ao copiar senha: ", err);
      });

    if (password !== "") {
      setButtonTextCopy("Copiado!");
    }
  };

  return (
    <>
      <h1>Gerador de Senhas</h1>

      <div>
        <label htmlFor="showInput">Customizar Tamanho: </label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)} // Mesmo que: setShowInput((showInput) => !showInput)
        />
      </div>

      {showInput && (
        <div className="inputContainer">
          <label htmlFor="passwordSize">Tamanho: </label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </div>
      )}

      <div className="btnContainer">
        <button className="btnGenerate" onClick={generatePassword}>
          Gerar senha de {passwordSize} caracteres!
        </button>
        <button className="btnCopy" onClick={() => copyToClipboard()}>
          {buttonTextCopy}
        </button>
      </div>
      <div>{password}</div>
    </>
  );
}

export default App;
