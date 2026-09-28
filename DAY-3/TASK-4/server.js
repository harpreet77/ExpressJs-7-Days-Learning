const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  res.send(`User ${req.params.id}`);
});


app.use((req, res) => {
  res.status(404).end();
});


app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});

