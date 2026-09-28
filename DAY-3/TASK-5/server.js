const express = require("express");
const app = express();


app.use((err, req, res, next) => {
  if (err) {
    return res.status(400).json({ message: err.message });
  }
  next(err);
});


app.get('/user', function (req, res) {
    console.log("/user request called");
    res.send('Welcome');
});


app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});


