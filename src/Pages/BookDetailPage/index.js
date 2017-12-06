import React from 'react';
import Header from '../../Components/Header';
import BookDetail from '../../Components/BookDetail';

const BookDetailPage = ({book}) => {
	// console.log(book);
	return (
		<div>
			<Header title="Details"/>
			<BookDetail book={book}/>
		</div>
	);

}

export default BookDetailPage;