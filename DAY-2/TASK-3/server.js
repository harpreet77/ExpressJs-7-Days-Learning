const express = require('express')
const app = express();

app.get('/', (req, res) => {
  console.log(req.headers['X-Request-Id']);
});


app.listen(3000, () => console.log('APP listening on: 3000'));    