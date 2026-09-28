const express = require('express');
const bodyParser = require('body-parser'); 
const userRoutes = require('./routes/userRoutes.js');

const app = express();

app.use(bodyParser.json());


app.use('/users', userRoutes);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(3000, () => console.log('API listening on http://localhost:3000'));