const fs = require("node:fs");
const path = require("node:path");

const archPath = path.join(__dirname, "test.txt");
const text = "Texto acrescentado...";

fs.appendFile(archPath, text, (err) => {
  if (err) console.log(err);

  console.log("Atualização do arquivo feita com sucesso!");
});
