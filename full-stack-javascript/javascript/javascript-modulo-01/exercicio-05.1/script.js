//  Escreva um programa em javascript que simule um menu interativo
//  com 5 opções diferentes. O programa deverá iniciar mostrando
//  as 5 opções disponíveis, as quatro primeiras não precisam de
//  nenhuma funcionalidade específica, a última opção deve ser a
//  opção “Encerrar”. Ao clicar em alguma das quatro primeiras
//  opções uma mensagem deve ser exibida na tela indicando qual
//  foi a opção escolhida e depois o programa deve exibir
//  novamente o menu com as 5 opções. Isso deve continuar
//  acontecendo até que o usuário escolha a opção “Encerrar”.
//  Ao escolhe-la uma mensagem dizendo que o sistema está sendo
//  encerrado deve ser exibida na tela e então o programa é finalizado.

do {
  const options = prompt(
    "Escolha uma das opções: \na) Ver boletos\nb) Ver Conta Corrente\nc) Ver Conta Poupança\nd) Ver Saldo\ne) Encerrar"
  );

  switch (options) {
    case "a":
      value = "Seus Boletos do mês";
      alert(value);
      break;

    case "b":
      value = "Conta Corrente";
      alert(value);
      break;

    case "c":
      value = "Conta Poupança";
      alert(value);
      break;

    case "d":
      value = "Saldo Atual";
      alert(value);
      break;

    case "e":
      value = "Encerrar";
      alert("Encerrando operação...");
      break;

    default:
      value = "Opção inválida!";
      alert(value);
      break;
  }
} while (value !== "Encerrar");

alert("Finalizado!");
