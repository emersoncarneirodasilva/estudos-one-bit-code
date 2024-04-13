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

// OBS: Os dados acima só podem ser modificados no postgreSQL, pesquisar como fazer isso!
