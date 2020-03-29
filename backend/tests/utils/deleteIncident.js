const req = require('supertest');

const app = require('../../src/app');

function deleteIncident(ongId, incidentId) {
  return req(app)
    .delete(`/incidents/${incidentId}`)
    .set('Authorization', ongId);
}

module.exports = deleteIncident
