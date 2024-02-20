const m = Number(prompt('Digite uma medida em "Metros":'));
const chosenMeasure = prompt(
  "Escolha uma opão a ser convertida: \na) milímetro (mm)\nb) centímetro (cm)\nc) decímetro (dm)\nd) decâmetro (dam)\ne) hectômetro (hm)\nf) quilômetro (km)"
);

switch (chosenMeasure) {
  case "a":
    value = m * 1000;
    alert(
      "A conversão de " + m + " metros em milímetros é: " + value + " (mm)"
    );
    break;

  case "b":
    value = m * 100;
    alert(
      "A conversão de " + m + " metros em centímetro é: " + value + " (cm)"
    );
    break;

  case "c":
    value = m * 10;
    alert("A conversão de " + m + " metros em decímetro é: " + value + " (dm)");
    break;

  case "d":
    value = m / 10;
    alert(
      "A conversão de " + m + " metros em decâmetro é: " + value + " (dam)"
    );
    break;

  case "e":
    value = m / 100;
    alert(
      "A conversão de " + m + " metros em hectômetro é: " + value + " (hm)"
    );
    break;

  case "f":
    value = m / 1000;
    alert(
      "A conversão de " + m + " metros em quilômetro é: " + value + " (km)"
    );
    break;

  default:
    alert("Opção inválida");
}
