require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
  console.log(`Cygnus server is running at port ${PORT}`);
});