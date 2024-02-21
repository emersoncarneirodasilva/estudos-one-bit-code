import { input } from "./variables.js";

export default function () {
  const charKey = document.querySelectorAll(".charKey");
  charKey.forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener("click", function () {
      const value = charKeyBtn.dataset.value;
      input.value += value;
    });
  });
}
