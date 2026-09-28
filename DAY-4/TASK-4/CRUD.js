
const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'taskflow',
});

connection.connect(err => {
  if (err) {
    console.error('Connection error:', err);
    return;
  }
  console.log('MySQL connected');
});


app.get('/api/tasks', (req, res) => {
connection.query(
    'SELECT * FROM tasks',
    (err, rows) => {
      if (err) {
        console.error('Query error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      if (rows.length === 0) {
        return res.status(404).json({ error: 'Record not found' });
      }
      res.json(rows); 
    }
  );
});


app.get('/api/tasks/:id', (req, res) => {
 const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: 'Invalid task ID'
    });
  }
  connection.query(
    'SELECT * FROM tasks WHERE id = ?',
    [id],                
    (err, rows) => {
      if (err) {
        console.error('Query error:', err);
        return res.status(500).json({ error: 'Database error' });
      }

      if (rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(rows[0]); 
    }
  );
});


app.post('/api/tasks', (req, res) => {
const { id,title,description,completed,project_id } = req.body;
connection.query('INSERT INTO tasks (id,title,description,completed,project_id) VALUES (?,?,?,?,?)', 
  [ id,title,description,completed,project_id], 
  (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
res.json({
        message: 'Record saved successfully'
      });
});
});

app.patch('/api/tasks/:id', (req, res) => {
  const title = req.body.title;
  const id = Number(req.params.id);
  connection.query(
    'UPDATE tasks SET title = ? WHERE id = ?',
    [title, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        message: 'Record updated successfully'
      });
    }
  );
});


app.delete('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  connection.query(
    'delete from tasks WHERE id = ?',
    [id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({
        message: 'Record deleted successfully'
      });
    }
  );
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

