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

const SearchPage = ({ books, onUpdateBook, onSearch, clearSearch }) => {
  return (
    <div>
    	<SearchBar onSearch={onSearch} clearSearch={clearSearch}/>
    	<Result books={books} onUpdateBook={onUpdateBook} shelf="none" label="My Search"/>
    </div>
  );
};

export default SearchPage;