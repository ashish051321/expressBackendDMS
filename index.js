const express = require('express')
const bodyParser = require('body-parser')
// const store = require('./store')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.get('', (req, res) => {
    res.send('Hello from Express Backend server !');
})
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})