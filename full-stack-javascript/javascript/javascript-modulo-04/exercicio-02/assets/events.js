import { input } from "./variables.js";
import { allowedKeys } from "./allouwerdKey.js";
import calculate from "./calculate.js";

export default function () {
  input.addEventListener("keydown", function (e) {
    e.preventDefault();

    if (allowedKeys.includes(e.key)) {
      input.value += e.key; // Se o valor existir na lista ele é acrescentado no input.value
      return;
    }

    if (e.key === "Backspace") {
      input.value = input.value.slice(0, -1); // Ele vai do início até o penúltimo, apagando o que resta que é o último
    }

    if (e.key === "Delete") {
      input.value = input.value.slice(1);
    }

    if (e.key === "Enter") {
      calculate();
    }
  });
}
