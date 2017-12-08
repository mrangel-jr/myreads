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
import BookDetailPage from "./Pages/BookDetailPage";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { books: [], booksToSearch: [], bookSelected: '' };
    this.onSearch = this.onSearch.bind(this);
    this.updateBook = this.updateBook.bind(this);
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    (
      async () =>{
        let books;
        books = await getAll();
        this.setState({books});
      }
    )(); 
  }

  onSearch(query) {
    const { books } = this.state;
    
    if (query) {
      search(query, 20).then((booksQuery) => {

        const match = new RegExp(escapeRegExp(query),"i");

        let myBooks = [];

        myBooks = books.filter( book => (book.title && match.test(book.title)) || (book.authors && match.test(book.authors.toString()))) ;

        if (booksQuery.error || books === [])
          this.setState({booksToSearch: []});
        else {
            let newBooks = booksQuery.filter(function(bookQuery) {
              return !myBooks.some(function(myBook){
                return bookQuery.id === myBook.id;
              });
            });

            newBooks = newBooks.concat(myBooks);

            this.setState({booksToSearch: newBooks});
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
            const {booksToSearch} = this.state;
            if (booksToSearch.length !==0) {
              let newBooks = booksToSearch.filter(bookSearch => book.id !== bookSearch.id);
              this.setState({booksToSearch:newBooks});              
            }
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
              clearSearch={this.clearSearch}
            />
          )}/>
          <Route 
            path="/search"
            render={({history}) => (
              <SearchPage
                books={this.state.booksToSearch} 
                onUpdateBook={this.updateBook}
                onSearch={this.onSearch}
                clearSearch={this.clearSearch}
              />
            )}/>
          <Route 
            path="/details/:id"
            render={({match}) => (
              <BookDetailPage
                book={this.state.books.filter(book => match.params.id===book.id)[0]}
              />
          )}/>
        </div>
    )
  }
}

export default App;