const next = require('next');
const express = require('express');

const dev = false; // production mode
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.all('*', (req, res) => handle(req, res));
  server.listen(process.env.PORT || 3000, () => {
    console.log(`Ready on port ${process.env.PORT || 3000}`);
  });
});