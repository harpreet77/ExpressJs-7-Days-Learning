const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller.js");

router.get("/tasks", taskController.getAllTasks);

module.exports = router;