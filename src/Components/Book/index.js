import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './book.css';

const Book = ({ book, onUpdate }) => {

	Book.propTypes = {
		book: PropTypes.object,
		onUpdateBook: PropTypes.func
	}
	
	let shelf = book.shelf ? book.shelf : "none";
	let title = book.title;
	let authors = book.authors ? book.authors.toString() : '';
	let image = book.imageLinks ? book.imageLinks.thumbnail : '';

	return (
		<div>
			<div className="book">
				<div className="book-top">
					<Link className="book-cover" style={{ backgroundImage: `url(${image})` }} to={`/details/${book.id}`} onClick={() => console.log(book)}></Link>
					<div className="book-shelf-changer">
					<select value={shelf} onChange={(event) => onUpdate(book,event.target.value)
					}>
						<option value="none" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading </option>
						<option value="wantToRead">Want to Read </option>
						<option value="read"> Read </option>
						<option value="none"> None </option>
					</select>
					</div>
				</div>
				<div className="book-title">{title}</div>
				{
					// <div className="book-authors">{authors} </div>
				}
			</div>
		</div>
	);

}

export default Book;