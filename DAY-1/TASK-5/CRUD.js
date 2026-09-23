
const express = require('express');
const app = express();
const port = 3000;

const tasks = [{"id":1, "completed": false, "priority": "high", "search": "express"},
    {"id":2, "completed": true, "priority": "low", "search": "nodejs"}];

app.get('/api/tasks', (req, res) => {
res.json(tasks);
});


app.get('/api/tasks/:id', (req, res) => {
 const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: 'Invalid task ID'
    });
  }

   const task = tasks.find(t => t.id === id);
   res.json(task);  

});


app.post('/api/tasks', (req, res) => {
const newTask={"id":3, "completed": false, "priority": "medium", "search": "javascript"};
tasks.push(newTask);
res.json(tasks);
});


app.put('/api/tasks/:id', (req, res) => {
const id = Number(req.params.id);
const idx = tasks.findIndex(t => t.id === id);
tasks[idx] = {
    ...tasks[idx],
    ...req.body
  };
  res.json(tasks[idx]);
});


app.patch('/api/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const idx = tasks.findIndex(t => t.id === id);

  if (idx === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[idx] = {
    ...tasks[idx],
    
  };

  res.json(tasks[idx]);
});



app.delete('/api/tasks/:id', (req, res) => {
tasks = tasks.filter(t => t.id !== Number(req.params.id));
res.json(tasks);
});

// API: /api/tasks?completed=true
app.get('/api/completedTasks', (req, res) => {
const completedTasks = tasks.filter(t => t.completed === true);
res.json(completedTasks);
});

// API: /api/tasks?priority=high
app.get('/api/priorityTasks', (req, res) => {
const priorityTasks = tasks.filter(t => t.priority === "high");
res.json(priorityTasks);
});

// API: /api/tasks?search=express
app.get('/api/searchTasks', (req, res) => {
const searchedTasks = tasks.filter(t => t.search === "express");
res.json(searchedTasks);
});

// API: /api/tasks?completed=false&search=express
app.get('/api/completedSearchedTasks', (req, res) => {
const completedSearchedTasks = tasks.filter((t => t.completed === false) && (t => t.search === "express"));
res.json(completedSearchedTasks);
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

