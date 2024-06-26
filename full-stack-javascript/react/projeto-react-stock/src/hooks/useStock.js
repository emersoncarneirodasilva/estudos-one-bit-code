import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

function useStock() {
  return useContext(StockContext);
}

export default useStock;
