const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

function validateNewUser(req, res, next) {
  const { username, email, age } = req.body;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'username must be a non‑empty string' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'email must be a valid address' });
  }

  if (age !== undefined) {
    const n = Number(age);
    if (!Number.isInteger(n) || n < 0) {
      return res.status(400).json({ error: 'age must be a non‑negative integer' });
    }
  }

  next();
}

app.post('/users', validateNewUser, (req, res) => {
  const user = req.body;
  
  res.status(201).json({ message: 'User created', user });
});

app.use((req, res) => res.status(404).send('Not found'));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});

app.listen(3000, () => console.log('Server listening on :3000'));