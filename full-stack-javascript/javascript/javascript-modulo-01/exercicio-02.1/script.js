const auto1 = prompt("Digite o nome do primeiro veículo:");
const vel1 = Number(prompt("Digite a sua velocidade:"));
const auto2 = prompt("Digite o nome do primeiro veículo:");
const vel2 = Number(prompt("Digite a sua velocidade:"));

if (vel1 === vel2) {
  alert(
    "Os veículos " +
      auto1 +
      " e " +
      auto2 +
      " possuem mesma velocidade = " +
      vel1 +
      "km/h"
  );
} else if (vel1 < vel2) {
  alert(
    "O veículo " +
      auto2 +
      " com " +
      vel2 +
      "km/h" +
      ", é mais rápido que o veículo " +
      auto1 +
      " com " +
      vel1 +
      "km/h"
  );
} else {
  alert(
    "O veículo " +
      auto1 +
      " com " +
      vel1 +
      "km/h" +
      ", é mais rápido que o veículo " +
      auto2 +
      " com " +
      vel2 +
      "km/h"
  );
}
