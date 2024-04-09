const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  res.render("pages/index"); // O caminho já foi definido no app.js em: app.set("views", path.join(__dirname, "src/views"));
});

module.exports = router;
