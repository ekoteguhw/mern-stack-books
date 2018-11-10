const Book = require('../models/Books')

module.exports = {
  findAll: (req, res) => {
    Book.find(req.query)
      .then((foundBooks) => res.json(foundBooks))
      .catch((err) => res.status(422).json(err))
  },
  findById: (req, res) => {
    Book.findById({ _id: res.params.id })
      .then((foundBook) => res.json(foundBook))
      .catch((err) => res.status(422).json(err))
  },
  create: (req, res) => {
    Book.create(req.body)
      .then((newBook) => res.json(newBook))
      .catch((err) => res.status(422).json(err))
  },
  update: (req, res) => {
    Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((updatedBook) => res.json(updatedBook))
      .catch((err) => res.status(422).json(err))
  },
  remove: (req, res) => {
    Book.findById({ _id: req.params.id })
      .then((foundBook) => foundBook.remove())
      .then((allBooks) => res.json(allBooks))
      .catch((err) => res.status(422).json(err))
  },
}
