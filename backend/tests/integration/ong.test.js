const req = require('supertest');

const app = require('../../src/app');
const connection = require('../../src/database/connection');

const createOng = require('../utils/createOng');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const res = await createOng();

    expect(res.body);
    expect(res.body.id).toHaveLength(8);

    console.log(res.body.id);
  });
});
