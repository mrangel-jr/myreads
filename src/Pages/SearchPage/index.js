import React from 'react';
import SearchBar from '../../Components/SearchBar';
import Bookshelf from '../../Components/Bookshelf';
import NotFound from './NotFound';


const Result = ({ books, onUpdateBook, search }) => {
	if (books.length === 0) {
		return (
			<NotFound>
				Sorry, we can't help you. No book found. 
			</NotFound>
		)
	}

	return (
		<Bookshelf books={books} onUpdateBook={onUpdateBook} shelf="none" label="My Search"/>
	)
}

const SearchPage = ({ books, onUpdateBook, onSearch, clearSearch, selectedBook }) => {
  return (
    <div>
    	<SearchBar onSearch={onSearch} clearSearch={clearSearch} books={books} selectedBook={selectedBook}/>
    	<Result books={books} onUpdateBook={onUpdateBook} shelf="none" label="My Search"/>
    </div>
  );
};

export default SearchPage;