import React,  { Component } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import './bookshelf.css';

class Bookshelf extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateBook: PropTypes.func.isRequired
	}

	render() {

	  	const { books, onUpdateBook, label, shelf } = this.props;

	  	let newBooks = [];

	  	if (shelf === "none") {
	  		newBooks = books;
	  	}
	  	else {
  			newBooks = books.filter((book) => book.shelf===shelf);
	  	}


	  	return (
			<section className="bookshelf">
			    <h2 className="bookshelf-topic">{label}</h2>
			    <hr className="fancy-line"></hr>
			    <ol className="books-grid">
		        {

		          	newBooks.map((book) => {
		          	return (
			            <li key={book.id}>
			              <Book book={book} onUpdate={onUpdateBook}/>
			            </li>
		          	);
		          })
		        }
		      </ol>
		  </section>
	    )
  	}
} 

export default Bookshelf;