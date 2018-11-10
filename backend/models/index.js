const mongoose = require('mongoose')
const URI = require('../config')

mongoose.connect(
  process.env.MONGO_URI || URI,
  { useNewUrlParser: true },
)

// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Database has been connected!')
})

// When connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(`Database hasn't been connected because of ${err}`)
})
