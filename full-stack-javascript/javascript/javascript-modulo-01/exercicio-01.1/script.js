const firstName = prompt(
  "Bem vindo recruta! Por favor escreva o seu primeiro nome:"
);
const lastName = prompt("Ótimo, agora escreva seu sobrenome:");
const studyField = prompt("Escreva seu campo de estudo:");
const birthday = prompt("Esvreva seu ano de nascimento:");

let age = 2024 - birthday;

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    firstName +
    " " +
    lastName +
    "\nCampo de estudo: " +
    studyField +
    "\nIdade: " +
    age
);

console.log("Nome:", firstName);
console.log("Sobrenome:", lastName);
console.log("Campo de estudo:", studyField);
console.log("Idade:", age);
