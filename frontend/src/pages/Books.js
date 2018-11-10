import React, { Component } from 'react'
import Api from '../utils/Api'
import { Link } from 'react-router-dom'
import '../index.css'

class Books extends Component {
  state = {
    books: [],
    title: '',
    author: '',
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    Api.getBooks()
      .then((books) => {
        this.setState({
          books: books.data,
        })
      })
      .catch((err) => console.log(err))
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleButtonDelete = (id) => {
    Api.deleteBook(id)
      .then((res) => {
        this.loadBooks()
        alert('Data has been deleted!')
      })
      .catch((err) => console.log(err))
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const { title, author } = this.state

    if (title && author) {
      Api.saveBook({
        title: title,
        author: author,
      })
        .then((res) => {
          this.loadBooks()
          this.setState({ title: '', author: '' })
          alert('Data has been saved!')
        })
        .catch((err) => console.log(err))
    }
  }

  render() {
    const { title, author, books } = this.state
    return (
      <div className="books">
        <h1>What's book should I read?</h1>
        <form className="books-form">
          <div className="books-form-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
          </div>
          <div className="books-form-input">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              value={author}
              onChange={this.handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
          </div>
          <div className="books-form-button">
            <button
              type="button"
              disabled={!(title && author)}
              onClick={this.handleFormSubmit}
            >
              Submit Book
            </button>
          </div>
        </form>
        <h1>Books on my List</h1>
        <hr />
        <div className="books-list">
          {books.length ? (
            <div>
              {books.map((book) => (
                <div key={book._id} className="books-item">
                  <div
                    className="books-item-button"
                    onClick={(event) => this.handleButtonDelete(book._id)}
                  >
                    X
                  </div>
                  <Link to={`/books/${book._id}`}>
                    {book.title} by {book.author}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div>No result</div>
          )}
        </div>
      </div>
    )
  }
}

export default Books
