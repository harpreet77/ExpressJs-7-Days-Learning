const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    res.send('Req Successfully initiated');
});

router.get('/projects/:projectId/tasks', (req, res) => {
    res.send(`Client required ID : ${req.params.projectId}`);
});

router.post('/projects/:projectId/tasks', (req, res) => {
    res.send(`Client required ID : ${req.params.projectId}`);
});


app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
});