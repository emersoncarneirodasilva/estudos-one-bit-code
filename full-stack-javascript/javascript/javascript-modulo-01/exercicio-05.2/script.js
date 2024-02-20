// Escreva um programa em javascript que comece perguntando
// pela quantidade inicial de dinheiro disponível e então
// mostre na tela essa quantidade juntamente com as opções
// de adicionar e remover dinheiro e uma opção de sair.
// Ao clicar na opção de adicionar dinheiro o programa deve
// perguntar pela quantidade a ser adicionada, somar esse
// valor com a quantidade inicial e então mostrar novamente
// o menu com a quantidade de dinheiro e as opções. A opção
// de remover dinheiro deve fazer o mesmo, porém subtraindo
// o valor. A opção de sair deve encerrar o programa.

// quntidade de dinheiro inicial
// quantidade de dinheiro inicial mostrada
// opções: adicionar, remover e sair

let moneyTotal = Number(prompt("Digite a quantidade de dinheiro disponível:"));
let value = "";

do {
  const options = prompt(
    `Saldo atual: R$${moneyTotal}\n 1 - Adicionar dinheiro\n 2 - Remover dinheiro\n 3 - Sair`
  );

  switch (options) {
    case "1":
      const addMoney = Number(
        prompt("Digite a quantidade de dinheiro a ser adicionada a conta:")
      );

      moneyTotal = moneyTotal + addMoney;
      break;

    case "2":
      const removeMoney = Number(
        prompt("Digite a quantidade de dinheiro a ser removida da conta:")
      );

      moneyTotal = moneyTotal - removeMoney;
      break;

    case "3":
      const exit = prompt("Deseja Sair? (Sim/Não)");

      if (exit === "Sim" || exit === "sim" || exit === "SIM") {
        exit = "Sim";
      }

      value = exit;
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (value !== "Sim");

console.log(moneyTotal);
console.log(value);
