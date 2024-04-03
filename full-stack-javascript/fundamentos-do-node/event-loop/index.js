const fs = require("fs");

console.log("Início");

fs.readFile("./arquivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Fim");
