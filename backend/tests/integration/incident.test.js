const req = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

const createOng = require('../utils/createOng');
const createIncident = require('../utils/createIncident');

describe('Incident', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG, and then create a new incident', async () => {
    const ongRes = await createOng();

    expect(ongRes.body);
    expect(ongRes.body.id).toHaveLength(8);

    const incidentRes = await createIncident(ongRes.body.id);

    expect(incidentRes.body);
    expect(incidentRes.body.id);

    console.log(incidentRes.body.id);
  });
});
