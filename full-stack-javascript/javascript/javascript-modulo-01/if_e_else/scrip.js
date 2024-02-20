let nome = prompt("Por favor, digite seu nome");

if (nome === "Emerson") {
  console.log("Olá Emerson, tudo bem?");
} else {
  console.log("Olá, tudo bem?");
}

let age = prompt("Por favor, digite sua idade");

if (age > 18) {
  alert("Você é maior de idade");
} else if (age > 12) {
  alert("Você é menor de idade");
} else if (age > 4) {
  alert("Você é criança");
} else {
  alert("Você é bebê");
}

const resultado = age >= 60 ? "Você é idoso" : "Você não é idoso";
alert(resultado);
