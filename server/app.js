const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const curriculums = require('../index')()

const app = express()
app.use(cors())
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms')) // eslint-disable-line

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/tree', function (req, res) {
  res.send(curriculums)
})

app.use('/static', express.static(path.join(__dirname, '../static')))

module.exports = app
