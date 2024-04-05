const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");

const notesDirectory = path.join(__dirname, "notes");

// Cria o diretório "notes" se o mesmo não existir
if (!fs.existsSync(notesDirectory)) {
  fs.mkdirSync(notesDirectory);
}

// Cria a interface no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para mostrar as opções
function showMenu() {
  console.log("\n*** Menu ***");
  console.log("1 - Criar uma nova anotação");
  console.log("2 - Listar todas as anotações");
  console.log("3 - Ler uma anotação específica");
  console.log("4 - Editar uma anotação específica");
  console.log("5 - Excluir uma anotação específica");
  console.log("6 - Sair");
}

function askToUser() {
  rl.question("\nDeseja permanecer? (s/n)", (answer) => {
    const userAnswer = answer.toLocaleLowerCase();

    if (userAnswer === "s") {
      showMenu();
    } else if (userAnswer === "n") {
      console.log("\nSaindo...");
      rl.close();
      process.exit(0);
    } else {
      console.log("\nDigite uma opção válida!");
      showMenu();
    }
  });
}

// Função para criar o arquivo e a anotação
function createNote() {
  rl.question("Digite o nome do arquivo: ", (filename) => {
    const filePath = path.join(notesDirectory, filename);

    rl.question("Digite o conteúdo a ser acrescentado:\n", (noteContent) => {
      fs.writeFile(filePath + ".txt", noteContent, "utf-8", (err) => {
        if (err) {
          console.error("\nOcorreu um erro ao criar o conteúdo!", err);
        }

        console.log(`\nArquivo "${filename}" foi criado com sucesso!`);

        askToUser();
      });
    });
  });
}

// Função para listar os arquivos
function listNotes() {
  fs.readdir(notesDirectory, (err, files) => {
    if (files.length > 0) {
      if (err) {
        console.error("\nOcorreu um erro ao listar os arquivos!", arr);
      }

      console.log("\n***Lista de Anotações***");

      files.forEach((file) => {
        console.log(`   ${file}`);
      });

      askToUser();
    } else {
      console.log("\nNo momento, não há arquivos listados!");
      showMenu();
    }
  });
}

// Função para ler as anotações
function readNote() {
  fs.readdir(notesDirectory, (err, files) => {
    if (files.length > 0) {
      if (err) {
        console.error("\nOcorreu um erro ao ler a anotação!", arr);
        showMenu();
      }

      rl.question("Digite o nome do arquivo que deseja ler: ", (filename) => {
        const filePath = path.join(notesDirectory, filename);

        if (filename.length === 0) {
          console.log("\nPor favor, digite o nome do arquivo a ser lido!");
          readNote();
        } else {
          fs.readFile(filePath + ".txt", "utf-8", (err, data) => {
            if (err) {
              console.error("\nOcorreu um erro ao ler a anotação!", err);
              showMenu();
            } else {
              console.log("\n*** Conteúdo do Arquivo ***");
              console.log(data);
              askToUser();
            }
          });

          showMenu();
        }
      });
    } else {
      console.log("\nNo momento, não há arquivos!");
      showMenu();
    }
  });
}

// Função para editar o conteúdo de um arquivo
function editNote() {
  fs.readdir(notesDirectory, (err, files) => {
    if (files.length > 0) {
      if (err) {
        console.error("\nOcorreu um erro ao ler a anotação!", arr);
      }

      rl.question(
        "Digite o nome do arquivo da anotação que deseja editar: ",
        (fileName) => {
          const filePath = path.join(notesDirectory, fileName);
          fs.readFile(filePath + ".txt", "utf8", (err, data) => {
            if (err) {
              console.error("Erro ao ler a anotação:", err);
              showMenu();
            } else {
              rl.question(
                "Digite o novo conteúdo da anotação: ",
                (newContent) => {
                  data = newContent;
                  fs.writeFile(filePath + ".txt", data, (err) => {
                    if (err) {
                      console.error("Erro ao editar a anotação:", err);
                      showMenu();
                    }

                    console.log(`Anotação ${fileName} editada com sucesso`);
                    askToUser();
                  });
                }
              );
            }
          });
        }
      );
    } else {
      console.log("\nNo momento, não há arquivos!");
      showMenu();
    }
  });
}

// Função para deletar o arquivo
function deleteNote() {
  fs.readdir(notesDirectory, (err, files) => {
    if (files.length > 0) {
      if (err) {
        console.error("\nOcorreu um erro ao excluir anotação!", arr);
      }

      rl.question(
        "Digite o nome do arquivo que deseja excluir: ",
        (filename) => {
          const filePath = path.join(notesDirectory, filename + ".txt");

          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("\nOcorreu um erro ao excluir anotação!");
            } else {
              console.log(`\nAnotação ${filename} excluída com sucesso!`);
            }

            askToUser();
          });
        }
      );
    } else {
      console.log("\nNo momento, não há arquivos!");
      showMenu();
    }
  });
}

// Função principal para execultar as ações
function main() {
  showMenu();

  rl.on("line", (input) => {
    switch (input) {
      case "1":
        createNote();
        break;

      case "2":
        listNotes();
        break;

      case "3":
        readNote();
        break;

      case "4":
        editNote();
        break;

      case "5":
        deleteNote();
        break;

      case "6":
        console.log("\nSaindo...");
        rl.close();
        process.exit(0);

      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        showMenu();
        break;
    }
  });
}

main();
