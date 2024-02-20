let vel = 0;
// let vel = 100;

do {
  alert(`A velocidade do veículo é: ${vel}km/h`);
  alert("A velocidade diminuiu 20km/h");
  vel -= 20;
} while (vel > 0);

alert(`A velocidade fianl: ${vel}km/h`);
