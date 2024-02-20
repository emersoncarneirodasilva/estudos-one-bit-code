const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.querySelector("#input");
const resultInput = document.querySelector("#result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

const charKey = document.querySelectorAll(".charKey");
charKey.forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  input.value = "";
  input.focus();
});

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

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

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
