import React from 'react';
import Header from '../../Components/Header';
import Bookshelf from '../../Components/Bookshelf';
import AddBook from '../../Components/AddBook';

const HomePage = ({ books, onUpdateBook,clearSearch }) => {
	return (
		<div>
			<Header/>
			<Bookshelf books={books} onUpdateBook={onUpdateBook} shelf="currentlyReading" label="Currently Reading"/>
			<Bookshelf books={books} onUpdateBook={onUpdateBook} shelf="wantToRead" label="Want to Read"/>
			<Bookshelf books={books} onUpdateBook={onUpdateBook} shelf="read" label="Read"/>
			<AddBook clearSearch={clearSearch}/>
		</div>

	);
};

export default HomePage;