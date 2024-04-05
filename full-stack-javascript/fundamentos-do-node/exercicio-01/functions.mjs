import fs from "node:fs";

export function create_file(filename) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, "", (err) => {
      if (err) {
        reject(`Erro ao criar o arquivo: ${err}`);
      } else {
        console.log(`Arquivo "${filename}" foi criado com sucesso!`);
        resolve();
      }
    });
  });
}

export function write_file(filename, text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, text, "utf-8", (err) => {
      if (err) {
        reject("Erro ao escrever conteúdo!");
      } else {
        console.log("Conteúdo escrito no arquivo com sucesso!");
        resolve();
      }
    });
  });
}

export function read_file(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        reject("Erro ao ler o arquivo!");
      } else {
        console.log(data);
        resolve();
      }
    });
  });
}

export function remove_file(filename) {
  return new Promise((resolve, reject) => {
    fs.unlink(filename, (err) => {
      if (err) {
        reject("Erro ao remover o arquivo!");
      } else {
        console.log("Arquivo removido com sucesso!");
        resolve();
      }
    });
  });
}
