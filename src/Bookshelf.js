import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import * as Globals from './Globals'
import './App.css'

class Bookshelf extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateBook: PropTypes.func.isRequired
	}

	render() {

	  	const { books, onUpdateBook } = this.props;

	  	console.log(Globals.typesShelf)

	  	return (
	      <div className="list-books">
	          <div className="list-books-title">
	            <h1>MyReads</h1>
	          </div>
	          <div className="list-books-content">
	            <div>
	            {
	            	Globals.typesShelf.map( typeShelf => 
		              <div className="bookshelf" key={typeShelf.key}>
		                <h2 className="bookshelf-title" >{typeShelf.value}</h2>
		                <div className="bookshelf-books">
		                  <ol className="books-grid">
		                  {
		                  	books.filter( book => typeShelf.key === book.shelf).map( book =>
			                    <li key={book.title}>
			                      <div className="book">
			                        <div className="book-top">
			                          <div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
			                          <div className="book-shelf-changer">
			                            <select value={typeShelf.key} onChange={(event) => onUpdateBook(book,event.target.value)
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
			                        <div className="book-authors">{book.authors.toString()}</div>
			                      </div>
			                    </li>
		                  	)
		                  }
		                  </ol>
		                </div>
		              </div>
	            	)
	            }
	           </div>
	         </div>
	      </div>
	    )
  	}
} 

export default Bookshelf;