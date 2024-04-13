require("dotenv").config();

module.exports = {
  dialect: process.env.DIALECT,
  host: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  define: {
    timestamps: true,
  },
};

// OBS: Se não dê certo, tentar com as informações abaixo:
// dialect: "postgres",
// host: "localhost",
// username: "postgres",
// password: "",
// database: "curso_sequelize",
// OBS: Os dados acima só podem ser modificados no postgreSQL, pesquisar como fazer isso!
