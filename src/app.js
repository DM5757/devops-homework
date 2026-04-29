const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send(`
    <html>
      <head><title>CI/CD Pipeline Homework</title></head>
      <body>
        <h1>CI/CD Pipeline Homework</h1>
        <p>Deployment successful</p>
        <p>Automated with GitHub Actions</p>
      </body>
    </html>
  `);
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

const port = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = { app };

