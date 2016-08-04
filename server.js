'use strict'

const express = require('express')
const app = express()

const curriculums = require('./index')()

const PORT = 8000

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/index.html`)
})

app.get('/tree', function (req, res) {
  res.send(curriculums)
})

app.use('/static', express.static(`${__dirname}/static`))

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
