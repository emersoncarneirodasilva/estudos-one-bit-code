// Vamos começar pelo valor do input:
const input = document.getElementById("input");

document.getElementById("value").addEventListener("click", function () {
  input.value = "Olá, mundo!";

  console.log(input.value);
  console.log(input.getAttribute("value"));
});

// Também podemos alterar o próprio tipo de input, e isso reflete imediatamente na página:
document.getElementById("type").addEventListener("click", function () {
  // input.type = input.type !== 'date' ? 'date' : 'text'
  input.setAttribute("type", "radio");
});

// Podemos manipular atributos comuns, como o placeholder:
document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digita algo...";
});

// E também atributos booleanos, como o disabled:
document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled);
});

// Por fim, podemos usar o poder dos atributos de dados do HTML dentro do
// javascript para aumentar ainda mais as nossas possiblidades:
// Obs.: Repare no “Inspecionar” que podemos inserir atributos dinamicamente no elemento.
document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo data-something-else é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
  console.log(
    "O valor do atributo data-something-else agora é: " +
      input.dataset.somethingElse
  );
});
