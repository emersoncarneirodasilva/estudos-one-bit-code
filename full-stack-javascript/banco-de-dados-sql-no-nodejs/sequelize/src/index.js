const express = require("express");
const routes = require("./routes");
require("../config/associations");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, console.log(`Rodando na porta: ${port}`));
