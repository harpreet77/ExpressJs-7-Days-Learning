// Filename - index.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api/debug/body', function (req, res) {
    console.log(req.body.name);
    res.end();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("APP listening on PORT", PORT);
});