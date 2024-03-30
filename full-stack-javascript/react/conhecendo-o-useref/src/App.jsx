import { useRef, useState } from "react";
import RefExample from "./RefExample";

function App() {
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0);

  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `);
  };

  return (
    <div>
      <h2>Exemplo de useRef com o DOM</h2>
      <RefExample />
      <hr />
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>

      <button onClick={() => variable++}>Incrementar Variável</button>
      <button onClick={() => ref.current++}>Incrementar Ref</button>
      <button onClick={() => setState((currentState) => currentState + 1)}>
        Incrementar State
      </button>
      <hr />
      <button onClick={showValues}>Exibir Valores</button>
    </div>
  );
}

export default App;
