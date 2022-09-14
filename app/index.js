const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/api/collateral', require('./routes/collateral'));
app.use('/api/price-oracle', require('./routes/price-oracle'));
app.use('/api/router', require('./routes/router'));

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 Not found');
});

module.exports = app;