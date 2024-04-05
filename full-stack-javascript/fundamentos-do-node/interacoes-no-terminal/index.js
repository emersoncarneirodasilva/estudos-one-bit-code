// process.stdout.write("Olá, mundo!");

// process.stdin.on("data", (data) => {
//   process.stdout.write(`Você digitou: ${data}`);
// });

// Outro modo de se trabalhar
const readLine = require("node:readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", (input) => {
//   rl.write(`Você digitou: ${input}`);
// });

// rl.question("Qual é o seu nome? ", (answer) => {
//   rl.write(`Olá, ${answer}\n`);
//   rl.close();
// });

// rl.once("close", () => {
//   rl.write("Saindo...");
//   process.exit(0);
// });

rl.on("SIGINT", () => {
  rl.question("Deseja realmente sair? (s/n) ", (answer) => {
    if (answer.trim().toLowerCase() === "s") {
      process.exit();
    } else {
      rl.write("Você escolheu continuar.");
    }
  });
});
