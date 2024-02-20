// Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:
// 1 - Escalar um jogador
//     . Informar a posição do jogador a ser escalado para o time.
//     . Informar o nome do jogador.
//     . Informar o número da camisa do jogador.
//     . Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e
//       então insere as informações em uma lista na página.
//     . Após o jogador ser escalado os campos de texto devem ser limpos.
// 2 - Remover um jogador
//     . Informar o número da camisa do jogador.
//     . Ter um botão “Remover” que pergunta ao usuário se ele deseja
//       confirmar a remoção daquele jogador e então exclui ele da lista na página.
//     . Após o jogador ser removido o campo de texto deve ser limpo.
// Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

const body = document.body;
const main = document.createElement("main");
const section1 = document.createElement("section");
section1.className = "section";
section1.id = "form-container";
const section2 = document.createElement("section");
section2.className = "section";
section2.id = "information-container";

const h1 = document.createElement("h1");
h1.innerText = "Escalação do Time";

const h2 = document.createElement("h2");
h2.innerText = "Jogadores Escalados";

const form = document.createElement("form");

const name = document.createElement("label");
name.innerText = "Nome: ";
const nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.name = "nome";
nameInput.value = "";

name.appendChild(nameInput);
name.appendChild(document.createElement("br"));
name.appendChild(document.createElement("br"));

const position = document.createElement("label");
position.innerText = "Posição: ";
const positionInput = document.createElement("input");
positionInput.type = "text";
positionInput.name = "posição";
positionInput.value = "";

position.appendChild(positionInput);
position.appendChild(document.createElement("br"));
position.appendChild(document.createElement("br"));

const number = document.createElement("label");
number.innerText = "Número: ";
const numberInput = document.createElement("input");
numberInput.type = "number";
numberInput.name = "numero";
numberInput.value = "";
numberInput.min = 1;
numberInput.max = 99;

number.appendChild(numberInput);
number.appendChild(document.createElement("br"));
number.appendChild(document.createElement("br"));

const addButton = document.createElement("button");
addButton.innerText = "Escalar Jogador";
addButton.style.marginRight = "20px";
addButton.addEventListener("click", addPlayer);

const removeButton = document.createElement("button");
removeButton.innerText = "Remover Jogador";
removeButton.addEventListener("click", removePlayer);

function addPlayer() {
  if (
    nameInput.value !== "" &&
    positionInput.value !== "" &&
    numberInput.value !== ""
  ) {
    const confirmation = confirm(`Deseja escalar o jogador?\n
Nome: ${nameInput.value}
Posição: ${positionInput.value}
Número: ${numberInput.value}`);

    if (confirmation) {
      const div = document.createElement("div");
      div.id = "player-" + numberInput.value;

      const playerName = document.createElement("p");
      playerName.innerText = `Nome: ${nameInput.value}`;

      const playerPosition = document.createElement("p");
      playerPosition.innerText = `Posição: ${positionInput.value}`;

      const playerNumber = document.createElement("p");
      playerNumber.innerText = `Número: ${numberInput.value}`;
      playerNumber.appendChild(document.createElement("br"));
      playerNumber.appendChild(document.createElement("br"));

      div.append(playerName, playerPosition, playerNumber);
      section2.appendChild(div);

      nameInput.value = "";
      positionInput.value = "";
      numberInput.value = "";
    } else {
      nameInput.value = "";
      positionInput.value = "";
      numberInput.value = "";
      return;
    }
  } else {
    alert("Inscrição incompleta, por favor preencha todos os campos!");
    return;
  }
}

function removePlayer() {
  const divConfirm = document.getElementsByTagName("div");

  if (divConfirm.length !== 0) {
    const numberRemoved = prompt(
      "Digite o número do jogador a ser tirado da escalação:"
    );
    const playerToRemove = document.getElementById("player-" + numberRemoved);

    const removeConfirm = confirm(
      `Deseja remover o jogador número "${numberRemoved}" da escalação?`
    );

    if (removeConfirm && playerToRemove) {
      playerToRemove.remove();
    } else {
      alert("Por favor, informe o número de um jogador já escalado!");
      return;
    }
  } else {
    alert("Não há jogadores escalados!");
    return;
  }
}

section2.append(h2);
form.append(name, position, number);
section1.append(h1, form, addButton, removeButton);
main.append(section1, section2);
body.appendChild(main);
