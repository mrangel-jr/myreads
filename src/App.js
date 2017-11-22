import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import SearchBook from './SearchBook' 
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'


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
    const myBooks = window.localStorage.getItem('myBooks') || '[]'
    this.setState({books: JSON.parse(myBooks)})  
    if ( myBooks === '[]' ) {
      BooksAPI.getAll().then( (books) =>
        this.setState(() => {
          this.updateStorage(books) 
          return {books} 
        })
      )
    }
  }

  updateStorage(books) {
    window.localStorage.setItem('myBooks',JSON.stringify(books))
  }

  updateBook = (book,value) => {
    book.shelf=value
    this.setState( (state) => {
      let books;
      books = state.books.filter((b) => b.id !== book.id).concat([ book ])
      this.updateStorage(books)
      return {books}
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
        <Route path="/search" render={({ history }) => (
          <SearchBook
            updateBook={(book) => {
              this.updateBook(book)
              history.push('/')
            }
          }/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;

