const resultados = prompt("Escolha uma alternativa: \na)\nb)\nc)");

switch (resultados) {
  case "a":
    alert("O resultado é '35'");
    break;
  case "b":
    alert("O resultado é '167'");
    break;
  case "c":
    alert("O resultado é '97'");
    break;
  default:
    alert("Finalizando...");
}
