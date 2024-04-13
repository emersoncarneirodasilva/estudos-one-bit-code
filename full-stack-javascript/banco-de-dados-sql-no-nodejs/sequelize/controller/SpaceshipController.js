const Spaceship = require("../models/Spaceship");
const Cap = require("../models/Cap");

module.exports = {
  async store(req, res) {
    const { capId } = req.params;
    const { name, capacity } = req.body;

    const cap = await Cap.findByPk(capId);

    if (!cap) {
      res.send("Esse captão não está cadastrado!");
    }

    const [spaceships] = await Spaceship.findOrCreate({
      where: { name, capacity },
    });

    await cap.addSpaceship(spaceships);

    return res.json(spaceships);
  },

  async index(req, res) {
    const { capId } = req.params;

    const cap = await Cap.findByPk(capId, {
      include: { association: "spaceships" },
    });

    return res.json(cap);
  },

  async put(req, res) {
    const { name, size, capacity } = req.body;

    await Spaceship.update(
      { name, size, capacity },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.send("Espaçonave atualizado com sucesso!");
  },

  async delete(req, res) {
    await Spaceship.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.send("Espaçonave excluída com sucesso!");
  },
};
