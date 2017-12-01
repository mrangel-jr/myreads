import React, { Component } from "react";
import { Route } from "react-router-dom";
import escapeRegExp from 'escape-string-regexp';
import {
  getAll,
  update,
  search,
} from "./utils/BooksAPI";

import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { books: [], booksToSearch: [] };
    this.onSearch = this.onSearch.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  componentDidMount() {
    (
      async () => {
        let books;
        books = await getAll();
        this.setState({books});
      }
    )();
  }

  getBooks() {
    (
      async () =>{
        let books;
        books = await getAll();
        this.setState({books});
      }
    )(); 
    this.clearSearch();
  }

  onSearch(query) {
    const { books } = this.state;
    
    if (query) {
      search(query, 20).then((booksQuery) => {

        const match = new RegExp(escapeRegExp(query),"i");

        let myBooks = [];

        myBooks = books.filter( book => (book.title && match.test(book.title)) || (book.authors && match.test(book.authors.toString()))) ;

        if (booksQuery.error)
          this.setState({booksToSearch: myBooks});
        else {
          if (books === []) {
            this.setState({booksToSearch: booksQuery});
          } 
          else {
            let newBooks = booksQuery.filter(function(bookQuery) {
              return !myBooks.some(function(myBook){
                return bookQuery.id === myBook.id;
              });
            });

            newBooks = newBooks.concat(myBooks);

            this.setState({booksToSearch: newBooks});
          }
        }
      })
    } 
    else {
      this.setState({booksToSearch: []});
    }
  }

  clearSearch() {
    this.setState({booksToSearch: []});
  }

  updateBook(book,shelf) {
    (
      async() => {
          await update(book,shelf).then ( () => {
            this.getBooks();
          }).catch((err) => {
              console.log(err);
            })
      }
    )()
  }

  render() {
    return (
        <div>
          <Route exact path="/" render={() => (
            <HomePage
              books={this.state.books} 
              onUpdateBook={this.updateBook}
            />
          )}/>
          <Route 
            path="/search"
            render={({history}) => (
              <SearchPage
                books={this.state.booksToSearch} 
                onUpdateBook={(book,shelf) => {
                  this.updateBook(book,shelf)
                  history.push('/')
                }}
                onSearch={this.onSearch}
                clearSearch={this.clearSearch}
              />
            )}/>
        </div>
    )
  }
}

export default App;