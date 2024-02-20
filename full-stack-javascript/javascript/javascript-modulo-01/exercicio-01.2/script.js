let enter1 = prompt("Insira o primeiro número:");
let enter2 = prompt("Insira o segundo número:");

let num1 = Number(enter1);
let num2 = Number(enter2);

let sum = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;
let divide = num1 / num2;
let remainder = num1 % num2;

alert(
  "Resultados:\n" +
    "\nSoma: " +
    sum +
    "\nSubtração: " +
    subtract +
    "\nMultiplicação: " +
    multiply +
    "\nDivisão: " +
    divide +
    "\nResto da divisão: " +
    remainder
);
