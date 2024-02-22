import "./styles/index.css";

const body = document.body;
const main = document.createElement("main");
const h1 = document.createElement("h1");
h1.innerText = "Estruturando um projeto moderno";
const p = document.createElement("p");
p.innerText = "Construíndo aplicações com Babel e Webpack";

h1.appendChild(p);
main.appendChild(h1);
body.appendChild(main);
