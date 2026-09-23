
const express = require('express');
const app = express();
const port = 3000;


app.use(function (req, res, next) {
  console.log('Middleware Called');
  next();             
});

app.get('/', (req, res) => {
  res.send('Index API called');
  console.log('Index API Called');
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

