// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível
// gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// 1- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//   . Listar vagas disponíveis
//   . Criar um nova vaga
//   . Visualizar uma vaga
//   . Inscrever um candidato em uma vaga
//   . Excluir uma vaga
//   . Sair
// 2- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos
// de todas as vagas.
// 3 - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite,
// e também deve pedir que o usuário confirme as informações antes de salvá-las.
// 4 - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela:
// índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// 5 - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e
// então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// 6 - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o
// usuário confirme a exclusão da vaga antes de realmente exclui-la.
// 7 - A opção sair deve sair do programa.

let options = "";
let value = "";

let jobs = [];

// Lista as vagas
function jobList() {
  if (jobs.length < 1) {
    alert("Não há vagas cadastradas no momento!");
  } else {
    const jobsL = jobs.map(function (job, index) {
      alert(
        `Nome da vaga: ${job.name}\nNúmero da vaga: ${
          index + 1
        }\nNúmero de candidatos inscritos: ${job.candidate.length}`
      );
    });

    return jobsL;
  }
}

// Modo que mostra todas as vagas de uma só vez
// function jobList() {
//   const jobInText = jobs.reduce((finalText, job, index) => {
//     finalText += (index + 1) + ". ";
//     finalText += job.nome;
//     finalText += " (" + job.candidatos.length + " candidatos)\n";
//     return finalText;
//   }, "");

//   alert(jobInText);
// }

// Cria as vagas
function jobCreate() {
  const job = {};
  job.name = prompt("Digite o nome da vaga de emprego a ser criada:");
  job.description = prompt("Digite uma descrição sobre a vaga:");
  job.date = prompt("Digite a data limite da vaga: (dd/mm/aaaa)");
  job.candidate = [] || 0;

  const jobConfirm = confirm(
    `Deseja salvar a vaga:\n
Nome da vaga: ${job.name}
Descrição: ${job.description}
Data limite: ${job.date}`
  );

  if (jobConfirm) {
    alert("Vaga criada com sucesso!");
    return jobs.push(job);
  } else {
    alert("Voltando ao menu inicial");
  }
}

// Vizualiza uma vaga específica
function jobView() {
  if (jobs.length < 1) {
    alert("Não há vagas cadastradas no momento!");
  } else {
    const jobNumb = Number(
      prompt(
        "Digite o número correspondente a vaga que o candidato deseja se inscrever:"
      )
    );

    if (jobNumb <= jobs.length) {
      const jobV = jobs[jobNumb - 1];
      const candidateV = jobV.candidate.map(function (cand) {
        return ` ${cand}`;
      });

      // Outra forma de mostrar os candidatos, mas precisa do segundo modo da segunda função
      // const candidatesImText = jobV.candidate.reduce((finalText, candidate) => finalText + "\n - " + candidate, "")

      alert(`Informações sobre a vaga:\n
Nome: ${jobV.name}
Número: ${jobNumb}
Descrição: ${jobV.description}
Data Limite: ${jobV.date}
Número de candidatos: ${jobV.candidate.length}
Nome dos candidatos:${candidateV}`);
    } else {
      alert("O número não corresponde a nenhuma vaga!");
      return;
    }
  }
}
// Inscreve o candidato na vaga
function candidateSubscribe() {
  const candidateName = prompt("Digite o nome do candidato:");
  const jobNumber = Number(
    prompt(
      "Digite o número correspondente a vaga que o candidato deseja se inscrever:"
    )
  );
  const jobS = jobs[jobNumber - 1];

  const confirmation =
    confirm(`Deseja inscrever o candidato "${candidateName}" na vaga número "${jobNumber}"?\n
Nome: ${jobS.name}
Descrição: ${jobS.description}
Data Limite: ${jobS.date}`);

  if (confirmation && jobs.length > 0) {
    jobS.candidate.push(candidateName);
    alert("Inscrição realizada sucesso!");
  } else if (jobs.length < 1) {
    alert("Não há vagas cadastradas no momento!");
  } else {
    alert("Voltando ao menu inicial");
  }
}

// Deleta uma vaga
function jobDelete() {
  const jobNum = Number(
    prompt("Digite o número correspondente a vaga a ser excluída")
  );
  const jobD = jobs[jobNum - 1];

  const deletCofirm = confirm(`Deseja mesmo excluir a vaga?\n
Nome: ${jobD.name}
Descrição: ${jobD.description}
Data Limite: ${jobD.date}`);

  if (deletCofirm) {
    jobs.splice(jobNum - 1, 1);
    alert("Vaga excluída com sucesso!");
  } else {
    alert("Voltando ao menu inicial");
  }
}

do {
  options = prompt(`Bem vindo ao Minha Vaga, Meu Emprego\n
Escolha uma das opções a seguir:
1 - Listar vagas disponíveis
2 - Criar um nova vaga
3 - Visualizar uma vaga
4 - Inscrever um candidato em uma vaga
5 - Excluir uma vaga
6 - Sair
`);

  switch (options) {
    case "1":
      jobList();
      break;

    case "2":
      jobCreate();
      break;

    case "3":
      jobView();
      break;

    case "4":
      candidateSubscribe();
      break;

    case "5":
      jobDelete();
      break;

    case "6":
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
  console.log(jobs);
} while (value !== "Sim");
