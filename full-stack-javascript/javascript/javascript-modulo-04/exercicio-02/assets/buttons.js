import { main, resultInput, root } from "./variables.js";
import calculate from "./calculate.js";

export default function () {
  const equalBtn = document.querySelector("#equal");
  equalBtn.addEventListener("click", calculate);
}

export function copy() {
  const copyButton = document.querySelector("#copyToClipboard");
  copyButton.addEventListener("click", function (e) {
    const button = e.currentTarget; // Pega quem acionou o evento, ou seja, o próprio botão
    if (button.innerText === "Copy") {
      button.innerText = "Copied";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value); // Salva o valor
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });
}

export function switchButton() {
  const switchBtn = document.querySelector("#themeSwitcher");
  switchBtn.style.cursor = "pointer";
  switchBtn.addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9");
      root.style.setProperty("--border-color", "#aaa");
      root.style.setProperty("--font-color", "#212529");
      root.style.setProperty("--primary-color", "#26834a");
      main.dataset.theme = "light";
    } else {
      root.style.setProperty("--bg-color", "#212529");
      root.style.setProperty("--border-color", "#666");
      root.style.setProperty("--font-color", "#f1f5f9");
      root.style.setProperty("--primary-color", "#4dff91");
      main.dataset.theme = "dark";
    }
  });
}
