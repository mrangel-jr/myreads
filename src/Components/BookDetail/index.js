import React from 'react';
import './bookDetail.css';

const BookDetail = ({book}) => {
	console.log(book);
	
	const image = book.imageLinks ? book.imageLinks.thumbnail : '';
	const authors = book.authors ? book.authors.toString() : 'Unknown';
	const categories = book.categories ? book.categories.toString() : 'Undefined';
	const publisher = book.publisher ? book.publisher : 'Undefined';
	const publishedDate = book.publishedDate ? book.publishedDate : 'No Date';
	const shelf = book.shelf ? book.shelf === 'curentlyReading' ? 'Currently Reading' : book.shelf === 'wantToRead' ? 'Want To Read' : book.shelf === 'read' ? 'Read' : 'Undefined' : 'No Shelf';
	const description = book.description ? book.description : 'No description avaible';
	const pageCount = book.pageCount ? book.pageCount : 'No pages avaible';
	const previewLink = book.previewLink ? book.previewLink : 'Nothing avaible';

	

	return(
		<div className="columns">
			<div className="line">
				<h1 className="bookTitle">{book.title}</h1>
				<h2 className="bookSubTitle">{book.subtitle}</h2>
			</div>
			<div className="infoContainer">
				<div className="column">
					<div className="bookImage" style={{ backgroundImage: `url(${image})` }}></div>
					<a style={{"paddingLeft": "35%"}}href={previewLink}>Preview</a>
				</div>
				<div className="main-column">
					<h3 className="bookInfo">Authors: {authors}</h3>
					<h3 className="bookInfo">Categories: {categories}</h3>
					<h3 className="bookInfo">Pages: {pageCount}</h3>
					<h3 className="bookInfo">Publisher: {publisher}</h3>
					<h3 className="bookInfo">Pubhished Date: {publishedDate}</h3>
					<h3 className="bookInfo">Shelf: {shelf}</h3>
					<h3 className="bookInfo">Description: {description}</h3>
					{
					}
				</div>
			</div>
		</div>
	)
}

export default BookDetail;