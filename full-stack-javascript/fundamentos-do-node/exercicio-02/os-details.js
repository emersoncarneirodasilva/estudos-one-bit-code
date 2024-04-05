const os = require("node:os");
const fs = require("node:fs");
const path = require("node:path");

const systemPlatformMap = {
  win32: "Windows",
  linux: "Linux",
  darwin: "MacOS",
  freebsd: "FreeBSD",
};

function getOsDetails() {
  const osName = systemPlatformMap[os.platform()];
  console.log(`Nome do SO: ${osName}`);

  const arch = os.arch();
  console.log(`Arquitetura do SO: ${arch}`);

  const cpu = os.cpus()[0].model;
  console.log(`CPU - Modelo: ${cpu}`);

  // Obter o tempo de atividade em segundos
  const uptimeInSeconds = os.uptime();

  // Converter o tempo de atividade para dias, horas, minutos e segundos
  const uptimeDays = Math.floor(uptimeInSeconds / 60 / 60 / 24);
  const uptimeHours = Math.floor(uptimeInSeconds / 3600);
  const uptimeMinutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const uptimeSeconds = Math.floor(uptimeInSeconds % 60);
  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMinutes}:${uptimeSeconds}`;
  console.log(
    `Tempo de atividade do sistema:${uptimeDays} dias, ${uptimeHours} horas, ${uptimeMinutes} minutos e ${uptimeSeconds} segundos.`
  );

  // Obter informações sobre a memória do sistema
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const usedMemory = totalMemory - freeMemory;

  // Calcular o uso de memória em porcentagem
  const memoryUsagePercentage = (usedMemory / totalMemory) * 100;
  console.log(`Uso de memória: ${memoryUsagePercentage.toFixed(2)}%`);

  return { osName, arch, cpu, uptime, memoryUsagePercentage };
}

function saveLog({ osName, arch, cpu, uptime, memoryUsagePercentage }) {
  const text = `Detalhes do Sistema
Sistema opelracional: ${osName}
Arquitetura: ${arch}
Modelo do Processador: ${cpu}
Tempo de Atividade do Sistema: ${uptime}
Uso da memória RAM: ${memoryUsagePercentage.toFixed(2)}%

`;

  // const dir = path.join("/", "log"); // Aqui o diretório é contruído na raiz do computador (C:)
  const dir = path.join(__dirname, "log", "arch"); // Aqui o diretório é construído na raiz do projeto (exercicio-02)

  if (!fs.existsSync(dir)) {
    // { recursive: true } garante que ele criará diretórios pai se eles não existirem
    fs.mkdirSync(dir, { recursive: true }, (error) => {
      if (error) {
        console.error("Erro ao criar o diretório:", error);
      } else {
        console.log("Diretório criado com sucesso!");
      }
    });
  } else {
    console.log("O diretório já existe.");
  }

  // if (!fs.existsSync(dir)) {
  //   fs.mkdirSync(dir);
  // }

  const filePath = path.join(dir, "log.txt");
  fs.appendFileSync(filePath, text);
}

setTimeout(() => {
  console.clear();
  getOsDetails();
  saveLog(getOsDetails());
}, 1000 * 1);
