const express = require("express");
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");

const routes = express.Router();

routes.post('/sessions', sessionController.createSession)

routes.get("/ongs", ongController.listOngs);
routes.post("/ongs", ongController.createOng);

routes.get('/profile', profileController.listIncidentOng)

routes.get("/incidents", incidentController.listIncident);
routes.post("/incidents", incidentController.createIncident);
routes.delete("/incidents/:id", incidentController.deleteIncident);

module.exports = routes;
