// Para esse exercício você irá utilizar o código do projeto Calc.js, desenvolvido nas aulas Projeto Prático Guiado
// do módulo anterior, Javascript II - DOM. Você deverá modularizar o código javascript da aplicação, dividindo
// o conteúdo do arquivo index.js em diferentes módulos utilizando a sintaxe dos ES Modules. Seu projeto deve conter
// pelo menos 3 módulos.

import charkey from "./charkey.js";
import clear from "./clear.js";
import events from "./events.js";
import equalBtn, { copy, switchButton } from "./buttons.js";

charkey();

clear();

events();

equalBtn();

copy();

switchButton();
