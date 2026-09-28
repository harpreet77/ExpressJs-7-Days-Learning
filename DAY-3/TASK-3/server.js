const express = require("express");
const app = express();
const taskMiddleware = require("./middleware/task.middleware.js");
const taskRoutes = require("./routes/task.routes.js");

const PORT = 3000;

app.use(express.json());
app.use(taskMiddleware);      
app.use("/api", taskRoutes); 

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
