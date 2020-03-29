const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const ProfileController = require('./controllers/ProfileController');
const IncidentController = require('./controllers/IncidentController');

const validators = require('./validators');

const routes = express.Router();

routes.post('/sessions', validators.createSession, SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validators.createOngs, OngController.create);

routes.get('/profile', validators.indexProfile, ProfileController.index);

routes.get('/incidents', validators.indexIncidents, IncidentController.index);
routes.post('/incidents', validators.createIncidents, IncidentController.create);
routes.delete('/incidents/:id', validators.deleteIncidents, IncidentController.delete);

module.exports = routes;
