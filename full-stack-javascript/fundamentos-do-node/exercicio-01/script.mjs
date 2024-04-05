import {
  create_file,
  read_file,
  remove_file,
  write_file,
} from "./functions.mjs";

const filename = "meuarquivo.txt";
const text = "Olá mundo!";

async function start() {
  await create_file(filename);
  await read_file(filename);
  await write_file(filename, text);
  await read_file(filename);
  await remove_file(filename);
}

start();
