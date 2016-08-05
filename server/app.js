const express = require('express')
const cors = require('cors')
const path = require('path')

const curriculums = require('../index')()

const app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/tree', function (req, res) {
  res.send(curriculums)
})

app.use('/static', express.static(path.join(__dirname, '../static')))

module.exports = app;
