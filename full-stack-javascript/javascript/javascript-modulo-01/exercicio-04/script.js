// Escreva um programa em javascript que peça o nome de um turista
// e então pergunte se ele já visitou alguma cidade. Caso a resposta
// seja sim, pergunte o nome da cidade e o armazene em uma variável,
// e então continue perguntando se o turista visitou alguma outra cidade
// até que a resposta seja não. No fim, o programa deve exibir o nome
// do turista, quantas e quais cidades ele visitou.

// nome do turista
// visitou alguma cidade?
// nome da cidade
// numero de cidades visitadas
// contador do numero de cidades

const turistName = prompt("Olá tudo bem? Digite seu nome:");
const age = Number(prompt("Digite sua idade:"));
const nationality = prompt("Digite sua nacionalidade:");
let visitedACity = prompt(
  'Já visitou alguma cidade? (Responda: "Sim" ou "Não")'
);
let cities = "";
let count =
  visitedACity === "Sim" || visitedACity === "sim" || visitedACity === "SIM"
    ? 1
    : 0;

while (
  visitedACity === "Sim" ||
  visitedACity === "sim" ||
  visitedACity === "SIM"
) {
  let city = prompt("Digite o nome da cidade que você visitou:");
  cities = `${cities}\n ${city}`;

  visitedACity = prompt(
    'Visitou alguma outra cidade? (Responda: "Sim" ou "Não")'
  );

  if (
    visitedACity === "Não" ||
    visitedACity === "não" ||
    visitedACity === "NÃO"
  ) {
    break;
  } else {
    count = count + 1;
  }
}

let citiesTotal = count === 0 ? "Não há cidades visitadas" : cities;

alert(`Nome do turista: ${turistName} 
Idade: ${age} anos
Nacionalidade: ${nationality}
Número de cidade(s) visitada(s): ${count}\n
Nome da(s) cidade(s): ${citiesTotal}`);
