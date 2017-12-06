import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';
import './bookshelf.css';

const Bookshelf = ({ books, onUpdateBook, goToDetais, label, shelf }) => {

	Bookshelf.propTypes = {
		books: PropTypes.array,
		onUpdateBook: PropTypes.func
	}

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
		              <Book book={book} onUpdate={onUpdateBook} goToDetais={goToDetais}/>
		            </li>
	          	);
	          })
	        }
	      </ol>
	  </section>
    );
    
} 

export default Bookshelf;