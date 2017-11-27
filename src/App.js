import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import SearchBooks from './SearchBooks'
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
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
   BooksAPI.getAll().then( (books) =>
      this.setState({ books })
    ) 
  }

  updateBook = (book,shelf) => {
    BooksAPI.update(book,shelf).then( () => {
      this.getBooks()
    })
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
        <Route path="/search" render={({history}) => (
          <SearchBooks
              books={this.state.books} 
              onUpdateBook={(book,shelf) => {
                this.updateBook(book,shelf)
                history.push('/')
              }}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;

