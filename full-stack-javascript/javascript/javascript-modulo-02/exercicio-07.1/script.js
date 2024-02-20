// Escreva um programa em javascript para simular uma fila de espera
// em um consultório médico. O programa deve iniciar mostrando na
// tela um menu interativo contendo a lista de todos os pacientes
// esperando em ordem mostrando sua posição ao lado do nome
// (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir
// escolher entre as opções de “Novo paciente”, para adicionar um
// novo paciente ao fim da fila (pedindo o nome do paciente),
// “Consultar paciente”, que retira o primeiro paciente da fila
// e mostra na tela o nome do paciente consultado, e “Sair”.
// O programa só deve ser encerrado ao escolher a opção de
// “Sair”, caso contrário deve voltar ao menu.

let patients = [];

let value = "";

do {
  let patient = "";

  for (let i = 0; i < patients.length; i++) {
    patient += `${i + 1}º ${patients[i]} `;
  }

  const options = prompt(`Lista de pacientes:\n ${patient} \n
Escolha uma das opções a seguir:\n 1 - Novo paciente\n 2 - Consultar paciente\n 3 - Sair`);

  switch (options) {
    case "1":
      let newPatient = prompt("Digite o nome do paciente a ser adicionado:");
      patients.push(newPatient);
      alert(`O paciente "${newPatient}" foi adicionado com sucesso!`);
      break;

    case "2":
      let patientRemove = patients.shift();

      if (!patientRemove) {
        alert("Não há paciente na espera");
      } else {
        alert(`O paciente "${patientRemove}" entrou na sala de consulta.`);
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

console.log(patients);
