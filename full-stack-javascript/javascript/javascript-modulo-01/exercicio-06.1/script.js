// Escreva um programa em javascript que seja capaz de calcular
// a tabuada de um determinado número (de 1 a 20). O programa
// deve começar pedindo o número a ser usado nos cálculos e
// então salvar todos os resultados de multiplicações de 1 a 20
// usando o número informado dentro de uma variável do tipo string.
// Depois o programa deve exibir esses resultados e finalizar.

const number = Number(prompt("Digite um número:"));
let finallyResult = "";

for (let i = 1; i <= 20; i++) {
  let element = number * i;
  let string = `${number} x ${i} = ${element}\n`;

  finallyResult += string;
}

alert(finallyResult);
console.log(finallyResult);
