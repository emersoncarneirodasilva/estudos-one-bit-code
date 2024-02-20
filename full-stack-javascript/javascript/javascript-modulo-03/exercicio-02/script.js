// Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência.
// 1 - A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
// 2 - Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
//   . Um campo de texto para o nome da tecnologia
//   . Um grupo de botões tipo “radio” com opções de tempo de
//     experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
//   . Um botão de remover que deve excluir essa linha.
// 3 - O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário.
//     Para testar o funcionamento você pode utilizar um simples console.log()
// OBS: Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar
//       sem acionar um recarregamento.

const dev = [];
let divInputs = 0;

const showButton = document.getElementById("tech-show");
showButton.addEventListener("click", function (e) {
  e.preventDefault();
  const devForm = e.currentTarget.parentNode;

  const div = document.createElement("div");
  const divIndex = divInputs;
  divInputs++;
  div.id = "divInput-" + divIndex;
  div.className = "divInput";

  const techLabel = document.createElement("label");
  techLabel.setAttribute("for", "techName-" + divIndex);
  techLabel.innerText = "Tecnologia: ";
  const techInput = document.createElement("input");
  techInput.type = "text";
  techInput.name = "techName";
  techInput.id = "techName-" + divIndex;
  techInput.required;
  techInput.style.marginTop = "20px";

  techLabel.appendChild(techInput);
  techLabel.appendChild(document.createElement("br"));
  techLabel.appendChild(document.createElement("br"));

  const exp = document.createElement("label");
  exp.innerText = "Tempo de experiência";
  exp.appendChild(document.createElement("br"));
  exp.appendChild(document.createElement("br"));

  const juniorInput = document.createElement("input");
  juniorInput.type = "radio";
  juniorInput.name = "techExp-" + divIndex;
  juniorInput.id = "expRadio-" + divIndex + ".1";
  juniorInput.value = "0-2 anos";
  juniorInput.style.marginRight = "15px";
  const juniorLabel = document.createElement("label");
  juniorLabel.innerText = "0-2 anos";
  juniorLabel.id = "expRadio-" + divIndex + ".1";

  juniorLabel.appendChild(juniorInput);

  const plenoInput = document.createElement("input");
  plenoInput.type = "radio";
  plenoInput.name = "techExp-" + divIndex;
  plenoInput.id = "expRadio-" + divIndex + ".2";
  plenoInput.value = "3-4 anos";
  plenoInput.style.marginRight = "15px";
  const plenoLabel = document.createElement("label");
  plenoLabel.innerText = "3-4 anos";
  plenoLabel.id = "expRadio-" + divIndex + ".2";

  plenoLabel.appendChild(plenoInput);

  const seniorInput = document.createElement("input");
  seniorInput.type = "radio";
  seniorInput.name = "techExp-" + divIndex;
  seniorInput.id = "expRadio-" + divIndex + ".3";
  seniorInput.value = "5+ anos";
  const seniorLabel = document.createElement("label");
  seniorLabel.innerText = "5+ anos";
  seniorLabel.id = "expRadio-" + divIndex + ".3";

  seniorLabel.appendChild(seniorInput);
  seniorLabel.appendChild(document.createElement("br"));
  seniorLabel.appendChild(document.createElement("br"));

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover";
  removeButton.addEventListener("click", function () {
    div.remove();
  });

  exp.append(juniorLabel, plenoLabel, seniorLabel);
  div.append(techLabel, exp, removeButton);
  devForm.appendChild(div);
});

const devForm = document.getElementById("devForm");

const addButton = document.createElement("button");
addButton.type = "submit";
addButton.innerText = "Adicionar dados";
addButton.style.marginLeft = "5px";

devForm.appendChild(addButton);

devForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const devName = document.querySelector("#fullname").value;
  const divInputs = document.querySelectorAll(".divInput");

  let technologies = [];

  divInputs.forEach(function (div) {
    const techName = document.querySelector(
      "#" + div.id + ' input[name="techName"]'
    ).value;

    const techExp = document.querySelector(
      "#" + div.id + ' input[type="radio"]:checked'
    ).value;

    technologies.push({ name: techName, exp: techExp });
  });

  const devData = { fullName: devName, technologies: technologies };

  const technology = technologies.map(function (tech) {
    const tc = ` ${tech.name} (${tech.exp})`;
    return tc;
  });

  const confirmation = confirm(`Deseja salvar as informações?\n
Nome: ${devData.fullName}
Tecnologias: ${technology}`);

  if (confirmation) {
    dev.push(devData);

    alert("Cadastro realizado com sucesso!");

    document.querySelector("#fullname").value = "";

    divInputs.forEach(function (div) {
      div.remove();
    });

    console.log(dev);
  } else {
    divInputs.forEach(function (div) {
      div.remove();
    });

    return;
  }
});
