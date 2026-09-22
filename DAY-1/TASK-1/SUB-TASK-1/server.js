
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Index API called');
});

app.get('/health', (req, res) => {
  res.send('Health API called');
});

app.get('/api', (req, res) => {
  res.send('Api called');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

