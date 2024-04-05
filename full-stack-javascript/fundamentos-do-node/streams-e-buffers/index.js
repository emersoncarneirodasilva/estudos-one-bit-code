const fs = require("node:fs");

// const readStream = fs.createReadStream("arquivo.txt");
const readStream = fs.createReadStream("wallpaper.png");

const buffer = [];

readStream.on("data", (chunk) => {
  buffer.push(chunk);
  console.log("Um chunk foi processado.");
});

readStream.on("end", () => {
  console.log("Buffer:\n", buffer);
  // const fullData = Buffer.concat(buffer).toString();
  // console.log("Dados lidos:\n", fullData);
});
