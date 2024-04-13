const express = require("express");
const routes = express.Router();

// Import Controllers
const PlanetController = require("../controller/PlanetController");
const SatelliteController = require("../controller/SatelliteController");
const CapController = require("../controller/CapController");
const SpaceshipController = require("../controller/SpaceshipController");

//  Planet routers
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

// Satellite routers
routes.post("/planet/:planetId/satellites", SatelliteController.store);
routes.get("/planet/:planetId/satellites", SatelliteController.index);
routes.put("/planet/:planetId/satellites/:id", SatelliteController.put);
routes.delete("/planet/:planetId/satellites/:id", SatelliteController.delete);

// Cap routers
routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);
routes.put("/cap/:id", CapController.put);
routes.delete("/cap/:id", CapController.delete);

// Spaceship routers
routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);
routes.put("/caps/:capId/spaceships/:id", SpaceshipController.put);
routes.delete("/caps/:capId/spaceships/:id", SpaceshipController.delete);

module.exports = routes;
