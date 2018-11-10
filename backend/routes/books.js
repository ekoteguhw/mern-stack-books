const router = require('express').Router()
const booksControllers = require('../controllers/booksControllers')

router
  .route('/')
  .get(booksControllers.findAll)
  .post(booksControllers.create)

router
  .route('/:id')
  .get(booksControllers.findById)
  .put(booksControllers.update)
  .delete(booksControllers.remove)

module.exports = router
