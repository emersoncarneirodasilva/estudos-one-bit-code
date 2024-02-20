// Escreva um programa em javascript para calcular a área de diferentes formas geométricas.
// O programa deve iniciar com um menu contendo as diferentes opções de cálculas.
// As opções devem ser:

// 1- área do triângulo: base * altura / 2
// 2- área do retângulo: base * altura
// 3- área do quadrado: lado²
// 4- área do trapézio: (base maior + base menor) * altura / 2
// 5- área do círculo: pi * raio² (considere pi = 3.14)

// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos.
// O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

function areaTriangle() {
  const baseT = Number(prompt("Digite o valor da base do triângulo:"));
  const heightT = Number(prompt("Digite o valor da altura do triângulo:"));
  const areaT = (baseT * heightT) / 2;

  return alert(
    `O triângulo de base ${baseT} e altura ${heightT} possui área: ${areaT}`
  );
}

function areaRectangle() {
  const baseR = Number(prompt("Digite o valor da base do retângulo:"));
  const heightR = Number(prompt("Digite o valor da altura do retângulo:"));
  const areaR = baseR * heightR;

  return alert(
    `O retângulo de base ${baseR} e altura ${heightR} possui área: ${areaR}`
  );
}

function areaSquare() {
  const sideS = Number(prompt("Digite o valor dos lado do quadrado:"));
  const areaS = sideS ** 2;

  return alert(`O quadrado de lado ${sideS} possui área: ${areaS}`);
}

function areaTrapezoid() {
  const largerBaseTr = Number(
    prompt("Digite o valor da base maior do trapézio:")
  );
  const smallerBaseTr = Number(
    prompt("Digite o valor da base menor do trapézio:")
  );
  const heightTr = Number(prompt("Digite o valor da altura do trapézio:"));
  const areaTr = ((largerBaseTr + smallerBaseTr) * heightTr) / 2;

  return alert(
    `O trapézio de base maior ${largerBaseTr}, base menor ${smallerBaseTr} e altura ${heightTr} possui área: ${areaTr}`
  );
}

function areaCircle() {
  const radius = Number(prompt("Digite o valor do raio do círculo:"));
  const areaC = 3.14 * radius ** 2;

  return alert(`O círculo de raio ${radius} possui área: ${areaC}`);
}

let options = "";
let value = "";

do {
  options = prompt(
    `Bem vindo a Calculadora Geométrica\n\nEscolha a operação que deseja realizar:\n1 - Área do triângulo\n2 - Área do retângulo\n3 - Área do quadrado\n4 - Área do trapézio\n5 - Área do círculo\n6 - Sair`
  );

  switch (options) {
    case "1":
      areaTriangle();
      break;

    case "2":
      areaRectangle();
      break;

    case "3":
      areaSquare();
      break;

    case "4":
      areaTrapezoid();
      break;

    case "5":
      areaCircle();
      break;

    case "6":
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
