const Satellite = require("../models/Satellite");
const Planet = require("../models/Planet");

module.exports = {
  async store(req, res) {
    const { planetId } = req.params;
    const { name, serial_number } = req.body;

    const planet = await Planet.findByPk(planetId);

    if (!planet) {
      res.send("Esse planeta não existe!");
    }

    const satellite = await Satellite.create({ name, serial_number, planetId });

    return res.json(satellite);
  },

  async index(req, res) {
    const { planetId } = req.params;

    if (!planetId) {
      res.send("Esse planeta não existe!");
    }

    const planet = await Planet.findByPk(planetId, { include: Satellite });

    return res.json(planet);
  },

  async put(req, res) {
    const { name, size, serial_number } = req.body;

    await Satellite.update(
      { name, size, serial_number },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.send("Satelite atualizado com sucesso!");
  },

  async delete(req, res) {
    await Satellite.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.send("Satelite deletado com sucesso!");
  },
};
