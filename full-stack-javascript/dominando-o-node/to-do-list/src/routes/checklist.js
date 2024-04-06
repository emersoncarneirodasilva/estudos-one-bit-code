const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Olá");
  res.send();
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

// O Express vai pegar o q vier no parâmetro :id
router.get("/:id", (req, res) => {
  console.log(req.body);
  res.send(`ID: ${req.params.id}`);
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  res.send(`PUT ID: ${req.params.id}`);
});

router.delete("/:id", (req, res) => {
  console.log(req.body);
  res.send(`DELETE ID: ${req.params.id}`);
});

module.exports = router;
