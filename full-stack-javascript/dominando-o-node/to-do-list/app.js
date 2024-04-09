const express = require("express");
const path = require("node:path");

const rootRouter = require("./src/routes/index");
const checkListRouter = require("./src/routes/checklist");
const methedOverride = require("method-override");

require("./config/database");

const app = express();
const port = 3000;

// OBS: o app.use() serve para inicializar o middleware
app.use(express.json()); // Verifica na chamada se há um arquivo json
app.use(express.urlencoded({ extended: true }));
app.use(methedOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);
app.use("/checklists", checkListRouter);

app.listen(port, () => {
  console.log(`Servidor foi iniciado na porta: ${port}`);
});
