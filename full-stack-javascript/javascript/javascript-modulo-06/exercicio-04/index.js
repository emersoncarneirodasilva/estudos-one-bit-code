function renderTrasition(transactionsData) {
  const article = document.createElement("article");
  article.classList.add("transactions");
  article.id = `transactions-${transactionsData.id}`;

  const name = document.createElement("h3");
  name.classList.add("transactions-name");
  name.innerText = transactionsData.name;

  const value = document.createElement("div");
  value.classList.add("transactions-value");
  value.innerText = `R$ ${transactionsData.value}`;

  const description = document.createElement("div");
  description.classList.add("transactions-description");
  description.innerText = transactionsData.description;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.innerText = "Deletar";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${transactionsData.id}`, {
      method: "DELETE",
    });
  });

  article.append(name, value, description, deleteBtn);
  document.querySelector("#transactions").appendChild(article);
}

function renderTotal(transactions) {
  const total = transactions.reduce((acc, transactions) => {
    return acc + Number(transactions.value);
  }, 0);

  const totalSection = document.querySelector("#total");

  const totalP = document.createElement("p");
  totalP.innerText = `R$ ${total}`;

  totalSection.appendChild(totalP);
}

let transactionsArray = [];

async function fecthTransactions() {
  const transactions = await fetch("http://localhost:3000/transactions").then(
    (res) => res.json()
  );

  transactions.map((transactions) => renderTrasition(transactions));
  renderTotal(transactions);

  transactionsArray.push(transactions);
}

console.log(transactionsArray);

// OBS: DOMContentLoaded é quando termina de carregar o conteúdo no DOM
document.addEventListener("DOMContentLoaded", () => {
  fecthTransactions();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const transactionsData = {
    name: document.querySelector("#name").value,
    value: document.querySelector("#value").value,
    description: document.querySelector("#description").value,
  };

  const response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactionsData),
  });

  const savedTransactions = await response.json();
  form.reset();
  renderTrasition(savedTransactions);
});
