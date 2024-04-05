const os = require("node:os");

const plataform = os.platform();
console.log(`Plataforma do SO: ${plataform}`);

const arch = os.arch();
console.log(`Arquitetura do SO: ${arch}`);

// Com o objeto não fazer template string
const cpu = os.cpus();
console.log("Número de núcleos do CPU:", cpu.length);
console.log("Informações da CPU:", cpu);

const memory = os.totalmem();
console.log(
  `Total de memória do PC: ${(memory / 1024 / 1024 / 1024).toFixed(2)} GB`
);

const freeMemory = os.freemem();
console.log(
  `Memoria livre do PC: ${(freeMemory / 1024 / 1024 / 1024).toFixed(2)} GB`
);
