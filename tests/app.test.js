const request = require('supertest');

const { app } = require('../src/app');

describe('Express CI/CD homework app', () => {
  test('GET / returns homepage and includes required text', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.text).toContain('CI/CD Pipeline Homework');
  });

  test('GET /health returns ok status', async () => {
    const res = await request(app).get('/health');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

