async function imc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    return Promise.reject("Massa e Peso precisam ser números!");
  }
  return (weight / (height * height)).toFixed(2);
}

async function showImc(weight, height) {
  try {
    console.log(`Calculando o IMC para peso ${weight} e altura ${height}...`);

    const imcResult = await imc(weight, height);

    console.log(`Resultado do IMC: ${imcResult}`);

    if (imcResult < 18.5) {
      console.log("Magreza");
    } else if (imcResult < 25) {
      console.log("Normal");
    } else if (imcResult < 30) {
      console.log("Sobrepeso");
    } else if (imcResult < 40) {
      console.log("Obesidade");
    } else {
      console.log("Obesidade Grave");
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finalizando programa!");
  }
}

showImc(45, 1.75);
showImc(60, 1.7);
showImc(69, 1.64);
showImc("text", 1.95);
showImc(120, 1.8);
showImc(150, 1.85);
