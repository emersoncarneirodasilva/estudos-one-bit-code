const fs = require("node:fs");

fs.rename("arquivo.txt", "arquivo.csv", (error) => {
  if (error) {
    console.log("Erro ao renomear o arquivo: ", error.message);
    return;
  }

  console.log("Arquivo renomeado com sucesso!");
});
