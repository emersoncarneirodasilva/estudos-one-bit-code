const moment = require("moment");

function sayMyName(name) {
  console.log(`Olá ${name}, como vai?`);
  console.log(`Hora: ${moment().format("HH:mm:ss")}`);
}

sayMyName("Emerson");
