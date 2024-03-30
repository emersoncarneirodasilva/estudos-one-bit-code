import { useState } from "react";

function getInitialValue() {
  console.log("Obtendo o valor inicial");
  return 1 - 1;
}

function useCounter() {
  const [count, setCount] = useState(() => getInitialValue());

  const increment = () => {
    setCount((currentState) => currentState + 1);
    setCount((currentState) => currentState + 1);
  };

  return { count, increment };
}

export default useCounter;
