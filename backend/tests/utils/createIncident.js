const req = require('supertest');

const app = require('../../src/app');

function incidentRes(ongId) {
  return req(app)
    .post('/incidents')
    .set('Authorization', ongId)
    .send({
      title: 'Test_Incident',
      description: 'Test_Incident',
      value: 100.00,
    });
}

module.exports = incidentRes;
