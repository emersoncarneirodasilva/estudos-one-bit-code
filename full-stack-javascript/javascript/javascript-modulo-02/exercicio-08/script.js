// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda
// aos seguintes requisitos:

// 1 - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// 2 - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// 3 - O menu deve ter a opção de salvar um imóvel.
// 4 - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//    . Nome do proprietário.
//    . Quantidade de quartos.
//    . Quantidade de banheiros.
//    . Se possui garagem.
// 5 - O menu também deve ter a opção de mostrar todos os imóveis salvos.

let properties = [];
let value = "";

do {
  const immobile = {};

  const options = prompt(`Bem Vindo a Imobiliária X\n
Imóveis cadastrados: ${properties.length}\n
Escolha uma das opções a seguir:\n 1 - Salvar Imóvel\n 2 - Visualizar Imóveis\n 3 - Sair`);

  switch (options) {
    case "1":
      immobile.proprietario = prompt("Digite o nome do proprietário:");
      immobile.quartos = Number(
        prompt("Digite a quantidade de quartos há no imóvel:")
      );
      immobile.banheiros = Number(
        prompt("Digite a quantidade de banheiros há no imóvel:")
      );
      immobile.garagem = prompt("O imóvel possui garangem? (Sim/Não)");

      const confirmImmobile = confirm(`Deseja salvar este imóvel?\n
Proprietário: ${immobile.proprietario}
Quartos: ${immobile.quartos}
Banheiros: ${immobile.banheiros}
Possui Garagem? ${immobile.garagem}`);

      if (confirmImmobile) {
        properties.push(immobile);
        alert("Imóvel salvo com sucesso!");
      } else {
        alert("Voltando ao menu");
      }

      break;

    case "2":
      if (properties.length < 1) {
        alert("Não há imóveis cadastrados");
      } else {
        for (let i = 0; i < properties.length; i++) {
          alert(
            `Imóvel ${i + 1}\n
Proprietário: ${properties[i].proprietario} 
Quartos: ${properties[i].quartos} 
Banheiros: ${properties[i].banheiros} 
Possui Garagem? ${properties[i].garagem}`
          );
        }
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
