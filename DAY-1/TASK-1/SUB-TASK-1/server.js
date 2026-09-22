
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! home api called');
});

app.get('/health', (req, res) => {
  res.send('Hello World! health called');
});

app.get('/api', (req, res) => {
  res.send('Hello World! api called');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

