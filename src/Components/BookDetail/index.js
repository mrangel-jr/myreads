import React from 'react';
import './bookDetail.css';

const BookDetail = ({book}) => {
	console.log(book);
	let image = book.imageLinks ? book.imageLinks.thumbnail : '';
	console.log(image);
	return(
		<div>
			<div className="bookDetail">
				<div className="bookImage" style={{ backgroundImage: `url(${image})` }}></div>
				<div className="bookInformation">
					<div className="bookTitle">
						{book.title}
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookDetail;