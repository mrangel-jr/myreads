import React from 'react';
import './book.css';

const Book = ({ book, onUpdate }) => {
	
	let shelf = book.shelf ? book.shelf : "none";
	let title = book.title;
	let authors = book.authors ? book.authors.toString() : '';
	let image = book.imageLinks ? book.imageLinks.thumbnail : '';
	return (
		<div>
			<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 190, backgroundImage: `url(${image})` }}></div>
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
				<div className="book-authors">{authors} </div>
			</div>
		</div>
	);
}

export default Book;