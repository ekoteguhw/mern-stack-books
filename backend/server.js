const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000
const routes = require('./routes')

// Connecting to database
require('./models')

// configure body parser for AJAX requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('Welcome to MERN Stack')
})

app.use(routes)

// Bootstrap server
app.listen(PORT, () => {
  console.log(`Server listen to PORT: ${PORT}`)
})
