const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();                 
});


app.get('/stop', (req, res) => {
  res.send('🚦 This route stops the chain – later middleware never runs');
});


app.get('/continue', (req, res, next) => {
  res.locals.message = '✅ This route called next()';
  next();  
});


app.use('/continue', (req, res, next) => {
  console.log('Post‑processing after /continue handler');
  const extra = ` (processed at ${new Date().toLocaleTimeString()})`;
  res.send(res.locals.message + extra);
});

app.use((req, res) => {
  res.status(404).send('❓ Not found');
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).send('💥 Internal Server Error');
});

app.listen(3000, () => console.log('Server listening on http://localhost:3000'));