// De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno,
// crie quatro funções que aceitem qualquer quantidade de parâmetros e utilizando a sintaxe de
// arrow functions para calcular as operações abaixo.

// Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar
// uma interface. Para testar a função você pode fazer chamadas manuais a ela no javascript ou utilizar
// o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).

// Média Aritmética Simples
const arithmeticAverage = (...numbers) => {
  const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
  return sum / numbers.length;
};

console.log(arithmeticAverage(5, 15, 25, 55));

// Média Aritmética Ponderada
const weightedAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );

  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );

  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

// Mediana
const median = (...numbers) => {
  const orderedNumbers = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  const firstMedian = orderedNumbers[middle - 1];
  const secondMedian = orderedNumbers[middle];
  return arithmeticAverage(firstMedian, secondMedian);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

// Moda
const mode = (...numbers) => {
  // [ [n, qtd], [n, qtd], [n, qtd] ]
  const quantities = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};

console.log(
  `Moda: ${mode(
    1,
    1,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    99,
    5,
    4,
    9,
    7,
    4,
    3,
    5,
    2,
    4,
    0,
    4
  )}`
);
