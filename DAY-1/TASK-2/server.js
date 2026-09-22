
const express = require('express');
const app = express();
const port = 3000;


app.get('/api/users/:id', (req, res) => {
  res.send(req.params);
});


app.get('/api/search', (req, res) => {
res.send("req.query: " + req.query.q + " req.body: " + req.body + " req.headers: " + req.headers + " req.method: " + req.method + " req.path: " + req.path + " req.originalUrl: " + req.originalUrl + " req.ip: " + req.ip + " req.protocol: " + req.protocol);
console.log(" req.headers: " + req.headers);
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

