const express = require('express');
const app     = express();


const apiRouter = express.Router({
  caseSensitive: false,   
  strict: false
});


apiRouter.use((req, res, next) => {
  console.log("Before admin api");
  next();                     
});


apiRouter.use('/admin', (req, res, next) => {
   console.log("admin api");
  next();
});

apiRouter.get('/', (req, res) => {
  res.send('Index API called');
  console.log('Index API Called');
});


app.use('/api', apiRouter);



app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
