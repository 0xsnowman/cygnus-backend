const express = require('express');
const app = express();

app.use('/api/collateral', require('./routes/collateral'));
app.use('/api/price-oracle', require('./routes/price-oracle'));

app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 Not found');
});

module.exports = app;