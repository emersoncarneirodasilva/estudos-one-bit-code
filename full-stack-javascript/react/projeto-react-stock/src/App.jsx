import { StockContextProvider } from "./contexts/StockContext";
import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  );
}

export default App;
