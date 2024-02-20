// Escreva um programa em javascript para simular um baralho de cartas.
// O programa deve iniciar mostrando na tela um menu interativo contendo
// a quantidade de cartas que estão atualmente no baralho e as opções de
// “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher
// “Adicionar uma carta”, o programa deve perguntar o nome da carta e
// adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”,
// o programa deve retirar a carta do topo do baralho e mostrar na
// tela o nome da carta puxada. O programa só deve ser encerrado ao
// escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let cards = [];
let value = "";

do {
  let card = "";

  for (let i = 0; i < cards.length; i++) {
    card += `${i + 1}º ${cards[i]} `;
  }

  const options = prompt(`Cartas: ${card} \n
Quantidade de carta(s) atualmente: ${cards.length}\n
Seleciona uma das opções a seguir:\n 1 - Adicionar uma carta\n 2 - Puxar uma carta\n 3 - Sair`);

  switch (options) {
    case "1":
      let newCard = prompt(`Digite o nome da carta a ser adicionada:`);
      cards.unshift(newCard);
      alert(`A carta "${newCard}" foi adicionada ao topo do deck`);
      break;

    case "2":
      let removeCard = cards.shift();

      if (!removeCard) {
        alert("Não há cartas no deck!");
      } else {
        alert(
          `A carta "${removeCard}" foi removida do topo do deck com sucesso!`
        );
      }
      break;

    case "3":
      let exit = prompt("Deseja Sair? (Sim/Não)");

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
