function App() {
  return (
    <div>
      <img src="/react.png" alt="React Image" />
      <h1>React</h1>
      <p>A biblioteca para interfaces de usuário web e nativas.</p>
      <div>
        <button>
          <a href="https://react.dev/learn" target="_blank">
            Aprenda React
          </a>
        </button>{" "}
        <button>
          <a href="https://react.dev/reference/react" target="_blank">
            Referência da API
          </a>
        </button>
      </div>
      <hr />
      <h2>Crie interfaces de usuário de componentes</h2>
      <p>
        React permite que você construa interfaces de usuário a partir de
        pedaços individuais chamados componentes.
      </p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>
        Componentes React são funções JavaScript. A sintaxe de marcação é
        chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo
        React.
      </p>
      <hr />
      <h2>Próximos passos:</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  );
}

export default App;
