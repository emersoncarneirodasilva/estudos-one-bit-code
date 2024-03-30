import { Link, Outlet, useLocation } from "react-router-dom";

function ItemsLayout() {
  // OBS: Esse hook permite saber qual rota está no momento (local atual)
  const { pathname } = useLocation();

  return (
    <main>
      <h1>Stock Items</h1>
      <div className="tabs">
        <Link
          to="/items"
          className={`tab ${pathname === "/items" ? "active" : ""}`}
        >
          Todos os Itens
        </Link>
        <Link
          to="/items/new"
          className={`tab ${pathname === "/items/new" ? "active" : ""}`}
        >
          Novo Item
        </Link>
      </div>
      <Outlet />
    </main>
  );
}

export default ItemsLayout;
