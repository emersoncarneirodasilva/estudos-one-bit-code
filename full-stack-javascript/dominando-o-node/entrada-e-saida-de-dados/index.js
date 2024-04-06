const process = require("node:process");

console.log("Digite o seu nome:");

process.stdin.on("data", (keyboard) => {
  process.stdout.write(`Seja bem vindo, ${keyboard}`);
  process.exit(0);
});
