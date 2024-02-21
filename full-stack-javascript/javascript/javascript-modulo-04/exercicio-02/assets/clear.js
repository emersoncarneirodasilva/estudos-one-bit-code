import { input } from "./variables.js";

export default function () {
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", function () {
    input.value = "";
    input.focus();
  });
}
