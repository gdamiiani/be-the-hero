const req = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

const createOng = require('../utils/createOng');
const createIncident = require('../utils/createIncident');
const deleteIncident = require('../utils/deleteIncident');

describe('Profile', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG, create a new incident, and delete it', async () => {
    const ongRes = await createOng();

    expect(ongRes.body);
    expect(ongRes.body.id);

    const incidentRes = await createIncident(ongRes.body.id);

    expect(incidentRes.body);
    expect(incidentRes.body.id);

    const deletionRes = await deleteIncident(ongRes.body.id, incidentRes.body.id);

    expect(deletionRes.statusCode === 204)
  });
});
