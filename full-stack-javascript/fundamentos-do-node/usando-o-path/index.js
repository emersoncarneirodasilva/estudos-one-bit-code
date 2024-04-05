const path = require("node:path");

const dir = "src";
const file = "app.js";

const fullPath = path.join(__dirname, dir, file);
console.log(fullPath);

// const relativePath = path.join(".", dir, file);
// console.log(relativePath);

const relativePath = "../arquivos/relatorios.pdf";

const absolutePath = path.resolve(__dirname, relativePath);
console.log(absolutePath);

const filename = path.basename(relativePath);
console.log(filename);

const ext = path.extname(absolutePath);
console.log(ext);
