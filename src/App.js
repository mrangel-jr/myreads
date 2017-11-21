import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidlMount() {
    BooksAPI.getAll().then( (books) =>
      this.setState({ books })
    )
  }

  updateBook = (book,value) => {
    book.shelf=value
    this.setState( (state) => ({
      books: state.books.filter((b) => b.id !== book.id).concat([ book ])
    }))
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelf
              books={this.state.books} 
              onUpdateBook={this.updateBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;

