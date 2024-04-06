const fs = require("node:fs");
const path = require("node:path");

const archPath = path.join(__dirname, "test2.txt");

fs.unlink(archPath, (err) => {
  if (err) console.log(err);

  console.log("Remoção do arquivo feita com sucesso!");
});
