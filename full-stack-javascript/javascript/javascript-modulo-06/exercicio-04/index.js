function renderTransaction(transactionsData) {
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

  const containerBtn = document.createElement("div");
  containerBtn.classList.add("container-btn");

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.type = "button";
  editBtn.innerText = "Editar";
  editBtn.addEventListener("click", () => {
    const inputHidden = document.createElement("input");
    inputHidden.id = "id";
    inputHidden.type = "hidden";

    const form = document.querySelector("#form");
    form.appendChild(inputHidden);

    document.querySelector("#id").value = transactionsData.id;
    document.querySelector("#name").value = transactionsData.name;
    document.querySelector("#value").value = transactionsData.value;
    document.querySelector("#description").value = transactionsData.description;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.type = "button";
  deleteBtn.innerText = "Deletar";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${transactionsData.id}`, {
      method: "DELETE",
    });
  });

  containerBtn.append(editBtn, deleteBtn);

  article.append(name, value, description, containerBtn);
  document.querySelector("#transactions").appendChild(article);
}

function renderTotal(transactions) {
  const total = transactions.reduce((acc, transaction) => {
    return acc + Number(transaction.value);
  }, 0);

  const totalSection = document.querySelector("#total");

  const totalP = document.createElement("p");
  totalP.innerText = `R$ ${total}`;

  totalSection.appendChild(totalP);
}

let transactionsArray = [];
console.log(transactionsArray);

async function fecthTransactions() {
  const transactions = await fetch("http://localhost:3000/transactions").then(
    (res) => res.json()
  );

  transactions.map((transaction) => renderTransaction(transaction));
  renderTotal(transactions);

  transactionsArray.push(...transactions);
}

// OBS: DOMContentLoaded é quando termina de carregar o conteúdo no DOM
document.addEventListener("DOMContentLoaded", () => {
  fecthTransactions();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const transactionsData = {
    id: document.querySelector("#id")?.value,
    name: document.querySelector("#name").value,
    value: document.querySelector("#value").value,
    description: document.querySelector("#description").value,
  };

  if (transactionsData.id) {
    const response = await fetch(
      `http://localhost:3000/transactions/${transactionsData.id}`,
      {
        method: "PUT",
        body: JSON.stringify(transactionsData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const transaction = await response.json();
    const indexToRemove = transactionsArray.findIndex(
      (t) => t.id === transactionsData.id
    );
    transactionsArray.splice(indexToRemove, 1, transaction);
    document.querySelector(`#transactions-${transactionsData.id}`).remove();
    renderTransaction(transactionsArray);
  } else {
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify(transactionsData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const savedTransactions = await response.json();
    transactionsArray.push(savedTransactions);
    renderTransaction(savedTransactions);
  }

  // form.reset();
  e.target.reset();
});
