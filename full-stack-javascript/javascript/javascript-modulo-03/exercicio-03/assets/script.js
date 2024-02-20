// Construa um jogo tic-tac-toe, conhecido em português como jogo da velha, utilizando HTML, CSS e Javascript.
// Você pode desenvolver com liberdade, da forma que preferir, mas o jogo precisa atender aos seguintes requisitos:
// . Deve ser possível incluir os nomes dos dois jogadores;
// . O nome do jogador da vez deve ser mostrado na tela e alterado a medida que os turnos vão se alternando;
// . Um tabuleiro deve ser mostrado na tela e ser atualizado quando o jogador clicar na região que ele quer marcar;
// . Quando um jogador clicar no tabuleiro deve ser marcado um “X” ou “O” de acordo com o jogador da vez e não deve
// ser possível clicar naquela região novamente;
// . Quando um jogador ganhar seu nome deve ser mostrado na tela e as regiões da vitória devem ser destacadas de
// alguma forma;
// . Em caso de empate, uma mensagem de empate deve ser mostrada na tela;
// . Deve ser possível reiniciar o jogo para jogar novamente.

const playerName1 = prompt("Informe o nome do jogador 1");
const playerName2 = prompt("Informe o nome do jogador 2");

let playerTurn1 = true;

const btn11 = document.getElementById("btn1-1");
const btn12 = document.getElementById("btn1-2");
const btn13 = document.getElementById("btn1-3");
const btn21 = document.getElementById("btn2-1");
const btn22 = document.getElementById("btn2-2");
const btn23 = document.getElementById("btn2-3");
const btn31 = document.getElementById("btn3-1");
const btn32 = document.getElementById("btn3-2");
const btn33 = document.getElementById("btn3-3");

const sectionPlayers = document.getElementById("players");

const player1 = document.createElement("p");
player1.classList.add("player");
player1.id = "player-1";
player1.innerText = `${playerName1} - X`;
const player2 = document.createElement("p");
player2.classList.add("player");
player2.id = "player-2";
player2.innerText = `${playerName2} - O`;

player1.style.color = "#0ca10c";
player1.style.scale = "1.2";

sectionPlayers.append(player1, player2);

const buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.innerText === "") {
      if (playerTurn1) {
        player1.style.color = "#000";
        player1.style.scale = "1";
        player2.style.color = "#fc1c1c";
        player2.style.scale = "1.2";
        button.innerText = "X";
        playerTurn1 = false;
      } else {
        player2.style.color = "#000";
        player2.style.scale = "1";
        player1.style.color = "#0ca10c";
        player1.style.scale = "1.2";
        button.innerText = "O";
        playerTurn1 = true;
      }
    } else {
      button.setAttribute("disabled");
    }

    winnerPlayer();
  });
});

function winnerPlayer() {
  if (
    (btn11.innerText === "X" &&
      btn12.innerText === "X" &&
      btn13.innerText === "X") ||
    (btn11.innerText === "X" &&
      btn21.innerText === "X" &&
      btn31.innerText === "X") ||
    (btn11.innerText === "X" &&
      btn22.innerText === "X" &&
      btn33.innerText === "X") ||
    (btn12.innerText === "X" &&
      btn22.innerText === "X" &&
      btn32.innerText === "X") ||
    (btn13.innerText === "X" &&
      btn23.innerText === "X" &&
      btn33.innerText === "X") ||
    (btn13.innerText === "X" &&
      btn22.innerText === "X" &&
      btn31.innerText === "X") ||
    (btn21.innerText === "X" &&
      btn22.innerText === "X" &&
      btn23.innerText === "X") ||
    (btn31.innerText === "X" &&
      btn32.innerText === "X" &&
      btn33.innerText === "X")
  ) {
    alert(`Vencedor(a): "${playerName1}"`);
    location.reload(true);
  }

  if (
    (btn11.innerText === "O" &&
      btn12.innerText === "O" &&
      btn13.innerText === "O") ||
    (btn11.innerText === "O" &&
      btn21.innerText === "O" &&
      btn31.innerText === "O") ||
    (btn11.innerText === "O" &&
      btn22.innerText === "O" &&
      btn33.innerText === "O") ||
    (btn12.innerText === "O" &&
      btn22.innerText === "O" &&
      btn32.innerText === "O") ||
    (btn13.innerText === "O" &&
      btn23.innerText === "O" &&
      btn33.innerText === "O") ||
    (btn13.innerText === "O" &&
      btn22.innerText === "O" &&
      btn31.innerText === "O") ||
    (btn21.innerText === "O" &&
      btn22.innerText === "O" &&
      btn23.innerText === "O") ||
    (btn31.innerText === "O" &&
      btn32.innerText === "O" &&
      btn33.innerText === "O")
  ) {
    alert(`Vencedor(a): "${playerName2}"`);
    location.reload(true);
  }

  if (
    btn11.innerText !== "" &&
    btn12.innerText !== "" &&
    btn13.innerText !== "" &&
    btn21.innerText !== "" &&
    btn22.innerText !== "" &&
    btn23.innerText !== "" &&
    btn31.innerText !== "" &&
    btn32.innerText !== "" &&
    btn33.innerText !== ""
  ) {
    alert("Empate!");
    location.reload(true);
  }
}
