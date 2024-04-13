const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

// Associação 1 para 1
// Planet.hasOne(Satellite, {
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// Satellite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

// Associação 1 para muitos
Planet.hasMany(Satellite, [
  {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
]);

Satellite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" });

// Associação muitos para muitos
Cap.belongsToMany(Spaceship, {
  foreingKey: "capId",
  through: "capSpaceship", // A tabela que faz a relação entre as duas tabelas
  as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
  foreingKey: "spaceshipId",
  through: "capSpaceship", // A tabela que faz a relação entre as duas tabelas
  as: "caps",
});

module.exports = { Planet, Satellite, Cap, Spaceship };
