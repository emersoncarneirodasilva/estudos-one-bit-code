const fs = require("node:fs");

const filename = "./arquivo.txt";

const exists = fs.existsSync(filename);

if (exists) {
  // Forma Assíncrona
  fs.readFile(filename, "utf-8", (error, data) => {
    if (error) {
      console.log(`Erro ao ler o arquivo: ${error.message}`);

      return;
    }

    console.log(data);
  });
} else {
  console.log("O arquivo não existe!");
}

// Forma Síncrona
// try {
//   const data = fs.readFileSync("./arquivo.txt", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(`Erro ao ler o arquivo: ${error.message}`);
// }
