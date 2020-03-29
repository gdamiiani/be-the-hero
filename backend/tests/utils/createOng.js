const req = require('supertest');

const app = require('../../src/app');

function createOng() {
  return req(app)
    .post('/ongs')
    .send({
      name: 'Test_ONG',
      email: 'contact@test.com',
      whatsapp: '0000000000',
      city: 'Test',
      uf: 'TE',
    });
}

module.exports = createOng;
