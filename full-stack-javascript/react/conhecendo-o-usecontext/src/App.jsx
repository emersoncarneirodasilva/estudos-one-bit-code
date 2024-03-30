import Container from "./components/Container";
import Header from "./components/Header";
import UserContext from "./contexts/UserContext";

function App() {
  const user = {
    name: "Joe",
    email: "joe@email.com",
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Conhecendo o useContext</h1>
        <Header />
        <Container>
          <p>Este é o nosso app com contexto</p>
        </Container>
      </UserContext.Provider>

      <dir>{/* Aqui não há acesso ao contexto! */}</dir>
    </>
  );
}

export default App;
