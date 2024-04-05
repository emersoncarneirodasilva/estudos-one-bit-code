const fs = require("node:fs");

const content = "Conteúdo do novo arquivo assíncrono";

// Forma Assíncrona
fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.log(`Erro ao carregar o arquivo: ${error.message}`);

    return;
  }

  console.log("Aquivo criado com sucesso de forma assíncrona.");
});

// Forma Síncrona
// try {
//   fs.writeFileSync("./arquivo.txt", "Olá, mundo!", "utf-8");
//   console.log("Aquivo criado com sucesso!");
// } catch (error) {
//   console.log(`Erro ao carregar o arquivo: ${error.message}`);
// }
