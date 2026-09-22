
const express = require('express');
const app = express();
const port = 3000;


app.get('/api/response/text', (req, res) => {
  res.end('returning from text API');
});


app.get('/api/response/redirect', (req, res) => {
 res.redirect('/redirectedPage');
});


app.get('/api/response/header', (req, res) => {
 res.header('Content-Type', 'application/json');
 res.status(200).send('Header API called');
});



app.get('/redirectedPage', (req, res) => {
 res.send('redirectedPage');
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

