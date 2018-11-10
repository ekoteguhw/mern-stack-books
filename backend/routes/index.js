const router = require('express').Router()
const booksRoutes = require('./books')

router.use('/api/books', booksRoutes)
module.exports = router
