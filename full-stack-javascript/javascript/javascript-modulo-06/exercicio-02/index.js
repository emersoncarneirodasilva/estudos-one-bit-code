function imc(weight, height) {
  return new Promise((resolve, reject) => {
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("Massa e Peso precisam ser números!");
    } else {
      const imc = (weight / (height * height)).toFixed(2);
      resolve(imc);
    }
  });
}

function showImc(weight, height) {
  imc(weight, height)
    .then((result) => {
      console.log(`Resultado do IMC: ${result}`);

      if (result < 18.5) {
        console.log("Magreza");
      } else if (result < 25) {
        console.log("Normal");
      } else if (result < 30) {
        console.log("Sobrepeso");
      } else if (result < 40) {
        console.log("Obesidade");
      } else {
        console.log("Obesidade Grave");
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      console.log("Finalizando programa!");
    });

  console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`);
}

showImc(45, 1.75);
showImc(60, 1.7);
showImc(69, 1.64);
showImc("78", 1.95);
showImc(120, 1.8);
showImc(150, 1.85);
