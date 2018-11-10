import React, { Component } from 'react'
import Api from '../utils/Api'
import { Link } from 'react-router-dom'

class Detail extends Component {
  state = {
    book: {},
  }

  componentDidMount() {
    Api.getBook(this.props.match.params.id)
      .then((book) => this.setState({ book: book }))
      .catch((err) => console.log(err))
  }

  render() {
    const { book } = this.state
    return (
      <div>
        <div>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
        </div>
        <div>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    )
  }
}

export default Detail
