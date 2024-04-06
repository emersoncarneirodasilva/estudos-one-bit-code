const express = require("express");
const checkListRouter = require("./src/routes/checklist");

const app = express();
const port = 3000;

// Middleware - Verifica na chamada se há um arquivo json
// OBS: o app.use() serve para inicializar o middleware
app.use(express.json());

app.use("/checklists", checkListRouter);

app.listen(port, () => {
  console.log(`Servidor foi iniciado na porta: ${port}`);
});
