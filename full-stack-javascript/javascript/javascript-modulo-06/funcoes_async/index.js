async function asyncSum(a, b) {
  return a + b;
}

asyncSum(1, 1).then((result) =>
  console.log(`O resultado da soma foi: ${result}`)
);

async function asyncSubtract(a, b) {
  return a - b;
}

asyncSubtract(2, 1).then((result) =>
  console.log(`O resultado da subtração foi: ${result}`)
);

const sumResult = asyncSum(50, 33);
const subtractResult = asyncSubtract(50, 33);

Promise.all([sumResult, subtractResult]).then((results) => {
  console.log(results);
});

const numbers = [4, 9, 5, 13, 77];

async function asyncSquare(x) {
  return x * x;
}

Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
});
