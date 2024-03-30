import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function RouteLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout principal. Abaixo está o conteúdo dinâmico de cada
          rota filha.
        </p>
        <hr />
        <Outlet />
      </main>
      <hr />
      <footer>
        <p>Feito com React Router DOM =D</p>
      </footer>
    </>
  );
}

export default RouteLayout;
