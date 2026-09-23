const express = require('express');
const app = express();


function logger(req, res, next) {
  const start = Date.now();

  res.on('finish', () => {
    const ms = Date.now() - start;
    const line = `${req.ip} - ${req.method} ${req.originalUrl} ` +
                 `${res.statusCode} ${ms}ms`;
    console.log(line);
  });

next();  
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('Get API');
});

app.listen(3000, () => {
  console.log('APP listening on http://localhost:3000');
});