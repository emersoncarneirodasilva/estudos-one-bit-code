const fs = require("node:fs");
const path = require("node:path");

const archPath = path.join(__dirname, "test.txt");
const text = "Hello, world!";

fs.writeFile(archPath, text, (err) => {
  if (err) console.log(err);

  console.log("Arquivo criado com sucesso!");
});
