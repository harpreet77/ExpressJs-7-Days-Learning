const express = require('express')
const app = express()
const PORT = 3000
app.use(express.urlencoded({ extended: true }))
app.get('/api/debug/form', (req, res) => {
    res.send('<form method=POST action=/submit><input type=text name=username><input type=number name=age><input type=submit></form>')
})
app.post('/submit', (req, res) => {
    console.log(req.body)
    res.send('data has been recieved by the server')
})
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:3000')
})