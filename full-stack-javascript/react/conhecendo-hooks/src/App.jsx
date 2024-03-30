import "./App.css";
import useCounter from "./hooks/useCounter";

// Regra 1: Onde usar os hooks: Usar dentro do componente
// Regra 2: A ordem dos hooks

function App() {
  const { count, increment } = useCounter();

  return (
    <>
      <h1>Conhecendo Hooks</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
