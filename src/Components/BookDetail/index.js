import React from 'react';
import './bookDetail.css';

const BookDetail = ({book}) => {
	
	const image = book.imageLinks ? book.imageLinks.thumbnail : '';

	return(
		<div>
			<div className="bookDetail">
				<div className="bookImage" style={{ backgroundImage: `url(${image})` }}></div>
				<div className="bookInformation">
					<h1 className="bookTitle">{book.title}</h1>
					<h2 className="bookSubTitle">{book.subtitle}</h2>
				</div>
			</div>
		</div>
	)
}

export default BookDetail;