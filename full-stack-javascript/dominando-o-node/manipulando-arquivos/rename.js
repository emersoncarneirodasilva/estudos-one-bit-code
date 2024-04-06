const fs = require("node:fs");
const path = require("node:path");

const archPath = path.join(__dirname, "test.txt");
const name = "test2.txt";

fs.rename(archPath, name, (err) => {
  if (err) console.log(err);

  console.log("Atualização do nome do arquivo feita com sucesso!");
});
