import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';
import './App.css'
 
class SearchBooks extends Component {
 
  state = {
    query: '',
    books: []
  };
 
  updateQuery = (query) => {
    this.setState({query: query.trim()});
    this.updateBooks(query);
  };

  updateBooks(query) {
  	const { books } = this.props;
	if (query) {
		BooksAPI.search(query, 20).then((booksQuery) => {

			const match = new RegExp(escapeRegExp(query),"i")

			let myBooks = [];

			myBooks = books.filter( book => (book.title && match.test(book.title)) || (book.authors && match.test(book.authors))) ;

			if (booksQuery.error)
				this.setState({books: myBooks});
			else {
				if (books === []) {
					this.setState({books: booksQuery});
				} else {
					let newBooks = booksQuery.filter(function(bookQuery) {
						return !myBooks.some(function(myBook){
							return bookQuery.id === myBook.id;
							});
						});
					
					newBooks = newBooks.concat(myBooks);

					this.setState({books: newBooks});
				}
			}
		})
	} else {
		this.setState({books: []})
	}
  }
 
  getBookResult(onUpdateBook) {
    // console.log(this.state.books.length);
    if (!this.state.books.length) {
      return (<div>No Search result</div>);
    }
    else {
      return (<ol className="books-grid">
        {
          this.state.books.map((book) => {
          	let image = '';
          	let shelf = '';
          	image = book.imageLinks ? book.imageLinks.thumbnail : './icons/no_book_image.jpg';
			shelf = book.shelf ? book.shelf : 'none';
          	return (
	            <li key={book.id}>
	              <div className="book">
	                <div className="book-top">
	                  <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${image})` }}></div>
	                  <div className="book-shelf-changer">
	                    <select value={shelf} onChange={(event) => onUpdateBook(book,event.target.value)
	                    }>
	                      <option value="none" disabled>Move to...</option>
	                      <option value="currentlyReading">Currently Reading </option>
	                      <option value="wantToRead">Want to Read </option>
	                      <option value="read"> Read </option>
	                      <option value="none"> None </option>
	                    </select>
	                  </div>
	                </div>
	                <div className="book-title">{book.title}</div>
	                <div className="book-authors">{book.authors ? book.authors.toString() : ''} </div>
	              </div>
	            </li>
          	)
          })
        }
      </ol>)
    }
  }

   render() {
 
    const {query} = this.state;
    const {onUpdateBook} = this.props;
 
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
             NOTES: The search from BooksAPI is limited to a particular set of search terms.
             You can find these search terms here:
             https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
 
             However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
             you don't find a specific author or title. Every search is limited by search terms.
             */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
 
          </div>
        </div>
        <div className="search-books-results">
          {this.getBookResult(onUpdateBook)}
        </div>
      </div>
    )
  }
}
  
 export default SearchBooks;