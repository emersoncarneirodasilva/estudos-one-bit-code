import { Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          REACT STOCK
        </Link>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/items">Itens</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>Feito com React e React Router! =D</footer>
    </>
  );
}

export default RootLayout;
